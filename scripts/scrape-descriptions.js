import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_JS_PATH = path.resolve(__dirname, '../src/data.js');
const WIKI_BASE_URL = 'https://deadlock.wiki';

const http = axios.create({
  timeout: 15000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
  },
});

/**
 * Eşya adını normalize ederek karşılaştırma anahtarı üretir.
 * Örn: "Active Reload (Aktif Şarjör Değiştirme)" -> "activereload"
 */
function normalizeKey(str) {
  return str
    .split('(')[0]
    .trim()
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * item.name içinden sadece İngilizce eşya adını alır ve Wiki URL başlığına çevirir.
 * Örn: "Hunter's Aura (Avcı Aurası)" -> "Hunter's_Aura"
 */
function toWikiPageTitle(itemName) {
  const englishName = itemName.split('(')[0].trim();
  return englishName.replace(/\s+/g, '_');
}

/**
 * Ana /Items sayfasındaki tablo ve kartlardan ön-bellek (map) oluşturur.
 */
async function scrapeMainItemsPage() {
  const map = new Map();
  try {
    const { data: html } = await http.get(`${WIKI_BASE_URL}/Items`);
    const $ = cheerio.load(html);

    $('tr, .item-card, .infobox, .wikitable tr').each((_, el) => {
      const row = $(el);
      const titleLink = row.find('a[title]').first();
      const title = titleLink.attr('title')?.trim();
      if (!title) return;

      const text = row
        .text()
        .replace(/\s+/g, ' ')
        .trim();
      if (text && text.length > title.length + 10) {
        map.set(normalizeKey(title), text);
      }
    });
  } catch {
    // Ana sayfa çekilemezse tekil sayfa sorgularına devam et
  }
  return map;
}

/**
 * Tekil eşya Wiki sayfasından istatistik, pasif/aktif yetenek ve açıklama metnini çeker.
 * Bulamazsa null döner (Data Integrity gereği 'TBD' atanır).
 */
async function scrapeSingleItemDescription(itemName) {
  const pageTitle = toWikiPageTitle(itemName);

  try {
    const apiUrl = `${WIKI_BASE_URL}/api.php?action=parse&page=${encodeURIComponent(
      pageTitle
    )}&prop=text&format=json&redirects=1`;

    const { data } = await http.get(apiUrl);
    const html = data?.parse?.text?.['*'];
    if (!html) return null;

    const $ = cheerio.load(html);
    $('script, style, .mw-editsection, .navbox, .toc').remove();

    const parts = [];

    // 1. Infobox veya yetenek kutularındaki istatistik ve Pasif/Aktif açıklamaları
    $(
      '.infobox tr, .item-infobox tr, .ability-box, .item-ability, .item-stats'
    ).each((_, el) => {
      const rowText = $(el).text().replace(/\s+/g, ' ').trim();
      if (
        rowText &&
        rowText.length > 4 &&
        !/^(cost|tier|type|category|shop)\b/i.test(rowText)
      ) {
        parts.push(rowText);
      }
    });

    // 2. Sayfanın giriş paragrafları (<p>)
    $('.mw-parser-output > p').each((_, el) => {
      const pText = $(el).text().replace(/\s+/g, ' ').trim();
      if (pText && pText.length > 20) {
        parts.push(pText);
      }
    });

    const combined = [...new Set(parts)].join(' | ').trim();
    return combined.length > 10 ? combined : null;
  } catch {
    return null;
  }
}

function formatKey(key) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
}

function escapeSingleQuotes(str) {
  return String(str ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, ' ');
}

async function main() {
  console.log('📥 src/data.js içindeki itemsCatalog okunuyor...');
  const dataModule = await import(pathToFileURL(DATA_JS_PATH).href);
  const itemsCatalog = { ...dataModule.itemsCatalog };

  const entries = Object.entries(itemsCatalog);
  console.log(`🔎 Toplam ${entries.length} eşya için Wiki açıklamaları taranıyor...`);

  const fallbackMap = await scrapeMainItemsPage();

  let matchedCount = 0;
  let tbdCount = 0;

  // Sunucuyu yormamak için 5'erli gruplar (batch) halinde paralel çekim
  const BATCH_SIZE = 5;
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async ([key, item]) => {
        const normKey = normalizeKey(item.name || key);
        let scrapedDesc = await scrapeSingleItemDescription(item.name || key);

        if (!scrapedDesc && fallbackMap.has(normKey)) {
          scrapedDesc = fallbackMap.get(normKey);
        }

        if (scrapedDesc) {
          item.description = scrapedDesc;
          matchedCount++;
          console.log(`✅ [${key}] -> Açıklama eklendi`);
        } else {
          item.description = 'TBD';
          tbdCount++;
          console.log(`⚠️ [${key}] -> Bulunamadı, 'TBD' olarak işaretlendi`);
        }
      })
    );

    await new Promise((r) => setTimeout(r, 150));
  }

  // Güncellenmiş itemsCatalog bloğunu oluştur
  const lines = ['export const itemsCatalog = {'];
  for (const [key, item] of entries) {
    lines.push(`  ${formatKey(key)}: {`);
    lines.push(`    id: '${escapeSingleQuotes(item.id)}',`);
    lines.push(`    name: '${escapeSingleQuotes(item.name)}',`);
    lines.push(`    category: '${escapeSingleQuotes(item.category)}',`);
    lines.push(`    cost: '${escapeSingleQuotes(item.cost)}',`);
    lines.push(`    tier: '${escapeSingleQuotes(item.tier)}',`);
    lines.push(`    activation: '${escapeSingleQuotes(item.activation)}',`);
    lines.push(`    image: '${escapeSingleQuotes(item.image)}',`);
    lines.push(`    imageAlt:`);
    lines.push(`      '${escapeSingleQuotes(item.imageAlt)}',`);
    lines.push(`    description:`);
    lines.push(`      '${escapeSingleQuotes(item.description)}',`);
    lines.push(`    baseDesc:`);
    lines.push(
      `      '${escapeSingleQuotes(
        item.description !== 'TBD' ? item.description : item.baseDesc
      )}',`
    );
    lines.push(`  },`);
  }
  lines.push('};');

  const rawDataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startMarker = 'export const itemsCatalog = {';
  const endMarker =
    '\n// Yardımcı fonksiyon: katalog verisi ile karşılaşmaya özel açıklamayı birleştirir.';

  const startIdx = rawDataJs.indexOf(startMarker);
  const endIdx = rawDataJs.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error('src/data.js içinde itemsCatalog sınırları bulunamadı.');
  }

  const updatedDataJs =
    rawDataJs.slice(0, startIdx) +
    lines.join('\n') +
    '\n' +
    rawDataJs.slice(endIdx);

  fs.writeFileSync(DATA_JS_PATH, updatedDataJs, 'utf8');

  console.log('\n========================================');
  console.log(`🎉 Entegrasyon Tamamlandı!`);
  console.log(`✅ Açıklaması Bulunan : ${matchedCount}`);
  console.log(`⚠️ TBD Atanan         : ${tbdCount}`);
  console.log(`📄 Güncellenen Dosya  : ${DATA_JS_PATH}`);
  console.log('========================================');
}

main().catch((err) => {
  console.error('❌ Hata:', err.message);
  process.exit(1);
});
