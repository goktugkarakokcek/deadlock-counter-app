import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import axios from 'axios';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_JS_PATH = path.resolve(__dirname, '../src/data.js');
const DEADLOCK_WIKI_API = 'https://deadlock.wiki/api.php';
const LIQUIPEDIA_API = 'https://liquipedia.net/deadlock/api.php';

const http = axios.create({
  timeout: 15000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    Accept: 'application/json,text/html;q=0.9,*/*;q=0.8',
  },
});

/**
 * Karakter ID veya ismine göre olası Wiki sayfa başlıklarını üretir.
 */
function getCandidateTitles(hero) {
  const specialMap = {
    'mo-and-krill': ['Mo_&_Krill', 'Mo_and_Krill'],
    'grey-talon': ['Grey_Talon'],
    'lady-geist': ['Lady_Geist'],
    doorman: ['The_Doorman', 'Doorman'],
    'deadman-danny': ['Deadman_Danny', 'Danny'],
    'nurse-harrow': ['Nurse_Harrow', 'Harrow'],
    'rat-king': ['Rat_King'],
  };

  if (specialMap[hero.id]) {
    return specialMap[hero.id];
  }

  const baseTitle = hero.name.trim().replace(/\s+/g, '_');
  return [baseTitle, `The_${baseTitle}`];
}

/**
 * MediaWiki Wikitext ve HTML çıktısından karakterin gerçek yetenek isimlerini ve açıklamalarını ayıklar.
 */
function extractAbilitiesFromWiki(html, wikitext, heroName) {
  const abilities = [];
  const seenNames = new Set();

  const addAbility = (rawName, rawDesc) => {
    const cleanName = String(rawName || '')
      .replace(/\[.*?\]/g, '')
      .replace(/\{\{.*?\}\}/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    let cleanDesc = String(rawDesc || '')
      .replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1')
      .replace(/\{\{[^}]+\}\}/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (
      !cleanName ||
      cleanName.length < 2 ||
      cleanName.length > 45 ||
      cleanName.toLowerCase() === heroName.toLowerCase() ||
      /^(abilities|overview|lore|trivia|history|stats|weapon|builds|guides|gallery|patch|notes|external|references)$/i.test(
        cleanName
      )
    ) {
      return;
    }

    const key = cleanName.toLowerCase();
    if (seenNames.has(key)) return;
    seenNames.add(key);

    if (cleanDesc.length > 140) {
      cleanDesc = `${cleanDesc.slice(0, 137).trim()}...`;
    }

    abilities.push(
      cleanDesc ? `${cleanName} (${cleanDesc})` : cleanName
    );
  };

  // 1. Wikitext içindeki Ability şablonlarını tara ({{Ability|...}} veya |ability_name=...)
  if (wikitext) {
    const templateRegex = /\{\{\s*(?:Ability|HeroAbility|Spell)[^{}]*\}\}/gi;
    const matches = wikitext.match(templateRegex) || [];
    for (const block of matches) {
      const nameMatch =
        block.match(/\|\s*(?:name|title|ability)\s*=\s*([^|\n}]+)/i);
      const descMatch =
        block.match(/\|\s*(?:description|desc|text|notes)\s*=\s*([^|}]+)/i);
      if (nameMatch) {
        addAbility(nameMatch[1], descMatch ? descMatch[1] : '');
      }
    }
  }

  // 2. HTML DOM içindeki yetenek kartlarını ve başlıklarını Cheerio ile tara
  if (html && abilities.length < 4) {
    const $ = cheerio.load(html);
    $('script, style, .mw-editsection, .navbox, .toc').remove();

    // Özel yetenek kutuları
    $(
      '.ability-box, .ability-card, .hero-ability, .spellcard, .wikitable.ability'
    ).each((_, el) => {
      if (abilities.length >= 4) return;
      const box = $(el);
      const title = box
        .find('.ability-name, .ability-header, .spellcard-title, th, b')
        .first()
        .text();
      const desc = box
        .find('.ability-description, .ability-desc, .spellcard-desc, td, p')
        .first()
        .text();
      if (title) addAbility(title, desc);
    });

    // Abilities başlığı altındaki h3 / tablo yapıları
    if (abilities.length < 4) {
      $('h3, h4').each((_, el) => {
        if (abilities.length >= 4) return;
        const heading = $(el).find('.mw-headline').text() || $(el).text();
        const nextP = $(el).nextAll('p, div, table').first().text();
        if (heading && nextP && nextP.length > 15) {
          addAbility(heading, nextP);
        }
      });
    }
  }

  return abilities.slice(0, 4);
}

/**
 * Tekil karakter için önce Deadlock Wiki, bulunamazsa Liquipedia API'sini sorgular.
 */
async function fetchHeroAbilities(hero) {
  const candidates = getCandidateTitles(hero);

  for (const title of candidates) {
    // 1. Kaynak: deadlock.wiki
    try {
      const url = `${DEADLOCK_WIKI_API}?action=parse&page=${encodeURIComponent(
        title
      )}&prop=text|wikitext&format=json&redirects=1`;
      const { data } = await http.get(url);
      const html = data?.parse?.text?.['*'] || '';
      const wikitext = data?.parse?.wikitext?.['*'] || '';

      if (html || wikitext) {
        const extracted = extractAbilitiesFromWiki(html, wikitext, hero.name);
        if (extracted.length > 0) {
          return extracted;
        }
      }
    } catch {
      // Hata fırlatma, sonraki adaya veya Liquipedia'ya geç
    }

    // 2. Kaynak (Fallback): Liquipedia Deadlock Wiki
    try {
      const lqUrl = `${LIQUIPEDIA_API}?action=parse&page=${encodeURIComponent(
        title
      )}&prop=text|wikitext&format=json&redirects=1`;
      const { data } = await http.get(lqUrl);
      const html = data?.parse?.text?.['*'] || '';
      const wikitext = data?.parse?.wikitext?.['*'] || '';

      if (html || wikitext) {
        const extracted = extractAbilitiesFromWiki(html, wikitext, hero.name);
        if (extracted.length > 0) {
          return extracted;
        }
      }
    } catch {
      // Data Integrity: Bulunamazsa mevcut yapıyı koru
    }
  }

  return null;
}

