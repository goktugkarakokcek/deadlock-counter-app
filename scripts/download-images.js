import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hedef klasör: public/assets/items/
const OUTPUT_DIR = path.resolve(__dirname, '../public/assets/items');
const WIKI_BASE_URL = 'https://deadlock.wiki';
const WIKI_ITEMS_URL = `${WIKI_BASE_URL}/Items`;

// Komut satırında --force parametresi verilirse mevcut dosyaların üzerine yazar
const FORCE_OVERWRITE = process.argv.includes('--force');

/**
 * Eşya adını veya dosya ismini İngilizce karakterli, küçük harfli
 * ve tireli (kebab-case) formata dönüştürür.
 * Örn: "Hollow Point Ward" -> "hollow-point-ward.png"
 * Örn: "Hunter's Aura" -> "hunters-aura.png"
 */
function toSlugFilename(rawName) {
  const charMap = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    i̇: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'c',
    Ğ: 'g',
    İ: 'i',
    I: 'i',
    Ö: 'o',
    Ş: 's',
    Ü: 'u',
  };

  let cleaned = rawName
    .trim()
    // Uzantıyı geçici olarak kaldır (.png, .webp, .jpg vb.)
    .replace(/\.(png|webp|jpg|jpeg|svg)$/i, '')
    // MediaWiki thumbnail boyut öneklerini kaldır (örn: "64px-Hollow_Point_Ward")
    .replace(/^\d+px-/i, '')
    // Türkçe karakterleri dönüştür
    .replace(/[çğıöşüÇĞİIÖŞÜ]/g, (ch) => charMap[ch] || ch)
    // Aksanlı karakterleri normalize et
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Kesme işaretlerini birleştir ("Hunter's" -> "Hunters")
    .replace(/['’`]/g, '')
    .toLowerCase()
    // Harf ve rakam dışındaki tüm boşluk/alt çizgi/sembolleri tireye çevir
    .replace(/[^a-z0-9]+/g, '-')
    // Baş ve sondaki tireleri temizle
    .replace(/^-+|-+$/g, '');

  return `${cleaned}.png`;
}

/**
 * MediaWiki thumbnail URL'sini tam çözünürlüklü orijinal görsel URL'sine çevirir.
 * Örn: /images/thumb/a/ab/Hollow_Point_Ward.png/64px-Hollow_Point_Ward.png
 *   -> https://deadlock.wiki/images/a/ab/Hollow_Point_Ward.png
 */
function resolveFullImageUrl(rawSrc) {
  if (!rawSrc) return null;

  let fullUrl = rawSrc.trim();
  if (fullUrl.startsWith('//')) {
    fullUrl = `https:${fullUrl}`;
  } else if (fullUrl.startsWith('/')) {
    fullUrl = `${WIKI_BASE_URL}${fullUrl}`;
  } else if (!fullUrl.startsWith('http')) {
    fullUrl = `${WIKI_BASE_URL}/${fullUrl}`;
  }

  // MediaWiki /thumb/ yolunu orijinal görsel yoluna dönüştür
  if (fullUrl.includes('/images/thumb/')) {
    fullUrl = fullUrl
      .replace('/images/thumb/', '/images/')
      .replace(/\/[^/]+$/, '');
  }

  // Sorgu parametrelerini temizle (?version=... vb.)
  return fullUrl.split('?')[0];
}

/**
 * Wiki sayfasının HTML içeriğini çeker (Doğrudan sayfa veya MediaWiki API fallback).
 */
async function fetchWikiHtml() {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  };

  try {
    const response = await axios.get(WIKI_ITEMS_URL, {
      headers,
      timeout: 20000,
    });
    return response.data;
  } catch (err) {
    console.warn(
      `⚠️ Doğrudan sayfa çekilemedi (${err.message}), MediaWiki API deneniyor...`
    );
    const apiUrl = `${WIKI_BASE_URL}/api.php?action=parse&page=Items&prop=text&format=json`;
    const apiRes = await axios.get(apiUrl, { headers, timeout: 20000 });
    return apiRes.data?.parse?.text?.['*'] || '';
  }
}

