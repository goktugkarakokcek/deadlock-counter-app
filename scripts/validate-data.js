import { characters, itemsCatalog } from '../src/data.js';

function validateData() {
  const validCharacterNames = new Set(characters.map((c) => c.name));
  const validCharacterIds = new Set(characters.map((c) => c.id));

  const validItemNames = new Set();
  const validItemIds = new Set(Object.keys(itemsCatalog));

  for (const item of Object.values(itemsCatalog)) {
    validItemNames.add(item.name);
    // Parantez içi Türkçe çeviri varsa ana İngilizce ismi de tam eşleşme kümesine ekle (Örn: "Knockdown (Nakavt)" -> "Knockdown")
    const baseEnglishName = item.name.split(' (')[0].trim();
    validItemNames.add(baseEnglishName);
  }

  const allValidExactReferences = new Set([
    ...validCharacterNames,
    ...validCharacterIds,
    ...validItemNames,
    ...validItemIds,
  ]);

  const errors = [];

  for (const hero of characters) {
    const heroLabel = `${hero.name} (${hero.id})`;

    for (const field of ['counters', 'counteredBy']) {
      const list = hero[field];

      if (!Array.isArray(list) || list.length === 0) {
        errors.push(`[EKSİK DİZİ] ${heroLabel} -> "${field}" alanı boş veya dizi değil.`);
        continue;
      }

      list.forEach((entry, index) => {
        if (typeof entry !== 'string' || !entry.trim()) {
          errors.push(`[GEÇERSİZ DEĞER] ${heroLabel} -> ${field}[${index}] boş veya metin değil.`);
          return;
        }

        const trimmed = entry.trim();

        // 1. TBD Kontrolü
        if (trimmed.toUpperCase().includes('TBD')) {
          errors.push(`[TBD KALMIŞ] ${heroLabel} -> ${field}[${index}]: "${trimmed}"`);
          return;
        }

        // 2. Doğrudan birebir (harfi harfine) karakter veya eşya ismi/ID'si kontrolü
        if (!allValidExactReferences.has(trimmed)) {
          errors.push(
            `[EŞLEŞMEYEN REFERANS] ${heroLabel} -> ${field}[${index}]: "${trimmed}" ana karakter veya eşya listesiyle birebir eşleşmiyor.`
          );
        }
      });
    }
  }

  if (errors.length > 0) {
    console.error(`\n❌ TOPLAM ${errors.length} VERİ DOĞRULAMA HATASI BULUNDU:\n`);
    errors.forEach((err) => console.error(err));
    process.exitCode = 1;
  } else {
    console.log('✅ Tüm karakterlerin counters ve counteredBy referansları ana listeyle birebir eşleşiyor!');
  }
}

validateData();