function escapeSingleQuotes(str) {
  return String(str ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, ' ');
}

async function main() {
  console.log('📥 src/data.js içindeki karakter listesi okunuyor...');
  const dataModule = await import(pathToFileURL(DATA_JS_PATH).href);
  const characters = [...dataModule.characters];

  let updatedCount = 0;
  let preservedCount = 0;

  for (const hero of characters) {
    const scrapedAbilities = await fetchHeroAbilities(hero);

    if (scrapedAbilities && scrapedAbilities.length > 0) {
      hero.abilities = scrapedAbilities;
      updatedCount++;
      console.log(
        `✅ [${hero.name}] -> ${scrapedAbilities.length} gerçek yetenek entegre edildi.`
      );
    } else {
      preservedCount++;
      console.log(
        `⏭️  [${hero.name}] -> Wiki'de bulunamadı, mevcut yapı korundu.`
      );
    }

    // Rate-limit koruması
    await new Promise((r) => setTimeout(r, 250));
  }

  // Güncellenen characters dizisini src/data.js formatında oluştur
  const charLines = ['export const characters = ['];
  for (const hero of characters) {
    charLines.push('  {');
    charLines.push(`    id: '${escapeSingleQuotes(hero.id)}',`);
    charLines.push(`    name: '${escapeSingleQuotes(hero.name)}',`);
    charLines.push(`    title: '${escapeSingleQuotes(hero.title)}',`);
    charLines.push(`    role: '${escapeSingleQuotes(hero.role)}',`);
    charLines.push(`    difficulty: '${escapeSingleQuotes(hero.difficulty)}',`);
    charLines.push(`    image: '${escapeSingleQuotes(hero.image)}',`);
    charLines.push(`    imageAlt:`);
    charLines.push(`      '${escapeSingleQuotes(hero.imageAlt)}',`);
    charLines.push(`    shortBio:`);
    charLines.push(`      '${escapeSingleQuotes(hero.shortBio)}',`);
    charLines.push(`    stats: {`);
    charLines.push(
      `      survive: ${
        typeof hero.stats.survive === 'number'
          ? hero.stats.survive
          : `'${escapeSingleQuotes(hero.stats.survive)}'`
      },`
    );
    charLines.push(
      `      damage: ${
        typeof hero.stats.damage === 'number'
          ? hero.stats.damage
          : `'${escapeSingleQuotes(hero.stats.damage)}'`
      },`
    );
    charLines.push(
      `      mobility: ${
        typeof hero.stats.mobility === 'number'
          ? hero.stats.mobility
          : `'${escapeSingleQuotes(hero.stats.mobility)}'`
      },`
    );
    charLines.push(
      `      control: ${
        typeof hero.stats.control === 'number'
          ? hero.stats.control
          : `'${escapeSingleQuotes(hero.stats.control)}'`
      },`
    );
    charLines.push(`    },`);
    charLines.push(`    abilities: [`);
    for (const ab of hero.abilities || []) {
      charLines.push(`      '${escapeSingleQuotes(ab)}',`);
    }
    charLines.push(`    ],`);
    if (Array.isArray(hero.counters)) {
      charLines.push(`    counters: [`);
      for (const c of hero.counters) {
        charLines.push(`      '${escapeSingleQuotes(c)}',`);
      }
      charLines.push(`    ],`);
    }
    if (Array.isArray(hero.counteredBy)) {
      charLines.push(`    counteredBy: [`);
      for (const cb of hero.counteredBy) {
        charLines.push(`      '${escapeSingleQuotes(cb)}',`);
      }
      charLines.push(`    ],`);
    }
    if (Array.isArray(hero.counterItems)) {
      charLines.push(`    counterItems: [`);
      for (const ci of hero.counterItems) {
        charLines.push(`      '${escapeSingleQuotes(ci)}',`);
      }
      charLines.push(`    ],`);
    }
    charLines.push('  },');
  }
  charLines.push('];');

  const rawDataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startMarker = 'export const characters = [';
  const endMarker = '\nexport const itemsCatalog = {';

  const startIdx = rawDataJs.indexOf(startMarker);
  const endIdx = rawDataJs.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error('src/data.js içinde characters sınırları bulunamadı.');
  }

  const updatedDataJs =
    rawDataJs.slice(0, startIdx) +
    charLines.join('\n') +
    '\n' +
    rawDataJs.slice(endIdx);

  fs.writeFileSync(DATA_JS_PATH, updatedDataJs, 'utf8');

  console.log('\n========================================');
  console.log(`🎉 Yetenek Entegrasyonu Tamamlandı!`);
  console.log(`✅ Güncellenen Karakter : ${updatedCount}`);
  console.log(`⏭️  Korunan Karakter     : ${preservedCount}`);
  console.log(`📄 Dosya                : ${DATA_JS_PATH}`);
  console.log('========================================');
}

main().catch((err) => {
  console.error('❌ Beklenmeyen Hata:', err.message);
  process.exit(1);
});