/**
 * İstenmeyen arayüz/stat ikonlarını filtreler (maliyet ikonu, kategori simgeleri vb.)
 */
function isIgnoredIcon(nameOrUrl) {
  const lower = nameOrUrl.toLowerCase();
  const ignoredKeywords = [
    'souls',
    'soul_icon',
    'courage',
    'vitality',
    'spirit_icon',
    'weapon_icon',
    'vitality_icon',
    'bullet_damage',
    'spirit_power',
    'site-logo',
    'wiki',
    'lock_icon',
    'cooldown',
    'passive',
    'active_icon',
  ];
  return ignoredKeywords.some((kw) => lower.includes(kw));
}

async function main() {
  // Klasör yoksa oluştur
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`🔍 Deadlock Wiki taranıyor: ${WIKI_ITEMS_URL}`);
  const html = await fetchWikiHtml();
  const $ = cheerio.load(html);

  const itemsToDownload = new Map();

  // Sayfadaki tüm <img> etiketlerini tara
  $('img').each((_, el) => {
    const img = $(el);
    const rawSrc =
      img.attr('data-src') ||
      img.attr('src') ||
      (img.attr('srcset') ? img.attr('srcset').split(' ')[0] : null);

    if (!rawSrc) return;

    const fullImageUrl = resolveFullImageUrl(rawSrc);
    if (!fullImageUrl || !/\.(png|webp|jpg|jpeg)$/i.test(fullImageUrl)) return;

    // Görsel adını belirle: önce üst <a> etiketinin title'ı, sonra img alt, en son URL dosya adı
    const parentLinkTitle = img.closest('a').attr('title');
    const altText = img.attr('alt');
    const urlBasename = decodeURIComponent(path.basename(fullImageUrl));

    const candidateName = parentLinkTitle || altText || urlBasename;
    if (!candidateName || isIgnoredIcon(candidateName) || isIgnoredIcon(urlBasename)) {
      return;
    }

    const filename = toSlugFilename(candidateName);
    if (!filename || filename === '.png') return;

    if (!itemsToDownload.has(filename)) {
      itemsToDownload.set(filename, fullImageUrl);
    }
  });

  console.log(
    `📦 Toplam ${itemsToDownload.size} benzersiz eşya görseli tespit edildi.\n`
  );

  let downloadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const [filename, imageUrl] of itemsToDownload.entries()) {
    const destPath = path.join(OUTPUT_DIR, filename);

    if (fs.existsSync(destPath) && !FORCE_OVERWRITE) {
      console.log(`⏭️  Atlandı (mevcut): ${filename}`);
      skippedCount++;
      continue;
    }

    try {
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        timeout: 15000,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Referer: WIKI_ITEMS_URL,
        },
      });

      fs.writeFileSync(destPath, response.data);
      console.log(`✅ İndirildi: ${filename}`);
      downloadedCount++;

      // Sunucuyu yormamak için kısa bekleme (100ms)
      await new Promise((r) => setTimeout(r, 100));
    } catch (error) {
      console.error(`❌ Hata (${filename}): ${error.message}`);
      failedCount++;
    }
  }

  console.log('\n========================================');
  console.log(`🎉 İşlem Tamamlandı!`);
  console.log(`✅ İndirilen : ${downloadedCount}`);
  console.log(`⏭️  Atlanan   : ${skippedCount} (üzerine yazmak için --force ekleyin)`);
  console.log(`❌ Hatalı    : ${failedCount}`);
  console.log(`📂 Klasör    : ${OUTPUT_DIR}`);
  console.log('========================================');
}

main().catch((err) => {
  console.error('❌ Beklenmeyen hata:', err.message);
  process.exit(1);
});
