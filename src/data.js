// src/data.js
// Deadlock Taktiksel Matchup & Counter Rehberi - Merkezi Veri Kaynağı (Single Source of Truth)
// Tüm karakter ve eşya görselleri local "/public/assets/..." dizinine referans verir.

export const appMetaInfo = {
  brandName: 'DEADLOCK',
  brandHighlight: 'TACTICS',
  brandSubtitle: 'Rekabetçi Matchup & Counter Asistanı',
  patchBadge: 'Son Güncelleme: Patch v0.42 (Beta)',
  disclaimerText:
    'Veriler oyunun beta sürecine göre değişiklik gösterebilir.',
  disclaimerDetail:
    'Deadlock aktif geliştirme (Closed Beta) aşamasındadır. Karakter dengeleri, eşya (item) maliyetleri ve harita spawn süreleri güncellemelerle değişebilir; doğrulanmamış istatistikler TBD (Güncellenecek) olarak işaretlenmiştir.',
  footerBuildNote:
    'React (Vite) & Tailwind CSS ile geliştirilmiştir • Vercel Deploy Uyumlu',
};

export const characters = [
  {
    id: 'abrams',
    name: 'Abrams',
    title: 'Okült Dedektif & Ön Saf Tankı',
    role: 'Ön Saflar / Yakın Mesafe (Brawler)',
    difficulty: 'Orta',
    image: '/assets/characters/abrams.png',
    imageAlt:
      'Abrams karakter portresi - Ağır paltolu, boynuzlu ve elinde mistik el yazması taşıyan yakın mesafe tank karakteri',
    shortBio:
      'Yüksek can yenilemesi (Infernal Resilience), yıkıcı omuz darbesi (Shoulder Charge) ve ağır yakın dövüş yumruklarıyla koridoru domine eden dayanıklı bir ön saf savaşçısı.',
    stats: {
      survive: 95,
      damage: 75,
      mobility: 60,
      control: 80,
    },
    abilities: [
      'Siphon Life (Can Çalma Haresi)',
      'Shoulder Charge (Duvara Çarpma & Stun)',
      'Infernal Resilience (Pasif Can Yenileme)',
      'Seismic Impact (Hava Dalışı Ultisi)',
    ],
  },
  {
    id: 'vindicta',
    name: 'Vindicta',
    title: 'Keskin Nişancı Hayalet',
    role: 'Uzun Mesafe Nişancı (Marksman)',
    difficulty: 'Yüksek',
    image: '/assets/characters/vindicta.png',
    imageAlt:
      'Vindicta karakter portresi - Uzun namlulu dürbünlü tüfeğiyle havadan nişan alan keskin nişancı karakter',
    shortBio:
      'Flight yeteneğiyle gökyüzüne yükselip güvenli mesafeden rakiplerini avlayan, Stake ile hedefleri yere sabitleyen ve Assassinate ile düşük canlı hedefleri infaz eden nişancı.',
    stats: {
      survive: 40,
      damage: 95,
      mobility: 75,
      control: 65,
    },
    abilities: [
      'Stake (Sabitleme Kazığı)',
      'Flight (Hava Yükselişi & Büyülü Mermi)',
      'Crow Familiar (Zırh Kıran Kuzgun)',
      'Assassinate (Uzun Menzilli İnfaz Atışı)',
    ],
  },
  {
    id: 'dynamo',
    name: 'Dynamo',
    title: 'Kuantum Astrofizikçisi',
    role: 'Savaş Başlatıcı & Destek (Initiator)',
    difficulty: 'Orta',
    image: '/assets/characters/dynamo.png',
    imageAlt:
      'Dynamo karakter portresi - Kuantum çekim enerjisiyle çalışan küresel mekanik gövdeli profesör karakteri',
    shortBio:
      'Quantum Entanglement ile takım arkadaşlarını ölümcül yeteneklerden kurtaran, Kinetic Pulse ile koridoru kontrol eden ve Singularity ile takım savaşlarını tek başına kazanan uzman.',
    stats: {
      survive: 75,
      damage: 60,
      mobility: 65,
      control: 100,
    },
    abilities: [
      'Kinetic Pulse (Havaya Savuran Şok Dalgası)',
      'Quantum Entanglement (Boyutsal Kaçış)',
      'Rejuvenating Aurora (Alan İyileştirmesi)',
      'Singularity (Kara Delik Ultisi)',
    ],
  },
  {
    id: 'seven',
    name: 'Seven',
    title: 'Yüksek Voltajlı Kaçak',
    role: 'Alan Hasarı & Koridor İtici (AoE Spirit)',
    difficulty: 'Düşük - Orta',
    image: '/assets/characters/seven.png',
    imageAlt:
      'Seven karakter portresi - Elektrik akımları saçan metal kubbe başlıklı yüksek Spirit hasarı uzmanı',
    shortBio:
      'Lightning Ball ve Power Surge ile koridorları saniyeler içinde temizleyen, Static Charge ile hedefleri sersemleten ve Storm Cloud ultisiyle geniş bölgeleri elektriğe boğan taşıyıcı.',
    stats: {
      survive: 55,
      damage: 95,
      mobility: 60,
      control: 70,
    },
    abilities: [
      'Lightning Ball (Elektrik Küresi)',
      'Static Charge (Gecikmeli Sersemletme)',
      'Power Surge (Zincirleme Yıldırım Mermileri)',
      'Storm Cloud (Fırtına Bulutu Ultisi)',
    ],
  },
  {
    id: 'apollo',
    name: 'Apollo',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/apollo.png',
    imageAlt: 'Apollo karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Apollo karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'baba',
    name: 'Baba',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/baba.png',
    imageAlt: 'Baba karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Baba karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'bebop',
    name: 'Bebop',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/bebop.png',
    imageAlt: 'Bebop karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Bebop karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'billy',
    name: 'Billy',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/billy.png',
    imageAlt: 'Billy karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Billy karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'calico',
    name: 'Calico',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/calico.png',
    imageAlt: 'Calico karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Calico karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'celeste',
    name: 'Celeste',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/celeste.png',
    imageAlt: 'Celeste karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Celeste karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'deadman-danny',
    name: 'Deadman Danny',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/deadman-danny.png',
    imageAlt:
      'Deadman Danny karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Deadman Danny karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'drifter',
    name: 'Drifter',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/drifter.png',
    imageAlt: 'Drifter karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Drifter karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'grey-talon',
    name: 'Grey Talon',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/grey-talon.png',
    imageAlt:
      'Grey Talon karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Grey Talon karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'graves',
    name: 'Graves',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/graves.png',
    imageAlt: 'Graves karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Graves karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'holliday',
    name: 'Holliday',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/holliday.png',
    imageAlt:
      'Holliday karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Holliday karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'infernus',
    name: 'Infernus',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/infernus.png',
    imageAlt:
      'Infernus karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Infernus karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'ivy',
    name: 'Ivy',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/ivy.png',
    imageAlt: 'Ivy karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Ivy karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'kelvin',
    name: 'Kelvin',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/kelvin.png',
    imageAlt:
      'Kelvin karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Kelvin karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'haze',
    name: 'Haze',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/haze.png',
    imageAlt: 'Haze karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Haze karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'lady-geist',
    name: 'Lady Geist',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/lady-geist.png',
    imageAlt:
      'Lady Geist karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Lady Geist karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'lash',
    name: 'Lash',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/lash.png',
    imageAlt: 'Lash karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Lash karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'mcginnis',
    name: 'McGinnis',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/mcginnis.png',
    imageAlt:
      'McGinnis karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - McGinnis karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'mina',
    name: 'Mina',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/mina.png',
    imageAlt: 'Mina karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Mina karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'mirage',
    name: 'Mirage',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/mirage.png',
    imageAlt:
      'Mirage karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Mirage karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'mo-and-krill',
    name: 'Mo & Krill',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/mo-and-krill.png',
    imageAlt:
      'Mo & Krill karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Mo & Krill karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'nurse-harrow',
    name: 'Nurse Harrow',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/nurse-harrow.png',
    imageAlt:
      'Nurse Harrow karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Nurse Harrow karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'paige',
    name: 'Paige',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/paige.png',
    imageAlt: 'Paige karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Paige karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'paradox',
    name: 'Paradox',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/paradox.png',
    imageAlt:
      'Paradox karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Paradox karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'pocket',
    name: 'Pocket',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/pocket.png',
    imageAlt:
      'Pocket karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Pocket karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'rat-king',
    name: 'Rat King',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/rat-king.png',
    imageAlt:
      'Rat King karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Rat King karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'rem',
    name: 'Rem',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/rem.png',
    imageAlt: 'Rem karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Rem karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'shiv',
    name: 'Shiv',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/shiv.png',
    imageAlt: 'Shiv karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Shiv karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/silver.png',
    imageAlt:
      'Silver karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Silver karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'solomon',
    name: 'Solomon',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/solomon.png',
    imageAlt:
      'Solomon karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Solomon karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'doorman',
    name: 'Doorman',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/doorman.png',
    imageAlt:
      'Doorman karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Doorman karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'victor',
    name: 'Victor',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/victor.png',
    imageAlt:
      'Victor karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Victor karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'sinclair',
    name: 'Sinclair',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/sinclair.png',
    imageAlt:
      'Sinclair karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Sinclair karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'venator',
    name: 'Venator',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/venator.png',
    imageAlt:
      'Venator karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Venator karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'violet',
    name: 'Violet',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/violet.png',
    imageAlt:
      'Violet karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Violet karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'viscous',
    name: 'Viscous',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/viscous.png',
    imageAlt:
      'Viscous karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Viscous karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'vyper',
    name: 'Vyper',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/vyper.png',
    imageAlt: 'Vyper karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Vyper karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'warden',
    name: 'Warden',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/warden.png',
    imageAlt:
      'Warden karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Warden karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'wraith',
    name: 'Wraith',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/wraith.png',
    imageAlt:
      'Wraith karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Wraith karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
  {
    id: 'yamato',
    name: 'Yamato',
    title: 'TBD (Needs Manual Entry)',
    role: 'TBD (Needs Manual Entry)',
    difficulty: 'TBD',
    image: '/assets/characters/yamato.png',
    imageAlt:
      'Yamato karakter portresi - Deadlock oynanabilir kahraman görseli',
    shortBio:
      'TBD - Yamato karakterine ait doğrulanmış rol ve mekanik açıklamaları manuel veri girişi beklemektedir (Needs Manual Entry).',
    stats: {
      survive: 'TBD',
      damage: 'TBD',
      mobility: 'TBD',
      control: 'TBD',
    },
    abilities: [
      'Yetenek 1: TBD',
      'Yetenek 2: TBD',
      'Yetenek 3: TBD',
      'Ulti: TBD',
    ],
  },
];

export const itemsCatalog = {
  knockdown: {
    id: 'knockdown',
    name: 'Knockdown (Nakavt)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/knockdown.png',
    imageAlt:
      'Knockdown (Nakavt) eşya ikonu - Havadaki rakipleri yere düşüren ve sersemleten $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'Hedefin üzerine 2 saniye gecikmeyle devasa bir örs düşürür; rakibi sersemletir, havadaki karakterleri yere çakar ve kanalize yetenekleri anında iptal eder.',
  },
  healbane: {
    id: 'healbane',
    name: 'Healbane (Şifakıran)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/healbane.png',
    imageAlt:
      'Healbane (Şifakıran) eşya ikonu - Büyü hasarı ile rakibin can yenilemesini azaltan $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'Büyü (Spirit) hasarı verdiğinizde hedefin aldığı tüm iyileştirme ve can yenileme etkilerini 6 saniye boyunca %40 oranında azaltır.',
  },
  decay: {
    id: 'decay',
    name: 'Decay (Çürüme)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/decay.png',
    imageAlt:
      'Decay (Çürüme) eşya ikonu - Rakibe zamanla büyü hasarı veren ve iyileşmeyi azaltan $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'Hedefe maksimum canına oranla zamanla hasar verir ve sağlık yenilemesini önemli ölçüde düşürür.',
  },
  'reactive-barrier': {
    id: 'reactive-barrier',
    name: 'Reactive Barrier (Reaktif Bariyer)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/reactive-barrier.png',
    imageAlt:
      'Reactive Barrier (Reaktif Bariyer) eşya ikonu - Kitle kontrolü altında otomatik kalkan sağlayan $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'Sersemletme (Stun), sabitleme (Tether) veya hareketsiz bırakma etkisine maruz kaldığınızda otomatik olarak koruyucu bariyer üretir.',
  },
  'silence-glyph': {
    id: 'silence-glyph',
    name: 'Silence Wave (Susturma Dalgası)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Atış)',
    image: '/assets/items/silence-glyph.png',
    imageAlt:
      'Susturma Dalgası (Silence Glyph) eşya ikonu - Rakibin yeteneklerini susturan $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'İleri doğru bir enerji dalgası gönderir; isabet eden rakibi susturarak kaçış veya ulti yeteneklerini kullanmasını engeller.',
  },
  'metal-skin': {
    id: 'metal-skin',
    name: 'Metal Skin (Metal Deri)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/metal-skin.png',
    imageAlt:
      'Metal Skin (Metal Deri) eşya ikonu - Mermi ve yakın dövüş hasarına geçici bağışıklık veren $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'Kısa süreliğine tüm mermi (Bullet) hasarlarına ve yakın dövüş (Light/Heavy Melee) saldırılarına karşı tam bağışıklık sağlar.',
  },
  'warp-stone': {
    id: 'warp-stone',
    name: 'Warp Stone (Işınlanma Taşı)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Işınlanma)',
    image: '/assets/items/warp-stone.png',
    imageAlt:
      'Warp Stone (Işınlanma Taşı) eşya ikonu - Anında ileri ışınlanma ve mermi direnci sağlayan $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'Anında ileri doğru ışınlanmanızı sağlar ve mermi direnci kazandırır; alan etkili ultilerden kaçmak veya mesafe kapatmak için idealdir.',
  },
  'debuff-reducer': {
    id: 'debuff-reducer',
    name: 'Debuff Reducer (Zayıflatma Azaltıcı)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/debuff-reducer.png',
    imageAlt:
      'Debuff Reducer (Zayıflatma Azaltıcı) eşya ikonu - Olumsuz etki ve sersemletme sürelerini azaltan $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'Üzerinize uygulanan tüm olumsuz etkilerin (zırh kırma, yavaşlatma, sabitleme ve sersemletme) süresini azaltır.',
  },
  'ethereal-shift': {
    id: 'ethereal-shift',
    name: 'Ethereal Shift (Ruhani Değişim)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/ethereal-shift.png',
    imageAlt:
      'Ethereal Shift (Ruhani Değişim) eşya ikonu - Boyut değiştirerek geçici dokunulmazlık sağlayan $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'Kısa süreliğine başka bir boyuta geçerek hasar görmez ve hedef alınamaz hale gelirsiniz; gecikmeli patlamaları ve infaz atışlarını boşa çıkarır.',
  },
  unstoppable: {
    id: 'unstoppable',
    name: 'Unstoppable (Durdurulamaz)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/unstoppable.png',
    imageAlt:
      'Unstoppable (Durdurulamaz) eşya ikonu - Tüm kitle kontrol etkilerine bağışıklık veren $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'Aktif edildiğinde tüm kitle kontrol (Stun, Silence, Tether, Knockdown) etkilerine karşı tam bağışıklık sağlar.',
  },
  'slowing-hex': {
    id: 'slowing-hex',
    name: 'Slowing Hex (Yavaşlatma Büyüsü)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/slowing-hex.png',
    imageAlt:
      'Slowing Hex (Yavaşlatma Büyüsü) eşya ikonu - Rakibin hareket yeteneklerini kilitleyen $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'Rakibin hareket hızını düşürür ve 3 saniye boyunca tüm hareket tabanlı yeteneklerini (Flight, Charge, Quantum Entanglement) kilitler.',
  },
  'close-quarters': {
    id: 'close-quarters',
    name: 'Close Quarters (Yakın Mesafe)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/close-quarters.png',
    imageAlt:
      'Close Quarters (Yakın Mesafe) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Yakın Mesafe eşyasının doğrulanmış istatistik ve pasif etki değerleri manuel veri girişi beklemektedir.',
  },
  'extended-magazine': {
    id: 'extended-magazine',
    name: 'Extended Magazine (Genişletilmiş Şarjör)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/extended-magazine.png',
    imageAlt:
      'Extended Magazine (Genişletilmiş Şarjör) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Genişletilmiş Şarjör eşyasının doğrulanmış istatistik ve cephane artışı değerleri manuel veri girişi beklemektedir.',
  },
  'headshot-booster': {
    id: 'headshot-booster',
    name: 'Headshot Booster (Kafadan Vuruş Güçlendiricisi)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/headshot-booster.png',
    imageAlt:
      'Headshot Booster (Kafadan Vuruş Güçlendiricisi) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Kafadan Vuruş Güçlendiricisi eşyasının doğrulanmış istatistik ve hasar değerleri manuel veri girişi beklemektedir.',
  },
  'high-velocity-rounds': {
    id: 'high-velocity-rounds',
    name: 'High-Velocity Rounds (Yüksek Hızlı Mermiler)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/high-velocity-rounds.png',
    imageAlt:
      'High-Velocity Rounds (Yüksek Hızlı Mermiler) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Yüksek Hızlı Mermiler eşyasının doğrulanmış mermi hızı ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'monster-rounds': {
    id: 'monster-rounds',
    name: 'Monster Rounds (Anticanavar Mermileri)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/monster-rounds.png',
    imageAlt:
      'Monster Rounds (Anticanavar Mermileri) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Anticanavar Mermileri eşyasının doğrulanmış PvE/Trooper hasar ve direnç değerleri manuel veri girişi beklemektedir.',
  },
  'rapid-rounds': {
    id: 'rapid-rounds',
    name: 'Rapid Rounds (Seri Atış)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/rapid-rounds.png',
    imageAlt:
      'Rapid Rounds (Seri Atış) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Seri Atış eşyasının doğrulanmış atış hızı (Fire Rate) ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'restorative-shot': {
    id: 'restorative-shot',
    name: 'Restorative Shot (Şifalı Atış)',
    category: 'Weapon',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/restorative-shot.png',
    imageAlt:
      'Restorative Shot (Şifalı Atış) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Şifalı Atış eşyasının doğrulanmış iyileştirme ve bekleme süresi değerleri manuel veri girişi beklemektedir.',
  },
  'active-reload': {
    id: 'active-reload',
    name: 'Active Reload (Aktif Şarjör Değiştirme)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Zamanlamalı)',
    image: '/assets/items/active-reload.png',
    imageAlt:
      'Active Reload (Aktif Şarjör Değiştirme) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Aktif Şarjör Değiştirme eşyasının doğrulanmış istatistik ve pasif etki değerleri manuel veri girişi beklemektedir.',
  },
  fleetfoot: {
    id: 'fleetfoot',
    name: 'Fleetfoot (AKTİF Hızlı Adımlar)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF',
    image: '/assets/items/fleetfoot.png',
    imageAlt:
      'Fleetfoot (AKTİF Hızlı Adımlar) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Hızlı Adımlar eşyasının doğrulanmış hareket hızı ve aktif etki değerleri manuel veri girişi beklemektedir.',
  },
  'intensifying-magazine': {
    id: 'intensifying-magazine',
    name: 'Intensifying Magazine (Şiddetlenen Şarjör)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/intensifying-magazine.png',
    imageAlt:
      'Intensifying Magazine (Şiddetlenen Şarjör) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Şiddetlenen Şarjör eşyasının doğrulanmış silah hasarı artışı ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'kinetic-dash': {
    id: 'kinetic-dash',
    name: 'Kinetic Dash (Kinetik Atılma)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/kinetic-dash.png',
    imageAlt:
      'Kinetic Dash (Kinetik Atılma) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Kinetik Atılma eşyasının doğrulanmış atılma (Dash-Jump) ve geçici cephane/atış hızı değerleri manuel veri girişi beklemektedir.',
  },
  'long-range': {
    id: 'long-range',
    name: 'Long Range (Uzun Menzil)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/long-range.png',
    imageAlt:
      'Long Range (Uzun Menzil) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Uzun Menzil eşyasının doğrulanmış mesafe bazlı silah hasarı ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'melee-charge': {
    id: 'melee-charge',
    name: 'Melee Charge (Yakın Dövüş Hücumu)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/melee-charge.png',
    imageAlt:
      'Melee Charge (Yakın Dövüş Hücumu) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Yakın Dövüş Hücumu eşyasının doğrulanmış ağır yakın dövüş mesafesi ve cephane yenileme değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-shot': {
    id: 'mystic-shot',
    name: 'Mystic Shot (Mistik Atış)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/mystic-shot.png',
    imageAlt:
      'Mystic Shot (Mistik Atış) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mistik Atış eşyasının doğrulanmış büyü (Spirit) hasarı ve bekleme süresi değerleri manuel veri girişi beklemektedir.',
  },
  'opening-rounds': {
    id: 'opening-rounds',
    name: 'Opening Rounds (Deşici Mermiler)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/opening-rounds.png',
    imageAlt:
      'Opening Rounds (Deşici Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Deşici Mermiler eşyasının doğrulanmış yüksek canlı hedeflere karşı silah hasarı değerleri manuel veri girişi beklemektedir.',
  },
  'recharging-rush': {
    id: 'recharging-rush',
    name: 'Recharging Rush (Şarj Edici Mermiler)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/recharging-rush.png',
    imageAlt:
      'Recharging Rush (Şarj Edici Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Şarj Edici Mermiler eşyasının doğrulanmış istatistik ve pasif etki değerleri manuel veri girişi beklemektedir.',
  },
  'slowing-bullets': {
    id: 'slowing-bullets',
    name: 'Slowing Bullets (Yavaşlatan Mermiler)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Mermi Etkisi)',
    image: '/assets/items/slowing-bullets.png',
    imageAlt:
      'Slowing Bullets (Yavaşlatan Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Yavaşlatan Mermiler eşyasının doğrulanmış hareket yavaşlatma yüzdesi ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-shredder': {
    id: 'spirit-shredder',
    name: 'Spirit Shredder Bullets (Büyü Parçalayan Mermiler)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Mermi Etkisi)',
    image: '/assets/items/spirit-shredder.png',
    imageAlt:
      'Spirit Shredder Bullets (Büyü Parçalayan Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Büyü Parçalayan Mermiler eşyasının doğrulanmış büyü direnci azaltma ve büyü can çalma değerleri manuel veri girişi beklemektedir.',
  },
  'split-shot': {
    id: 'split-shot',
    name: 'Split Shot (AKTİF Parçalı Atış)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF',
    image: '/assets/items/split-shot.png',
    imageAlt:
      'Split Shot (AKTİF Parçalı Atış) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Parçalı Atış eşyasının doğrulanmış çoklu mermi atışı ve aktif etki değerleri manuel veri girişi beklemektedir.',
  },
  stalker: {
    id: 'stalker',
    name: 'Stalker (İz Sürücü)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/stalker.png',
    imageAlt:
      'Stalker (İz Sürücü) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — İz Sürücü eşyasının doğrulanmış istatistik ve pasif etki değerleri manuel veri girişi beklemektedir.',
  },
  'swift-striker': {
    id: 'swift-striker',
    name: 'Swift Striker (Tempolu Atış)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/swift-striker.png',
    imageAlt:
      'Swift Striker (Tempolu Atış) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Tempolu Atış eşyasının doğrulanmış atış hızı (Fire Rate) ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'titanic-magazine': {
    id: 'titanic-magazine',
    name: 'Titanic Magazine (Devasa Şarjör)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/titanic-magazine.png',
    imageAlt:
      'Titanic Magazine (Devasa Şarjör) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Devasa Şarjör eşyasının doğrulanmış cephane kapasitesi ve silah hasarı değerleri manuel veri girişi beklemektedir.',
  },
  'weakening-headshot': {
    id: 'weakening-headshot',
    name: 'Weakening Headshot (Zayıflatan Kafadan Vuruş)',
    category: 'Weapon',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/weakening-headshot.png',
    imageAlt:
      'Weakening Headshot (Zayıflatan Kafadan Vuruş) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Zayıflatan Kafadan Vuruş eşyasının doğrulanmış mermi direnci kırma ve kafadan vuruş değerleri manuel veri girişi beklemektedir.',
  },
  'alchemical-fire': {
    id: 'alchemical-fire',
    name: 'Alchemical Fire (AKTİF Simya Alevi)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/alchemical-fire.png',
    imageAlt:
      'Alchemical Fire (AKTİF Simya Alevi) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Simya Alevi eşyasının doğrulanmış alan hasarı, silah hasarı bonusu ve bekleme süresi değerleri manuel veri girişi beklemektedir.',
  },
  'ballistic-enchantment': {
    id: 'ballistic-enchantment',
    name: 'Ballistic Enchantment (GÜÇLENDİR Balistik Sihir)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/ballistic-enchantment.png',
    imageAlt:
      'Ballistic Enchantment (GÜÇLENDİR Balistik Sihir) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — GÜÇLENDİR Balistik Sihir eşyasının doğrulanmış yetenek güçlendirme ve silah istatistik değerleri manuel veri girişi beklemektedir.',
  },
  berserker: {
    id: 'berserker',
    name: 'Berserker (Cinnetkâr)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/berserker.png',
    imageAlt:
      'Berserker (Cinnetkâr) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Cinnetkâr eşyasının doğrulanmış alınan hasara bağlı silah hasarı artışı ve direnç değerleri manuel veri girişi beklemektedir.',
  },
  'blood-tribute': {
    id: 'blood-tribute',
    name: 'Blood Tribute (AKTİF Kanlı Haraç)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/blood-tribute.png',
    imageAlt:
      'Blood Tribute (AKTİF Kanlı Haraç) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Kanlı Haraç eşyasının doğrulanmış aktif etki, can bedeli ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'burst-fire': {
    id: 'burst-fire',
    name: 'Burst Fire (Hızlı Atış)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/burst-fire.png',
    imageAlt:
      'Burst Fire (Hızlı Atış) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Hızlı Atış eşyasının doğrulanmış atış hızı (Fire Rate), kayma mesafesi ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'cultist-sacrifice': {
    id: 'cultist-sacrifice',
    name: 'Cultist Sacrifice (AKTİF Kült Kurbanı)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/cultist-sacrifice.png',
    imageAlt:
      'Cultist Sacrifice (AKTİF Kült Kurbanı) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Kült Kurbanı eşyasının doğrulanmış aktif kurban etkisi ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'escalating-resilience': {
    id: 'escalating-resilience',
    name: 'Escalating Resilience (Artan Direnç)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/escalating-resilience.png',
    imageAlt:
      'Escalating Resilience (Artan Direnç) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Artan Direnç eşyasının doğrulanmış mermi isabetiyle biriken mermi direnci (Bullet Resist) değerleri manuel veri girişi beklemektedir.',
  },
  'express-shot': {
    id: 'express-shot',
    name: 'Express Shot (Ekspres Atış)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/express-shot.png',
    imageAlt:
      'Express Shot (Ekspres Atış) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Ekspres Atış eşyasının doğrulanmış pasif atış etkisi ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  headhunter: {
    id: 'headhunter',
    name: 'Headhunter (Kelle Avcısı)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/headhunter.png',
    imageAlt:
      'Headhunter (Kelle Avcısı) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Kelle Avcısı eşyasının doğrulanmış kafadan vuruş bonusu, iyileştirme ve hareket hızı değerleri manuel veri girişi beklemektedir.',
  },
  'heroic-aura': {
    id: 'heroic-aura',
    name: 'Heroic Aura (AKTİF Kahramanlık Aurası)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/heroic-aura.png',
    imageAlt:
      'Heroic Aura (AKTİF Kahramanlık Aurası) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Kahramanlık Aurası eşyasının doğrulanmış dost birim aura etkisi ve aktif hız/ateş gücü değerleri manuel veri girişi beklemektedir.',
  },
  'hollow-point': {
    id: 'hollow-point',
    name: 'Hollow Point (Oyuklu Mermi)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/hollow-point.png',
    imageAlt:
      'Hollow Point (Oyuklu Mermi) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Oyuklu Mermi eşyasının doğrulanmış can eşiğine bağlı silah hasarı ve büyü kalkanı değerleri manuel veri girişi beklemektedir.',
  },
  'hunters-aura': {
    id: 'hunters-aura',
    name: 'Hunter\'s Aura (Avcı Aurası)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Aura)',
    image: '/assets/items/hunters-aura.png',
    imageAlt:
      'Hunter\'s Aura (Avcı Aurası) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Avcı Aurası eşyasının doğrulanmış yakındaki rakiplerin mermi direncini ve atış hızını düşürme değerleri manuel veri girişi beklemektedir.',
  },
  'point-blank': {
    id: 'point-blank',
    name: 'Point Blank (Yakından Vuruş)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/point-blank.png',
    imageAlt:
      'Point Blank (Yakından Vuruş) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Yakından Vuruş eşyasının doğrulanmış yakın mesafe silah hasarı ve yavaşlatma değerleri manuel veri girişi beklemektedir.',
  },
  'shadow-weave': {
    id: 'shadow-weave',
    name: 'Shadow Weave (AKTİF Gölge Pelerin)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/shadow-weave.png',
    imageAlt:
      'Shadow Weave (AKTİF Gölge Pelerin) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Gölge Pelerin eşyasının doğrulanmış görünmezlik (Stealth) ve pusu sonrası atış hızı/büyü gücü değerleri manuel veri girişi beklemektedir.',
  },
  sharpshooter: {
    id: 'sharpshooter',
    name: 'Sharpshooter (Keskin Nişancı)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/sharpshooter.png',
    imageAlt:
      'Sharpshooter (Keskin Nişancı) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Keskin Nişancı eşyasının doğrulanmış uzun mesafe silah hasarı ve menzil değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-rend': {
    id: 'spirit-rend',
    name: 'Spirit Rend (Büyü Parçalama)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/spirit-rend.png',
    imageAlt:
      'Spirit Rend (Büyü Parçalama) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Büyü Parçalama eşyasının doğrulanmış büyü direnci kırma ve pasif etki değerleri manuel veri girişi beklemektedir.',
  },
  'tesla-bullets': {
    id: 'tesla-bullets',
    name: 'Tesla Bullets (Tesla Mermileri)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Mermi Etkisi)',
    image: '/assets/items/tesla-bullets.png',
    imageAlt:
      'Tesla Bullets (Tesla Mermileri) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Tesla Mermileri eşyasının doğrulanmış zincirleme yıldırım (Shock) hasarı ve tetiklenme olasılığı değerleri manuel veri girişi beklemektedir.',
  },
  'toxic-bullets': {
    id: 'toxic-bullets',
    name: 'Toxic Bullets (Toksik Mermiler)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Mermi Etkisi)',
    image: '/assets/items/toxic-bullets.png',
    imageAlt:
      'Toxic Bullets (Toksik Mermiler) eşya ikonu - Mermilerle kanama ve iyileşme azaltma uygulayan $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'Sürekli mermi isabeti hedefte kanama biriktirir; maksimum yüke ulaştığında yüzde bazlı hasar verir ve hedefin iyileşmesini keser.',
  },
  'weighted-shots': {
    id: 'weighted-shots',
    name: 'Weighted Shots (Ağırlıklı Atışlar)',
    category: 'Weapon',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/weighted-shots.png',
    imageAlt:
      'Weighted Shots (Ağırlıklı Atışlar) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Ağırlıklı Atışlar eşyasının doğrulanmış silah hasarı ve pasif etki değerleri manuel veri girişi beklemektedir.',
  },
  'armor-piercer': {
    id: 'armor-piercer',
    name: 'Armor Piercing Rounds (Zırh Delen)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/armor-piercer.png',
    imageAlt:
      'Armor Piercing Rounds (Zırh Delen) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Zırh Delen eşyasının doğrulanmış mermi direnci yok sayma (Bullet Resist Piercing) ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  capacitor: {
    id: 'capacitor',
    name: 'Capacitor (AKTİF Kondansatör)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/capacitor.png',
    imageAlt:
      'Capacitor (AKTİF Kondansatör) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Kondansatör eşyasının doğrulanmış aktif elektrik/arınma etkisi ve silah istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'crippling-headshot': {
    id: 'crippling-headshot',
    name: 'Crippling Headshot (Sakatlayan Kafadan Vuruş)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/crippling-headshot.png',
    imageAlt:
      'Crippling Headshot (Sakatlayan Kafadan Vuruş) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Sakatlayan Kafadan Vuruş eşyasının doğrulanmış kafadan vuruşta mermi ve büyü direnci kırma değerleri manuel veri girişi beklemektedir.',
  },
  'crushing-fists': {
    id: 'crushing-fists',
    name: 'Crushing Fists (Ezici Yumruklar)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/crushing-fists.png',
    imageAlt:
      'Crushing Fists (Ezici Yumruklar) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Ezici Yumruklar eşyasının doğrulanmış yakın dövüş (Melee) hasarı ve pasif zayıflatma değerleri manuel veri girişi beklemektedir.',
  },
  frenzy: {
    id: 'frenzy',
    name: 'Frenzy (Savaş Çılgınlığı)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/frenzy.png',
    imageAlt:
      'Frenzy (Savaş Çılgınlığı) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Savaş Çılgınlığı eşyasının doğrulanmış düşük can eşiğinde sağladığı atış hızı, hareket hızı ve direnç değerleri manuel veri girişi beklemektedir.',
  },
  'glass-cannon': {
    id: 'glass-cannon',
    name: 'Glass Cannon (Kırılgan Kudret)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/glass-cannon.png',
    imageAlt:
      'Glass Cannon (Kırılgan Kudret) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Kırılgan Kudret eşyasının doğrulanmış yüksek silah hasarı bonusu ve maksimum can azalması değerleri manuel veri girişi beklemektedir.',
  },
  'lucky-shot': {
    id: 'lucky-shot',
    name: 'Lucky Shot (Şanslı Atış)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/lucky-shot.png',
    imageAlt:
      'Lucky Shot (Şanslı Atış) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Şanslı Atış eşyasının doğrulanmış kritik/bonus mermi hasarı olasılığı ve yavaşlatma değerleri manuel veri girişi beklemektedir.',
  },
  ricochet: {
    id: 'ricochet',
    name: 'Ricochet (Mermi Sekmesi)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/ricochet.png',
    imageAlt:
      'Ricochet (Mermi Sekmesi) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mermi Sekmesi eşyasının doğrulanmış yakındaki hedeflere sekme sayısı ve sekme hasarı oranı değerleri manuel veri girişi beklemektedir.',
  },
  silencer: {
    id: 'silencer',
    name: 'Silencer (Susturucu)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/silencer.png',
    imageAlt:
      'Silencer (Susturucu) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Susturucu eşyasının doğrulanmış mermi isabetiyle susturma (Silence) etkisi ve silah istatistik değerleri manuel veri girişi beklemektedir.',
  },
  spellsinger: {
    id: 'spellsinger',
    name: 'Spellslinger (Büyü Silahşoru)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/spellsinger.png',
    imageAlt:
      'Spellslinger (Büyü Silahşoru) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Büyü Silahşoru eşyasının doğrulanmış yetenek ve silah etkileşimi istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spiritual-overflow': {
    id: 'spiritual-overflow',
    name: 'Spiritual Overflow (Büyülü Coşkunluk)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/spiritual-overflow.png',
    imageAlt:
      'Spiritual Overflow (Büyülü Coşkunluk) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Büyülü Coşkunluk eşyasının doğrulanmış mermi isabetiyle biriken büyü gücü (Spirit Power) ve dolum süresi azaltma değerleri manuel veri girişi beklemektedir.',
  },
  'extra-charge': {
    id: 'extra-charge',
    name: 'Extra Charge (Ekstra Şarj)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/extra-charge.png',
    imageAlt:
      'Extra Charge (Ekstra Şarj) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Ekstra Şarj eşyasının doğrulanmış ilave yetenek yükü (Bonus Ability Charge) ve dolum süresi değerleri manuel veri girişi beklemektedir.',
  },
  'extra-spirit': {
    id: 'extra-spirit',
    name: 'Extra Spirit (Ekstra Büyü)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/extra-spirit.png',
    imageAlt:
      'Extra Spirit (Ekstra Büyü) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Ekstra Büyü eşyasının doğrulanmış büyü gücü (Spirit Power) ve temel istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'golden-goose-egg': {
    id: 'golden-goose-egg',
    name: 'Golden Goose Egg (AKTİF Altın Kaz Yumurtası)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'AKTİF',
    image: '/assets/items/golden-goose-egg.png',
    imageAlt:
      'Golden Goose Egg (AKTİF Altın Kaz Yumurtası) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Altın Kaz Yumurtası eşyasının doğrulanmış aktif etki ve ruh/istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-burst': {
    id: 'mystic-burst',
    name: 'Mystic Burst (Mistik Patlama)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/mystic-burst.png',
    imageAlt:
      'Mystic Burst (Mistik Patlama) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mistik Patlama eşyasının doğrulanmış yetenek hasarı eşiği ve ilave büyü hasarı değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-expansion': {
    id: 'mystic-expansion',
    name: 'Mystic Expansion (GÜÇLENDİR Mistik Genişleme)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/mystic-expansion.png',
    imageAlt:
      'Mystic Expansion (GÜÇLENDİR Mistik Genişleme) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — GÜÇLENDİR Mistik Genişleme eşyasının doğrulanmış yetenek menzili ve etki alanı (Ability Range) değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-regeneration': {
    id: 'mystic-regeneration',
    name: 'Mystic Regeneration (Mistik Yenilenme)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/mystic-regeneration.png',
    imageAlt:
      'Mystic Regeneration (Mistik Yenilenme) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mistik Yenilenme eşyasının doğrulanmış büyü hasarı verildiğinde sağladığı can yenilemesi (Health Regen) değerleri manuel veri girişi beklemektedir.',
  },
  'rusted-barrel': {
    id: 'rusted-barrel',
    name: 'Rusted Barrel (AKTİF Paslı Namlu)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/rusted-barrel.png',
    imageAlt:
      'Rusted Barrel (AKTİF Paslı Namlu) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — AKTİF Paslı Namlu eşyasının doğrulanmış rakip atış hızı ve mermi direnci düşürme değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-strike': {
    id: 'spirit-strike',
    name: 'Spirit Strike (Büyülü Yumruk)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/spirit-strike.png',
    imageAlt:
      'Spirit Strike (Büyülü Yumruk) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Büyülü Yumruk eşyasının doğrulanmış yakın dövüş (Melee) isabetinde verdiği büyü hasarı ve büyü direnci kırma değerleri manuel veri girişi beklemektedir.',
  },
  'ablative-coat': {
    id: 'ablative-coat',
    name: 'Ablative Coat',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/ablative-coat.png',
    imageAlt:
      'Ablative Coat eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Ablative Coat eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'adrenaline-rush': {
    id: 'adrenaline-rush',
    name: 'Adrenaline Rush',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/adrenaline-rush.png',
    imageAlt:
      'Adrenaline Rush eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Adrenaline Rush eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'aerial-assault': {
    id: 'aerial-assault',
    name: 'Aerial Assault',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/aerial-assault.png',
    imageAlt:
      'Aerial Assault eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Aerial Assault eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'ammo-scavenger': {
    id: 'ammo-scavenger',
    name: 'Ammo Scavenger',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/ammo-scavenger.png',
    imageAlt:
      'Ammo Scavenger eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Ammo Scavenger eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'arcane-eater': {
    id: 'arcane-eater',
    name: 'Arcane Eater',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/arcane-eater.png',
    imageAlt:
      'Arcane Eater eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Arcane Eater eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'arcane-medallion': {
    id: 'arcane-medallion',
    name: 'Arcane Medallion',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/arcane-medallion.png',
    imageAlt:
      'Arcane Medallion eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Arcane Medallion eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'arcane-surge': {
    id: 'arcane-surge',
    name: 'Arcane Surge (Gizemli Dalgalanma)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/arcane-surge.png',
    imageAlt:
      'Arcane Surge (Gizemli Dalgalanma) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Arcane Surge (Gizemli Dalgalanma) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  archmother: {
    id: 'archmother',
    name: 'Archmother',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/archmother.png',
    imageAlt:
      'Archmother eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Archmother eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'arctic-blast': {
    id: 'arctic-blast',
    name: 'Arctic Blast (AKTİF Kutup Patlaması)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/arctic-blast.png',
    imageAlt:
      'Arctic Blast (AKTİF Kutup Patlaması) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Arctic Blast (AKTİF Kutup Patlaması) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'basic-fire-rate': {
    id: 'basic-fire-rate',
    name: 'Basic Fire Rate',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/basic-fire-rate.png',
    imageAlt:
      'Basic Fire Rate eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Basic Fire Rate eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'battle-vest': {
    id: 'battle-vest',
    name: 'Battle Vest (Savaş Yeleği)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/battle-vest.png',
    imageAlt:
      'Battle Vest (Savaş Yeleği) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Battle Vest (Savaş Yeleği) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'belt-fed-magazine': {
    id: 'belt-fed-magazine',
    name: 'Belt Fed Magazine',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/belt-fed-magazine.png',
    imageAlt:
      'Belt Fed Magazine eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Belt Fed Magazine eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'boundless-spirit': {
    id: 'boundless-spirit',
    name: 'Boundless Spirit (Sınırsız Büyü)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/boundless-spirit.png',
    imageAlt:
      'Boundless Spirit (Sınırsız Büyü) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Boundless Spirit (Sınırsız Büyü) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'bullet-armor': {
    id: 'bullet-armor',
    name: 'Bullet Armor',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/bullet-armor.png',
    imageAlt:
      'Bullet Armor eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Bullet Armor eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'bullet-deflector': {
    id: 'bullet-deflector',
    name: 'Bullet Deflector',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/bullet-deflector.png',
    imageAlt:
      'Bullet Deflector eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Bullet Deflector eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'bullet-lifesteal-item': {
    id: 'bullet-lifesteal-item',
    name: 'Bullet Lifesteal (Mermi Can Çalması)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/bullet-lifesteal-item.png',
    imageAlt:
      'Bullet Lifesteal (Mermi Can Çalması) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Bullet Lifesteal (Mermi Can Çalması) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'bullet-resilience': {
    id: 'bullet-resilience',
    name: 'Bullet Resilience (Mermi Dayanıklılığı)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/bullet-resilience.png',
    imageAlt:
      'Bullet Resilience (Mermi Dayanıklılığı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Bullet Resilience (Mermi Dayanıklılığı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'bullet-resist-shredder': {
    id: 'bullet-resist-shredder',
    name: 'Bullet Resist Shredder (Mermi Direnci Kırıcı)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/bullet-resist-shredder.png',
    imageAlt:
      'Bullet Resist Shredder (Mermi Direnci Kırıcı) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Bullet Resist Shredder (Mermi Direnci Kırıcı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'burst-fire-actuator': {
    id: 'burst-fire-actuator',
    name: 'Burst Fire Actuator',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/burst-fire-actuator.png',
    imageAlt:
      'Burst Fire Actuator eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Burst Fire Actuator eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'camouflage-suit': {
    id: 'camouflage-suit',
    name: 'Camouflage Suit',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/camouflage-suit.png',
    imageAlt:
      'Camouflage Suit eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Camouflage Suit eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'celestial-blessing': {
    id: 'celestial-blessing',
    name: 'Celestial Blessing',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/celestial-blessing.png',
    imageAlt:
      'Celestial Blessing eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Celestial Blessing eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'charge-mastery': {
    id: 'charge-mastery',
    name: 'Charge Mastery',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/charge-mastery.png',
    imageAlt:
      'Charge Mastery eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Charge Mastery eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'charmed-wraps': {
    id: 'charmed-wraps',
    name: 'Charmed Wraps',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/charmed-wraps.png',
    imageAlt:
      'Charmed Wraps eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Charmed Wraps eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'cheat-death': {
    id: 'cheat-death',
    name: 'Cheat Death (Kefen Yırtan)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/cheat-death.png',
    imageAlt:
      'Cheat Death (Kefen Yırtan) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Cheat Death (Kefen Yırtan) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  clarity: {
    id: 'clarity',
    name: 'Clarity',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/clarity.png',
    imageAlt:
      'Clarity eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Clarity eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'cloak-of-opportunity': {
    id: 'cloak-of-opportunity',
    name: 'Cloak Of Opportunity',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/cloak-of-opportunity.png',
    imageAlt:
      'Cloak Of Opportunity eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Cloak Of Opportunity eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'cloaking-device': {
    id: 'cloaking-device',
    name: 'Cloaking Device',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/cloaking-device.png',
    imageAlt:
      'Cloaking Device eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Cloaking Device eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'cold-front': {
    id: 'cold-front',
    name: 'Cold Front (AKTİF Soğuk Dalga)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF',
    image: '/assets/items/cold-front.png',
    imageAlt:
      'Cold Front (AKTİF Soğuk Dalga) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Cold Front (AKTİF Soğuk Dalga) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  colossus: {
    id: 'colossus',
    name: 'Colossus (AKTİF Dev)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/colossus.png',
    imageAlt:
      'Colossus (AKTİF Dev) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Colossus (AKTİF Dev) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'combo-breaker': {
    id: 'combo-breaker',
    name: 'Combo Breaker',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/combo-breaker.png',
    imageAlt:
      'Combo Breaker eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Combo Breaker eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'compress-cooldown': {
    id: 'compress-cooldown',
    name: 'Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/compress-cooldown.png',
    imageAlt:
      'Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  counterspell: {
    id: 'counterspell',
    name: 'Counterspell (Karşı Büyü)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/counterspell.png',
    imageAlt:
      'Counterspell (Karşı Büyü) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Counterspell (Karşı Büyü) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'creative-commons-attribution-sharealike': {
    id: 'creative-commons-attribution-sharealike',
    name: 'Creative Commons Attribution Sharealike',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/creative-commons-attribution-sharealike.png',
    imageAlt:
      'Creative Commons Attribution Sharealike eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Creative Commons Attribution Sharealike eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'cursed-relic': {
    id: 'cursed-relic',
    name: 'Cursed Relic (AKTİF Lanetli Yadigâr)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/cursed-relic.png',
    imageAlt:
      'Cursed Relic (AKTİF Lanetli Yadigâr) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Cursed Relic (AKTİF Lanetli Yadigâr) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'detention-rounds': {
    id: 'detention-rounds',
    name: 'Detention Rounds',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/detention-rounds.png',
    imageAlt:
      'Detention Rounds eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Detention Rounds eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'disarming-bullets': {
    id: 'disarming-bullets',
    name: 'Disarming Bullets',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/disarming-bullets.png',
    imageAlt:
      'Disarming Bullets eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Disarming Bullets eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'disarming-hex': {
    id: 'disarming-hex',
    name: 'Disarming Hex (AKTİF Etkisizleştirme Büyüsü)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/disarming-hex.png',
    imageAlt:
      'Disarming Hex (AKTİF Etkisizleştirme Büyüsü) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Disarming Hex (AKTİF Etkisizleştirme Büyüsü) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'dispel-magic': {
    id: 'dispel-magic',
    name: 'Dispel Magic (AKTİF Etki Geçirme Büyüsü)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/dispel-magic.png',
    imageAlt:
      'Dispel Magic (AKTİF Etki Geçirme Büyüsü) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Dispel Magic (AKTİF Etki Geçirme Büyüsü) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'divine-barrier': {
    id: 'divine-barrier',
    name: 'Divine Barrier (AKTİF İlahi Bariyer)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/divine-barrier.png',
    imageAlt:
      'Divine Barrier (AKTİF İlahi Bariyer) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Divine Barrier (AKTİF İlahi Bariyer) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'diviners-kevlar': {
    id: 'diviners-kevlar',
    name: 'Diviner\'s Kevlar (Kâhin Zırhı)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/diviners-kevlar.png',
    imageAlt:
      'Diviner\'s Kevlar (Kâhin Zırhı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Diviner\'s Kevlar (Kâhin Zırhı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'double-jump': {
    id: 'double-jump',
    name: 'Double Jump',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/double-jump.png',
    imageAlt:
      'Double Jump eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Double Jump eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'drain-will': {
    id: 'drain-will',
    name: 'Drain Will',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/drain-will.png',
    imageAlt:
      'Drain Will eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Drain Will eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'drum-magazine': {
    id: 'drum-magazine',
    name: 'Drum Magazine',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/drum-magazine.png',
    imageAlt:
      'Drum Magazine eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Drum Magazine eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'duration-extender': {
    id: 'duration-extender',
    name: 'Duration Extender (GÜÇLENDİR Süre Uzatıcı)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/duration-extender.png',
    imageAlt:
      'Duration Extender (GÜÇLENDİR Süre Uzatıcı) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Duration Extender (GÜÇLENDİR Süre Uzatıcı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'echo-shard': {
    id: 'echo-shard',
    name: 'Echo Shard (GÜÇLENDİR Yankı Parçası)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF / GÜÇLENDİR',
    image: '/assets/items/echo-shard.png',
    imageAlt:
      'Echo Shard (GÜÇLENDİR Yankı Parçası) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Echo Shard (GÜÇLENDİR Yankı Parçası) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'electric-slippers': {
    id: 'electric-slippers',
    name: 'Electric Slippers',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/electric-slippers.png',
    imageAlt:
      'Electric Slippers eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Electric Slippers eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'emp-bullets': {
    id: 'emp-bullets',
    name: 'EMP Bullets',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/emp-bullets.png',
    imageAlt:
      'EMP Bullets eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — EMP Bullets eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'emp-grenade': {
    id: 'emp-grenade',
    name: 'EMP Grenade',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/emp-grenade.png',
    imageAlt:
      'EMP Grenade eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — EMP Grenade eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'enchanters-emblem': {
    id: 'enchanters-emblem',
    name: 'Enchanter\'s Emblem (Büyücü Amblemi)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/enchanters-emblem.png',
    imageAlt:
      'Enchanter\'s Emblem (Büyücü Amblemi) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Enchanter\'s Emblem (Büyücü Amblemi) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'enduring-speed': {
    id: 'enduring-speed',
    name: 'Enduring Speed (Kalıcı Hız)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/enduring-speed.png',
    imageAlt:
      'Enduring Speed (Kalıcı Hız) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Enduring Speed (Kalıcı Hız) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'enduring-spirit': {
    id: 'enduring-spirit',
    name: 'Enduring Spirit',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/enduring-spirit.png',
    imageAlt:
      'Enduring Spirit eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Enduring Spirit eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'escalating-exposure': {
    id: 'escalating-exposure',
    name: 'Escalating Exposure (Artan Hassasiyet)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/escalating-exposure.png',
    imageAlt:
      'Escalating Exposure (Artan Hassasiyet) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Escalating Exposure (Artan Hassasiyet) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'eternal-gift': {
    id: 'eternal-gift',
    name: 'Eternal Gift',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/eternal-gift.png',
    imageAlt:
      'Eternal Gift eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Eternal Gift eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'extra-health': {
    id: 'extra-health',
    name: 'Extra Health (Ekstra Sağlık)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/extra-health.png',
    imageAlt:
      'Extra Health (Ekstra Sağlık) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Extra Health (Ekstra Sağlık) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'extra-regen': {
    id: 'extra-regen',
    name: 'Extra Regen (Ekstra Yenilenme)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/extra-regen.png',
    imageAlt:
      'Extra Regen (Ekstra Yenilenme) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Extra Regen (Ekstra Yenilenme) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'extra-stamina': {
    id: 'extra-stamina',
    name: 'Extra Stamina (Ekstra Kuvvet)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/extra-stamina.png',
    imageAlt:
      'Extra Stamina (Ekstra Kuvvet) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Extra Stamina (Ekstra Kuvvet) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'fast-reload': {
    id: 'fast-reload',
    name: 'Fast Reload',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/fast-reload.png',
    imageAlt:
      'Fast Reload eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Fast Reload eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'fire-rate-aura': {
    id: 'fire-rate-aura',
    name: 'Fire Rate Aura',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/fire-rate-aura.png',
    imageAlt:
      'Fire Rate Aura eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Fire Rate Aura eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'fire-rate-item': {
    id: 'fire-rate-item',
    name: 'Fire Rate Item',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/fire-rate-item.png',
    imageAlt:
      'Fire Rate Item eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Fire Rate Item eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'focus-lens': {
    id: 'focus-lens',
    name: 'Focus Lens (AKTİF Odaklı Mercek)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/focus-lens.png',
    imageAlt:
      'Focus Lens (AKTİF Odaklı Mercek) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Focus Lens (AKTİF Odaklı Mercek) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  fortitude: {
    id: 'fortitude',
    name: 'Fortitude (Metanet)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/fortitude.png',
    imageAlt:
      'Fortitude (Metanet) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Fortitude (Metanet) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'frostbite-charm': {
    id: 'frostbite-charm',
    name: 'Frostbite Charm',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/frostbite-charm.png',
    imageAlt:
      'Frostbite Charm eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Frostbite Charm eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'full-spectrum': {
    id: 'full-spectrum',
    name: 'Full Spectrum',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/full-spectrum.png',
    imageAlt:
      'Full Spectrum eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Full Spectrum eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'fury-trance': {
    id: 'fury-trance',
    name: 'Fury Trance (AKTİF Öfke Transı)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/fury-trance.png',
    imageAlt:
      'Fury Trance (AKTİF Öfke Transı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Fury Trance (AKTİF Öfke Transı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'galvanic-storm': {
    id: 'galvanic-storm',
    name: 'Galvanic Storm',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/galvanic-storm.png',
    imageAlt:
      'Galvanic Storm eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Galvanic Storm eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'greater-expansion': {
    id: 'greater-expansion',
    name: 'Greater Expansion (Büyük Genişleme)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/greater-expansion.png',
    imageAlt:
      'Greater Expansion (Büyük Genişleme) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Greater Expansion (Büyük Genişleme) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  grit: {
    id: 'grit',
    name: 'Grit (AKTİF Azim)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'AKTİF',
    image: '/assets/items/grit.png',
    imageAlt:
      'Grit (AKTİF Azim) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Grit (AKTİF Azim) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'guardian-ward': {
    id: 'guardian-ward',
    name: 'Guardian Ward (AKTİF Koruyucu Bariyer)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF',
    image: '/assets/items/guardian-ward.png',
    imageAlt:
      'Guardian Ward (AKTİF Koruyucu Bariyer) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Guardian Ward (AKTİF Koruyucu Bariyer) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'haunting-shot': {
    id: 'haunting-shot',
    name: 'Haunting Shot',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/haunting-shot.png',
    imageAlt:
      'Haunting Shot eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Haunting Shot eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'healing-aura': {
    id: 'healing-aura',
    name: 'Healing Aura',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/healing-aura.png',
    imageAlt:
      'Healing Aura eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Healing Aura eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'healing-booster': {
    id: 'healing-booster',
    name: 'Healing Booster (İyileştirme Güçlendirici)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/healing-booster.png',
    imageAlt:
      'Healing Booster (İyileştirme Güçlendirici) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Healing Booster (İyileştirme Güçlendirici) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'healing-nova': {
    id: 'healing-nova',
    name: 'Healing Nova (AKTİF İyileştirme Dalgası)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/healing-nova.png',
    imageAlt:
      'Healing Nova (AKTİF İyileştirme Dalgası) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Healing Nova (AKTİF İyileştirme Dalgası) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'healing-rite': {
    id: 'healing-rite',
    name: 'Healing Rite (AKTİF İyileştirme Ayini)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'AKTİF',
    image: '/assets/items/healing-rite.png',
    imageAlt:
      'Healing Rite (AKTİF İyileştirme Ayini) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Healing Rite (AKTİF İyileştirme Ayini) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'healing-tempo': {
    id: 'healing-tempo',
    name: 'Healing Tempo (İyileştirici Tempo)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/healing-tempo.png',
    imageAlt:
      'Healing Tempo (İyileştirici Tempo) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Healing Tempo (İyileştirici Tempo) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'health-regen': {
    id: 'health-regen',
    name: 'Health Regen',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/health-regen.png',
    imageAlt:
      'Health Regen eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Health Regen eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  health: {
    id: 'health',
    name: 'Health',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/health.png',
    imageAlt:
      'Health eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Health eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'height-advantage': {
    id: 'height-advantage',
    name: 'Height Advantage',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/height-advantage.png',
    imageAlt:
      'Height Advantage eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Height Advantage eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'high-impact-armor': {
    id: 'high-impact-armor',
    name: 'High Impact Armor',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/high-impact-armor.png',
    imageAlt:
      'High Impact Armor eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — High Impact Armor eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  holliday: {
    id: 'holliday',
    name: 'Holliday',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/holliday.png',
    imageAlt:
      'Holliday eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Holliday eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'hyper-charge': {
    id: 'hyper-charge',
    name: 'Hyper Charge',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/hyper-charge.png',
    imageAlt:
      'Hyper Charge eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Hyper Charge eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'imbued-ability': {
    id: 'imbued-ability',
    name: 'Imbued Ability',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/imbued-ability.png',
    imageAlt:
      'Imbued Ability eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Imbued Ability eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'improved-fire-rate': {
    id: 'improved-fire-rate',
    name: 'Improved Fire Rate',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/improved-fire-rate.png',
    imageAlt:
      'Improved Fire Rate eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Improved Fire Rate eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'improved-spirit': {
    id: 'improved-spirit',
    name: 'Improved Spirit (Geliştirilmiş Büyü)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/improved-spirit.png',
    imageAlt:
      'Improved Spirit (Geliştirilmiş Büyü) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Improved Spirit (Geliştirilmiş Büyü) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  indomitable: {
    id: 'indomitable',
    name: 'Indomitable (Boyun Eğmez)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/indomitable.png',
    imageAlt:
      'Indomitable (Boyun Eğmez) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Indomitable (Boyun Eğmez) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'infinite-rounds': {
    id: 'infinite-rounds',
    name: 'Infinite Rounds',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/infinite-rounds.png',
    imageAlt:
      'Infinite Rounds eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Infinite Rounds eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  infuser: {
    id: 'infuser',
    name: 'Infuser (AKTİF Aşılayıcı)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/infuser.png',
    imageAlt:
      'Infuser (AKTİF Aşılayıcı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Infuser (AKTİF Aşılayıcı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  inhibitor: {
    id: 'inhibitor',
    name: 'Inhibitor (Köstek)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif (Mermi Etkisi)',
    image: '/assets/items/inhibitor.png',
    imageAlt:
      'Inhibitor (Köstek) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Inhibitor (Köstek) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'item-shop': {
    id: 'item-shop',
    name: 'Item Shop',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/item-shop.png',
    imageAlt:
      'Item Shop eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Item Shop eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  ivy: {
    id: 'ivy',
    name: 'Ivy',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/ivy.png',
    imageAlt:
      'Ivy eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Ivy eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  juggernaut: {
    id: 'juggernaut',
    name: 'Juggernaut (Yıkıcı Güç)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/juggernaut.png',
    imageAlt:
      'Juggernaut (Yıkıcı Güç) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Juggernaut (Yıkıcı Güç) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'leaked-pre-release-spirit-shop': {
    id: 'leaked-pre-release-spirit-shop',
    name: 'Leaked Pre Release Spirit Shop',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/leaked-pre-release-spirit-shop.png',
    imageAlt:
      'Leaked Pre Release Spirit Shop eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Leaked Pre Release Spirit Shop eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'leaked-pre-release-weapon-shop': {
    id: 'leaked-pre-release-weapon-shop',
    name: 'Leaked Pre Release Weapon Shop',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/leaked-pre-release-weapon-shop.png',
    imageAlt:
      'Leaked Pre Release Weapon Shop eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Leaked Pre Release Weapon Shop eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  leech: {
    id: 'leech',
    name: 'Leech (Sülük)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/leech.png',
    imageAlt:
      'Leech (Sülük) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Leech (Sülük) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  lifestrike: {
    id: 'lifestrike',
    name: 'Lifestrike (İyileştiren Yumruk)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/lifestrike.png',
    imageAlt:
      'Lifestrike (İyileştiren Yumruk) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Lifestrike (İyileştiren Yumruk) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'lightning-scroll': {
    id: 'lightning-scroll',
    name: 'Lightning Scroll (Yıldırım Parşömeni)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/lightning-scroll.png',
    imageAlt:
      'Lightning Scroll (Yıldırım Parşömeni) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Lightning Scroll (Yıldırım Parşömeni) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'magic-carpet': {
    id: 'magic-carpet',
    name: 'Magic Carpet (AKTİF Sihirli Halı)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/magic-carpet.png',
    imageAlt:
      'Magic Carpet (AKTİF Sihirli Halı) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Magic Carpet (AKTİF Sihirli Halı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'magitech-rounds': {
    id: 'magitech-rounds',
    name: 'Magitech Rounds',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/magitech-rounds.png',
    imageAlt:
      'Magitech Rounds eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Magitech Rounds eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'majestic-leap': {
    id: 'majestic-leap',
    name: 'Majestic Leap (AKTİF Görkemli Sıçrama)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF',
    image: '/assets/items/majestic-leap.png',
    imageAlt:
      'Majestic Leap (AKTİF Görkemli Sıçrama) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Majestic Leap (AKTİF Görkemli Sıçrama) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'melee-knockdown': {
    id: 'melee-knockdown',
    name: 'Melee Knockdown',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/melee-knockdown.png',
    imageAlt:
      'Melee Knockdown eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Melee Knockdown eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'melee-lifesteal': {
    id: 'melee-lifesteal',
    name: 'Melee Lifesteal (Vampir Yumruklar)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/melee-lifesteal.png',
    imageAlt:
      'Melee Lifesteal (Vampir Yumruklar) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Melee Lifesteal (Vampir Yumruklar) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'mercurial-magnum': {
    id: 'mercurial-magnum',
    name: 'Mercurial Magnum (GÜÇLENDİR Merkür Magnum)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/mercurial-magnum.png',
    imageAlt:
      'Mercurial Magnum (GÜÇLENDİR Merkür Magnum) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mercurial Magnum (GÜÇLENDİR Merkür Magnum) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'mo-krill': {
    id: 'mo-krill',
    name: 'Mo Krill',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/mo-krill.png',
    imageAlt:
      'Mo Krill eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Mo Krill eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-conduit': {
    id: 'mystic-conduit',
    name: 'Mystic Conduit',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/mystic-conduit.png',
    imageAlt:
      'Mystic Conduit eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Mystic Conduit eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-regereneration': {
    id: 'mystic-regereneration',
    name: 'Mystic Regeneration (Mistik Yenilenme)',
    category: 'Spirit',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/mystic-regereneration.png',
    imageAlt:
      'Mystic Regeneration (Mistik Yenilenme) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mystic Regeneration (Mistik Yenilenme) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-reverb': {
    id: 'mystic-reverb',
    name: 'Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/mystic-reverb.png',
    imageAlt:
      'Mystic Reverb (GÜÇLENDİR Mistik Titreşimler) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mystic Reverb (GÜÇLENDİR Mistik Titreşimler) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-slow': {
    id: 'mystic-slow',
    name: 'Mystic Slow (Mistik Yavaşlatma)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/mystic-slow.png',
    imageAlt:
      'Mystic Slow (Mistik Yavaşlatma) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mystic Slow (Mistik Yavaşlatma) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'mystic-vulnerability': {
    id: 'mystic-vulnerability',
    name: 'Mystic Vulnerability (Mistik Hassasiyet)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/mystic-vulnerability.png',
    imageAlt:
      'Mystic Vulnerability (Mistik Hassasiyet) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Mystic Vulnerability (Mistik Hassasiyet) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'mystical-piano': {
    id: 'mystical-piano',
    name: 'Mystical Piano',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/mystical-piano.png',
    imageAlt:
      'Mystical Piano eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Mystical Piano eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'neon-prime-shop': {
    id: 'neon-prime-shop',
    name: 'Neon Prime Shop',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/neon-prime-shop.png',
    imageAlt:
      'Neon Prime Shop eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Neon Prime Shop eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'nullification-burst': {
    id: 'nullification-burst',
    name: 'Nullification Burst',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/nullification-burst.png',
    imageAlt:
      'Nullification Burst eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Nullification Burst eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'old-item-shop-ui-before-the-shop-rework': {
    id: 'old-item-shop-ui-before-the-shop-rework',
    name: 'Old Item Shop UI Before The Shop Rework',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/old-item-shop-ui-before-the-shop-rework.png',
    imageAlt:
      'Old Item Shop UI Before The Shop Rework eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Old Item Shop UI Before The Shop Rework eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'omni-spirit': {
    id: 'omni-spirit',
    name: 'Omni Spirit',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/omni-spirit.png',
    imageAlt:
      'Omni Spirit eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Omni Spirit eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'omnicharge-signet': {
    id: 'omnicharge-signet',
    name: 'Omnicharge Signet',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/omnicharge-signet.png',
    imageAlt:
      'Omnicharge Signet eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Omnicharge Signet eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'overdrive-clip': {
    id: 'overdrive-clip',
    name: 'Overdrive Clip',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/overdrive-clip.png',
    imageAlt:
      'Overdrive Clip eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Overdrive Clip eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  overdrive: {
    id: 'overdrive',
    name: 'Overdrive',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/overdrive.png',
    imageAlt:
      'Overdrive eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Overdrive eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'phantom-strike': {
    id: 'phantom-strike',
    name: 'Phantom Strike (AKTİF Hayalet Saldırı)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/phantom-strike.png',
    imageAlt:
      'Phantom Strike (AKTİF Hayalet Saldırı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Phantom Strike (AKTİF Hayalet Saldırı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'plated-armor': {
    id: 'plated-armor',
    name: 'Plated Armor (Kaplamalı Zırh)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/plated-armor.png',
    imageAlt:
      'Plated Armor (Kaplamalı Zırh) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Plated Armor (Kaplamalı Zırh) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'predator-precision': {
    id: 'predator-precision',
    name: 'Predator Precision',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/predator-precision.png',
    imageAlt:
      'Predator Precision eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Predator Precision eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'prism-blast': {
    id: 'prism-blast',
    name: 'Prism Blast',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/prism-blast.png',
    imageAlt:
      'Prism Blast eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Prism Blast eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'quantum-chimaera': {
    id: 'quantum-chimaera',
    name: 'Quantum Chimaera',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/quantum-chimaera.png',
    imageAlt:
      'Quantum Chimaera eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Quantum Chimaera eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  quarantine: {
    id: 'quarantine',
    name: 'Quarantine',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/quarantine.png',
    imageAlt:
      'Quarantine eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Quarantine eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'quicksilver-reload': {
    id: 'quicksilver-reload',
    name: 'Quicksilver Reload (GÜÇLENDİR Hızlı Şarjör Değiştirme)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/quicksilver-reload.png',
    imageAlt:
      'Quicksilver Reload (GÜÇLENDİR Hızlı Şarjör Değiştirme) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Quicksilver Reload (GÜÇLENDİR Hızlı Şarjör Değiştirme) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'radiant-regeneration': {
    id: 'radiant-regeneration',
    name: 'Radiant Regeneration (Parlak Yenilenme)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/radiant-regeneration.png',
    imageAlt:
      'Radiant Regeneration (Parlak Yenilenme) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Radiant Regeneration (Parlak Yenilenme) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'rapid-recharge': {
    id: 'rapid-recharge',
    name: 'Rapid Recharge (Hızlı Şarj)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/rapid-recharge.png',
    imageAlt:
      'Rapid Recharge (Hızlı Şarj) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Rapid Recharge (Hızlı Şarj) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  rebuttal: {
    id: 'rebuttal',
    name: 'Rebuttal (Karşı Saldırı)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/rebuttal.png',
    imageAlt:
      'Rebuttal (Karşı Saldırı) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Rebuttal (Karşı Saldırı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  refresher: {
    id: 'refresher',
    name: 'Refresher (AKTİF Yenileyici)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/refresher.png',
    imageAlt:
      'Refresher (AKTİF Yenileyici) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Refresher (AKTİF Yenileyici) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'regenerative-armor': {
    id: 'regenerative-armor',
    name: 'Regenerative Armor',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/regenerative-armor.png',
    imageAlt:
      'Regenerative Armor eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Regenerative Armor eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'reloader-huge-clip': {
    id: 'reloader-huge-clip',
    name: 'Reloader Huge Clip',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/reloader-huge-clip.png',
    imageAlt:
      'Reloader Huge Clip eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Reloader Huge Clip eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'rescue-beam': {
    id: 'rescue-beam',
    name: 'Rescue Beam (AKTİF Kurtarma Işını)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/rescue-beam.png',
    imageAlt:
      'Rescue Beam (AKTİF Kurtarma Işını) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Rescue Beam (AKTİF Kurtarma Işını) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  rescue: {
    id: 'rescue',
    name: 'Rescue',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/rescue.png',
    imageAlt:
      'Rescue eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Rescue eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'restorative-locket': {
    id: 'restorative-locket',
    name: 'Restorative Locket (AKTİF Şifalı Madalyon)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF',
    image: '/assets/items/restorative-locket.png',
    imageAlt:
      'Restorative Locket (AKTİF Şifalı Madalyon) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Restorative Locket (AKTİF Şifalı Madalyon) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'return-fire': {
    id: 'return-fire',
    name: 'Return Fire (AKTİF İade-i Ateş)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF',
    image: '/assets/items/return-fire.png',
    imageAlt:
      'Return Fire (AKTİF İade-i Ateş) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Return Fire (AKTİF İade-i Ateş) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'runed-gauntlets': {
    id: 'runed-gauntlets',
    name: 'Runed Gauntlets',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/runed-gauntlets.png',
    imageAlt:
      'Runed Gauntlets eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Runed Gauntlets eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  scourge: {
    id: 'scourge',
    name: 'Scourge (AKTİF Bela)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/scourge.png',
    imageAlt:
      'Scourge (AKTİF Bela) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Scourge (AKTİF Bela) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'seraphim-wings': {
    id: 'seraphim-wings',
    name: 'Seraphim Wings',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/seraphim-wings.png',
    imageAlt:
      'Seraphim Wings eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Seraphim Wings eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  seven: {
    id: 'seven',
    name: 'Seven',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/seven.png',
    imageAlt:
      'Seven eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Seven eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'shadow-strike': {
    id: 'shadow-strike',
    name: 'Shadow Strike',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/shadow-strike.png',
    imageAlt:
      'Shadow Strike eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Shadow Strike eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'shield-rush': {
    id: 'shield-rush',
    name: 'Shield Rush',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/shield-rush.png',
    imageAlt:
      'Shield Rush eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Shield Rush eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'shrink-ray': {
    id: 'shrink-ray',
    name: 'Shrink Ray',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/shrink-ray.png',
    imageAlt:
      'Shrink Ray eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Shrink Ray eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'silence-wave': {
    id: 'silence-wave',
    name: 'Silence Wave (AKTİF Susturma Dalgası)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'AKTİF (Atış)',
    image: '/assets/items/silence-wave.png',
    imageAlt:
      'Silence Wave (AKTİF Susturma Dalgası) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Silence Wave (AKTİF Susturma Dalgası) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'siphon-bullets': {
    id: 'siphon-bullets',
    name: 'Siphon Bullets (Can Çalma Mermileri)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif (Mermi Etkisi)',
    image: '/assets/items/siphon-bullets.png',
    imageAlt:
      'Siphon Bullets (Can Çalma Mermileri) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Siphon Bullets (Can Çalma Mermileri) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'slowing-spirit': {
    id: 'slowing-spirit',
    name: 'Slowing Spirit',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/slowing-spirit.png',
    imageAlt:
      'Slowing Spirit eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Slowing Spirit eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  smoke: {
    id: 'smoke',
    name: 'Smoke',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/smoke.png',
    imageAlt:
      'Smoke eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Smoke eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  snowball: {
    id: 'snowball',
    name: 'Snowball',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/snowball.png',
    imageAlt:
      'Snowball eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Snowball eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'soul-disruptor': {
    id: 'soul-disruptor',
    name: 'Soul Disruptor',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/soul-disruptor.png',
    imageAlt:
      'Soul Disruptor eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Soul Disruptor eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'soul-explosion': {
    id: 'soul-explosion',
    name: 'Soul Explosion',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/soul-explosion.png',
    imageAlt:
      'Soul Explosion eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Soul Explosion eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'soul-rebirth': {
    id: 'soul-rebirth',
    name: 'Soul Rebirth',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/soul-rebirth.png',
    imageAlt:
      'Soul Rebirth eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Soul Rebirth eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  spellbreaker: {
    id: 'spellbreaker',
    name: 'Spellbreaker (Büyü Bozan)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/spellbreaker.png',
    imageAlt:
      'Spellbreaker (Büyü Bozan) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spellbreaker (Büyü Bozan) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  spellslinger: {
    id: 'spellslinger',
    name: 'Spellslinger (Büyü Silahşoru)',
    category: 'Weapon',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/spellslinger.png',
    imageAlt:
      'Spellslinger (Büyü Silahşoru) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spellslinger (Büyü Silahşoru) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-armor': {
    id: 'spirit-armor',
    name: 'Spirit Armor',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/spirit-armor.png',
    imageAlt:
      'Spirit Armor eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Armor eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-barrier-pulse': {
    id: 'spirit-barrier-pulse',
    name: 'Spirit Barrier Pulse',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/spirit-barrier-pulse.png',
    imageAlt:
      'Spirit Barrier Pulse eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Barrier Pulse eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-burn': {
    id: 'spirit-burn',
    name: 'Spirit Burn (Yakıcı Büyü)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/spirit-burn.png',
    imageAlt:
      'Spirit Burn (Yakıcı Büyü) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Burn (Yakıcı Büyü) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-damage': {
    id: 'spirit-damage',
    name: 'Spirit Damage',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/spirit-damage.png',
    imageAlt:
      'Spirit Damage eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Damage eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-lifesteal-item': {
    id: 'spirit-lifesteal-item',
    name: 'Spirit Lifesteal (Büyü Can Çalması)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/spirit-lifesteal-item.png',
    imageAlt:
      'Spirit Lifesteal (Büyü Can Çalması) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Lifesteal (Büyü Can Çalması) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-power': {
    id: 'spirit-power',
    name: 'Spirit Power',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/spirit-power.png',
    imageAlt:
      'Spirit Power eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Power eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-resilience': {
    id: 'spirit-resilience',
    name: 'Spirit Resilience (Büyü Dayanıklılığı)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/spirit-resilience.png',
    imageAlt:
      'Spirit Resilience (Büyü Dayanıklılığı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Resilience (Büyü Dayanıklılığı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-sap': {
    id: 'spirit-sap',
    name: 'Spirit Sap (AKTİF Büyü Zayıflatma)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'AKTİF (Hedefli)',
    image: '/assets/items/spirit-sap.png',
    imageAlt:
      'Spirit Sap (AKTİF Büyü Zayıflatma) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Sap (AKTİF Büyü Zayıflatma) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-shielding': {
    id: 'spirit-shielding',
    name: 'Spirit Shielding (Büyü Kalkanı)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/spirit-shielding.png',
    imageAlt:
      'Spirit Shielding (Büyü Kalkanı) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Shielding (Büyü Kalkanı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-shop': {
    id: 'spirit-shop',
    name: 'Spirit Shop',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/spirit-shop.png',
    imageAlt:
      'Spirit Shop eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Shop eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'spirit-snatch': {
    id: 'spirit-snatch',
    name: 'Spirit Snatch (Büyü Kapma)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/spirit-snatch.png',
    imageAlt:
      'Spirit Snatch (Büyü Kapma) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Spirit Snatch (Büyü Kapma) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'sprint-boots': {
    id: 'sprint-boots',
    name: 'Sprint Boots (Hızlı Koşma Botları)',
    category: 'Vitality',
    cost: '$ 800',
    tier: 'Aşama I',
    activation: 'Pasif',
    image: '/assets/items/sprint-boots.png',
    imageAlt:
      'Sprint Boots (Hızlı Koşma Botları) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Sprint Boots (Hızlı Koşma Botları) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  stabilizer: {
    id: 'stabilizer',
    name: 'Stabilizer',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/stabilizer.png',
    imageAlt:
      'Stabilizer eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Stabilizer eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'stabilizing-tripod': {
    id: 'stabilizing-tripod',
    name: 'Stabilizing Tripod',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/stabilizing-tripod.png',
    imageAlt:
      'Stabilizing Tripod eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Stabilizing Tripod eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'stamina-mastery': {
    id: 'stamina-mastery',
    name: 'Stamina Mastery (Kuvvet Ustalığı)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/stamina-mastery.png',
    imageAlt:
      'Stamina Mastery (Kuvvet Ustalığı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Stamina Mastery (Kuvvet Ustalığı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  star: {
    id: 'star',
    name: 'Star',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/star.png',
    imageAlt:
      'Star eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Star eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'stasis-bomb': {
    id: 'stasis-bomb',
    name: 'Stasis Bomb',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/stasis-bomb.png',
    imageAlt:
      'Stasis Bomb eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Stasis Bomb eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'superior-duration': {
    id: 'superior-duration',
    name: 'Superior Duration (Üstün Süre Uzatıcı)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/superior-duration.png',
    imageAlt:
      'Superior Duration (Üstün Süre Uzatıcı) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Superior Duration (Üstün Süre Uzatıcı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  suppressor: {
    id: 'suppressor',
    name: 'Suppressor (Baskılayıcı)',
    category: 'Spirit',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/suppressor.png',
    imageAlt:
      'Suppressor (Baskılayıcı) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Suppressor (Baskılayıcı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'surge-of-power': {
    id: 'surge-of-power',
    name: 'Surge of Power (GÜÇLENDİR Güç Artışı)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'GÜÇLENDİR (Imbue)',
    image: '/assets/items/surge-of-power.png',
    imageAlt:
      'Surge of Power (GÜÇLENDİR Güç Artışı) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Surge of Power (GÜÇLENDİR Güç Artışı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  tankbuster: {
    id: 'tankbuster',
    name: 'Tankbuster (Tank Patlatan)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/tankbuster.png',
    imageAlt:
      'Tankbuster (Tank Patlatan) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Tankbuster (Tank Patlatan) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'tech-defender': {
    id: 'tech-defender',
    name: 'Tech Defender',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/tech-defender.png',
    imageAlt:
      'Tech Defender eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Tech Defender eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'torment-pulse': {
    id: 'torment-pulse',
    name: 'Torment Pulse (Yayılan İşkence)',
    category: 'Spirit',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif',
    image: '/assets/items/torment-pulse.png',
    imageAlt:
      'Torment Pulse (Yayılan İşkence) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Torment Pulse (Yayılan İşkence) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  toughness: {
    id: 'toughness',
    name: 'Toughness',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/toughness.png',
    imageAlt:
      'Toughness eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Toughness eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'trophy-collector': {
    id: 'trophy-collector',
    name: 'Trophy Collector (Ganimet Avcısı)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif',
    image: '/assets/items/trophy-collector.png',
    imageAlt:
      'Trophy Collector (Ganimet Avcısı) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Trophy Collector (Ganimet Avcısı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'unstable-concoction': {
    id: 'unstable-concoction',
    name: 'Unstable Concoction',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/unstable-concoction.png',
    imageAlt:
      'Unstable Concoction eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Unstable Concoction eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'vacuum-web': {
    id: 'vacuum-web',
    name: 'Vacuum Web',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/vacuum-web.png',
    imageAlt:
      'Vacuum Web eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Vacuum Web eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'vampiric-burst': {
    id: 'vampiric-burst',
    name: 'Vampiric Burst (AKTİF Vampir Coşkusu)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/vampiric-burst.png',
    imageAlt:
      'Vampiric Burst (AKTİF Vampir Coşkusu) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Vampiric Burst (AKTİF Vampir Coşkusu) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'veil-walker': {
    id: 'veil-walker',
    name: 'Veil Walker (Kozmik Seyahat)',
    category: 'Vitality',
    cost: '$ 3200',
    tier: 'Aşama III',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/veil-walker.png',
    imageAlt:
      'Veil Walker (Kozmik Seyahat) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Veil Walker (Kozmik Seyahat) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'vortex-web': {
    id: 'vortex-web',
    name: 'Vortex Web (AKTİF Girdap Ağı)',
    category: 'Spirit',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'AKTİF',
    image: '/assets/items/vortex-web.png',
    imageAlt:
      'Vortex Web (AKTİF Girdap Ağı) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Vortex Web (AKTİF Girdap Ağı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  vyper: {
    id: 'vyper',
    name: 'Vyper',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/vyper.png',
    imageAlt:
      'Vyper eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Vyper eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'weapon-damage': {
    id: 'weapon-damage',
    name: 'Weapon Damage',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/weapon-damage.png',
    imageAlt:
      'Weapon Damage eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Weapon Damage eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'weapon-eater': {
    id: 'weapon-eater',
    name: 'Weapon Eater',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/weapon-eater.png',
    imageAlt:
      'Weapon Eater eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Weapon Eater eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'weapon-jammer': {
    id: 'weapon-jammer',
    name: 'Weapon Jammer',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/weapon-jammer.png',
    imageAlt:
      'Weapon Jammer eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Weapon Jammer eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  'weapon-shielding': {
    id: 'weapon-shielding',
    name: 'Weapon Shielding (Silah Kalkanı)',
    category: 'Vitality',
    cost: '$ 1600',
    tier: 'Aşama II',
    activation: 'Pasif (Tetiklemeli)',
    image: '/assets/items/weapon-shielding.png',
    imageAlt:
      'Weapon Shielding (Silah Kalkanı) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Weapon Shielding (Silah Kalkanı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'weapon-shop': {
    id: 'weapon-shop',
    name: 'Weapon Shop',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/weapon-shop.png',
    imageAlt:
      'Weapon Shop eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Weapon Shop eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
  witchmail: {
    id: 'witchmail',
    name: 'Witchmail (Cadı Zırhı)',
    category: 'Vitality',
    cost: '$ 6400',
    tier: 'Aşama IV',
    activation: 'Pasif',
    image: '/assets/items/witchmail.png',
    imageAlt:
      'Witchmail (Cadı Zırhı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası',
    baseDesc:
      'TBD (Needs Manual Entry) — Witchmail (Cadı Zırhı) eşyasının doğrulanmış istatistik ve etki değerleri manuel veri girişi beklemektedir.',
  },
  'zip-line-mastery': {
    id: 'zip-line-mastery',
    name: 'Zip Line Mastery',
    category: 'TBD',
    cost: 'TBD',
    tier: 'TBD',
    activation: 'TBD',
    image: '/assets/items/zip-line-mastery.png',
    imageAlt:
      'Zip Line Mastery eşya ikonu - Kategori ve fiyat bilgisi TBD (Needs Manual Entry)',
    baseDesc:
      'TBD (Needs Manual Entry) — Zip Line Mastery eşyasının doğrulanmış kategori, fiyat ve istatistik değerleri manuel veri girişi beklemektedir.',
  },
};

// Yardımcı fonksiyon: katalog verisi ile karşılaşmaya özel açıklamayı birleştirir.
// Listede bulunmayan veya fiyatı doğrulanmamış bir eşya varsa fiyatı otomatik 'TBD' olarak işaretlenir.
const buildItemRecommendation = (itemId, priority, matchupReason) => {
  const item = itemsCatalog[itemId];
  if (!item) {
    return {
      id: itemId,
      name: itemId,
      category: 'Spirit',
      cost: 'TBD',
      tier: 'TBD',
      activation: 'TBD',
      image: `/assets/items/${itemId}.png`,
      imageAlt: `${itemId} eşya ikonu (Fiyat: TBD)`,
      baseDesc: 'Bu eşyanın güncel yama verisi henüz doğrulanmamıştır (TBD).',
      priority,
      matchupReason,
    };
  }
  return {
    ...item,
    cost: item.cost || 'TBD',
    priority,
    matchupReason,
  };
};

export const matchups = {
  // ==========================================
  // SENİN KARAKTERİN: ABRAMS
  // ==========================================
  abrams_vs_vindicta: {
    summary:
      'Vindicta uçuşa (Flight) geçtiğinde Abrams için ulaşılması en zor hedeflerden biridir. Sabırlı oynamalı, siperleri kullanmalı ve onu yere indirecek aktif eşyalara yönelmelisiniz.',
    difficulty: 'Zorlu',
    advantageScore: '42% - 58%',
    recommendedItems: [
      buildItemRecommendation(
        'knockdown',
        'Zorunlu Counter',
        'Vindicta Flight ile havaya yükseldiğinde Knockdown kullanarak onu doğrudan yere çakabilir ve hemen ardından Shoulder Charge ile komboya başlayabilirsiniz.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Erken / Orta Oyun Kritik',
        'Stake (Sabitleme Kazığı) alanından anında çıkmak veya yere inen Vindicta ile aradaki mesafeyi saniyesinde kapatmak için en etkili mobilite eşyasıdır.'
      ),
      buildItemRecommendation(
        'debuff-reducer',
        'Koridor Güvencesi',
        'Vindicta’nın Stake sabitleme süresini ve Crow Familiar zırh eritme etkisini %30 kısaltarak açık alanda yakalanma riskinizi azaltır.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Koridorda açık alanda durmaktan kaçının; köprü ayaklarını ve siperleri kullanarak yalnızca Trooper son vuruşları (Last Hit) için çıkın. Vindicta Stake attığında Stamina harcamak yerine siper arkasında kalın.',
      midGame:
        'Knockdown eşyasını tamamlayana kadar Vindicta’yı tek başınıza kovalamayın. Yan koridorlardaki binaların iç kısımlarında (dar alanlarda) savaşmaya zorlayın; tavanı alçak bölgelerde Flight avantajını kaybeder.',
      lateGame:
        'Takım savaşlarında Seismic Impact (Ulti) yeteneğinizi ön saflara değil, doğrudan arka safta konumlanan Vindicta’nın üzerine iniş yapmak için saklayın.',
      counterTips: [
        'Vindicta’nın Flight yeteneği bittiği anda 20+ saniyelik savunmasız bir penceresi oluşur; saldırınızı bu ana saklayın.',
        'Canınız %40’ın altına düştüğünde Assassinate (Ulti) infaz menziline girersiniz; açık görüş hattında kalmayın.',
        'Shoulder Charge ile duvara çarptırdıktan sonra garantili Heavy Melee (Ağır Yumruk) vuruşunu kaçırmayın.',
      ],
      winCondition:
        'Knockdown ve Seismic Impact ile Vindicta’nın mesafe avantajını sıfırlayıp onu yakın dövüşte tek komboyla saf dışı bırakmak.',
    },
  },

  abrams_vs_dynamo: {
    summary:
      'İki ön saf karakterinin mücadelesinde Abrams uzayan takaslarda üstündür; ancak Dynamo’nun Quantum Entanglement ile omuz darbenizi boşa çıkarma ve Singularity ile sizi kilitleme riski vardır.',
    difficulty: 'Avantajlı',
    advantageScore: '56% - 44%',
    recommendedItems: [
      buildItemRecommendation(
        'silence-glyph',
        'Zorunlu Counter',
        'Shoulder Charge ile yaklaştığınızda Dynamo’nun Quantum Entanglement ile kaçmasını veya Singularity (Kara Delik) açmasını 3 saniye boyunca tamamen engeller.'
      ),
      buildItemRecommendation(
        'healbane',
        'Erken Oyun Kritik',
        'Siphon Life yeteneğiniz aktifken Dynamo’nun Rejuvenating Aurora ile kendine ve takımına bastığı yüksek iyileştirmeyi %40 oranında kırar.'
      ),
      buildItemRecommendation(
        'unstoppable',
        'Geç Oyun Güvencesi',
        'Geç oyunda ön saflarda savaşırken Dynamo’nun Singularity ultisine yakalanmadan doğrudan arka saflara yürümenizi sağlar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Trooper dalgasının ortasında Siphon Life açarak agresif takaslara girin. Dynamo’nun Kinetic Pulse dalgasını yana doğru Dash (Shift) atarak savuşturun ve yakın dövüş baskısı kurun.',
      midGame:
        'Dynamo’ya Shoulder Charge atmadan önce onun Quantum Entanglement yeteneğini kullanmaya zorlayın (yemleyin). Kaçış yeteneği bekleme süresindeyken duvara sabitleyin.',
      lateGame:
        'Takımınızla birlikte aynı noktada kümelenmeyin. Eğer Dynamo Singularity başlatırsa ve siz dışarıdaysanız, anında Shoulder Charge veya Seismic Impact ile kanalize ultisini bozun.',
      counterTips: [
        'Dynamo yakın dövüşte Parry (F tuşu) yapmaya çalışacaktır; Heavy Melee basarken imlecinizi son anda çevirerek sahte vuruş (Bait) yapın.',
        'Kinetic Pulse sizi havaya kaldırdığında mermi hasarına karşı savunmasız kalırsınız; dikey engellerin yakınında savaşın.',
        'Seismic Impact ultinizi Dynamo’nun Singularity açtığı saniyede tepesine inmek için kontra-ulti olarak kullanabilirsiniz.',
      ],
      winCondition:
        'Siphon Life + Healbane ile uzun süreli çatışmalarda hayatta kalıp Dynamo’nun Singularity ultisini Silence Glyph veya Shoulder Charge ile kesmek.',
    },
  },

  abrams_vs_seven: {
    summary:
      'Seven koridoru hızla itip Static Charge ile sizi uzaktan sersemletmek isteyecektir. Abrams olarak onun gecikmeli sersemletmesini absorbe edip yakın mesafeye girdiğinizde üstünlük tamamen size geçer.',
    difficulty: 'Dengeli',
    advantageScore: '52% - 48%',
    recommendedItems: [
      buildItemRecommendation(
        'reactive-barrier',
        'Erken Oyun Kritik',
        'Seven üzerinize Static Charge bıraktığında sersemletme patladığı an 600 birimlik devasa bir toplam kalkan kazanarak onun kombo hasarını tamamen sıfırlarsınız.'
      ),
      buildItemRecommendation(
        'knockdown',
        'Zorunlu Counter',
        'Seven gökyüzünde Storm Cloud (Ulti) açtığında Knockdown atarak ultisini 2 saniye içinde tamamen iptal edebilir ve onu savunmasız bırakabilirsiniz.'
      ),
      buildItemRecommendation(
        'slowing-hex',
        'Avlama Eşyası',
        'Yüksek hareket hızına ulaşan Seven’ı yavaşlatarak Shoulder Charge ile duvara çarpma garantisi sağlar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Lightning Ball küresinin içinde durmayın; Seven bu yeteneği Trooperlara attığında yan açıdan üzerine yürüyün. Static Charge üzerinize yapıştığında patlamadan hemen önce bir duvarın arkasına geçin.',
      midGame:
        'Seven yan koridorları (Side Lanes) tek başına iterken harita takibi yapın. Slowing Hex + Shoulder Charge kombosuyla onu kule altında bile rahatlıkla avlayabilirsiniz.',
      lateGame:
        'Takım savaşlarında Seven Storm Cloud açtığı an ilk göreviniz Knockdown veya Seismic Impact ile onu havadan indirmektir.',
      counterTips: [
        'Static Charge patlamadan 0.5 saniye önce Seismic Impact (Ulti) basarsanız sersemletmeyi havada bağışıklıkla atlatırsınız.',
        'Seven’ın Power Surge mermileri yakındaki dostlarınıza sıçrar; savaşırken takım arkadaşlarınızla aranızda küçük bir mesafe bırakın.',
        'Reactive Barrier koridor aşamasında Seven’ın tüm dürtme (Poke) gücünü boşa çıkarır.',
      ],
      winCondition:
        'Seven’ın Storm Cloud ultisini Knockdown ile anında kesmek ve yakın mesafe kombosuyla onu savaş dışı bırakmak.',
    },
  },

  // ==========================================
  // SENİN KARAKTERİN: VINDICTA
  // ==========================================
  vindicta_vs_abrams: {
    summary:
      'Abrams yüksek can yenilemesiyle dürtme hasarınızı iyileştirebilir ve üzerinize atlayabilir. Ancak doğru mesafe kontrolü ve iyileşme kıran eşyalarla onu gökyüzünden eritebilirsiniz.',
    difficulty: 'Avantajlı',
    advantageScore: '58% - 42%',
    recommendedItems: [
      buildItemRecommendation(
        'toxic-bullets',
        'Zorunlu Counter',
        'Abrams’ın Infernal Resilience pasifini ve Siphon Life can çalmasını %65 oranında keserek onu uçuş (Flight) sırasında hızla eritmenizi sağlar.'
      ),
      buildItemRecommendation(
        'slowing-hex',
        'Erken / Orta Oyun Kritik',
        'Abrams üzerinize yaklaşmaya çalıştığında Slowing Hex atarak hem Shoulder Charge hem de Seismic Impact kullanmasını 3 saniye boyunca kilitlersiniz.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Hayatta Kalma',
        'Abrams Knockdown veya Seismic Impact ile üzerinize kapandığında anında güvenli mesafeye ışınlanmanızı ve +%30 mermi direnci kazanmanızı sağlar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Abrams Trooperlara yakın dövüş (Melee) vurmaya her geldiğinde kafadan vuruşlarla (Headshot) onu cezalandırın. Stake kazığınızı agresif atmak yerine Abrams Shoulder Charge başlattığında onu durdurmak için saklayın.',
      midGame:
        'Crow Familiar (Kuzgun) yeteneğinizi Abrams’ın üzerine atarak zırhını kırın ve Toxic Bullets ile can yenilemesini durdurun. Asla dar koridorlarda veya bina içlerinde onunla karşılaşmayın.',
      lateGame:
        'Takım savaşlarında Flight yeteneğinizi Abrams’ın Seismic Impact ultisini görmeden harcamayın. Onu Stake ile yere sabitleyip canı yarıya indiğinde Assassinate ile infaz edin.',
      counterTips: [
        'Abrams’ın envanterini (Tab tuşu) sık sık kontrol edin: Knockdown aldıysa uçarken bir çatı veya siper kenarına yakın durun.',
        'Stake yeteneği Abrams’ın Shoulder Charge ivmesini kırmaz ama sonunda kaçmasını imkansız hale getirir.',
        'Assassinate ile aldığınız her infaz ekstra Ruh (Bonus Souls) kazandırır; Abrams’ı takım arkadaşlarınızla odaklayıp son vuruşu alın.',
      ],
      winCondition:
        'Toxic Bullets ve Crow Familiar ile Abrams’ın tanklığını kırıp açık alanda uçuş menzilinden onu eritmek.',
    },
  },

  vindicta_vs_dynamo: {
    summary:
      'Menzil avantajı tamamen Vindicta’dadır. Dynamo’nun size ulaşması zordur, ancak Quantum Entanglement ile Assassinate atışlarınızı boşa çıkarabilir ve takım arkadaşlarını kurtarabilir.',
    difficulty: 'Avantajlı',
    advantageScore: '60% - 40%',
    recommendedItems: [
      buildItemRecommendation(
        'silence-glyph',
        'Zorunlu Counter',
        'Stake ile yakaladığınız Dynamo’ya Silence Glyph atarak Quantum Entanglement ile boyut değiştirmesini ve Assassinate atışınızı savuşturmasını engellersiniz.'
      ),
      buildItemRecommendation(
        'healbane',
        'Erken Oyun Kritik',
        'Crow Familiar ve Flight büyülü mermilerinizle Dynamo’nun Rejuvenating Aurora iyileştirmesini %40 oranında azaltır.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Pozisyon Koruma',
        'Dynamo Warp Stone veya sıçrama eşyalarıyla üzerinize Singularity açmaya geldiğinde anında menzil dışına çıkmanızı sağlar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Dynamo’nun Kinetic Pulse menzili orta mesafedir; her zaman bu menzilin dışında veya yüksek zeminlerde (High Ground) konumlanın. Sürekli mermi baskısıyla onu iyileşme yeteneğini erken kullanmaya zorlayın.',
      midGame:
        'Assassinate (Ulti) atışınızı yapmadan önce Dynamo’nun Quantum Entanglement yeteneğini kullandığından emin olun; aksi halde ses efektini duyup kolayca savuşturacaktır.',
      lateGame:
        'Takım savaşlarında Flight ile havada kalarak Dynamo’nun Singularity alanının tamamen dışında durun. Eğer takım arkadaşlarınızı yakalarsa, sabit duran Dynamo’nun kafasına seri atışlar yaparak onu saniyeler içinde düşürün.',
      counterTips: [
        'Assassinate dürbününü açtığınızda çıkan lazer/ses uyarısını gizlemek için imlecinizi son saniyede hedefin üzerine getirin (Flick Shot).',
        'Stake kazığını Dynamo’nun Singularity süresi biter bitmez kaçmasını engellemek için tam ayaklarının altına atın.',
        'Crow Familiar sekmesi birbirine yakın duran Dynamo ve takım arkadaşlarının zırhını aynı anda eritir.',
      ],
      winCondition:
        'Dynamo’nun Singularity menziline hiç girmeden hava üstünlüğüyle onu ve koruduğu hedefleri uzaktan avlamak.',
    },
  },

  vindicta_vs_seven: {
    summary:
      'Hava üstünlüğünüz Seven’ın yerdeki yeteneklerine karşı büyük avantaj sağlar. Özellikle Seven Storm Cloud açtığında havada sabit kalan hedefi Assassinate ile avlamak Vindicta’nın uzmanlık alanıdır.',
    difficulty: 'Avantajlı',
    advantageScore: '62% - 38%',
    recommendedItems: [
      buildItemRecommendation(
        'knockdown',
        'Takım Desteği & Counter',
        'Seven Storm Cloud açtığında onu sersemleterek ultisini keser ve dürbünlü Assassinate atışınız için tamamen hareketsiz bir hedef haline getirir.'
      ),
      buildItemRecommendation(
        'ethereal-shift',
        'Savunma Kritik',
        'Seven size yaklaşmayı başarıp Static Charge bıraktığında, patlama anında Ethereal Shift basarak hem hasarı hem de sersemletmeyi tamamen yok sayarsınız.'
      ),
      buildItemRecommendation(
        'debuff-reducer',
        'Erken Oyun Güvencesi',
        'Koridorda Static Charge sersemletme süresini %30 kısaltarak Seven’ın Lightning Ball kombosundan hızla çıkmanızı sağlar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Seven koridoru Lightning Ball ile itmeye odaklanacaktır. Trooperların yanında durmayın; böylece Seven tek bir küre ile hem minyonlara hem size vuramaz. Onu açıkta yakaladığınızda Flight açıp cezalandırın.',
      midGame:
        'Seven orta oyunda orman kamplarını ve yan koridorları temizlerken çok savunmasızdır. Stake ile onu sabitleyip Crow Familiar + Flight kombosuyla tek başınıza düşürebilirsiniz.',
      lateGame:
        'Takım savaşlarında Seven Storm Cloud (Ulti) açtığı an gökyüzünde neredeyse sabit kalır. Siper arkasından çıkıp 2 adet tam şarjlı Assassinate atışıyla onu ultisinin ortasında infaz edin.',
      counterTips: [
        'Seven’ın Storm Cloud ultisi görüş hattı (Line of Sight) gerektirir; bir baca veya duvar kenarından پیک (Peek) atarak sadece dürbün atışı için çıkın.',
        'Static Charge menzili kısadır; Flight aktifken Seven size bu yeteneği tutturamaz.',
        'Power Surge aktifken Seven’la düz mermi takasına girmeyin, önce Stake atıp mesafeyi açın.',
      ],
      winCondition:
        'Seven’ın sabit Storm Cloud ultisini kendi aleyhine çevirip uzun menzilli Assassinate atışlarıyla onu savaşın başında düşürmek.',
    },
  },

  // ==========================================
  // SENİN KARAKTERİN: DYNAMO
  // ==========================================
  dynamo_vs_abrams: {
    summary:
      'Abrams yakın mesafede tehlikeli olsa da Dynamo’nun Kinetic Pulse ve Quantum Entanglement yetenekleri onun tüm girişimlerini boşa çıkaracak araçlara sahiptir.',
    difficulty: 'Zorlu',
    advantageScore: '44% - 56%',
    recommendedItems: [
      buildItemRecommendation(
        'decay',
        'Zorunlu Counter',
        'Abrams’ın yüksek maksimum canına yüzde bazlı hasar verir ve %50 iyileşme azaltma etkisiyle koridordaki dayanıklılığını yarıya indirir.'
      ),
      buildItemRecommendation(
        'reactive-barrier',
        'Erken Oyun Kritik',
        'Abrams sizi Shoulder Charge ile duvara çarptırdığında otomatik devreye giren kalkanlar sayesinde onun Heavy Melee kombosundan sağ çıkarsınız.'
      ),
      buildItemRecommendation(
        'metal-skin',
        'Orta / Geç Oyun Counter',
        'Abrams’ın yakın dövüş yumruklarını ve pompalı tüfek mermilerini 3.5 saniye boyunca tamamen etkisiz kılar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Duvar kenarlarında durmayın! Abrams Shoulder Charge için her zaman arkanızda bir duvar veya sütun arar. Açık alanda durup Kinetic Pulse ile onu havaya savurarak mermi takasını kazanın.',
      midGame:
        'Abrams gökyüzüne Seismic Impact (Ulti) için yükseldiğinde yere ineceği çemberi görünce paniklemeyin; tam iniş anında Quantum Entanglement basarak kendinizi ve yanınızdaki takım arkadaşlarınızı kurtarın.',
      lateGame:
        'Singularity ultinizi sadece Abrams için harcamayın; ancak Abrams ön saflara daldığında onu ve arkasından gelen rakipleri aynı anda yakalayacak açıyı kollayın.',
      counterTips: [
        'Abrams’ın Shoulder Charge sonrasında vuracağı Heavy Melee saldırısını F (Parry) tuşuyla bloklarsanız 2.5 saniye boyunca sersemler ve fazladan hasar alır.',
        'Quantum Entanglement kullandığınızda şarjörünüz otomatik dolar ve atış hızınız artar; kaçış sonrası hemen karşı ateşe geçin.',
        'Decay eşyasını Abrams Siphon Life açtığı saniye üzerine bırakın.',
      ],
      winCondition:
        'Quantum Entanglement ile Abrams’ın başlatma kombosunu boşa çıkarıp Parry ve Decay ile onu takımınızın önünde eritmek.',
    },
  },

  dynamo_vs_vindicta: {
    summary:
      'Vindicta’nın uzun menzili ve uçuş yeteneği Dynamo’yu koridorda zorlar. Erken oyunda hayatta kalmaya odaklanmalı, orta oyunda ise Knockdown ve Warp Stone ile aradaki mesafeyi kapatmalısınız.',
    difficulty: 'Yüksek Tehdit',
    advantageScore: '40% - 60%',
    recommendedItems: [
      buildItemRecommendation(
        'knockdown',
        'Zorunlu Counter',
        'Kısa menzilli yeteneklerinizle ulaşamadığınız uçan Vindicta’yı yere düşürmenin en güvenilir yoludur.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Başlatma & Kaçış',
        'Hem Stake sabitlemesinden çıkmanızı hem de yere düşen Vindicta’nın yanına anında ışınlanıp Kinetic Pulse / Singularity vurmanızı sağlar.'
      ),
      buildItemRecommendation(
        'reactive-barrier',
        'Koridor Savunması',
        'Vindicta Stake (Kazık) tutturduğunda anında kalkan kazanarak onun Flight mermilerine karşı koridorda hayatta kalmanızı sağlar.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Geniş gövdeniz (Hitbox) nedeniyle Vindicta için kolay bir hedefsiniz. Siper arkasından çıkmadan Kinetic Pulse ile Trooper dalgasını temizleyin ve Rejuvenating Aurora ile canınızı her zaman %60’ın üzerinde tutun.',
      midGame:
        'Takım arkadaşlarınızdan biri Vindicta’nın Assassinate hedefi olduğunda yanına yaklaşıp Quantum Entanglement kullanarak infaz atışını boşa çıkarın.',
      lateGame:
        'Savaşa yürüyerek girmeyin. Çatı kenarlarından veya Zipline ivmesiyle + Warp Stone kullanarak Vindicta’nın bulunduğu arka saflara sürpriz bir Singularity başlatın.',
      counterTips: [
        'Assassinate lazer sesini duyduğunuzda kendinize Quantum Entanglement basarak mermiyi havada yok edebilirsiniz.',
        'Vindicta Stake attığında Quantum Entanglement sizi kazığın bağından tamamen kurtarır.',
        'Knockdown örsü düşerken Vindicta’nın ineceği noktaya doğru önceden Kinetic Pulse gönderin.',
      ],
      winCondition:
        'Quantum Entanglement ile Vindicta’nın Assassinate infazlarını engelleyip Knockdown + Warp Stone ile onu yakalamak.',
    },
  },

  dynamo_vs_seven: {
    summary:
      'Dynamo’nun Quantum Entanglement yeteneği Seven’ın Static Charge sersemletmesini tamamen iptal eder. Doğru zamanlama ve mesafe kapama eşyalarıyla Seven’ın en korkulu rüyası olabilirsiniz.',
    difficulty: 'Avantajlı',
    advantageScore: '55% - 45%',
    recommendedItems: [
      buildItemRecommendation(
        'knockdown',
        'Zorunlu Counter',
        'Seven’ın Singularity menzilinizin çok yukarısında açtığı Storm Cloud ultisini uzaktan anında iptal etmenizi sağlar.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Orta Oyun Kritik',
        'Seven’ın Lightning Ball alanlarından hızla çıkıp doğrudan üzerine Singularity başlatmak için kusursuz bir pozisyon eşyasıdır.'
      ),
      buildItemRecommendation(
        'silence-glyph',
        'Kombo Tamamlayıcı',
        'Kinetic Pulse ile havaya savurduğunuz Seven’a Silence Glyph atarak Storm Cloud veya kaçış eşyası basmasını engellersiniz.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Seven üzerinize Static Charge koyduğunda geri sayım sesini dinleyin; patlamaya 0.5 saniye kala Quantum Entanglement basarak sersemletmeyi tamamen boşa çıkarın ve dolu şarjörle karşı takasa girin.',
      midGame:
        'Seven koridorları hızla ittiği için kulenizin altına yaklaşmak zorunda kalacaktır. Kinetic Pulse ile onu havaya kaldırıp kule ve takım arkadaşlarınızın önüne düşürün.',
      lateGame:
        'Takım savaşlarında iki seçeneğiniz var: Ya Knockdown ile Seven’ın ultisini bozun ya da tüm rakip takım Storm Cloud altında güvenle savaşırken Warp Stone ile aralarına girip 3-4 kişilik Singularity açın.',
      counterTips: [
        'Quantum Entanglement sadece sizi değil, Static Charge yapışmış takım arkadaşınızı da sersemletmeden kurtarır!',
        'Rejuvenating Aurora yükseltmelerini tamamladığınızda hareket ederken ve ateş ederken iyileştirme yapabilirsiniz.',
        'Seven Storm Cloud açtığında alçaktan uçuyorsa çift zıplama + Singularity ile onu havada da yakalayabilirsiniz.',
      ],
      winCondition:
        'Static Charge yeteneğini Quantum Entanglement ile işlevsiz bırakıp Knockdown ve Singularity ile Seven’ın alan kontrolünü kırmak.',
    },
  },

  // ==========================================
  // SENİN KARAKTERİN: SEVEN
  // ==========================================
  seven_vs_abrams: {
    summary:
      'Abrams yakın mesafeye girerse Seven için büyük tehdit oluşturur; ancak Seven’ın alan kontrolü, Static Charge sersemletmesi ve yüksek hareket hızı Abrams’ı uzakta tutmak için yeterlidir.',
    difficulty: 'Dengeli',
    advantageScore: '48% - 52%',
    recommendedItems: [
      buildItemRecommendation(
        'healbane',
        'Zorunlu Counter',
        'Lightning Ball ve Power Surge alan hasarınız sayesinde Abrams’ın üzerinde sürekli %40 iyileşme azaltma (Anti-Heal) etkisi tutmanızı sağlar.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Hayatta Kalma Kritik',
        'Abrams Shoulder Charge veya Seismic Impact ile üzerinize atladığında anında geriye ışınlanarak mesafeyi korumanızı sağlar.'
      ),
      buildItemRecommendation(
        'metal-skin',
        'Yakın Dövüş Kalkanı',
        'Duvara sıkıştığınızda Abrams’ın yıkıcı Heavy Melee yumruklarını ve pompalı tüfek hasarını 3.5 saniye boyunca tamamen engeller.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Trooper dalgasına Lightning Ball atarak koridoru hızla itin; böylece Abrams minyonlarınızın arasında sizinle savaşamaz. Üzerinize yürümeye başladığı an Static Charge bırakıp geriye doğru kayarak (Slide) ateş edin.',
      midGame:
        'Power Surge aktifken Abrams’ın kalkanlarını ve canını orta mesafeden eritin. Omuz darbesi (Shoulder Charge) menziline girmemek için açık caddelerde ve yüksek çatılarda kalın.',
      lateGame:
        'Storm Cloud (Ulti) açmadan önce Abrams’ın Seismic Impact ultisini veya Knockdown eşyasını kullandığından emin olun; ya da çok yüksek bir noktada Unstoppable alarak ulti açın.',
      counterTips: [
        'Abrams size doğru koşarken tam ayaklarının önüne Lightning Ball atarsanız yavaşlatma etkisiyle hızını kesersiniz.',
        'Static Charge patladığında Abrams sersemler; bu 1.5 saniyelik pencerede Power Surge ile kafasına odaklanın.',
        'Geç oyunda Unstoppable alırsanız Abrams sizin Storm Cloud ultinizi hiçbir şekilde bozamaz.',
      ],
      winCondition:
        'Healbane + Power Surge ile Abrams’ın can yenilemesini eritip mesafeyi koruyarak onu kendisine yaklaştırmamak.',
    },
  },

  seven_vs_vindicta: {
    summary:
      'Seven’ın en zorlu karşılaşmalarından biridir. Vindicta uçuş menzilinden sizi dürterken Storm Cloud açtığınızda sizi kolay bir Assassinate hedefine dönüştürebilir.',
    difficulty: 'Yüksek Tehdit',
    advantageScore: '38% - 62%',
    recommendedItems: [
      buildItemRecommendation(
        'knockdown',
        'Zorunlu Counter',
        'Vindicta Flight açtığında onu yere indirerek Static Charge ve Lightning Ball menzilinize sokmanın tek garantili yoludur.'
      ),
      buildItemRecommendation(
        'ethereal-shift',
        'Assassinate Kalkanı',
        'Canınız azaldığında Vindicta’nın Assassinate (Ulti) lazerini veya Stake kazığını Ethereal Shift ile tamamen boşa çıkarmanızı sağlar.'
      ),
      buildItemRecommendation(
        'warp-stone',
        'Pozisyon & Kaçış',
        'Stake sabitlemesinden çıkmak veya kapalı alana hızla girip Vindicta’nın görüş açısını kesmek için hayati önem taşır.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Vindicta ile açık alanda düz mermi takasına girmeyin. Siper arkasından Lightning Ball fırlatarak Trooperları temizleyin ve dalgayı hızla itip orman kamplarına (Neutral Camps) dönün.',
      midGame:
        'Haritanın kapalı bölgelerinde, yeraltı tünellerinde ve Mid-Boss çukurunda savaşmayı tercih edin. Açık gökyüzünde Storm Cloud açmak Vindicta hayattayken intihar demektir.',
      lateGame:
        'Takım savaşlarında önce Knockdown ile Vindicta’yı yere indirin ve üzerine Static Charge bırakın. Vindicta düşmeden veya görüşü kapanmadan açık alanda ulti kullanmayın.',
      counterTips: [
        'Lightning Ball küresini Vindicta’nın siper aldığı köşelere atarak onu açık alana çıkmaya zorlayın.',
        'Power Surge zincirleme yıldırımı Trooperlar üzerinden yakınındaki Vindicta’ya sıçrayabilir; minyonları iletkene dönüştürün.',
        'Storm Cloud açtığınızda Vindicta size nişan alıyorsa ultiyi erken iptal edip (Space/İptal) siper arkasına kaymaktan çekinmeyin.',
      ],
      winCondition:
        'Koridoru hızla itip kapalı alan savaşlarını zorlamak ve Knockdown ile Vindicta’nın uçuş üstünlüğünü bitirmek.',
    },
  },

  seven_vs_dynamo: {
    summary:
      'Dynamo’nun geniş gövdesi Power Surge ve Lightning Ball için kolay bir hedeftir; ancak Quantum Entanglement ile Static Charge yeteneğinizi savuşturabileceğini unutmamalısınız.',
    difficulty: 'Zorlu',
    advantageScore: '45% - 55%',
    recommendedItems: [
      buildItemRecommendation(
        'silence-glyph',
        'Zorunlu Counter',
        'Static Charge patlamadan hemen önce Dynamo’ya Silence Glyph atarak Quantum Entanglement ile kaçmasını veya Singularity açmasını engellersiniz.'
      ),
      buildItemRecommendation(
        'healbane',
        'Erken Oyun Kritik',
        'Alan etkili elektrik hasarınızla hem Dynamo’nun hem de çevresindeki takım arkadaşlarının Rejuvenating Aurora iyileşmesini %40 kırar.'
      ),
      buildItemRecommendation(
        'unstoppable',
        'Geç Oyun Güvencesi',
        'Storm Cloud açmadan önce Unstoppable basarsanız Dynamo’nun Knockdown eşyası veya Singularity ultisi sizi durduramaz.'
      ),
    ],
    playstyle: {
      earlyGame:
        'Lightning Ball ile koridoru sürekli Dynamo’nun kulesine itin. Dynamo kule altında Trooper kesmeye çalışırken Power Surge ile onu dürtün; ancak Kinetic Pulse dalgasına karşı çapraz hareket edin.',
      midGame:
        'Static Charge yeteneğinizi doğrudan atmak yerine önce mermi hasarıyla Dynamo’yu Quantum Entanglement kullanmaya zorlayın. Kaçış yeteneği biter bitmez Static Charge yapıştırın.',
      lateGame:
        'Takım savaşlarında Dynamo Singularity için takımınızın arasına girdiğinde, güvenli bir yükseklikten Storm Cloud açarak hem Dynamo’yu hem de onu takip eden rakip takımı eritin.',
      counterTips: [
        'Dynamo’nun envanterinde Knockdown olup olmadığını mutlaka kontrol edin; varsa ultinizi Unstoppable ile koruyun.',
        'Power Surge mermileri Singularity etrafında toplanan rakipler arasında sekerek devasa alan hasarı çıkarır.',
        'Takım arkadaşlarınızla aynı noktada durmayın; tek bir Singularity hem sizi hem takımınızı yakalamamalı.',
      ],
      winCondition:
        'Silence Glyph ile Dynamo’nun boyutsal kaçışını kilitleyip yüksek Spirit alan hasarıyla takım savaşlarını domine etmek.',
    },
  },
};

// Aynı karakter seçildiğinde (Mirror Matchup / 1v1 Antrenman Modu) gösterilecek dinamik veri üreteci
export const getMirrorMatchup = (hero) => ({
  summary: `${hero.name} vs ${hero.name} (Ayna Karşılaşması / 1v1 Antrenman Modu): Standart eşleştirmede aynı karakter iki takımda birden yer almaz; ancak özel lobi ve 1v1 antrenman maçlarında üstünlük tamamen yetenek bekleme süresi takibi ve aktif counter eşyalarına dayanır.`,
  difficulty: 'Dengeli',
  advantageScore: '50% - 50%',
  recommendedItems: [
    buildItemRecommendation(
      'silence-glyph',
      '1v1 Kilit Eşya',
      `Rakip ${hero.name} kritik yeteneğini kullanmadan önce onu 3 saniye susturarak takas üstünlüğünü ilk saniyeden ele geçirmenizi sağlar.`
    ),
    buildItemRecommendation(
      'reactive-barrier',
      'Kitle Kontrol Güvencesi',
      `Rakip ${hero.name} sersemletme veya sabitleme yeteneğini sizden önce tutturursa otomatik kalkan kazanarak karşı hamle şansı yakalarsınız.`
    ),
    buildItemRecommendation(
      'warp-stone',
      'Tempo & Pozisyon',
      'Ayna karşılaşmalarında ilk vuruşu yapmak veya rakibin ulti alanından anında çıkmak için en yüksek tempolu eşyadır.'
    ),
  ],
  playstyle: {
    earlyGame:
      'Trooper son vuruşlarına ve turuncu Ruh kürelerini (Soul Orbs) rakibinizden önce vurarak Deny etmeye odaklanın. 3.000 Ruh barajına ilk ulaşan taraf ulti avantajıyla koridoru kazanır.',
    midGame:
      'Rakibinizin kendi karakterinizdeki en uzun bekleme süreli yeteneğini (Kaçış veya Kitle Kontrol) önce kullanmasını bekleyin; hemen ardından Silence Glyph ile karşı komboya girin.',
    lateGame:
      'Birebir aynı yetenek setine sahip olduğunuz için aktif eşya kullanımı (Warp Stone, Unstoppable, Knockdown) ve Stamina yönetimi kazananı belirler.',
    counterTips: [
      'Rakibin mermi sayısını ve şarjör değiştirme (Reload) animasyonunu takip ederek o anda agresifleşin.',
      'Turuncu Ruh kürelerini (Deny) kaçırmamak, ayna karşılaşmasında 5. dakikada 1 eşya öne geçmenizi sağlar.',
      'Kendi karakterinizin zayıf olduğu mesafeyi bildiğiniz için rakibi o menzilde savaşmaya zorlayın.',
    ],
    winCondition:
      'Ruh (Soul) ekonomisinde öne geçip aktif counter eşyasını rakibinizden önce tamamlayarak ilk yetenek takasını kazanmak.',
  },
});

// Doğrulanmış karşılaşma verisi henüz girilmemiş yeni karakterler için "Zero Hallucination" (TBD) veri üreteci
export const getPendingMatchup = (playerHero, enemyHero) => ({
  summary: `${playerHero.name} vs ${enemyHero.name}: Bu karşılaşma için doğrulanmış yama ve istatistik verileri henüz girilmemiştir (TBD / Needs Manual Entry). Data Integrity kuralları gereği doğrulanmamış eşleşme verileri uydurulmaz.`,
  difficulty: 'Dengeli',
  advantageScore: 'TBD (Needs Manual Entry)',
  recommendedItems: [
    buildItemRecommendation(
      'reactive-barrier',
      'TBD (Needs Manual Entry)',
      `${enemyHero.name} karşısında ${playerHero.name} için doğrulanmış eşya açıklaması bekleniyor (TBD).`
    ),
    buildItemRecommendation(
      'warp-stone',
      'TBD (Needs Manual Entry)',
      `${enemyHero.name} karşısında ${playerHero.name} için doğrulanmış pozisyon eşyası notu bekleniyor (TBD).`
    ),
    buildItemRecommendation(
      'silence-glyph',
      'TBD (Needs Manual Entry)',
      `${enemyHero.name} karşısında ${playerHero.name} için doğrulanmış aktif counter notu bekleniyor (TBD).`
    ),
  ],
  playstyle: {
    earlyGame: 'TBD (Needs Manual Entry) — Erken oyun koridor verisi bekleniyor.',
    midGame: 'TBD (Needs Manual Entry) — Orta oyun rotasyon verisi bekleniyor.',
    lateGame: 'TBD (Needs Manual Entry) — Geç oyun takım savaşı verisi bekleniyor.',
    counterTips: [
      'TBD (Needs Manual Entry) — Doğrulanmış mikro-mekanik ipucu 1 bekleniyor.',
      'TBD (Needs Manual Entry) — Doğrulanmış mikro-mekanik ipucu 2 bekleniyor.',
      'TBD (Needs Manual Entry) — Doğrulanmış mikro-mekanik ipucu 3 bekleniyor.',
    ],
    winCondition: 'TBD (Needs Manual Entry) — Kazanma koşulu verisi bekleniyor.',
  },
});

// 2. BÖLÜM: Genel Meta Tavsiyeleri (3 Kolonlu Statik Kartlar)
export const generalMetaTips = [
  {
    id: 'lane-economy',
    badge: 'Erken Oyun & Ekonomi',
    title: 'Koridor Kontrolü ve Ruh (Soul) Ekonomisi',
    subtitle: '00:00 – 08:00 Dakika Arası Kritik Mekanikler',
    description:
      'Deadlock’ta ilk 8 dakika boyunca Trooper son vuruşlarından çıkan Ruh küreleri (Soul Orbs) toplam değerin büyük kısmını oluşturur. Rakibin kürelerini (Turuncu Küre) vurarak Deny etmek hem onu geriye düşürür hem de size doğrudan ekonomik üstünlük sağlar.',
    highlights: [
      'Yakın dövüş (Melee) ile kesilen Trooperlar küre çıkarmadan ruhu anında %100 güvenceye alır.',
      '8. dakikadan sonra Trooperların kendisi ruh vermez; tüm değer havaya çıkan Ruh küresine aktarılır.',
      'Koridoru rakip Guardian kulesine ittikten sonra yandaki küçük orman kamplarını (Tier 1 Camps) ve altın heykelleri (Golden Statues) toplayın.',
    ],
    keyMetric: '%100 Ruh Güvencesi (Melee)',
    metricLabel: 'Yakın dövüş son vuruşu ile rakibe Deny şansı bırakmadan kazanılan net koridor ruhu',
  },
  {
    id: 'mid-boss-timing',
    badge: 'Objektif & Takım Savaşı',
    title: 'Mid-Boss Zamanlaması ve Rejuvenator Kristali',
    subtitle: 'Orta ve Geç Oyunda Maç Kazandıran Karar',
    description:
      'Haritanın merkezindeki Mid-Boss 10. dakikada doğar ve kesildiğinde yavaşça zemine inen Rejuvenator kristalini düşürür. Kristale ağır yakın dövüş (Heavy Melee) vuruşu yapan takım; yeniden doğma süresi kısalması, güçlendirilmiş Trooperlar ve can/ateş hızı buff’ı kazanır.',
    highlights: [
      'Rakip takımdan en az 2 oyuncuyu (özellikle Dynamo veya Abrams gibi ön safları) düşürmeden Mid-Boss’a girmeyin.',
      'Kristal yere inerken çukurun içine bir oyuncunuzu Parry (F tuşu) ve kitle kontrolü için görevlendirin; rakibin çalma (Steal) girişimini engelleyin.',
      'Rejuvenator aldıktan sonra orman dönmek yerine 4 koridoru aynı anda iterek Patron savunmasını kırın.',
    ],
    keyMetric: '10:00 Dk İlk Çıkış',
    metricLabel: 'Mid-Boss ve Rejuvenator kristalinin harita merkezinde aktifleştiği resmi dakika',
  },
  {
    id: 'urn-and-flex-slots',
    badge: 'Harita Rotasyonu & Eşya Dizilimi',
    title: 'Soul Urn Teslimatı ve Flex Slot Önceliği',
    subtitle: '10. Dakika Sonrası Harita Hakimiyeti',
    description:
      '10. dakikada doğan ve her 5 dakikada bir yenilenen Soul Urn (Ruh Küpü), teslim eden takıma yüksek miktarda takım ruhu ve teslim eden oyuncuya ekstra %25 Ruh ile +1 Yetenek Puanı kazandırır. Eşzamanlı olarak kuleleri yıkarak Flex Slot açmak geç oyun gücünün temelidir.',
    highlights: [
      'Urn taşıyıcısı yetenek kullanamaz; bu yüzden teslimat noktasını (Drop-off) önceden temizleyip pusu kurun.',
      'Tüm Walker kulelerini ve Guardian’ları yıkarak açılan 4 adet Flex Slot, karakterinize ekstra Tier 3/4 counter eşyası takma imkanı verir.',
      'Teleferik (Zipline) Hızlandırmasını (Boost) rastgele harcamayın; Urn savaşına veya Base savunmasına yetişmek için saklayın.',
    ],
    keyMetric: '4 Flex Slot',
    metricLabel: 'Tam eşya kapasitesine ulaşarak geç oyunda hem hasar hem de savunma counter eşyalarını birleştirme sınırı',
  },
];

// 3. BÖLÜM: Araç Hakkında ve Metodoloji Verileri
export const methodologyData = {
  title: 'Veri Analizi ve Counter Metodolojisi',
  subtitle: 'Önerilen eşyalar ve taktiksel oynayış rehberleri nasıl hesaplanıyor?',
  leadText:
    'Bu platform, rekabetçi Deadlock oyuncularının karşılaşma (Matchup) kararlarını ezbere eşya dizilimleri (statik buildler) yerine rakip karakterin mekanik tehditlerine göre dinamik olarak optimize etmesi amacıyla geliştirilmiştir.',
  pillars: [
    {
      step: '01',
      title: 'Yetenek Etkileşim Matrisi (Skill Interaction Matrix)',
      description:
        'Her karakterin 4 temel yeteneği; kanalize olma durumu (Storm Cloud, Singularity), dikey hareketlilik (Flight), kitle kontrol türü (Stun, Tether) ve iyileşme kapasitesi (Infernal Resilience, Aurora) bazında sınıflandırılır. Karşı eşyalar bu mekanikleri doğrudan iptal etme gücüne göre puanlanır.',
    },
    {
      step: '02',
      title: 'Ruh (Soul) Verimliliği ve Zamanlama Analizi',
      description:
        'Bir counter eşyasının yalnızca etkisi değil, kaçıncı dakikada alınabileceği de kritiktir. $ 800 (Aşama I) ve $ 1600 (Aşama II) erken oyun eşyaları (Şifakıran, Reaktif Bariyer, Yavaşlatma Büyüsü) koridor aşaması için; $ 3200 (Aşama III) ve $ 6400 (Aşama IV) eşyalar (Nakavt, Susturma Dalgası, Ruhani Değişim, Durdurulamaz) ise orta/geç oyun güç patlamaları için önceliklendirilir.',
    },
    {
      step: '03',
      title: 'Yüksek MMR (Phantom & Eternus) Maç Verileri',
      description:
        'Üst lig karşılaşmalarında belirli bir rakibe karşı alındığında kazanma oranını (Win Rate Delta) en yüksek oranda artıran eşya kombinasyonları ve koridor aşaması konumlanma stratejileri derlenerek taktiksel oynayış adımlarına dönüştürülür.',
    },
  ],
};

// YENİ BÖLÜM: Harita ve Makro Zamanlamalar Verileri (Kutu Rotaları, Tünel Hatları, Spawn Timeline)
export const mapMacroData = {
  crateRoutes: [
    {
      id: 'outer-lane-crates',
      routeTitle: 'Dış Koridor (Sarı & Yeşil) Mağaza ve Çatı Döngüsü',
      crateCount: '~16 - 20 Kutu',
      statueCount: '6 Altın Heykel',
      avgDuration: '22 Saniye',
      difficulty: 'Düşük Risk',
      description:
        'Trooper dalgasını rakip Guardian kulesine ittikten sonra yan mağaza (Shop) binasının alt katından girip merdiven boşluğundan çatıya çıkarak tamamlanan en verimli erken oyun kutu rotasıdır.',
      tips: [
        'Mermi harcamamak için kutuların içinden kayarak (Ctrl / Slide) veya Hafif Yakın Dövüş (Light Melee) ile geçin.',
        'Çatıdaki Altın Heykeller kalıcı Ateş Hızı (%Fire Rate), Maksimum Can ve Spirit Gücü buff’ları düşürür.',
      ],
    },
    {
      id: 'mid-museum-crates',
      routeTitle: 'Merkez Müze (Mid-Boss Üstü) ve Köprü Altı Rotası',
      crateCount: '~22 - 26 Kutu',
      statueCount: '8 Altın Heykel',
      avgDuration: '30 Saniye',
      difficulty: 'Orta Risk (Çatışma Bölgesi)',
      description:
        'Mavi ve Mor iç koridorların ortasındaki Mid-Boss binasının üst balkonları, nehir köprüsü ayakları ve büfe alanlarını kapsayan haritanın en yoğun kutu kümesidir.',
      tips: [
        '10. dakikadaki Köprü Buff’ları (Bridge Buffs) çıkmadan 30 saniye önce bu rotayı temizleyip pozisyon alın.',
        'Alan hasarlı yetenekler (Lightning Ball, Kinetic Pulse) aynı anda 4-5 kutuyu tek seferde kırabilir.',
      ],
    },
    {
      id: 'subway-underpass-crates',
      routeTitle: 'Yeraltı Metro (Subway) ve Kanalizasyon Hattı',
      crateCount: '~12 - 15 Kutu',
      statueCount: '5 Altın Heykel',
      avgDuration: '18 Saniye',
      difficulty: 'Güvenli Rotasyon',
      description:
        'Koridorlar arası rotasyon (Gank) atarken yeraltı metro girişleri, bilet gişeleri ve tünel odalarında bulunan, rakip görüşünden uzak güvenli ekonomik kaynak rotasıdır.',
      tips: [
        'Canınız azaldığında üsse dönmek yerine yeraltı kutularını kırarak çıkan sağlık küreleriyle (Healing Orbs) koridorda kalın.',
        'Kutular kırıldıktan sonra yaklaşık her 3 dakikada (180 sn) bir yeniden doğar.',
      ],
    },
  ],
  transitRoutes: [
    {
      id: 'corner-teleporters',
      name: 'Dış Koridor Köşe Işınlayıcıları (Corner Teleporters)',
      badge: '08:00 Dk Açılış',
      routeType: 'Çift Yönlü Anlık Geçiş',
      connects: 'Sarı Koridor (En Sol) ⟷ Yeşil Koridor (En Sağ)',
      description:
        'Haritanın iki zıt ucundaki solo koridorları birbirine bağlar. Rakip takım bir yan koridora 3 kişi yüklendiğinde saniyeler içinde diğer kanada geçip Walker kulesini yıkmanızı (Split Push) sağlar.',
    },
    {
      id: 'central-subway-tunnels',
      name: 'Merkez Metro ve Nehir Altı Tünelleri (Underpass Transit)',
      badge: 'Görüş Korumalı',
      routeType: 'Kapalı Yeraltı Geçidi',
      connects: 'Mavi Koridor ⟷ Mid-Boss Çukuru ⟷ Mor Koridor',
      description:
        'Vindicta ve Seven gibi havadan görüşe dayalı karakterlerin (Line of Sight) mermi ve ultilerinden tamamen korunarak iç koridorlar arasında baskın (Gank) yapmanızı ve Urn taşımanızı sağlar.',
    },
    {
      id: 'zipline-air-vents',
      name: 'Transit Zipline Hatları ve Çatı Hava Fanları (Air Vents)',
      badge: 'Yüksek Mobilite',
      routeType: 'Hava & Raylı Ulaşım',
      connects: 'Patron Üssü ⟷ 4 Ana Koridor & Yüksek Çatılar',
      description:
        '4 renkli Zipline hattı üsten cepheye hızlı ulaşım sunar. Zipline üzerinde hasar alırsanız yere düşüp sersemlersiniz; bu yüzden çatılardaki dikey Hava Fanlarını (Jump Pads) kullanarak koridor değiştirmek savaş anında çok daha güvenlidir.',
    },
  ],
  spawnTimeline: [
    {
      time: '00:00',
      phase: 'Maç Başlangıcı',
      title: 'Trooper Dalgaları ve Erken Ruh Mekanikleri',
      badgeColor: 'sky',
      details:
        'İlk Trooper dalgaları Zipline ile koridorlara iner. İlk 8 dakika boyunca Trooper kesildiğinde ruhun %50’si anında, kalan %50’si ise çıkan Ruh Küresi (Soul Orb) vurulduğunda kazanılır.',
    },
    {
      time: '02:00',
      phase: 'Erken Orman & Kutu',
      title: 'Küçük Nötr Kamplar (Tier 1), Kutular ve Altın Heykeller',
      badgeColor: 'emerald',
      details:
        'Koridor kenarlarındaki ilk küçük nötr yaratık kampları, ahşap kutular (Crates) ve kalıcı istatistik veren Altın Heykeller doğar. Küçük kamplar kesildikten 4 dakika sonra yeniden çıkar.',
    },
    {
      time: '07:00',
      phase: 'Orta Orman & Slot',
      title: 'Orta/Büyük Kamplar (Tier 2-3) & Sinner’s Sacrifice',
      badgeColor: 'purple',
      details:
        'Yüksek ruh veren Orta ve Büyük orman kampları ile Sinner’s Sacrifice (Slot Makineleri) aktifleşir. Slot makinesine ışıklar tam dolduğunda Ağır Yakın Dövüş (Heavy Melee) vurmak çoklu Altın Heykel buff’ı kazandırır.',
    },
    {
      time: '08:00',
      phase: 'Ekonomik Kırılma',
      title: '%100 Küre Ekonomisi ve Köşe Işınlayıcıların Açılışı',
      badgeColor: 'amber',
      details:
        '8. dakikadan itibaren Trooperlar ölürken doğrudan ruh vermez; tüm değer (%100) havaya çıkan Ruh Küresine aktarılır. Aynı anda dış koridorlardaki Köşe Işınlayıcıları (Teleporters) kullanıma açılır.',
    },
    {
      time: '10:00',
      phase: 'Büyük Objektifler',
      title: 'Mid-Boss, Soul Urn (Ruh Vazosu) ve Köprü Buff’ları',
      badgeColor: 'rose',
      details:
        'Merkezde Mid-Boss (Rejuvenator Kristali), yan koridorlarda Soul Urn (Ruh Vazosu - her 5 dakikada bir yenilenir) ve köprü üstlerinde Gun/Spirit/Survival/Movement güçlendirmeleri aynı anda haritada doğar.',
    },
  ],
};

// Merkezi Stil Sabitleri (Yüksek Kontrastlı Tailwind Sınıfları)
export const categoryStyles = {
  Weapon: {
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    border: 'border-orange-500/30 hover:border-orange-400/60',
    accent: '#fb923c',
    label: 'Silah (Turuncu)',
  },
  Vitality: {
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    accent: '#34d399',
    label: 'Can (Yeşil)',
  },
  Spirit: {
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    border: 'border-purple-500/30 hover:border-purple-400/60',
    accent: '#c084fc',
    label: 'Büyü (Mor)',
  },
};

export const difficultyStyles = {
  Avantajlı: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  Dengeli: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  Zorlu: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  'Yüksek Tehdit': 'bg-rose-500/20 text-rose-300 border-rose-500/40',
};

export const timelineBadgeStyles = {
  sky: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  rose: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
};

// Görsel henüz manuel eklenmediyse kırık ikon göstermemek için şık SVG Data URI üreteci
// (<img /> etiketini ve semantic alt metnini DOM'da korur)
export const createPlaceholderDataUri = (label, accentColor = '#f59e0b') => {
  const initials = label
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
    </defs>
    <rect width="160" height="160" rx="20" fill="url(#bg)" stroke="${accentColor}" stroke-width="4"/>
    <circle cx="80" cy="64" r="28" fill="${accentColor}" fill-opacity="0.18" stroke="${accentColor}" stroke-width="2"/>
    <text x="80" y="73" text-anchor="middle" fill="#f8fafc" font-family="system-ui, sans-serif" font-weight="800" font-size="24">${initials}</text>
    <text x="80" y="128" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="600" font-size="13">${label.slice(0, 14)}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};


