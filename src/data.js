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
    'Deadlock aktif geliştirme (Closed Beta) aşamasındadır. Karakter dengeleri, eşya (item) maliyetleri, Mid-Boss mekanikleri ve harita spawn süreleri resmi yama notlarına göre düzenli olarak güncellenmektedir.',
  footerBuildNote:
    'React (Vite) & Tailwind CSS ile geliştirilmiştir • Vercel Deploy Uyumlu',
};

export const characters = [
  {
    "id": "abrams",
    "name": "Abrams",
    "title": "Okült Dedektif & Ön Saf Tankı",
    "role": "Ön Saflar / Yakın Mesafe (Yakın Dövüşçü)",
    "difficulty": "Orta",
    "image": "/assets/characters/abrams.png",
    "imageAlt": "Abrams karakter portresi - Ağır paltolu, boynuzlu ve elinde mistik el yazması taşıyan yakın mesafe tank karakteri",
    "shortBio": "Yüksek can yenilemesi (Infernal Resilience), yıkıcı omuz darbesi (Shoulder Charge) ve ağır yakın dövüş yumruklarıyla koridoru domine eden dayanıklı bir ön saf savaşçısı.",
    "stats": {
      "survive": 95,
      "damage": 75,
      "mobility": 60,
      "control": 80
    },
    "abilities": [
      "Siphon Life (Can Çalma Haresi: 4 sn boyunca yakındaki rakiplerden can çeker, zamanla büyü hasarı verir ve verilen hasarın bir kısmı kadar iyileştirir)",
      "Shoulder Charge (Omuz Darbesi: İleri doğru hücum ederek çarptığı rakipleri sürükler; bir kahramanı duvara çarptırmak Sersemletme / Stun uygular)",
      "Infernal Resilience (Cehennem Dayanıklılığı - Pasif: İlave savunma nitelikleri kazandırır ve alınan hasarın bir kısmını zamanla can yenilenmesi olarak geri verir)",
      "Seismic Impact (Sismik Darbe - Ulti: Gökyüzüne sıçrayıp hedeflenen alana hızla çarparak geniş alanda hasar ve sersemletme uygular)"
    ],
    "counters": [
      "Calico",
      "Haze",
      "Lash",
      "Billy",
      "Wraith"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Lady Geist",
      "Venator",
      "Mo & Krill",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Decay (Çürüme)",
      "Rebuttal (Karşı Saldırı)",
      "Metal Skin (Metal Deri)"
    ],
    "counterItems": [
      "healbane",
      "toxic-bullets",
      "decay"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Melee Lifesteal (Vampir Yumruklar)",
        "Extra Health (Ekstra Sağlık)",
        "Close Quarters (Yakın Mesafe)",
        "Extra Regen (Ekstra Yenilenme)"
      ],
      "coreItems": [
        "Enduring Speed (Kalıcı Hız)",
        "Healbane (Şifakıran)",
        "Lifestrike (İyileştiren Yumruk)",
        "Fortitude (Metanet)"
      ],
      "lateGame": [
        "Crushing Fists (Ezici Yumruklar)",
        "Leech (Sülük)",
        "Colossus (AKTİF Dev)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "vindicta",
    "name": "Vindicta",
    "title": "Keskin Nişancı Hayalet",
    "role": "Uzun Mesafe Nişancı (Keskin Nişancı)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/vindicta.png",
    "imageAlt": "Vindicta karakter portresi - Uzun namlulu dürbünlü tüfeğiyle havadan nişan alan keskin nişancı karakter",
    "shortBio": "Flight yeteneğiyle gökyüzüne yükselip güvenli mesafeden rakiplerini avlayan, Stake ile hedefleri yere sabitleyen ve Assassinate ile düşük canlı hedefleri infaz eden nişancı.",
    "stats": {
      "survive": 40,
      "damage": 95,
      "mobility": 75,
      "control": 65
    },
    "abilities": [
      "Stake (Sabitleme Kazığı: Düştüğü noktadaki rakipleri bağlayan bir kazık fırlatır; yakalanan rakiplerin hareketi kazığın bağ mesafesiyle kısıtlanır)",
      "Flight (Uçuş: Havaya sıçrayarak uçmanızı sağlar; uçuş süresince silahınız ilave büyü hasarı verir ve eşya menziliniz artar)",
      "Crow Familiar (Zırh Kıran Kuzgun: İsabet eden hedefe darbe hasarı verir, Mermi Direncini düşürür ve mevcut canına oranla Kanama hasarı uygular)",
      "Assassinate (Suikast Atışı - Ulti: Dürbünle uzun menzilli güçlü bir atış yapar; canı %50'nin altındaki yaralı hedeflere devasa bonus hasar ve infaz ruhu kazandırır)"
    ],
    "counters": [
      "Abrams",
      "Victor",
      "Billy",
      "Seven",
      "McGinnis",
      "Solomon",
      "Lady Geist"
    ],
    "counteredBy": [
      "Lash",
      "Bebop",
      "Paradox",
      "Silver",
      "Drifter",
      "Knockdown (Nakavt)",
      "Phantom Strike (AKTİF Hayalet Saldırı)",
      "Metal Skin (Metal Deri)",
      "Plated Armor (Kaplamalı Zırh)",
      "Ethereal Shift (Ruhani Değişim)"
    ],
    "counterItems": [
      "knockdown",
      "phantom-strike",
      "metal-skin"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Long Range (Uzun Menzil)",
        "Sharpshooter (Keskin Nişancı)",
        "Headhunter (Kelle Avcısı)",
        "Toxic Bullets (Toksik Mermiler)"
      ],
      "lateGame": [
        "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
        "Glass Cannon (Kırılgan Kudret)",
        "Lucky Shot (Şanslı Atış)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "dynamo",
    "name": "Dynamo",
    "title": "Kuantum Astrofizikçisi",
    "role": "Savaş Başlatıcı & Destek (Savaş Başlatıcı)",
    "difficulty": "Orta",
    "image": "/assets/characters/dynamo.png",
    "imageAlt": "Dynamo karakter portresi - Kuantum çekim enerjisiyle çalışan küresel mekanik gövdeli profesör karakteri",
    "shortBio": "Quantum Entanglement ile takım arkadaşlarını ölümcül yeteneklerden kurtaran, Kinetic Pulse ile koridoru kontrol eden ve Singularity ile takım savaşlarını tek başına kazanan uzman.",
    "stats": {
      "survive": 75,
      "damage": 60,
      "mobility": 65,
      "control": 100
    },
    "abilities": [
      "Kinetic Pulse (Kinetik Dalga: Zemin boyunca ilerleyen bir enerji dalgası göndererek rakiplere büyü hasarı verir ve onları havaya savurur / Knockup)",
      "Quantum Entanglement (Kuantum Dolanıklığı: Kısa süreliğine hedef alınamaz hale gelerek hedef konuma ışınlanır, Stamina yeniler ve müttefikleri de kurtarabilir)",
      "Rejuvenating Aurora (Yenileyici Aurora: Kanalize olarak kendinize ve yakındaki dost birimlere sürekli alan iyileştirmesi sağlar)",
      "Singularity (Tekillik - Ulti: Yakındaki tüm rakipleri merkeze çeken, zamanla hasar veren ve hareketsiz bırakan bir kara delik oluşturur)"
    ],
    "counters": [
      "Haze",
      "Rem",
      "Seven",
      "Bebop",
      "Holliday",
      "Lash",
      "Doorman"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Sinclair",
      "Infernus",
      "Wraith",
      "Vyper",
      "Silence Wave (Susturma Dalgası)",
      "Cursed Relic (AKTİF Lanetli Yadigâr)",
      "Unstoppable (Durdurulamaz)",
      "Healbane (Şifakıran)"
    ],
    "counterItems": [
      "silence-glyph",
      "unstoppable",
      "healbane"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)",
        "Extra Stamina (Ekstra Kuvvet)",
        "Healing Rite (AKTİF İyileştirme Ayini)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Enduring Speed (Kalıcı Hız)",
        "Reactive Barrier (Reaktif Bariyer)"
      ],
      "lateGame": [
        "Refresher (AKTİF Yenileyici)",
        "Unstoppable (Durdurulamaz)",
        "Boundless Spirit (Sınırsız Büyü)",
        "Healing Tempo (İyileştirici Tempo)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "seven",
    "name": "Seven",
    "title": "Yüksek Voltajlı Kaçak",
    "role": "Alan Hasarı & Koridor İtici (Alan Etkili Büyü)",
    "difficulty": "Düşük - Orta",
    "image": "/assets/characters/seven.png",
    "imageAlt": "Seven karakter portresi - Elektrik akımları saçan metal kubbe başlıklı yüksek Spirit hasarı uzmanı",
    "shortBio": "Lightning Ball ve Power Surge ile koridorları saniyeler içinde pushlayan, Static Charge ile hedefleri sersemleten ve Storm Cloud ultisiyle geniş bölgeleri elektriğe boğan taşıyıcı.",
    "stats": {
      "survive": 55,
      "damage": 95,
      "mobility": 60,
      "control": 70
    },
    "abilities": [
      "Lightning Ball (Yıldırım Küresi: Düz bir hatta ilerleyen elektrik küresi fırlatır; yarıçapındaki tüm hedeflere alan hasarı verir ve yavaşlatır)",
      "Static Charge (Statik Şarj: Hedef rakip kahramana gecikmeli bir elektrik yükü bırakır; kısa süre sonra patlayarak alandaki rakipleri sersemletir)",
      "Power Surge (Güç Dalgalanması: Silahınızı elektrikle yükleyerek mermilerinizin yakındaki rakiplere zincirleme şok hasarı sıçratmasını sağlar)",
      "Storm Cloud (Fırtına Bulutu - Ulti: Havada sabitlenerek çevrenizde genişleyen devasa bir yıldırım fırtınası oluşturur ve görüşteki tüm rakiplere sürekli büyü hasarı verir)"
    ],
    "counters": [
      "McGinnis",
      "Graves",
      "Rat King",
      "Warden",
      "Solomon",
      "Ivy"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Bebop",
      "Paradox",
      "Yamato",
      "Sinclair",
      "Mo & Krill",
      "Pocket",
      "Knockdown (Nakavt)",
      "Spirit Resilience (Büyü Dayanıklılığı)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "knockdown",
      "spirit-resilience",
      "spellbreaker"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Charge (Ekstra Şarj)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Surge of Power (GÜÇLENDİR Güç Artışı)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Torment Pulse (Yayılan İşkence)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Unstoppable (Durdurulamaz)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)",
        "Escalating Exposure (Artan Hassasiyet)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "apollo",
    "name": "Apollo",
    "title": "Okült Eskrimci & Işık Düellocusu",
    "role": "Çevik Eskrimci & Savuşturma Düellocusu (Fencer Skirmisher)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/apollo.png",
    "imageAlt": "Apollo karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Disengaging Sigil ile geriye sıçrayıp alan yavaşlatması vuran, Riposte ile gelen saldırıyı savuşturup dokunulmaz olan ve Flawless Advance hamleleriyle rakipleri delen eskrim ustası.",
    "stats": {
      "survive": 60,
      "damage": 90,
      "mobility": 90,
      "control": 55
    },
    "abilities": [
      "Disengaging Sigil (Geri Çekilme Mührü: Önünüze bir mühür küresi çizip geriye doğru sıçrarsınız; küre patlayarak alandaki rakiplere büyü hasarı verir ve yavaşlatır)",
      "Riposte (Eskrim Savuşturması: Gelen ilk saldırıyı savuşturmaya hazırlanır; başarılı savuşturmada kısa süreliğine dokunulmaz olur ve karşı hamleyle rakibi deler)",
      "Flawless Advance (Kusursuz İlerleyiş: İstediğiniz yönde seri eskrim hamleleri yaparak önünüzdeki rakiplere delici darbeler indirirsiniz)",
      "Itani Lo Sahn (Işık Düellosu - Ulti: Hedef doğrultuda ışık hızında kesikler atarak rakiplerin içinden geçer ve ağır patlayıcı hasar uygular)"
    ],
    "counters": [
      "Abrams",
      "Billy",
      "Silver",
      "McGinnis",
      "Grey Talon",
      "Bebop",
      "Rem"
    ],
    "counteredBy": [
      "Mo & Krill",
      "Dynamo",
      "Infernus",
      "Pocket",
      "Warden",
      "Violet",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Silence Wave (Susturma Dalgası)",
      "Return Fire (AKTİF İade-i Ateş)",
      "Metal Skin (Metal Deri)"
    ],
    "counterItems": [
      "slowing-hex",
      "silence-glyph",
      "metal-skin"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Melee Lifesteal (Vampir Yumruklar)",
        "Extra Stamina (Ekstra Kuvvet)",
        "Close Quarters (Yakın Mesafe)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Lifestrike (İyileştiren Yumruk)",
        "Fortitude (Metanet)",
        "Berserker (Cinnetkâr)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Crushing Fists (Ezici Yumruklar)",
        "Leech (Sülük)",
        "Unstoppable (Durdurulamaz)",
        "Phantom Strike (AKTİF Hayalet Saldırı)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "baba",
    "name": "Baba",
    "title": "Folklor Cadısı & İplik Büyücüsü",
    "role": "Menzilli Kontrol & Zayıflatma Büyücüsü (Control / Zone Mage)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/baba.png",
    "imageAlt": "Baba karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Threadsap ile nişangahı takip eden patlayıcı büyü iplikleri ören, Granny Long Legs ile bankının bacaklarını uzatarak yüksek zıplama ve direnç kazanan folklor büyücüsü.",
    "stats": {
      "survive": 55,
      "damage": 85,
      "mobility": 75,
      "control": 85
    },
    "abilities": [
      "Threadsap (Ömür İpliği: Nişangahınızı takip eden pürüzlü bir büyü ipliği örer; hat boyunca patlayarak büyü hasarı verir ve rakiplerden güç çalar)",
      "Granny Long Legs (Uzun Bacaklı Bank: Oturduğunuz bankın bacakları uzayarak size Hareket Hızı, yüksek zıplama, Zayıflatma Direnci ve Yakın Dövüş Direnci kazandırır)",
      "Feed The Birds (Kuşları Besle: Hedef alana gagalı kuş sürüleri çağırarak rakipleri yavaşlatır ve zamanla büyü hasarı verir)",
      "Witching Hour (Cadı Saati - Ulti: Geniş bir folklor laneti alanı açarak içerideki rakiplerin görüşünü, hızını ve dirençlerini kırar)"
    ],
    "counters": [
      "Abrams",
      "Billy",
      "Shiv",
      "McGinnis",
      "Solomon"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Lash",
      "Calico",
      "Viscous",
      "Nurse Harrow",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Knockdown (Nakavt)",
      "Spellbreaker (Büyü Bozan)",
      "Spirit Resilience (Büyü Dayanıklılığı)",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)"
    ],
    "counterItems": [
      "slowing-hex",
      "knockdown",
      "spellbreaker"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Sprint Boots (Hızlı Koşma Botları)",
        "Extra Charge (Ekstra Şarj)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Mystic Slow (Mistik Yavaşlatma)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Ethereal Shift (Ruhani Değişim)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "bebop",
    "name": "Bebop",
    "title": "Hurda Golem & Kanca Uzmanı",
    "role": "Yakalayıcı / Patlayıcı Hasar (Pick & Burst)",
    "difficulty": "Orta",
    "image": "/assets/characters/bebop.png",
    "imageAlt": "Bebop karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Uzun menzilli Hook yeteneğiyle rakipleri takımının arasına çeken, Sticky Bomb yükleriyle patlayıcı büyü hasarı biriktiren ve Hyper Beam ile koridoru eriten mekanik dövüşçü.",
    "stats": {
      "survive": 75,
      "damage": 85,
      "mobility": 50,
      "control": 85
    },
    "abilities": [
      "Exploding Uppercut (Patlayıcı Aparkat: Yakındaki rakiplere yakın dövüş hasarı verip onları uzağa savurur; düştükleri noktada alan büyü hasarı oluşur)",
      "Sticky Bomb (Yapışkan Bomba: Hedefe gecikmeli patlayan bir bomba yapıştırarak yakındaki rakiplere büyü hasarı verir; isabet ve skor başına kalıcı hasar yükü biriktirir)",
      "Hook (Uzun Menzilli Kanca: İleri doğru mekanik bir kanca fırlatarak isabet ettiği ilk kahramanı doğrudan yanınıza çeker)",
      "Hyper Beam (Hiper Lazer - Ulti: Devasa bir enerji lazeri kanalize ederek hattaki tüm rakiplere yüksek büyü hasarı ve ağır hareket/atılma yavaşlatması uygular)"
    ],
    "counters": [
      "Vindicta",
      "Grey Talon",
      "Celeste",
      "McGinnis",
      "Solomon",
      "Venator",
      "Seven"
    ],
    "counteredBy": [
      "Pocket",
      "Mina",
      "Calico",
      "Dynamo",
      "Viscous",
      "Graves",
      "Rat King",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Ethereal Shift (Ruhani Değişim)",
      "Divine Barrier (AKTİF İlahi Bariyer)",
      "Reactive Barrier (Reaktif Bariyer)"
    ],
    "counterItems": [
      "ethereal-shift",
      "reactive-barrier",
      "dispel-magic"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Mystic Burst (Mistik Patlama)",
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Surge of Power (GÜÇLENDİR Güç Artışı)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Warp Stone (Işınlanma Taşı)"
      ],
      "lateGame": [
        "Echo Shard (GÜÇLENDİR Yankı Parçası)",
        "Refresher (AKTİF Yenileyici)",
        "Boundless Spirit (Sınırsız Büyü)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "billy",
    "name": "Billy",
    "title": "Asi Keçi Punk & Sopa Kavgacısı",
    "role": "Ön Saf Yakın Dövüşçü & Hava Savurucu (Melee Brawler / Initiator)",
    "difficulty": "Orta",
    "image": "/assets/characters/billy.png",
    "imageAlt": "Billy karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Bashdown ile sopasını yere vurarak havadaki ve yerdeki rakipleri aşağı çeken, Rising Ram ile kafa üstü hücum edip hedefleri havaya savuran ve Chain Gang ile rakipleri zincirleyen kavgacı.",
    "stats": {
      "survive": 85,
      "damage": 80,
      "mobility": 75,
      "control": 75
    },
    "abilities": [
      "Bashdown (Sopa Darbesi: Sopanızı hızla yere vurarak havadaki ve yerdeki rakipleri aşağı çeker, yakın dövüş hasarı ve şok dalgası oluşturur)",
      "Rising Ram (Koç Toslaması: Kafa üstü rakibe hücum ederek onu kendinizle birlikte havaya savurursunuz; isabet halinde bekleme süresi %50 azalır)",
      "Blasted (Asi Öfke - Pasif: Yakın dövüş ve yetenek isabetleri öfke biriktirerek mermi/büyü kalkanlarını kırma ve dayanıklılık kazandırır)",
      "Chain Gang (Zincir Çetesi - Ulti: Yakındaki rakipleri zincirleyerek kaçmalarını engeller ve alan içinde yıkıcı kargaşa hasarı vurur)"
    ],
    "counters": [
      "Lash",
      "Kelvin",
      "McGinnis",
      "Grey Talon",
      "Haze",
      "Wraith",
      "Seven"
    ],
    "counteredBy": [
      "Apollo",
      "Mirage",
      "Lady Geist",
      "Victor",
      "Mo & Krill",
      "Warden",
      "Rebuttal (Karşı Saldırı)",
      "Metal Skin (Metal Deri)",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)"
    ],
    "counterItems": [
      "metal-skin",
      "healbane",
      "toxic-bullets"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Melee Lifesteal (Vampir Yumruklar)",
        "Extra Health (Ekstra Sağlık)",
        "Close Quarters (Yakın Mesafe)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Lifestrike (İyileştiren Yumruk)",
        "Enduring Speed (Kalıcı Hız)",
        "Fortitude (Metanet)",
        "Berserker (Cinnetkâr)"
      ],
      "lateGame": [
        "Crushing Fists (Ezici Yumruklar)",
        "Leech (Sülük)",
        "Colossus (AKTİF Dev)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "calico",
    "name": "Calico",
    "title": "Gölgelerin Suikastçısı",
    "role": "Yakın Mesafe Suikastçı / Sızma (Assassin)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/calico.png",
    "imageAlt": "Calico karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Ava ile kedi formuna bürünerek haritada hızla rotasyon atan, Leaping Slash ve Gloom Bombs ile arka saflardaki kırılgan hedefleri avlayıp gölgelere karışan suikastçı.",
    "stats": {
      "survive": 60,
      "damage": 85,
      "mobility": 95,
      "control": 55
    },
    "abilities": [
      "Gloom Bombs (Kasvet Bombaları: Gecikmeli patlayan bir bomba kümesi fırlatarak büyü hasarı verir; birden fazla bombayla vurulan hedefler ilave hasar alır)",
      "Leaping Slash (Sıçrayan Kesik: İleri doğru atılarak dairesel bir alanda tüm rakipleri biçer; en az bir kahramana isabet ederse kendinizi iyileştirirsiniz)",
      "Ava (Kedi Formu: Gölgelere bürünerek Ava formuna geçersiniz; zamanla artan hareket hızı kazanır ve mini haritada görünmez olursunuz)",
      "Return to Shadows (Gölgelere Dönüş - Ulti: Anında gölgeye dönüşerek hedef alınamaz olur, hareket hızı kazanır ve çevrenize sürekli büyü hasarı verirsiniz)"
    ],
    "counters": [
      "Grey Talon",
      "Vindicta",
      "Venator",
      "Pocket",
      "Lady Geist"
    ],
    "counteredBy": [
      "Abrams",
      "Mo & Krill",
      "Victor",
      "Warden",
      "Rem",
      "Kelvin",
      "Celeste",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Silence Wave (Susturma Dalgası)",
      "Reactive Barrier (Reaktif Bariyer)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "slowing-hex",
      "silence-glyph",
      "reactive-barrier"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Extra Charge (Ekstra Şarj)",
        "Close Quarters (Yakın Mesafe)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Rapid Recharge (Hızlı Şarj)",
        "Lifestrike (İyileştiren Yumruk)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Echo Shard (GÜÇLENDİR Yankı Parçası)",
        "Boundless Spirit (Sınırsız Büyü)",
        "Crushing Fists (Ezici Yumruklar)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "celeste",
    "name": "Celeste",
    "title": "Prizmatik Işık İllüzyonisti",
    "role": "Karşı-Saldırı Büyücüsü & Kalkan Desteği (Counter-Burst / Prism Mage)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/celeste.png",
    "imageAlt": "Celeste karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Light Eater ile saldıran rakiplere büyü hasarı yansıtan, Dazzling Trick prizma bariyeri kırıldığında yakındaki rakipleri susturan ve Radiant Daggers ile yavaşlatan ışık büyücüsü.",
    "stats": {
      "survive": 55,
      "damage": 75,
      "mobility": 85,
      "control": 75
    },
    "abilities": [
      "Light Eater (Işık Yiyen: Önünüzdeki koni alanına parlak bir ışık patlaması gönderir; isabet alan rakipler saldırdıklarında ilave büyü hasarı alırlar)",
      "Dazzling Trick (Göz Alıcı Prizma: Kendinizi koruyucu bir prizma bariyeriyle sararsınız; bariyer kırılırsa yakındaki rakipleri Susturur / Silence ve hasar verir)",
      "Radiant Daggers (Parlak Hançerler: Havada süzülürken hedefe ışık hançerleri fırlatarak büyü hasarı ve hareket yavaşlatması uygular)",
      "Shining Wonder (Kozmik Gösteri - Ulti: Geniş alanda prizmatik ışık dalgaları yayarak müttefikleri korur ve rakipleri kör edip hasar verir)"
    ],
    "counters": [
      "Haze",
      "Vyper",
      "Wraith",
      "Lash",
      "Abrams",
      "Billy"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Capacitor (AKTİF Kondansatör)",
      "Nurse Harrow",
      "Bebop",
      "Paradox",
      "Silence Wave (Susturma Dalgası)",
      "Spirit Resilience (Büyü Dayanıklılığı)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "capacitor",
      "silence-glyph",
      "spellbreaker"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Charge (Ekstra Şarj)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "deadman-danny",
    "name": "Deadman Danny",
    "title": "Jetpack’li Hava Dalışçısı & Yakıt Bombacısı",
    "role": "Hava Dalışçısı & Yakalayıcı Savaşçı (Aerial Dive / Grappler Brawler)",
    "difficulty": "Orta",
    "image": "/assets/characters/deadman-danny.png",
    "imageAlt": "Deadman Danny karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Strix Salvo ile zemine büyü füzeleri diken, Chimera Mk1 jetpack’iyle uçup aşırı ısınarak rakiplerin tepesine patlayıcı dalış yapan, Jettison Fuel ile mermi direnci eritip jetpack’ini soğutan ve Close The Deal ile rakibini yakalayıp gökyüzünden yere çakan hava savaşçısı.",
    "stats": {
      "survive": 70,
      "damage": 90,
      "mobility": 85,
      "control": 75
    },
    "abilities": [
      "Strix Salvo (Strix Yaylımı: Bir hat boyunca zemine saplanan büyü füzeleri ateşler; füzeler gecikmeli olarak veya rakipler yaklaştığında patlar)",
      "Chimera Mk1 (Jetpack Dalışı: Zıplamaya basılı tutarak uçmanızı sağlar; jetpack aşırı ısındığında veya tekrar basıldığında yere çakılarak alan hasarı verir, ıskalarsanız kendinizi sersemletir)",
      "Jettison Fuel (Yakıt Tahliyesi: Yakıt püskürterek silah hasarı verir, Mermi Direncini kırar ve jetpack ısısını düşürür; sonunda büyü hasarı vurup sizi geriye savuran bir patlama yaratır)",
      "Close The Deal (İşi Bağla - Ulti: Bir rakibi yakalayıp gökyüzüne çıkarır ve hızla yere çakarak sersemletir; düşüş ve çarpma büyü hasarı verir, canı %50’nin altındaki hedeflere yüksek bonus hasar vurur)"
    ],
    "counters": [
      "McGinnis",
      "Grey Talon",
      "Vindicta",
      "Abrams",
      "Warden",
      "Billy",
      "Seven",
      "Bebop",
      "Dynamo"
    ],
    "counteredBy": [
      "Kelvin",
      "Mirage",
      "Holliday",
      "Pocket",
      "Mina",
      "Wraith",
      "Yamato",
      "Ivy",
      "Viscous",
      "Knockdown (Nakavt)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Counterspell (Karşı Büyü)",
      "Ethereal Shift (Ruhani Değişim)",
      "Reactive Barrier (Reaktif Bariyer)",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Cursed Relic (AKTİF Lanetli Yadigâr)"
    ],
    "counterItems": [
      "knockdown",
      "slowing-hex",
      "counterspell",
      "reactive-barrier"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)",
        "Close Quarters (Yakın Mesafe)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Bullet Resist Shredder (Mermi Direnci Kırıcı)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Unstoppable (Durdurulamaz)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Leech (Sülük)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "drifter",
    "name": "Drifter",
    "title": "Göçebe Kan Avcısı",
    "role": "Yakın Mesafe Pençe & İzole Hedef Suikastçısı (Stalker / Bleed Assassin)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/drifter.png",
    "imageAlt": "Drifter karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Rend ile koni alanında pençe savurup yakın mesafede bonus yakın dövüş hasarı vuran, Bloodscent ile yalnız hedefleri avlayan ve Eternal Night ile görüş karartan suikastçı.",
    "stats": {
      "survive": 65,
      "damage": 95,
      "mobility": 90,
      "control": 60
    },
    "abilities": [
      "Rend (Parçalayan Pençe: Önünüzdeki koni alanına pençe savurarak büyü hasarı verirsiniz; hedef yakın mesafedeyse ilave yakın dövüş hasarı vurur)",
      "Stalker's Mark (Avcı İşareti: Hedefe kanama izi bırakır ve işaretli hedefin arkasına/yanına hızla atılmanızı sağlar)",
      "Bloodscent (Kan Kokusu - Pasif: Takımından ayrı düşmüş yalnız / izole hedefleri tespit eder ve onlara karşı yüksek bonus hasar kazandırır)",
      "Eternal Night (Ebedi Gece - Ulti: Rakip görüşünü karartarak av moduna geçer; yüksek hareket ve saldırı hızıyla yalnız hedefleri pusuya düşürür)"
    ],
    "counters": [
      "Wraith",
      "Vindicta",
      "Grey Talon",
      "Pocket",
      "Paige"
    ],
    "counteredBy": [
      "Dynamo",
      "Viscous",
      "Rem",
      "Abrams",
      "Victor",
      "Billy",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Silence Wave (Susturma Dalgası)",
      "Rebuttal (Karşı Saldırı)",
      "Metal Skin (Metal Deri)",
      "Healbane (Şifakıran)"
    ],
    "counterItems": [
      "slowing-hex",
      "metal-skin",
      "healbane"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Melee Lifesteal (Vampir Yumruklar)",
        "Close Quarters (Yakın Mesafe)",
        "Extra Stamina (Ekstra Kuvvet)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Lifestrike (İyileştiren Yumruk)",
        "Stalker (İz Sürücü)",
        "Berserker (Cinnetkâr)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Crushing Fists (Ezici Yumruklar)",
        "Leech (Sülük)",
        "Phantom Strike (AKTİF Hayalet Saldırı)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "grey-talon",
    "name": "Grey Talon",
    "title": "Kadim Okçu & Ruh Avcısı",
    "role": "Uzun Menzilli Nişancı / Büyü Okçusu (Artillery Marksman)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/grey-talon.png",
    "imageAlt": "Grey Talon karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Charged Shot ve Rain of Arrows ile uzak mesafeden yüksek patlayıcı hasar vuran, Immobilizing Trap ile yaklaşanları kilitleyen ve Guided Owl ile haritanın her yerinden infaz gerçekleştiren okçu.",
    "stats": {
      "survive": 40,
      "damage": 95,
      "mobility": 70,
      "control": 70
    },
    "abilities": [
      "Charged Shot (Şarjlı Ok: Rakiplerin içinden delip geçen yüksek büyü hasarlı güçlü bir ok şarj edip ateşlersiniz)",
      "Rain of Arrows (Ok Yağmuru: Sizi havaya fırlatarak süzülmenizi sağlar; havadayken ilave Silah Hasarı ve çoklu ok / Multishot kazanırsınız)",
      "Spirit Snare (Ruh Kapanı: Zemine gecikmeli aktifleşen bir tuzak kurar; tetiklendiğinde alandaki rakipleri Bağlar / Tether ve yavaşlatır)",
      "Guided Owl (Güdümlü Baykuş - Ulti: Haritanın her yerine uçurabildiğiniz ruhani bir baykuş gönderir; çarpma anında alan hasarı, sersemletme ve düşük canlı hedeflere infaz uygular)"
    ],
    "counters": [
      "Abrams",
      "Victor",
      "Graves",
      "Seven",
      "McGinnis"
    ],
    "counteredBy": [
      "Lash",
      "Calico",
      "Drifter",
      "Pocket",
      "Violet",
      "Bebop",
      "Silver",
      "Knockdown (Nakavt)",
      "Spellbreaker (Büyü Bozan)",
      "Spirit Shielding (Büyü Kalkanı)"
    ],
    "counterItems": [
      "knockdown",
      "spellbreaker",
      "spirit-shielding"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
        "Extra Spirit (Ekstra Büyü)",
        "Extra Charge (Ekstra Şarj)"
      ],
      "coreItems": [
        "Long Range (Uzun Menzil)",
        "Sharpshooter (Keskin Nişancı)",
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Rapid Recharge (Hızlı Şarj)"
      ],
      "lateGame": [
        "Glass Cannon (Kırılgan Kudret)",
        "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
        "Boundless Spirit (Sınırsız Büyü)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "graves",
    "name": "Graves",
    "title": "Ölüler Kavanozu & Hortlak Efendisi",
    "role": "Nekromantik Çağırıcı & Koridor Kontrol Tankı (Summoner / Zone Tank)",
    "difficulty": "Orta",
    "image": "/assets/characters/graves.png",
    "imageAlt": "Graves karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Jar of Dead ile ölen birimlerin ruhunu toplayıp kuru kafa ruhları çağıran, Grasping Hands ile yerden eller ve Hortlak (Ghoul) çıkaran nekromantik bölge tankı.",
    "stats": {
      "survive": 90,
      "damage": 70,
      "mobility": 40,
      "control": 85
    },
    "abilities": [
      "Jar of Dead (Ölüler Kavanozu: Yakında ölen birimlerin ruhunu kavanozda biriktirir; fırlatıldığında rakiplere saldıran kuru kafa ruhları çağırır)",
      "Grasping Hands (Kavrayan Eller: Zeminden bir hat boyunca uzanan eller ve bir Hortlak / Ghoul çıkarır; yarıktan geçen rakipler hasar alır ve yavaşlar)",
      "Essence Steal (Öz Çalma: Rakiplerden yaşam özü çekerek kendinize ve çağırdığınız hortlaklara dayanıklılık kazandırır)",
      "Borrowed Decree (Ödünç Ferman - Ulti: Geniş bir mezarlık alanı oluşturarak hortlak ordusu çağırır ve içerideki rakiplerin iyileşmesini/hızını emer)"
    ],
    "counters": [
      "Bebop",
      "Paradox",
      "Venator",
      "Haze",
      "Wraith"
    ],
    "counteredBy": [
      "Seven",
      "Infernus",
      "Lady Geist",
      "Vindicta",
      "Grey Talon",
      "Healbane (Şifakıran)",
      "Decay (Çürüme)",
      "Toxic Bullets (Toksik Mermiler)",
      "Torment Pulse (Yayılan İşkence)",
      "Ricochet (Mermi Sekmesi)"
    ],
    "counterItems": [
      "decay",
      "healbane",
      "ricochet"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Extra Charge (Ekstra Şarj)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Rapid Recharge (Hızlı Şarj)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Leech (Sülük)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "holliday",
    "name": "Holliday",
    "title": "Keskin Nişancı Şerif",
    "role": "Kafatası Avcısı & Kitle Kontrol (Pick / Marksman)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/holliday.png",
    "imageAlt": "Holliday karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Crackshot ile garantili kafadan vuruş hasarı çıkaran, Powder Keg varilleriyle alan patlatan ve Bounce Pad + Spirit Lasso kombosuyla rakipleri kementleyip kaçıran keskin nişancı.",
    "stats": {
      "survive": 50,
      "damage": 90,
      "mobility": 80,
      "control": 85
    },
    "abilities": [
      "Powder Keg (Barut Fıçısı: Gecikmeli veya ateş edildiğinde patlayan bir barut fıçısı fırlatır; rakipleri havaya savurur ve yüksek büyü hasarı verir)",
      "Bounce Pad (Zıplama Pedi: Zemine kahramanları havaya fırlatan bir ped bırakır; pedi kullanarak yere indiğinizde çevredeki rakiplere patlama hasarı verirsiniz)",
      "Crackshot (Keskin Atış - Pasif: Bekleme süresi dolduğunda yapacağınız kafadan vuruş / Headshot yüksek ilave büyü hasarı verir ve hedefi yavaşlatır)",
      "Spirit Lasso (Ruh Kementi - Ulti: Bir rakip kahramanı kementle yakalayıp sersemletir ve süre boyunca arkanızdan sürüklemenizi sağlar)"
    ],
    "counters": [
      "Haze",
      "Vyper",
      "Calico",
      "Infernus",
      "Wraith"
    ],
    "counteredBy": [
      "Dynamo",
      "Viscous",
      "Rem",
      "Abrams",
      "Victor",
      "Reactive Barrier (Reaktif Bariyer)",
      "Indomitable (Boyun Eğmez)",
      "Unstoppable (Durdurulamaz)",
      "Plated Armor (Kaplamalı Zırh)",
      "Metal Skin (Metal Deri)"
    ],
    "counterItems": [
      "reactive-barrier",
      "indomitable",
      "metal-skin"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
        "Extra Charge (Ekstra Şarj)"
      ],
      "coreItems": [
        "Sharpshooter (Keskin Nişancı)",
        "Headhunter (Kelle Avcısı)",
        "Rapid Recharge (Hızlı Şarj)",
        "Kinetic Dash (Kinetik Atılma)"
      ],
      "lateGame": [
        "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
        "Lucky Shot (Şanslı Atış)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)",
        "Glass Cannon (Kırılgan Kudret)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "infernus",
    "name": "Infernus",
    "title": "Alevli Barmen & Zamanla Hasar Uzmanı",
    "role": "Sürekli Hasar & Can Çalma Taşıyıcısı (DoT Skirmisher)",
    "difficulty": "Orta",
    "image": "/assets/characters/infernus.png",
    "imageAlt": "Infernus karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Afterburn pasifiyle mermileriyle rakipleri ateşe veren, Catalyst ile aldığı tüm hasarı artıran, Flame Dash ile koridorları yakan ve Concussive Combustion ile alan sersemletmesi vuran taşıyıcı.",
    "stats": {
      "survive": 70,
      "damage": 90,
      "mobility": 80,
      "control": 70
    },
    "abilities": [
      "Napalm / Catalyst (Katalizör: Önünüzdeki alana yanıcı bir karışım püskürterek büyü hasarı verir, yavaşlatır ve hedefin sizden aldığı tüm hasarı artırır)",
      "Flame Dash (Alevli Atılma: Yavaşlatma direnci kazanarak ileri doğru koşar ve arkanızda rakipleri zamanla yakan alevli bir iz bırakırsınız)",
      "Afterburn (Ardıl Yanma - Pasif: Mermileriniz rakiplerde yanma yükü biriktirir; dolduğunda hedefi ateşe vererek zamanla yüksek büyü hasarı vurur)",
      "Concussive Combustion (Sarsıcı Patlama - Ulti: Kısa bir yüklemenin ardından çevrenizde patlayarak yakındaki tüm rakipleri Sersemletir / Stun ve ateşe verir)"
    ],
    "counters": [
      "Abrams",
      "Mo & Krill",
      "Graves",
      "Rat King",
      "Solomon",
      "Billy"
    ],
    "counteredBy": [
      "Viscous",
      "Pocket",
      "Vindicta",
      "Grey Talon",
      "Wraith",
      "Holliday",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Debuff Reducer (Zayıflatma Azaltıcı)",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)"
    ],
    "counterItems": [
      "debuff-reducer",
      "dispel-magic",
      "healbane"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Rapid Rounds (Seri Atış)",
        "Extra Health (Ekstra Sağlık)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Toxic Bullets (Toksik Mermiler)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Duration Extender (GÜÇLENDİR Süre Uzatıcı)"
      ],
      "lateGame": [
        "Leech (Sülük)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Unstoppable (Durdurulamaz)",
        "Spiritual Overflow (Büyülü Coşkunluk)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "ivy",
    "name": "Ivy",
    "title": "İspanyol Harlem’in Koruyucu Gargoyle’u",
    "role": "Destek / Alan Kontrolü & Kurtarıcı (Support / Disrupter)",
    "difficulty": "Orta",
    "image": "/assets/characters/ivy.png",
    "imageAlt": "Ivy karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Watcher’s Covenant ile müttefikine bağlanıp atış hızı ve can çalma paylaşan, Kudzu Bomb ile bölgeleri kapatan, Stone Form ile sersemletip iyileşen ve Air Drop ile takım arkadaşlarını taşıyan destek.",
    "stats": {
      "survive": 75,
      "damage": 65,
      "mobility": 85,
      "control": 80
    },
    "abilities": [
      "Entangling Thorns / Kudzu Bomb (Dikenli Sarmaşık Bombası: Hedef alana zamanla büyü hasarı veren ve içindeki rakipleri yavaşlatan boğucu dikenler çağırır)",
      "Kudzu Connection / Watcher's Covenant (Gözcü Ahdi: Yakındaki bir müttefike bağlanarak her ikinize de Atış Hızı, Mermi Can Çalması ve hareket bonusu sağlar)",
      "Stone Form (Taş Formu: Geçici olarak dokunulmaz bir taşa dönüşüp yere çarpar; kendinizi iyileştirir ve yakındaki rakipleri Sersemletir / Stun)",
      "Air Drop (Hava İkmal Uçuşu - Ulti: Bir müttefiki veya bombanızı alarak gökyüzüne yükselir; hedef noktaya bomba bırakıp rakipleri yavaşlatır ve kalkan sağlarsınız)"
    ],
    "counters": [
      "Bebop",
      "Lash",
      "McGinnis",
      "Solomon",
      "Graves"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Infernus",
      "Seven",
      "Silence Wave (Susturma Dalgası)",
      "Knockdown (Nakavt)",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)"
    ],
    "counterItems": [
      "knockdown",
      "healbane",
      "silence-glyph"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Healing Rite (AKTİF İyileştirme Ayini)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Healing Booster (İyileştirme Güçlendirici)",
        "Reactive Barrier (Reaktif Bariyer)",
        "Mystic Slow (Mistik Yavaşlatma)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Healing Tempo (İyileştirici Tempo)",
        "Divine Barrier (AKTİF İlahi Bariyer)",
        "Escalating Exposure (Artan Hassasiyet)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "kelvin",
    "name": "Kelvin",
    "title": "Kutup Kaşifi & Buz Kontrol Uzmanı",
    "role": "Yavaşlatma / Alan Kontrolü & Destek (Control / Support)",
    "difficulty": "Orta",
    "image": "/assets/characters/kelvin.png",
    "imageAlt": "Kelvin karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Arctic Beam ile rakiplerin hareket ve atış hızını donduran, Ice Path ile gökyüzünde buz yolları açan ve Frozen Shelter kubbesiyle savaş alanını ikiye bölen kontrol uzmanı.",
    "stats": {
      "survive": 80,
      "damage": 70,
      "mobility": 75,
      "control": 90
    },
    "abilities": [
      "Frost Grenade (Buz Bombası: Patladığında dost birimleri iyileştiren, rakiplere ise büyü hasarı ve hareket yavaşlatması uygulayan dondurucu bir bomba fırlatır)",
      "Ice Path (Buz Yolu: Gökyüzünde ve zeminde size ve müttefiklerinize hareket hızı sağlayan, yavaşlatma direnci veren yüzen bir buz patikası oluşturur)",
      "Arctic Beam (Kutup Işını: Önünüze dondurucu bir enerji ışını tutarak hedeflere hasar verir ve zamanla hareket/atış hızlarını ağır şekilde düşürür)",
      "Frozen Shelter (Donmuş Sığınak - Ulti: Çevrenizi geçilmez bir buz kubbesiyle kapatır; içerideki müttefikleri hızla iyileştirirken rakipleri yavaşlatır)"
    ],
    "counters": [
      "Haze",
      "Vyper",
      "Wraith",
      "Silver",
      "Drifter",
      "Calico"
    ],
    "counteredBy": [
      "Yamato",
      "Doorman",
      "Abrams",
      "Billy",
      "Enduring Speed (Kalıcı Hız)",
      "Unstoppable (Durdurulamaz)",
      "Healbane (Şifakıran)",
      "Decay (Çürüme)"
    ],
    "counterItems": [
      "enduring-speed",
      "unstoppable",
      "healbane"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Healing Rite (AKTİF İyileştirme Ayini)",
        "Extra Health (Ekstra Sağlık)",
        "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Healing Booster (İyileştirme Güçlendirici)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Healing Tempo (İyileştirici Tempo)",
        "Unstoppable (Durdurulamaz)",
        "Divine Barrier (AKTİF İlahi Bariyer)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "haze",
    "name": "Haze",
    "title": "Sandman Suikastçısı",
    "role": "Gizli Suikastçı & Hızlı Mermi Taşıyıcısı (Stealth Carry)",
    "difficulty": "Orta",
    "image": "/assets/characters/haze.png",
    "imageAlt": "Haze karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Smoke Bomb ile görünmez olup arka saflara sızan, Sleep Dagger ile hedefini uyutan, Fixation yükleriyle mermi hasarını katlayan ve Bullet Dance ultisiyle çevresindeki herkesi tarayan suikastçı.",
    "stats": {
      "survive": 45,
      "damage": 95,
      "mobility": 80,
      "control": 60
    },
    "abilities": [
      "Sleep Dagger (Uyku Hançeri: Hedefe hasar veren ve onu kısa süreliğine Uyutan / Sleep bir hançer fırlatır; uyuyan hedef hasar aldığında uyanır)",
      "Smoke Bomb (Sis Bombası: Gözden kaybolarak Görünmez / Invisible olur ve koşu hızı kazanırsınız; ateş etmek görünmezliği bozar)",
      "Fixation (Saplantı - Pasif: Aynı hedefe ateş ettikçe o hedef üzerindeki mermi hasarınız yük biriktirerek artar; kafadan vuruşlar 3 yük birden verir)",
      "Bullet Dance (Mermi Dansı - Ulti: Yüksek atış hızı ve mermi kaçınması kazanarak çevrenizdeki tüm rakiplere otomatik ve ölümcül yaylım ateşi açarsınız)"
    ],
    "counters": [
      "Vindicta",
      "Grey Talon",
      "Paige",
      "Pocket",
      "Violet"
    ],
    "counteredBy": [
      "Mo & Krill",
      "Abrams",
      "Warden",
      "Celeste",
      "Kelvin",
      "Metal Skin (Metal Deri)",
      "Return Fire (AKTİF İade-i Ateş)",
      "Plated Armor (Kaplamalı Zırh)",
      "Juggernaut (Yıkıcı Güç)"
    ],
    "counterItems": [
      "metal-skin",
      "return-fire",
      "plated-armor"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Rapid Rounds (Seri Atış)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Swift Striker (Tempolu Atış)",
        "Toxic Bullets (Toksik Mermiler)",
        "Hunter's Aura (Avcı Aurası)",
        "Bullet Lifesteal (Mermi Can Çalması)"
      ],
      "lateGame": [
        "Ricochet (Mermi Sekmesi)",
        "Frenzy (Savaş Çılgınlığı)",
        "Siphon Bullets (Can Çalma Mermileri)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "lady-geist",
    "name": "Lady Geist",
    "title": "Kan Düşesi & Ruh Emen Aristokrat",
    "role": "Alan Dürtme & Can Takası Uzmanı (Burst / Drain Tank)",
    "difficulty": "Orta",
    "image": "/assets/characters/lady-geist.png",
    "imageAlt": "Lady Geist karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Essence Bomb ve Malice ile koridorları geniş alan hasarıyla baskılayan, Life Drain ile can emen ve canı azaldığında Soul Exchange ultisiyle rakibin can yüzdesini kendisiyle değiştiren büyücü.",
    "stats": {
      "survive": 75,
      "damage": 85,
      "mobility": 45,
      "control": 60
    },
    "abilities": [
      "Essence Bomb (Öz Bombası: Kendi canınızın bir kısmını feda ederek kısa süre sonra patlayan ve yüksek alan büyü hasarı veren bir bomba fırlatırsınız)",
      "Life Drain (Can Emen Bağ: Hedef rakiple aranızda zamanla onun canını emip sizi iyileştiren bir bağ kurar; görüş hattı korunmalıdır)",
      "Malice (Kötülük Bıçakları: Kendi canınızdan harcayarak kan bıçakları fırlatırsınız; isabet eden rakipler yavaşlar ve sizden aldıkları hasar katlanarak artar)",
      "Soul Exchange (Ruh Takası - Ulti: Yakın mesafedeki bir rakip kahramanla mevcut can yüzdelerinizi anında takas edersiniz)"
    ],
    "counters": [
      "Abrams",
      "Mo & Krill",
      "Victor",
      "Billy",
      "McGinnis",
      "Graves",
      "Solomon"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Deadman Danny",
      "Silence Wave (Susturma Dalgası)",
      "Focus Lens (AKTİF Odaklı Mercek)",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "silence-glyph",
      "healbane",
      "spellbreaker"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)",
        "Extra Charge (Ekstra Şarj)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Surge of Power (GÜÇLENDİR Güç Artışı)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Leech (Sülük)",
        "Escalating Exposure (Artan Hassasiyet)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "lash",
    "name": "Lash",
    "title": "Gökyüzünün Kibirli Dövüşçüsü",
    "role": "Hava Suikastçısı & Savaş Başlatıcı (Aerial Diver / Initiator)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/lash.png",
    "imageAlt": "Lash karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Grapple ile gökyüzüne fırlayıp Ground Strike ile rakiplerin tepesine inerek yüksek patlayıcı hasar vuran ve Death Slam ultisiyle tüm rakip takımı yakalayıp fırlatan mobil dövüşçü.",
    "stats": {
      "survive": 65,
      "damage": 85,
      "mobility": 95,
      "control": 85
    },
    "abilities": [
      "Ground Strike (Zemin Darbesi: Havadan hızla yere çarparak önünüzdeki koni alanındaki rakiplere yüksek hasar verir; düşüş yüksekliği arttıkça hasar katlanır)",
      "Grapple (Kanca Sıçraması: Bir hedefe veya noktaya kanca atarak kendinizi hızla gökyüzüne ve ileriye fırlatırsınız; hava aksiyonlarını sıfırlar)",
      "Flog (Can Çalan Kırbaç: Kırbacınızla önünüzdeki rakiplere vurarak büyü hasarı verir, yavaşlatır ve verilen hasara göre kendinizi iyileştirirsiniz)",
      "Death Slam (Ölüm Çarpışı - Ulti: Havadayken altınızdaki rakiplere kırbaçlar bağlayarak hepsini havaya çeker ve seçtiğiniz yöne doğru yere çakarsınız)"
    ],
    "counters": [
      "Vindicta",
      "Grey Talon",
      "Venator",
      "McGinnis",
      "Paige",
      "Solomon"
    ],
    "counteredBy": [
      "Billy",
      "Dynamo",
      "Viscous",
      "Ivy",
      "Celeste",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Silence Wave (Susturma Dalgası)",
      "Knockdown (Nakavt)",
      "Ethereal Shift (Ruhani Değişim)",
      "Counterspell (Karşı Büyü)"
    ],
    "counterItems": [
      "slowing-hex",
      "silence-glyph",
      "ethereal-shift"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Stamina (Ekstra Kuvvet)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Spirit (Ekstra Büyü)",
        "Extra Charge (Ekstra Şarj)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Stamina Mastery (Kuvvet Ustalığı)",
        "Majestic Leap (AKTİF Görkemli Sıçrama)",
        "Tankbuster (Tank Patlatan)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)",
        "Unstoppable (Durdurulamaz)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "mcginnis",
    "name": "McGinnis",
    "title": "Fairfax Endüstrisi Baş Mühendisi",
    "role": "Bölge Kontrolü / Kuşatma & Destek (Zone Control / Engineer)",
    "difficulty": "Düşük - Orta",
    "image": "/assets/characters/mcginnis.png",
    "imageAlt": "McGinnis karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Mini Turret taretleriyle bölgeleri koruyan, Medicinal Specter ile takımını iyileştiren, Spectral Wall ile kaçış yollarını kapatan ve Heavy Barrage ile roket yağdıran mühendis.",
    "stats": {
      "survive": 70,
      "damage": 80,
      "mobility": 35,
      "control": 75
    },
    "abilities": [
      "Mini Turret (Mini Taret: Yakındaki rakiplere otomatik ateş eden, büyü hasarı ve yavaşlatma uygulayan otonom bir taret kurar)",
      "Medicinal Specter (Şifacı Tayf: Belirlenen alandaki tüm dost birimleri sürekli iyileştiren bir iyileştirme ruhu çağırır)",
      "Spectral Wall (Hayalet Duvar: Zemini ikiye bölen geçilmez bir duvar örerek rakiplerin yolunu keser, hasar verir ve yavaşlatır)",
      "Heavy Barrage (Ağır Yaylım - Ulti: Hedef bölgeye kesintisiz bir topçu roketi yağmuru başlatarak yüksek alan büyü hasarı vurur)"
    ],
    "counters": [
      "Haze",
      "Drifter",
      "Calico",
      "Warden",
      "Shiv",
      "Abrams"
    ],
    "counteredBy": [
      "Seven",
      "Lady Geist",
      "Deadman Danny",
      "Doorman",
      "Bebop",
      "Paradox",
      "Monster Rounds (Anticanavar Mermileri)",
      "Ricochet (Mermi Sekmesi)",
      "Healbane (Şifakıran)",
      "Decay (Çürüme)",
      "Warp Stone (Işınlanma Taşı)"
    ],
    "counterItems": [
      "healbane",
      "warp-stone",
      "ricochet"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Healing Rite (AKTİF İyileştirme Ayini)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Intensifying Magazine (Şiddetlenen Şarjör)",
        "Healing Booster (İyileştirme Güçlendirici)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Ricochet (Mermi Sekmesi)",
        "Healing Tempo (İyileştirici Tempo)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "mina",
    "name": "Mina",
    "title": "Şemsiye Suikastçısı & Vampir Aristokrat",
    "role": "Yakın-Orta Mesafe Büyü Suikastçısı & Can Çalma (Vampiric Skirmisher)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/mina.png",
    "imageAlt": "Mina karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Rake ile şemsiyesini savurup eksik cana göre büyü hasarı vuran ve iyileşen, Sanguine Retreat ile dokunulmaz olup uçan ve Nox Nostra ile alanı susturan vampir.",
    "stats": {
      "survive": 70,
      "damage": 90,
      "mobility": 85,
      "control": 65
    },
    "abilities": [
      "Rake (Şemsiye Darbesi: Şemsiyenizle pençe atarak hedefin eksik canına göre artan büyü hasarı verir ve vurulan her hedeften can yenilersiniz)",
      "Sanguine Retreat (Kanlı Çekilme: Kısa süreliğine yarasa sürüsüne dağılarak hedef alınamaz olur ve seçilen konuma uçarsınız; tekrar kullanılabilir)",
      "Love Bites (Vampir Isırığı - Pasif: Mermi ve yetenek isabetleri hedefte kanama biriktirerek büyü can çalması ve hareket hızı kazandırır)",
      "Nox Nostra (Gece Ziyafeti - Ulti: Geniş alanda karanlık yarasa fırtınası çağırarak rakipleri susturur, hasar verir ve yüksek miktarda can emer)"
    ],
    "counters": [
      "Abrams",
      "Victor",
      "Billy",
      "Bebop",
      "Lash"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Wraith",
      "Mo & Krill",
      "Nurse Harrow",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Decay (Çürüme)",
      "Silence Wave (Susturma Dalgası)",
      "Slowing Hex (Yavaşlatma Büyüsü)"
    ],
    "counterItems": [
      "healbane",
      "silence-glyph",
      "toxic-bullets"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Rapid Rounds (Seri Atış)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Extra Spirit (Ekstra Büyü)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Cold Front (AKTİF Soğuk Dalga)",
        "Toxic Bullets (Toksik Mermiler)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)",
        "Leech (Sülük)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "mirage",
    "name": "Mirage",
    "title": "Cinlerin Koruması & Kum Muhafızı",
    "role": "Koridor Düellocusu & Küresel Destek (Duelist / Global Roamer)",
    "difficulty": "Orta",
    "image": "/assets/characters/mirage.png",
    "imageAlt": "Mirage karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Tornado ile rakipleri havaya kaldırıp mermilerden kaçınan, Fire Scarabs ile can çalan, Djinn’s Mark ile biriken patlayıcı hasar vuran ve Traveler ile haritanın her yerine ışınlanan muhafız.",
    "stats": {
      "survive": 65,
      "damage": 80,
      "mobility": 85,
      "control": 75
    },
    "abilities": [
      "Fire Scarabs (Ateş Böcekleri: Rakibe ateş böcekleri musallat ederek maksimum canını çalar, sizi iyileştirir ve hedefin verdiği hasarı azaltır)",
      "Dust Devil / Tornado (Kum Hortumu: İleri doğru ilerleyen bir hortuma dönüşerek çarptığınız rakipleri havaya savurur ve sonrasında Mermi Kaçınması kazanırsınız)",
      "Djinn's Mark (Cin Damgası - Pasif: Mermileriniz hedefte çarpan biriktirir; süre bittiğinde veya tetiklendiğinde biriken yük kadar patlayıcı büyü hasarı vurur)",
      "Traveler (Gezgin - Ulti: Haritadaki herhangi bir dost kahramanın veya görünür rakip kahramanın yanına kanalize olarak ışınlanmanızı sağlar)"
    ],
    "counters": [
      "Abrams",
      "Billy",
      "Wraith",
      "Drifter"
    ],
    "counteredBy": [
      "Pocket",
      "Viscous",
      "Nurse Harrow",
      "Dynamo",
      "Kelvin",
      "Rem",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Debuff Reducer (Zayıflatma Azaltıcı)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Silence Wave (Susturma Dalgası)"
    ],
    "counterItems": [
      "debuff-reducer",
      "slowing-hex",
      "silence-glyph"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Rapid Rounds (Seri Atış)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Toxic Bullets (Toksik Mermiler)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Mystic Shot (Mistik Atış)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Leech (Sülük)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "mo-and-krill",
    "name": "Mo & Krill",
    "title": "Yeraltı İkilisi & Kitle Kontrol Tankı",
    "role": "Ön Saf Tank / Tekli Hedef Kilitleyici (Disabler Tank)",
    "difficulty": "Düşük - Orta",
    "image": "/assets/characters/mo-and-krill.png",
    "imageAlt": "Mo & Krill karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Scorn ile çevresinden can emen, Burrow ile yeraltından hızla yaklaşıp havaya savuran, Sand Blast ile rakipleri silahsızlandıran ve Combo ultisiyle hedefi uzun süre yere mıhlayan ikili.",
    "stats": {
      "survive": 95,
      "damage": 65,
      "mobility": 70,
      "control": 95
    },
    "abilities": [
      "Scorn (Küçümseme: Yakındaki rakiplere alan hasarı verir ve verilen hasara oranla kendinizi iyileştirirsiniz; kahramanlara karşı iyileştirme çok daha güçlüdür)",
      "Burrow (Yeraltı Kazısı: Yeraltına girerek hızlanır, mermi ve büyü zırhı kazanırsınız; yüzeye çıkarken rakipleri havaya savurup hasar verirsiniz)",
      "Sand Blast (Kum Püskürtme: Önünüzdeki rakiplere kum fırlatarak görüşlerini kısıtlar ve onları geçici olarak Silahsızlandırırsınız / Disarm)",
      "Combo (İkili Kıskaç - Ulti: Hedef rakip kahramanı olduğu yere mıhlayarak uzun süre Sersemletir / Suppress, sürekli hasar verir ve öldürürseniz kalıcı can kazandırır)"
    ],
    "counters": [
      "Haze",
      "Vyper",
      "Wraith",
      "Pocket",
      "Calico",
      "Violet",
      "Mina"
    ],
    "counteredBy": [
      "Lady Geist",
      "Vindicta",
      "Grey Talon",
      "Venator",
      "Infernus",
      "Reactive Barrier (Reaktif Bariyer)",
      "Indomitable (Boyun Eğmez)",
      "Unstoppable (Durdurulamaz)",
      "Toxic Bullets (Toksik Mermiler)",
      "Healbane (Şifakıran)",
      "Decay (Çürüme)"
    ],
    "counterItems": [
      "toxic-bullets",
      "decay",
      "reactive-barrier"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Health (Ekstra Sağlık)",
        "Extra Regen (Ekstra Yenilenme)",
        "Melee Lifesteal (Vampir Yumruklar)",
        "Extra Spirit (Ekstra Büyü)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Fortitude (Metanet)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Unstoppable (Durdurulamaz)",
        "Leech (Sülük)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "nurse-harrow",
    "name": "Nurse Harrow",
    "title": "Sülük Terapisti & Kimyasal Destek",
    "role": "Güçlendirme Eritici & Hız Desteği (Debuff / Stim Support)",
    "difficulty": "Orta",
    "image": "/assets/characters/nurse-harrow.png",
    "imageAlt": "Nurse Harrow karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Leech Therapy ile rakiplere sülük yapıştırıp güçlendirme sürelerini eriten, Wretched Vapors ile müttefiklerine ani hız patlaması sağlayan biyokimya uzmanı.",
    "stats": {
      "survive": 65,
      "damage": 70,
      "mobility": 60,
      "control": 80
    },
    "abilities": [
      "Leech Therapy (Sülük Tedavisi: Rakiplere yapışarak zamanla büyü hasarı veren, iyileşmelerini emen ve güçlendirme sürelerini eriten bir sülük kavanozu fırlatır)",
      "Wretched Vapors (Sefil Buharlar: Kendinize veya bir müttefike geçici olarak yüksek hız, atış hızı ve kalkan veren kimyasal bir şişe kırarsınız)",
      "Malpractice (Tıbbi İhmal: Hedef alana zehirli gaz yayarak rakiplerin mermi/büyü dirençlerini ve hareket hızlarını düşürür)",
      "Code Blue (Mavi Kod - Ulti: Geniş çaplı biyokimyasal karantina alanı açarak müttefikleri hızla iyileştirir ve rakipleri ağır şekilde zayıflatır)"
    ],
    "counters": [
      "Victor",
      "Abrams",
      "Shiv",
      "Silver",
      "Celeste",
      "Paige",
      "Warden"
    ],
    "counteredBy": [
      "Viscous",
      "Pocket",
      "Vindicta",
      "Grey Talon",
      "Lash",
      "Drifter",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Debuff Reducer (Zayıflatma Azaltıcı)",
      "Silence Wave (Susturma Dalgası)"
    ],
    "counterItems": [
      "dispel-magic",
      "debuff-reducer",
      "silence-glyph"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Healing Rite (AKTİF İyileştirme Ayini)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Healing Booster (İyileştirme Güçlendirici)",
        "Duration Extender (GÜÇLENDİR Süre Uzatıcı)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Healing Tempo (İyileştirici Tempo)",
        "Boundless Spirit (Sınırsız Büyü)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Divine Barrier (AKTİF İlahi Bariyer)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "paige",
    "name": "Paige",
    "title": "Mistik Kütüphaneci & Ejderha Öykücüsü",
    "role": "Bariyer Desteği & Alan Kontrol Büyücüsü (Conjurer / Support Mage)",
    "difficulty": "Orta",
    "image": "/assets/characters/paige.png",
    "imageAlt": "Paige karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Bookwyrm ile yakıcı iz bırakan öykü ejderhası çağıran, Plot Armor ile müttefiklerine kalkan veren ve Captivating Read ile rakipleri yere sabitleyen kütüphaneci.",
    "stats": {
      "survive": 60,
      "damage": 80,
      "mobility": 60,
      "control": 85
    },
    "abilities": [
      "Bookwyrm / Conjure Dragon (Öykü Ejderhası: Hedef konumda belirip ileri doğru uçan, büyü hasarı veren ve arkasında yakıcı bir iz bırakan ejderha çağırır)",
      "Plot Armor / Defend and Fight (Öykü Zırhı: Kendinize veya bir müttefike koruyucu kağıt bariyer ve ilave atış hızı/hareket hızı kazandırır)",
      "Captivating Read (Sürükleyici Okuma: Hedef alandaki rakipleri öykü sayfalarına hapsederek kısa süreliğine yere Sabitler / Immobilize)",
      "Rallying Charge (Destansı Bölüm - Ulti: Geniş bir hat boyunca süvari öyküsü çağırarak müttefikleri güçlendirir ve rakipleri sersemletip savurur)"
    ],
    "counters": [
      "Abrams",
      "Shiv",
      "Billy",
      "Bebop"
    ],
    "counteredBy": [
      "Lash",
      "Calico",
      "Pocket",
      "Vindicta",
      "Grey Talon",
      "Capacitor (AKTİF Kondansatör)",
      "Silence Wave (Susturma Dalgası)",
      "Debuff Reducer (Zayıflatma Azaltıcı)"
    ],
    "counterItems": [
      "capacitor",
      "silence-glyph",
      "debuff-reducer"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Healing Rite (AKTİF İyileştirme Ayini)",
        "Extra Health (Ekstra Sağlık)",
        "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Healing Booster (İyileştirme Güçlendirici)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Rescue Beam (AKTİF Kurtarma Işını)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Healing Tempo (İyileştirici Tempo)",
        "Divine Barrier (AKTİF İlahi Bariyer)",
        "Refresher (AKTİF Yenileyici)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "paradox",
    "name": "Paradox",
    "title": "Zaman Hırsızı & Pozisyon Manipülatörü",
    "role": "Yakalayıcı & Taktiksel Suikastçı (Pick / Utility Carry)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/paradox.png",
    "imageAlt": "Paradox karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Kinetic Carbine ile zamanı durduran atışlar yapan, Time Wall ile tüm mermileri bloklayan ve Paradoxical Swap ultisiyle rakibin yerini kendi takımıyla değiştiren keskin nişancı.",
    "stats": {
      "survive": 55,
      "damage": 80,
      "mobility": 75,
      "control": 85
    },
    "abilities": [
      "Pulse Grenade (Darbe Bombası: Düştüğü yerde genişleyen darbeler yayan bir bomba fırlatır; her darbe büyü hasarı verir, yavaşlatır ve hasar çarpanı biriktirir)",
      "Time Wall (Zaman Duvarı: İçinden geçen tüm düşman mermilerini ve atışlarını tamamen durduran bir zaman perdesi kurar; duvara değen rakipler zaman kaybı hasarı alır)",
      "Kinetic Carbine (Kinetik Karabina: Hareket ettikçe şarj olan bir atış yükler; ateşlendiğinde yüksek hasar verir ve hedefi zaman içinde kısa süreliğine dondurur)",
      "Paradoxical Swap (Paradoksal Takas - Ulti: Bir mermi ateşleyerek isabet eden rakip kahramanla kendi konumunuzu anında değiştirirsiniz)"
    ],
    "counters": [
      "Vindicta",
      "Grey Talon",
      "Venator",
      "McGinnis",
      "Bebop",
      "Deadman Danny"
    ],
    "counteredBy": [
      "Abrams",
      "Victor",
      "Billy",
      "Pocket",
      "Mina",
      "Violet",
      "Ethereal Shift (Ruhani Değişim)",
      "Counterspell (Karşı Büyü)",
      "Reactive Barrier (Reaktif Bariyer)"
    ],
    "counterItems": [
      "reactive-barrier",
      "ethereal-shift",
      "counterspell"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
        "Extended Magazine (Genişletilmiş Şarjör)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Sharpshooter (Keskin Nişancı)",
        "Warp Stone (Işınlanma Taşı)",
        "Mystic Shot (Mistik Atış)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
        "Ethereal Shift (Ruhani Değişim)",
        "Glass Cannon (Kırılgan Kudret)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "pocket",
    "name": "Pocket",
    "title": "Sürgün Mirasçı & Büyü Suikastçısı",
    "role": "Mobil Büyü Patlaması / Kaçış Uzmanı (Burst Mage)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/pocket.png",
    "imageAlt": "Pocket karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Barrage ile hasar çarpanı biriktiren, Flying Cloak ile ışınlanan, Enchanter’s Satchel çantasına girerek dokunulmaz olan ve Affliction ultisiyle tüm rakip takıma iyileşme kıran zehir yayan büyücü.",
    "stats": {
      "survive": 65,
      "damage": 90,
      "mobility": 90,
      "control": 55
    },
    "abilities": [
      "Barrage (Yaylım Ateşi: Havaya yükselerek patlayıcı büyü mermileri yağdırır; her isabet rakipleri yavaşlatır ve verdiğiniz tüm hasarı katlayan yük biriktirir)",
      "Flying Cloak (Uçan Pelerin: İleri doğru hareket eden ve rakiplere hasar veren canlı bir pelerin gönderir; tekrar basarak pelerinin olduğu yere ışınlanabilirsiniz)",
      "Enchanter's Satchel (Büyücünün Çantası: 1.5 saniyeliğine çantanızın içine saklanarak tamamen dokunulmaz olursunuz; süre bitiminde çevredeki rakiplere büyü hasarı verir)",
      "Affliction (Izdırap - Ulti: Yakındaki tüm rakiplere zamanla ağır büyü hasarı veren ve iyileşmelerini düşüren ölümcül olmayan bir zehir yayar)"
    ],
    "counters": [
      "Bebop",
      "Lash",
      "Paradox",
      "Abrams",
      "Kelvin",
      "Victor",
      "Paige",
      "Grey Talon",
      "Vindicta"
    ],
    "counteredBy": [
      "Mo & Krill",
      "Wraith",
      "Celeste",
      "Holliday",
      "Silence Wave (Susturma Dalgası)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Divine Barrier (AKTİF İlahi Bariyer)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "silence-glyph",
      "slowing-hex",
      "spellbreaker"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Charge (Ekstra Şarj)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Surge of Power (GÜÇLENDİR Güç Artışı)",
        "Rapid Recharge (Hızlı Şarj)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "rat-king",
    "name": "Rat King",
    "title": "Hurda Bombacısı & Sıçan Sürüsü Kralı",
    "role": "Sürü Çağırıcı & Zırh Eritici (Swarm / Armor Shredder)",
    "difficulty": "Orta",
    "image": "/assets/characters/rat-king.png",
    "imageAlt": "Rat King karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Scrap Grenade ile çoklu patlayan hurda bombası fırlatan, Rat Swarm ile rakiplerin üzerine sıçan sürüsü salarak mermi dirençlerini kıran ve Rule, Ratannia! ile cepheyi ezen kral.",
    "stats": {
      "survive": 70,
      "damage": 80,
      "mobility": 75,
      "control": 65
    },
    "abilities": [
      "Scrap Grenade (Hurda Bombası: Birden fazla kez patlayarak mermi hasarı ve yavaşlatma uygulayan bir hurda bombası fırlatır)",
      "Rat Swarm (Sıçan Sürüsü: Rakiplerin üzerine atılarak zamanla büyü hasarı veren ve Mermi Dirençlerini düşüren bir sıçan sürüsü çağırır)",
      "Sewer Scurry (Lağım Koşusu: Kısa süreliğine alçalarak hareket hızı ve mermi kaçınması kazanır, engellerin altından hızla sıyrılır)",
      "Rule, Ratannia! (Hükmet Ratannia! - Ulti: Devasa bir kemirgen dalgası çağırarak koridoru ve çevredeki rakipleri ezip geçer)"
    ],
    "counters": [
      "McGinnis",
      "Solomon",
      "Lady Geist",
      "Bebop",
      "Venator"
    ],
    "counteredBy": [
      "Seven",
      "Infernus",
      "Dynamo",
      "Vindicta",
      "Grey Talon",
      "Torment Pulse (Yayılan İşkence)",
      "Tesla Bullets (Tesla Mermileri)",
      "Ricochet (Mermi Sekmesi)",
      "Debuff Reducer (Zayıflatma Azaltıcı)",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)"
    ],
    "counterItems": [
      "torment-pulse",
      "ricochet",
      "debuff-reducer"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Charge (Ekstra Şarj)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Rapid Recharge (Hızlı Şarj)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Leech (Sülük)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "rem",
    "name": "Rem",
    "title": "Yastık Savaşçısı & Uyku Perisi",
    "role": "Kurtarıcı Destek & Uyku Kontrolcüsü (Sleep / Peel Support)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/rem.png",
    "imageAlt": "Rem karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Pillow Toss ile rakipleri uzağa savurup bekleme sürelerini azaltan, Tag Along ile müttefiklerine sıçrayıp kalkan veren ve Naptime ile rakipleri uyutan destek.",
    "stats": {
      "survive": 55,
      "damage": 75,
      "mobility": 85,
      "control": 95
    },
    "abilities": [
      "Pillow Toss (Yastık Fırlatma: Güvenilir yastığınızı fırlatarak büyü hasarı ve güçlü geri savurma uygular; isabet halinde diğer yeteneklerinizin bekleme süresi azalır)",
      "Tag Along (Uyku Arkadaşı: Dost bir kahramanın yanına sıçrayarak hem ona hem kendinize koruyucu kalkan ve dinlenme yenilenmesi sağlarsınız)",
      "Lil Helpers (Küçük Yardımcılar: Hedef bölgeye rakipleri rahatsız eden, yavaşlatan ve görüş sağlayan rüya perileri gönderir)",
      "Naptime (Uyku Vakti - Ulti: Geniş alana uyku tozu serperek rakipleri derin Uykuya / Sleep daldırır ve uyandırıldıklarında ağır kâbus hasarı vurur)"
    ],
    "counters": [
      "Abrams",
      "Billy",
      "Drifter",
      "Silver",
      "Haze",
      "Seven"
    ],
    "counteredBy": [
      "Viscous",
      "Dynamo",
      "Vindicta",
      "Grey Talon",
      "Yamato",
      "Apollo",
      "Reactive Barrier (Reaktif Bariyer)",
      "Indomitable (Boyun Eğmez)",
      "Unstoppable (Durdurulamaz)",
      "Silence Wave (Susturma Dalgası)"
    ],
    "counterItems": [
      "reactive-barrier",
      "indomitable",
      "unstoppable"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Healing Rite (AKTİF İyileştirme Ayini)",
        "Extra Health (Ekstra Sağlık)",
        "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Healing Booster (İyileştirme Güçlendirici)",
        "Rescue Beam (AKTİF Kurtarma Işını)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Divine Barrier (AKTİF İlahi Bariyer)",
        "Healing Tempo (İyileştirici Tempo)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "shiv",
    "name": "Shiv",
    "title": "Bıçak Sırtı Kabadayı",
    "role": "Yakın Mesafe İnfazcı & Gecikmeli Hasar Tankı (Brawler / Executioner)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/shiv.png",
    "imageAlt": "Shiv karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Serrated Knives ile kanama biriktiren, Slice and Dice ile rakiplerin içinden geçen, Bloodletting ile aldığı ani hasarı zamana yayan ve Killing Blow ile düşük canlı rakipleri anında infaz eden dövüşçü.",
    "stats": {
      "survive": 85,
      "damage": 90,
      "mobility": 75,
      "control": 45
    },
    "abilities": [
      "Serrated Knives (Tırtıklı Bıçaklar: Rakibe kanama açan bir bıçak fırlatır; her ilave isabet kanama yükünü artırır ve süresini yeniler)",
      "Slice and Dice (Biç ve Doğra: İleri doğru atılarak yolunuzdaki tüm rakiplere hasar verirsiniz; Öfke / Rage doluyken bir gölge kopyası aynı kesiği tekrarlar)",
      "Bloodletting (Kan Akıtma: Alınan ani hasarın önemli bir kısmını anında yemek yerine zamana yayar; aktif edildiğinde gecikmiş hasarın bir kısmını tamamen siler)",
      "Killing Blow (Ölümcül Darbe - Ulti: Öfke kazanmanızı sağlar ve canı infaz eşiğinin altındaki bir rakip kahramanın üzerine atılarak onu anında infaz eder)"
    ],
    "counters": [
      "Pocket",
      "Calico",
      "Mina",
      "Graves",
      "Kelvin",
      "Haze"
    ],
    "counteredBy": [
      "Lady Geist",
      "Vindicta",
      "Grey Talon",
      "Mo & Krill",
      "Warden",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Decay (Çürüme)",
      "Ethereal Shift (Ruhani Değişim)",
      "Cheat Death (Kefen Yırtan)",
      "Slowing Hex (Yavaşlatma Büyüsü)"
    ],
    "counterItems": [
      "healbane",
      "toxic-bullets",
      "slowing-hex"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Charge (Ekstra Şarj)",
        "Extra Health (Ekstra Sağlık)",
        "Close Quarters (Yakın Mesafe)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Decay (Çürüme)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Fortitude (Metanet)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Colossus (AKTİF Dev)",
        "Leech (Sülük)",
        "Boundless Spirit (Sınırsız Büyü)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "silver",
    "name": "Silver",
    "title": "Kurtadam Dönüşümcüsü & Yakın Mesafe Avcısı",
    "role": "Atılgan Dövüşçü & Görünmezlik Avcısı (Lycan Brawler / Tracker)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/silver.png",
    "imageAlt": "Silver karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Boot Kick ile rakipleri tekmeleyip sersemleten, Mauling Leap ve Go For The Throat ile yaralı hedeflerin boğazına atılan ve Lycan Curse ile kurtadam formuna dönüşen avcı.",
    "stats": {
      "survive": 80,
      "damage": 85,
      "mobility": 85,
      "control": 65
    },
    "abilities": [
      "Boot Kick (Çizme Tekmesi: Yakındaki rakibe sert bir tekme savurarak geri iter, sersemletir ve üzerine gümüş saçma ateşler)",
      "Go For The Throat (Boğaza Saldır: Yaralı veya kanayan hedefin üzerine atılarak yüksek yakın dövüş hasarı verir ve can çalar)",
      "Mauling Leap (Vahşi Sıçrama: İleri doğru sıçrayarak pençe darbesi indirir ve rakiplerin hareket hızını düşürür)",
      "Lycan Curse (Kurtadam Laneti - Ulti: Vahşi kurtadam formuna dönüşerek yüksek hareket hızı, can yenilemesi ve ölümcül yakın dövüş saldırıları kazanır)"
    ],
    "counters": [
      "Haze",
      "Calico",
      "Grey Talon",
      "Pocket",
      "Vindicta"
    ],
    "counteredBy": [
      "Apollo",
      "Abrams",
      "Kelvin",
      "Rem",
      "Mo & Krill",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Rebuttal (Karşı Saldırı)",
      "Metal Skin (Metal Deri)"
    ],
    "counterItems": [
      "slowing-hex",
      "healbane",
      "metal-skin"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Melee Lifesteal (Vampir Yumruklar)",
        "Close Quarters (Yakın Mesafe)",
        "Rapid Rounds (Seri Atış)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Lifestrike (İyileştiren Yumruk)",
        "Berserker (Cinnetkâr)",
        "Swift Striker (Tempolu Atış)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Crushing Fists (Ezici Yumruklar)",
        "Siphon Bullets (Can Çalma Mermileri)",
        "Unstoppable (Durdurulamaz)",
        "Phantom Strike (AKTİF Hayalet Saldırı)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "solomon",
    "name": "Solomon",
    "title": "Büyükusta Satranç Taktisyeni",
    "role": "Taktiksel Bölge Kontrolcüsü & Konum Manipülatörü (Chess Tactician / Zone Mage)",
    "difficulty": "Orta",
    "image": "/assets/characters/solomon.png",
    "imageAlt": "Solomon karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Setup Bishop ile sahaya kalıcı Fil yerleştiren, Kingside Knight ile L şeklinde sıçrayan At darbesi vuran ve Develop Queen ile Vezir çağırarak savaş alanını yöneten büyükusta.",
    "stats": {
      "survive": 90,
      "damage": 70,
      "mobility": 50,
      "control": 85
    },
    "abilities": [
      "Setup Bishop (Fil Konumlandır: Seçilen noktaya kalıcı bir satranç Fili yerleştirir; Fil hareket ettirildiğinde yolundaki rakiplere büyü hasarı ve yavaşlatma uygular)",
      "Kingside Knight (Şah Kanadı Atı: L şeklinde sıçrayan bir At darbesi göndererek hedef alandaki rakipleri havaya savurur ve kalkan kazandırır)",
      "Castling Bulwark (Rok Kalesi: Yerleştirdiğiniz taşla yer değiştirerek veya aranızda koruyucu bir hat kurarak büyü direnci kazanırsınız)",
      "Develop Queen (Veziri Geliştir - Ulti: Savaş alanına güçlü bir Vezir çağırarak tüm satranç taşlarınızı harekete geçirir ve geniş alanı mühürler)"
    ],
    "counters": [
      "McGinnis",
      "Graves",
      "Warden",
      "Abrams",
      "Victor"
    ],
    "counteredBy": [
      "Lash",
      "Calico",
      "Pocket",
      "Seven",
      "Lady Geist",
      "Doorman",
      "Warp Stone (Işınlanma Taşı)",
      "Silence Wave (Susturma Dalgası)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "warp-stone",
      "silence-glyph",
      "spellbreaker"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Extra Charge (Ekstra Şarj)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Rapid Recharge (Hızlı Şarj)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "doorman",
    "name": "Doorman",
    "title": "Boyutsal Otel Kapıcısı",
    "role": "Portal Manipülatörü & Konum Bozucu (Portal / Displacement Support)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/doorman.png",
    "imageAlt": "Doorman karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Call Bell ile gecikmeli patlayan zil fırlatan, Doorway ile duvarlar arasında iki yönlü portal açan, Luggage Cart ile rakipleri sürükleyen ve Hotel Guest ile başka boyuta sürgün eden uzman.",
    "stats": {
      "survive": 75,
      "damage": 70,
      "mobility": 90,
      "control": 90
    },
    "abilities": [
      "Call Bell (Resepsiyon Zili: Çarpma anında büyü hasarı veren bir zil fırlatır; kısa bir gecikmenin ardından çınlayarak patlar ve rakipleri yavaşlatır)",
      "Doorway (Boyut Kapısı: İki duvar veya yüzey arasında hem müttefiklerin hem de mermilerin içinden geçebileceği iki yönlü bir portal kapısı açar)",
      "Luggage Cart (Bavul Arabası: İleri doğru hızla giden bir otel bavul arabası sürerek çarptığı rakipleri sürükler ve duvara çarptırır)",
      "Hotel Guest (Otel Misafiri - Ulti: Hedef rakip kahramanı geçici olarak boyutsal otel odasına sürgün eder; süre bitiminde yüksek hasarla geri döner)"
    ],
    "counters": [
      "McGinnis",
      "Kelvin",
      "Solomon",
      "Abrams",
      "Victor",
      "Haze"
    ],
    "counteredBy": [
      "Dynamo",
      "Seven",
      "Infernus",
      "Wraith",
      "Pocket",
      "Silence Wave (Susturma Dalgası)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Reactive Barrier (Reaktif Bariyer)",
      "Ethereal Shift (Ruhani Değişim)"
    ],
    "counterItems": [
      "silence-glyph",
      "slowing-hex",
      "reactive-barrier"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Extra Charge (Ekstra Şarj)",
        "Extra Health (Ekstra Sağlık)",
        "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Reactive Barrier (Reaktif Bariyer)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Unstoppable (Durdurulamaz)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "victor",
    "name": "Victor",
    "title": "Acı Bataryalı Reanimasyon Devi",
    "role": "Hasar Yansıtan Ön Saf Juggernaut (Pain Battery / Reanimator Tank)",
    "difficulty": "Düşük - Orta",
    "image": "/assets/characters/victor.png",
    "imageAlt": "Victor karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Aldığı her hasarla Pain Battery bataryasını doldurup çoklu elektrik şoku ateşleyen, Jumpstart ile kendi canını yakıp yüksek yenilenme/hız kazanan ve ölümden dönen dev.",
    "stats": {
      "survive": 100,
      "damage": 75,
      "mobility": 45,
      "control": 75
    },
    "abilities": [
      "Pain Battery (Acı Bataryası: Alınan her hasar pasif olarak bataryanızı doldurur; dolduğunda aktif edilerek yakındaki rakiplere çoklu elektrik şoku ateşler)",
      "Jumpstart (Şok Başlangıç: Kendinize bir miktar büyü hasarı vererek yüksek voltaj yüklenirsiniz; ardından hızla azalan yüksek Can Yenilenmesi ve Hareket Hızı kazanırsınız)",
      "Aura of Suffering (Izdırap Aurası: Çevrenizdeki rakiplere sürekli elektrik hasarı veren ve büyü dirençlerini eriten bir alan açar)",
      "Shocking Reanimation (Şok Edici Yeniden Canlanma - Ulti: Ölümcül hasar aldığınızda elektrik patlamasıyla yeniden ayağa kalkarak savaşa devam edersiniz)"
    ],
    "counters": [
      "Haze",
      "Vyper",
      "Rat King",
      "Lash",
      "Calico",
      "Bebop"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Lady Geist",
      "Nurse Harrow",
      "Venator",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Decay (Çürüme)",
      "Spirit Resilience (Büyü Dayanıklılığı)",
      "Spellbreaker (Büyü Bozan)"
    ],
    "counterItems": [
      "healbane",
      "toxic-bullets",
      "decay"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Health (Ekstra Sağlık)",
        "Extra Regen (Ekstra Yenilenme)",
        "Extra Spirit (Ekstra Büyü)",
        "Melee Lifesteal (Vampir Yumruklar)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Fortitude (Metanet)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Spirit Resilience (Büyü Dayanıklılığı)"
      ],
      "lateGame": [
        "Leech (Sülük)",
        "Colossus (AKTİF Dev)",
        "Healing Tempo (İyileştirici Tempo)",
        "Unstoppable (Durdurulamaz)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "sinclair",
    "name": "Sinclair",
    "title": "Muhteşem İllüzyonist Çift",
    "role": "Kontrol Büyücüsü & Ulti Kopyalayıcı (Control / Trickster Mage)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/sinclair.png",
    "imageAlt": "Sinclair karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Vexing Bolt ve Spectral Assistant ile uzaktan büyü hasarı vuran, Rabbit Hex ile rakipleri savunmasız tavşana dönüştüren ve Audience Participation ile rakip ultilerini kopyalayan sihirbaz.",
    "stats": {
      "survive": 50,
      "damage": 85,
      "mobility": 65,
      "control": 90
    },
    "abilities": [
      "Vexing Bolt (Şaşırtıcı Ok: Uçuş sırasında yönünü yeniden hedefleyebildiğiniz, seyahat mesafesine göre hasarı artan bir büyü oku ateşler)",
      "Spectral Assistant (Hayalet Asistan: Seçilen noktaya sizinle birlikte ateş eden bir illüzyon asistan gönderir; tekrar basarak asistanla yer değiştirebilirsiniz)",
      "Rabbit Hex (Tavşan Büyüsü: Hedef alandaki rakipleri kısa süreliğine savunmasız bir tavşana dönüştürür; hareket ederler ancak saldırı yapamaz ve fazladan hasar alırlar)",
      "Audience Participation (Seyirci Katılımı - Ulti: Hedef rakip kahramanın ulti yeteneğini kopyalayarak kısa süre içinde bizzat kullanmanızı sağlar)"
    ],
    "counters": [
      "Dynamo",
      "Lash",
      "Seven",
      "Kelvin",
      "Haze",
      "Yamato",
      "Silver"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Unstoppable (Durdurulamaz)",
      "Indomitable (Boyun Eğmez)",
      "Debuff Reducer (Zayıflatma Azaltıcı)",
      "Silence Wave (Susturma Dalgası)"
    ],
    "counterItems": [
      "debuff-reducer",
      "unstoppable",
      "silence-glyph"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Warp Stone (Işınlanma Taşı)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Ethereal Shift (Ruhani Değişim)",
        "Escalating Exposure (Artan Hassasiyet)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "venator",
    "name": "Venator",
    "title": "Engizisyon Avcısı & Kutsanmış Arbaletçi",
    "role": "Anti-Heal Bombacısı & Tuzakçı Nişancı (Inquisitor / Anti-Tank Marksman)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/venator.png",
    "imageAlt": "Venator karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Consecrating Grenade ile seken ve rakipleri ateşe verip iyileşmelerini kıran bomba atan, Gutshot ile yakın hedefleri geri savuran ve Ira Domini ile zırh delen avcı.",
    "stats": {
      "survive": 55,
      "damage": 90,
      "mobility": 60,
      "control": 75
    },
    "abilities": [
      "Consecrating Grenade (Kutsanmış Bomba: Patlamadan önce seken bir bomba fırlatarak silah hasarı verir ve rakipleri ateşe vererek iyileşmelerini azaltır)",
      "Gutshot (Karın Atışı: Yakın ve orta mesafede rakibi geri savuran ve kanama açan ağır bir saçma/kazık ateşler)",
      "Hex-Lined Snap Trap (Büyülü Çelik Kapan: Zemine rakipleri olduğu yere sabitleyen ve büyü/mermi direncini kıran bir av kapanı kurar)",
      "Ira Domini (İlahi Gazap - Ulti: Ağır arbaletini yükleyerek kalkanları ve zırhı delip geçen yıkıcı kazıklar ateşler)"
    ],
    "counters": [
      "Abrams",
      "Victor",
      "Mo & Krill",
      "Shiv",
      "Drifter",
      "Silver",
      "Billy"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Pocket",
      "Violet",
      "Mina",
      "Bebop",
      "Paradox",
      "Metal Skin (Metal Deri)",
      "Plated Armor (Kaplamalı Zırh)",
      "Return Fire (AKTİF İade-i Ateş)",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
      "Debuff Reducer (Zayıflatma Azaltıcı)"
    ],
    "counterItems": [
      "metal-skin",
      "plated-armor",
      "dispel-magic"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
        "Extra Health (Ekstra Sağlık)"
      ],
      "coreItems": [
        "Sharpshooter (Keskin Nişancı)",
        "Headhunter (Kelle Avcısı)",
        "Toxic Bullets (Toksik Mermiler)",
        "Long Range (Uzun Menzil)"
      ],
      "lateGame": [
        "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
        "Glass Cannon (Kırılgan Kudret)",
        "Lucky Shot (Şanslı Atış)",
        "Plated Armor (Kaplamalı Zırh)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "violet",
    "name": "Violet",
    "title": "Canlı Mürekkep & Sürrealist Ressam",
    "role": "Yönlendirilebilir Mermi & Alan Dondurma Büyücüsü (Ink Mage / Control Carry)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/violet.png",
    "imageAlt": "Violet karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Living Ink ile sonraki 3 mermisini canlandırıp havada fareyle yönlendiren, Still Life ile rakipleri tablo gibi donduran ve Abstract Landscape ile boya üzerinde kayan ressam.",
    "stats": {
      "survive": 55,
      "damage": 90,
      "mobility": 95,
      "control": 55
    },
    "abilities": [
      "Living Ink (Canlı Mürekkep: Sonraki 3 merminizi canlandırarak uçuş sırasında fare imlecinizle yönlendirmenizi ve büyü hasarı vurmanızı sağlar)",
      "Still Life (Natürmort: Hedef alandaki rakipleri kısa süreliğine tablo gibi dondurarak hareketsiz bırakır)",
      "Abstract Landscape (Soyut Manzara: Zeminde boya izi bırakarak ileri doğru faz kayması yapar ve hareket hızı kazanır)",
      "Masterpiece (Başyapıt - Ulti: Geniş bir alanı boya fırtınasıyla kaplayarak içerideki rakiplere yüksek alan büyü hasarı ve yavaşlatma uygular)"
    ],
    "counters": [
      "Vindicta",
      "Grey Talon",
      "McGinnis",
      "Abrams",
      "Billy",
      "Silver"
    ],
    "counteredBy": [
      "Mo & Krill",
      "Wraith",
      "Pocket",
      "Viscous",
      "Calico",
      "Haze",
      "Silence Wave (Susturma Dalgası)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Reactive Barrier (Reaktif Bariyer)",
      "Unstoppable (Durdurulamaz)"
    ],
    "counterItems": [
      "silence-glyph",
      "slowing-hex",
      "reactive-barrier"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
        "Spirit Lifesteal (Büyü Can Çalması)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Escalating Exposure (Artan Hassasiyet)",
        "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "viscous",
    "name": "Viscous",
    "title": "Derinlerin Psişik Jölesi",
    "role": "Kurtarıcı Destek & Alan Bozucu (Disrupter / Peel Support)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/viscous.png",
    "imageAlt": "Viscous karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Splatter ile alan hasarı vuran, The Cube ile kendisini veya müttefikini dokunulmaz bir iyileşme küpüne alan, Puddle Punch ile rakipleri yumruklayıp savuran ve Goo Ball ile haritada yuvarlanan uzman.",
    "stats": {
      "survive": 85,
      "damage": 70,
      "mobility": 85,
      "control": 85
    },
    "abilities": [
      "Splatter (Sıçratma: Duvarlardan seken ve geçtiği yerlerde rakipleri yavaşlatan jöle birikintileri bırakan büyük bir jöle topu fırlatır)",
      "The Cube (İyileştirme Küpü: Kendinizi veya bir müttefiki 4 saniyeliğine tüm hasarlara karşı dokunulmaz kılan, zayıflatmaları temizleyen ve hızla iyileştiren bir küpe alır)",
      "Puddle Punch (Birikinti Yumruğu: Herhangi bir yüzeyden dev bir jöle yumruğu çıkararak rakipleri havaya ve uzağa savurur; Hafif Yakın Dövüş sayılır)",
      "Goo Ball (Dev Jöle Topu - Ulti: Yüksek hızda yuvarlanan, duvarlardan seken ve çarptığı rakipleri sersemletip ezen dev bir jöle topuna dönüşürsünüz)"
    ],
    "counters": [
      "Bebop",
      "Infernus",
      "Pocket",
      "Nurse Harrow",
      "Abrams",
      "Billy",
      "Silver"
    ],
    "counteredBy": [
      "Dynamo",
      "Mo & Krill",
      "Vindicta",
      "Violet",
      "Silence Wave (Susturma Dalgası)",
      "Slowing Hex (Yavaşlatma Büyüsü)",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)"
    ],
    "counterItems": [
      "silence-glyph",
      "healbane",
      "slowing-hex"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Surge of Power (GÜÇLENDİR Güç Artışı)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Leech (Sülük)",
        "Echo Shard (GÜÇLENDİR Yankı Parçası)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "title": "Zehirli Sürüngen Haydut",
    "role": "Kayarak Çatışan Yakın Mesafe DPS (Slide Marksman / Skirmisher)",
    "difficulty": "Orta - Yüksek",
    "image": "/assets/characters/vyper.png",
    "imageAlt": "Vyper karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Slither pasifiyle neredeyse sonsuz kayma (Slide) mesafesine ve kayarken sınırsız cephaneye sahip olan, Lethal Venom ile zehirleyen ve Petrifying Bola ile hedefleri taşlaştıran nişancı.",
    "stats": {
      "survive": 55,
      "damage": 90,
      "mobility": 90,
      "control": 70
    },
    "abilities": [
      "Screwjab Dagger (Burgu Hançeri: Büyü hasarı ve yavaşlatma uygulayan bir hançer fırlatır; aynı hedefe art arda isabet eden her hançer hasarı ve yavaşlatmayı katlar)",
      "Lethal Venom (Ölümcül Zehir: Hedefe gecikmeli tetiklenen ölümcül bir zehir enjekte eder; patladığında hedefin eksik canına oranla yüksek büyü hasarı vurur)",
      "Slither (Sürünme - Pasif: Kayma / Slide mesafenizi ve hızınızı büyük ölçüde artırır; kayarken silahınız cephane tüketmez ve sınırsız mermiyle ateş eder)",
      "Petrifying Bola (Taşlaştıran Bola - Ulti: Patladığında alandaki rakipleri Taşlaştıran / Petrify bir bola fırlatır; taşlaşan hedefler sersemler ancak dış hasara bağışık olur)"
    ],
    "counters": [
      "Abrams",
      "Graves",
      "Seven",
      "Dynamo",
      "McGinnis",
      "Lady Geist"
    ],
    "counteredBy": [
      "Kelvin",
      "Warden",
      "Rem",
      "Celeste",
      "Victor",
      "Metal Skin (Metal Deri)",
      "Return Fire (AKTİF İade-i Ateş)",
      "Plated Armor (Kaplamalı Zırh)",
      "Juggernaut (Yıkıcı Güç)",
      "Dispel Magic (AKTİF Etki Geçirme Büyüsü)"
    ],
    "counterItems": [
      "metal-skin",
      "return-fire",
      "juggernaut"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Rapid Rounds (Seri Atış)",
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Swift Striker (Tempolu Atış)",
        "Toxic Bullets (Toksik Mermiler)",
        "Kinetic Dash (Kinetik Atılma)",
        "Headhunter (Kelle Avcısı)"
      ],
      "lateGame": [
        "Ricochet (Mermi Sekmesi)",
        "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
        "Frenzy (Savaş Çılgınlığı)",
        "Siphon Bullets (Can Çalma Mermileri)"
      ]
    },
    "patchTrend": "neutral"
  },
  {
    "id": "warden",
    "name": "Warden",
    "title": "Yorulmak Bilmez Simya Muhafızı",
    "role": "Ön Saf Dövüşçü & Anti-Mobilite (Juggernaut / Anti-Mobility)",
    "difficulty": "Düşük - Orta",
    "image": "/assets/characters/warden.png",
    "imageAlt": "Warden karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Alchemical Flask ile rakiplerin kuvvetini (Stamina) azaltan, Willpower ile kalkan ve hız kazanan, Binding Word ile kaçamayanları kafese alan ve Last Stand ultisiyle çevresindekilerden can emen savaşçı.",
    "stats": {
      "survive": 85,
      "damage": 80,
      "mobility": 65,
      "control": 80
    },
    "abilities": [
      "Alchemical Flask (Simya Şişesi: İsabet ettiği rakiplere hasar veren, Silah Hasarlarını, Hareket Hızlarını ve Kuvvetlerini / Stamina azaltan bir şişe fırlatır)",
      "Willpower (İrade Gücü: Size koruyucu bir Büyü Kalkanı / Spirit Shield ve geçici Hareket Hızı kazandırır)",
      "Binding Word (Bağlayıcı Söz: Bir rakip kahramanı lanetler; hedef 2.5 saniye içinde işaretli çemberden çıkamazsa yüksek hasar alır ve olduğu yere Hapsedilir / Immobilize)",
      "Last Stand (Son Direniş - Ulti: Kısa bir hazırlığın ardından çevrenizde nabız gibi atan bir dalga yayarak rakiplere ağır büyü hasarı verir ve verdiğiniz hasar kadar iyileşirsiniz)"
    ],
    "counters": [
      "Haze",
      "Vyper",
      "Calico",
      "Apollo",
      "Abrams",
      "Billy"
    ],
    "counteredBy": [
      "Vindicta",
      "Grey Talon",
      "Doorman",
      "Pocket",
      "Viscous",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Decay (Çürüme)",
      "Warp Stone (Işınlanma Taşı)",
      "Debuff Reducer (Zayıflatma Azaltıcı)"
    ],
    "counterItems": [
      "healbane",
      "toxic-bullets",
      "warp-stone"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Health (Ekstra Sağlık)",
        "Extra Spirit (Ekstra Büyü)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Extra Regen (Ekstra Yenilenme)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Superior Duration (Üstün Süre Uzatıcı)",
        "Fortitude (Metanet)",
        "Slowing Hex (Yavaşlatma Büyüsü)"
      ],
      "lateGame": [
        "Leech (Sülük)",
        "Unstoppable (Durdurulamaz)",
        "Siphon Bullets (Can Çalma Mermileri)",
        "Colossus (AKTİF Dev)"
      ]
    },
    "patchTrend": "buff"
  },
  {
    "id": "wraith",
    "name": "Wraith",
    "title": "Telekinetik Kumarbaz",
    "role": "Tekli Hedef Taşıyıcı & Ayrık İtici (Split Pusher / Carry)",
    "difficulty": "Orta",
    "image": "/assets/characters/wraith.png",
    "imageAlt": "Wraith karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Full Auto ve Card Trick ile yüksek tekli hedef hasarı çıkaran, Project Mind ile duvarların ve çatıların üzerine ışınlanan ve Telekinesis ultisiyle hedefi havaya kaldırıp susturan taşıyıcı.",
    "stats": {
      "survive": 55,
      "damage": 90,
      "mobility": 80,
      "control": 75
    },
    "abilities": [
      "Card Trick (Kart Numarası: Mermi isabetlerinizle iskambil kartları biriktirirsiniz; fırlatılan her kart hedef noktasında patlayarak yüksek büyü hasarı verir)",
      "Project Mind (Zihin Projeksiyonu: Hedeflenen konuma anında ışınlanmanızı ve kısa süreliğine koruyucu bir Bariyer kazanmanızı sağlar)",
      "Full Auto (Tam Otomatik: Size ve yakındaki müttefiklerinize geçici olarak yüksek Atış Hızı ve mermi başına ilave büyü hasarı kazandırır)",
      "Telekinesis (Telekinezi - Ulti: Hedef rakip kahramanı havaya kaldırarak kısa süreliğine Sersemletir ve yere indiğinde Susturma / Silence uygular)"
    ],
    "counters": [
      "Pocket",
      "Infernus",
      "Mina",
      "Violet",
      "McGinnis",
      "Solomon"
    ],
    "counteredBy": [
      "Mo & Krill",
      "Abrams",
      "Dynamo",
      "Viscous",
      "Rem",
      "Metal Skin (Metal Deri)",
      "Return Fire (AKTİF İade-i Ateş)",
      "Plated Armor (Kaplamalı Zırh)",
      "Reactive Barrier (Reaktif Bariyer)",
      "Ethereal Shift (Ruhani Değişim)",
      "Counterspell (Karşı Büyü)"
    ],
    "counterItems": [
      "metal-skin",
      "return-fire",
      "reactive-barrier"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Rapid Rounds (Seri Atış)",
        "Extended Magazine (Genişletilmiş Şarjör)",
        "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
        "Extra Stamina (Ekstra Kuvvet)"
      ],
      "coreItems": [
        "Swift Striker (Tempolu Atış)",
        "Toxic Bullets (Toksik Mermiler)",
        "Hunter's Aura (Avcı Aurası)",
        "Kinetic Dash (Kinetik Atılma)"
      ],
      "lateGame": [
        "Ricochet (Mermi Sekmesi)",
        "Frenzy (Savaş Çılgınlığı)",
        "Siphon Bullets (Can Çalma Mermileri)",
        "Ethereal Shift (Ruhani Değişim)"
      ]
    },
    "patchTrend": "nerf"
  },
  {
    "id": "yamato",
    "name": "Yamato",
    "title": "Yedinci Ay’ın Kılıç Ustası",
    "role": "Yakın Mesafe Büyü/Kılıç Suikastçısı (Melee / Burst Duelist)",
    "difficulty": "Yüksek",
    "image": "/assets/characters/yamato.png",
    "imageAlt": "Yamato karakter portresi - Deadlock oynanabilir kahraman görseli",
    "shortBio": "Power Slash ile yüksek patlayıcı büyü darbesi vuran, Flying Strike ile hedeflere yapışan, Crimson Slash ile iyileşen ve Shadow Transformation ultisiyle kitle kontrole bağışık ve ölümsüz olan düellocu.",
    "stats": {
      "survive": 80,
      "damage": 90,
      "mobility": 85,
      "control": 50
    },
    "abilities": [
      "Power Slash (Güçlü Kesik: 1.4 saniye boyunca güç toplayarak kanalize olur ve ardından önünüzdeki rakiplere yüksek büyü hasarlı tam şarjlı bir kılıç darbesi indirirsiniz)",
      "Flying Slash / Strike (Uçan Darbe: Hedefe doğru bir kanca/ip fırlatarak kendinizi doğrudan rakibin yanına çeker, hasar verir ve yavaşlatırsınız)",
      "Crimson Slash (Kızıl Kesik: Önünüzdeki rakipleri biçerek hasar verir, Atış Hızlarını düşürür ve bir kahramana isabet ederse yüzdesel olarak can yenilersiniz)",
      "Shadow Transformation (Gölge Dönüşümü - Ulti: Gölge ruhunuzla birleşerek yetenek bekleme sürelerinizi sıfırlar, kitle kontrole bağışık ve süre boyunca Ölümsüz olursunuz)"
    ],
    "counters": [
      "Grey Talon",
      "Vindicta",
      "Deadman Danny",
      "Kelvin",
      "Seven",
      "Rem"
    ],
    "counteredBy": [
      "Silence Wave (Susturma Dalgası)",
      "Cursed Relic (AKTİF Lanetli Yadigâr)",
      "Abrams",
      "Mo & Krill",
      "Healbane (Şifakıran)",
      "Toxic Bullets (Toksik Mermiler)",
      "Ethereal Shift (Ruhani Değişim)"
    ],
    "counterItems": [
      "silence-glyph",
      "healbane",
      "ethereal-shift"
    ],
    "popularBuilds": {
      "earlyGame": [
        "Extra Spirit (Ekstra Büyü)",
        "Mystic Burst (Mistik Patlama)",
        "Extra Health (Ekstra Sağlık)",
        "Close Quarters (Yakın Mesafe)"
      ],
      "coreItems": [
        "Improved Spirit (Geliştirilmiş Büyü)",
        "Spirit Lifesteal (Büyü Can Çalması)",
        "Torment Pulse (Yayılan İşkence)",
        "Enduring Speed (Kalıcı Hız)"
      ],
      "lateGame": [
        "Boundless Spirit (Sınırsız Büyü)",
        "Refresher (AKTİF Yenileyici)",
        "Leech (Sülük)",
        "Phantom Strike (AKTİF Hayalet Saldırı)"
      ]
    },
    "patchTrend": "nerf"
  }
];

export const itemsCatalog = {
  "knockdown": {
    "id": "knockdown",
    "name": "Knockdown (Nakavt)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/knockdown.png",
    "imageAlt": "Knockdown (Nakavt) eşya ikonu - Havadaki rakipleri yere düşüren ve sersemleten $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+75 Bonus Can | +%5 Yetenek Menzili | Aktif (Bekleme Süresi: 35 sn, Menzil: 45m): Hedefe 2 saniye gecikmeyle devasa bir örs düşürerek Sersemletme (Stun) uygular. Havadaki hedeflere karşı sersemletme süresi artar ve hedef hızla yere çekilir.",
    "baseDesc": "+75 Bonus Can | +%5 Yetenek Menzili | Aktif (Bekleme Süresi: 35 sn, Menzil: 45m): Hedefe 2 saniye gecikmeyle devasa bir örs düşürerek Sersemletme (Stun) uygular. Havadaki hedeflere karşı sersemletme süresi artar ve hedef hızla yere çekilir.",
    "patchTrend": "neutral"
  },
  "healbane": {
    "id": "healbane",
    "name": "Healbane (Şifakıran)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/healbane.png",
    "imageAlt": "Healbane (Şifakıran) eşya ikonu - Büyü hasarı ile rakibin can yenilemesini azaltan $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+7 Büyü Gücü | Pasif: Büyü (Spirit) hasarınız hedefin aldığı iyileştirmeyi (Incoming Healing) 8 saniyeliğine %35 azaltır. Bu etki altındaki bir rakip kahraman ölürse yüksek miktarda (170) can yenilersiniz.",
    "baseDesc": "+7 Büyü Gücü | Pasif: Büyü (Spirit) hasarınız hedefin aldığı iyileştirmeyi (Incoming Healing) 8 saniyeliğine %35 azaltır. Bu etki altındaki bir rakip kahraman ölürse yüksek miktarda (170) can yenilersiniz.",
    "patchTrend": "nerf"
  },
  "decay": {
    "id": "decay",
    "name": "Decay (Çürüme)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/decay.png",
    "imageAlt": "Decay (Çürüme) eşya ikonu - Rakibe zamanla büyü hasarı veren ve iyileşmeyi azaltan $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+8 Büyü Gücü | +65 Bonus Can | Aktif (Bekleme Süresi: 30 sn, Menzil: 20m): Hedefe mevcut canına oranla 12 saniye boyunca ölümcül olmayan Kanama (Bleed) hasarı verir ve aldığı iyileştirmeyi %55 azaltır.",
    "baseDesc": "+8 Büyü Gücü | +65 Bonus Can | Aktif (Bekleme Süresi: 30 sn, Menzil: 20m): Hedefe mevcut canına oranla 12 saniye boyunca ölümcül olmayan Kanama (Bleed) hasarı verir ve aldığı iyileştirmeyi %55 azaltır.",
    "patchTrend": "buff"
  },
  "reactive-barrier": {
    "id": "reactive-barrier",
    "name": "Reactive Barrier (Reaktif Bariyer)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/reactive-barrier.png",
    "imageAlt": "Reactive Barrier (Reaktif Bariyer) eşya ikonu - Kitle kontrolü altında otomatik kalkan sağlayan $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+1 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 55 sn): Sersemletme (Stun), Zincirleme (Chain), Sabitleme (Immobilize), Uyutma (Sleep) veya Susturma (Silence) etkisine maruz kaldığınızda 10 saniyeliğine 325 kapasiteli koruyucu Bariyer kazanırsınız.",
    "baseDesc": "+1 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 55 sn): Sersemletme (Stun), Zincirleme (Chain), Sabitleme (Immobilize), Uyutma (Sleep) veya Susturma (Silence) etkisine maruz kaldığınızda 10 saniyeliğine 325 kapasiteli koruyucu Bariyer kazanırsınız.",
    "patchTrend": "neutral"
  },
  "silence-glyph": {
    "id": "silence-glyph",
    "name": "Silence Wave (Susturma Dalgası)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Atış)",
    "image": "/assets/items/silence-glyph.png",
    "imageAlt": "Susturma Dalgası (Silence Glyph) eşya ikonu - Rakibin yeteneklerini susturan $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+90 Bonus Can | Aktif (Bekleme Süresi: 42 sn, Menzil: 40m): İleri doğru genişleyen bir mermi göndererek isabet ettiği rakiplere 75 büyü hasarı verir ve kısa süreliğine Susturma (Silence) uygular.",
    "baseDesc": "+90 Bonus Can | Aktif (Bekleme Süresi: 42 sn, Menzil: 40m): İleri doğru genişleyen bir mermi göndererek isabet ettiği rakiplere 75 büyü hasarı verir ve kısa süreliğine Susturma (Silence) uygular.",
    "patchTrend": "buff"
  },
  "metal-skin": {
    "id": "metal-skin",
    "name": "Metal Skin (Metal Deri)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/metal-skin.png",
    "imageAlt": "Metal Skin (Metal Deri) eşya ikonu - Mermi ve yakın dövüş hasarına geçici bağışıklık veren $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%12 Mermi Direnci | Aktif (Bekleme Süresi: 24 sn): 5 saniye boyunca tüm mermi (Bullet) hasarlarına karşı tam bağışıklık sağlar (Aktifken -1.5m/sn hareket hızı ve -%20 atılma mesafesi cezası uygular).",
    "baseDesc": "+%12 Mermi Direnci | Aktif (Bekleme Süresi: 24 sn): 5 saniye boyunca tüm mermi (Bullet) hasarlarına karşı tam bağışıklık sağlar (Aktifken -1.5m/sn hareket hızı ve -%20 atılma mesafesi cezası uygular).",
    "patchTrend": "nerf"
  },
  "warp-stone": {
    "id": "warp-stone",
    "name": "Warp Stone (Işınlanma Taşı)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Işınlanma)",
    "image": "/assets/items/warp-stone.png",
    "imageAlt": "Warp Stone (Işınlanma Taşı) eşya ikonu - Anında ileri ışınlanma ve mermi direnci sağlayan $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "Aktif (Bekleme Süresi: 16 sn): Baktığınız yöne doğru anında 11m ileri ışınlanmanızı sağlar ve 6 saniyeliğine +%30 Mermi Direnci kazandırır.",
    "baseDesc": "Aktif (Bekleme Süresi: 16 sn): Baktığınız yöne doğru anında 11m ileri ışınlanmanızı sağlar ve 6 saniyeliğine +%30 Mermi Direnci kazandırır.",
    "patchTrend": "neutral"
  },
  "debuff-reducer": {
    "id": "debuff-reducer",
    "name": "Debuff Reducer (Zayıflatma Azaltıcı)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/debuff-reducer.png",
    "imageAlt": "Debuff Reducer (Zayıflatma Azaltıcı) eşya ikonu - Olumsuz etki ve sersemletme sürelerini azaltan $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+90 Bonus Can | Pasif: Üzerinize uygulanan tüm olumsuz etkilerin (zayıflatma ve kitle kontrol) süresini azaltır (+%25 Zayıflatma Direnci / Debuff Resist).",
    "baseDesc": "+90 Bonus Can | Pasif: Üzerinize uygulanan tüm olumsuz etkilerin (zayıflatma ve kitle kontrol) süresini azaltır (+%25 Zayıflatma Direnci / Debuff Resist).",
    "patchTrend": "neutral"
  },
  "ethereal-shift": {
    "id": "ethereal-shift",
    "name": "Ethereal Shift (Ruhani Değişim)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/ethereal-shift.png",
    "imageAlt": "Ethereal Shift (Ruhani Değişim) eşya ikonu - Boyut değiştirerek geçici dokunulmazlık sağlayan $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "Aktif: Anında boşluk boyutuna geçerek 4 saniye boyunca Dokunulmaz (Invulnerable) olursunuz. Etki bittiğinde 5 saniyeliğine +20 Büyü Gücü, +%30 Büyü Direnci ve +3m/sn Hareket Hızı kazanırsınız.",
    "baseDesc": "Aktif: Anında boşluk boyutuna geçerek 4 saniye boyunca Dokunulmaz (Invulnerable) olursunuz. Etki bittiğinde 5 saniyeliğine +20 Büyü Gücü, +%30 Büyü Direnci ve +3m/sn Hareket Hızı kazanırsınız.",
    "patchTrend": "neutral"
  },
  "unstoppable": {
    "id": "unstoppable",
    "name": "Unstoppable (Durdurulamaz)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/unstoppable.png",
    "imageAlt": "Unstoppable (Durdurulamaz) eşya ikonu - Tüm kitle kontrol etkilerine bağışıklık veren $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%25 Zayıflatma Direnci | +125 Bonus Can | Aktif (Bekleme Süresi: 60 sn): 5.5 saniye boyunca olumsuz durum etkilerini bastırır; Sersemletme (Stun), Susturma (Silence), Uyutma (Sleep), Sabitleme (Root) ve Silahsızlandırma (Disarm) etkilerine karşı tam bağışıklık sağlar.",
    "baseDesc": "+%25 Zayıflatma Direnci | +125 Bonus Can | Aktif (Bekleme Süresi: 60 sn): 5.5 saniye boyunca olumsuz durum etkilerini bastırır; Sersemletme (Stun), Susturma (Silence), Uyutma (Sleep), Sabitleme (Root) ve Silahsızlandırma (Disarm) etkilerine karşı tam bağışıklık sağlar.",
    "patchTrend": "neutral"
  },
  "slowing-hex": {
    "id": "slowing-hex",
    "name": "Slowing Hex (Yavaşlatma Büyüsü)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/slowing-hex.png",
    "imageAlt": "Slowing Hex (Yavaşlatma Büyüsü) eşya ikonu - Rakibin hareket yeteneklerini kilitleyen $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+0.5m/sn Koşu Hızı | Aktif (Bekleme Süresi: 29 sn): Rakip hedefin hareket hızını %16 düşürür, yerçekimini artırır ve hareket tabanlı tüm yetenek/eşyalarını 3 saniyeliğine Susturur (Silence).",
    "baseDesc": "+0.5m/sn Koşu Hızı | Aktif (Bekleme Süresi: 29 sn): Rakip hedefin hareket hızını %16 düşürür, yerçekimini artırır ve hareket tabanlı tüm yetenek/eşyalarını 3 saniyeliğine Susturur (Silence).",
    "patchTrend": "neutral"
  },
  "close-quarters": {
    "id": "close-quarters",
    "name": "Close Quarters (Yakın Mesafe)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/close-quarters.png",
    "imageAlt": "Close Quarters (Yakın Mesafe) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "+%20 Yakın Dövüş Direnci | Pasif: Hedefe 15m veya daha yakın mesafedeyken +%20 ilave Silah Hasarı verirsiniz.",
    "baseDesc": "+%20 Yakın Dövüş Direnci | Pasif: Hedefe 15m veya daha yakın mesafedeyken +%20 ilave Silah Hasarı verirsiniz.",
    "patchTrend": "neutral"
  },
  "extended-magazine": {
    "id": "extended-magazine",
    "name": "Extended Magazine (Genişletilmiş Şarjör)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/extended-magazine.png",
    "imageAlt": "Extended Magazine (Genişletilmiş Şarjör) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "+%30 Maksimum Cephane | +%8 Silah Hasarı | Şarjör kapasitesini ve temel mermi hasarını artıran Aşama I Silah eşyası.",
    "baseDesc": "+%30 Maksimum Cephane | +%8 Silah Hasarı | Şarjör kapasitesini ve temel mermi hasarını artıran Aşama I Silah eşyası.",
    "patchTrend": "neutral"
  },
  "headshot-booster": {
    "id": "headshot-booster",
    "name": "Headshot Booster (Kafadan Vuruş Güçlendiricisi)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/headshot-booster.png",
    "imageAlt": "Headshot Booster (Kafadan Vuruş Güçlendiricisi) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "+30 Bonus Can | Pasif (Bekleme Süresi: 9 sn): Rakip bir kahramana yapacağınız bir sonraki kafadan vuruş (Headshot) +45 ilave silah hasarı verir.",
    "baseDesc": "+30 Bonus Can | Pasif (Bekleme Süresi: 9 sn): Rakip bir kahramana yapacağınız bir sonraki kafadan vuruş (Headshot) +45 ilave silah hasarı verir.",
    "patchTrend": "neutral"
  },
  "high-velocity-rounds": {
    "id": "high-velocity-rounds",
    "name": "High-Velocity Rounds (Yüksek Hızlı Mermiler)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/high-velocity-rounds.png",
    "imageAlt": "High-Velocity Rounds (Yüksek Hızlı Mermiler) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "+%45 Mermi Hızı | +%8 Silah Hasarı | Mermilerin hedefe ulaşma hızını ve silah hasarını artırır.",
    "baseDesc": "+%45 Mermi Hızı | +%8 Silah Hasarı | Mermilerin hedefe ulaşma hızını ve silah hasarını artırır.",
    "patchTrend": "nerf"
  },
  "monster-rounds": {
    "id": "monster-rounds",
    "name": "Monster Rounds (Anticanavar Mermileri)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/monster-rounds.png",
    "imageAlt": "Monster Rounds (Anticanavar Mermileri) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "NPC/Yaratıklara Karşı +%25 Silah Hasarı | NPC/Yaratıklara Karşı +%25 Mermi Direnci | +1 Çatışma Dışı Can Yenilenmesi | Koridor minyonlarına ve orman kamplarına karşı üstünlük sağlar.",
    "baseDesc": "NPC/Yaratıklara Karşı +%25 Silah Hasarı | NPC/Yaratıklara Karşı +%25 Mermi Direnci | +1 Çatışma Dışı Can Yenilenmesi | Koridor minyonlarına ve orman kamplarına karşı üstünlük sağlar.",
    "patchTrend": "neutral"
  },
  "rapid-rounds": {
    "id": "rapid-rounds",
    "name": "Rapid Rounds (Seri Atış)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/rapid-rounds.png",
    "imageAlt": "Rapid Rounds (Seri Atış) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "+%9 Atış Hızı (Fire Rate) | Silahınızın saniyedeki mermi ateşleme hızını artırır.",
    "baseDesc": "+%9 Atış Hızı (Fire Rate) | Silahınızın saniyedeki mermi ateşleme hızını artırır.",
    "patchTrend": "neutral"
  },
  "restorative-shot": {
    "id": "restorative-shot",
    "name": "Restorative Shot (Şifalı Atış)",
    "category": "Weapon",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/restorative-shot.png",
    "imageAlt": "Restorative Shot (Şifalı Atış) eşya ikonu - $ 800 (Aşama I) değerinde Silah (Turuncu) eşyası",
    "description": "+%6 Silah Hasarı | Pasif (Bekleme Süresi: 6 sn): Bir sonraki merminiz vurduğunuz hedefe göre sizi iyileştirir (Kahramanlardan +50 Can, NPC/Kürelerden +20 Can).",
    "baseDesc": "+%6 Silah Hasarı | Pasif (Bekleme Süresi: 6 sn): Bir sonraki merminiz vurduğunuz hedefe göre sizi iyileştirir (Kahramanlardan +50 Can, NPC/Kürelerden +20 Can).",
    "patchTrend": "neutral"
  },
  "active-reload": {
    "id": "active-reload",
    "name": "Active Reload (Aktif Şarjör Değiştirme)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Zamanlamalı)",
    "image": "/assets/items/active-reload.png",
    "imageAlt": "Active Reload (Aktif Şarjör Değiştirme) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%20 Maksimum Cephane | Pasif (Bekleme Süresi: 12 sn): Şarjör değiştirirken vurgulanan aralıkta tekrar R tuşuna basmak şarjörü anında doldurur; +%25 Atış Hızı, +%18 Mermi Can Çalması ve Hareket Hızı kazandırır.",
    "baseDesc": "+%20 Maksimum Cephane | Pasif (Bekleme Süresi: 12 sn): Şarjör değiştirirken vurgulanan aralıkta tekrar R tuşuna basmak şarjörü anında doldurur; +%25 Atış Hızı, +%18 Mermi Can Çalması ve Hareket Hızı kazandırır.",
    "patchTrend": "neutral"
  },
  "fleetfoot": {
    "id": "fleetfoot",
    "name": "Fleetfoot (AKTİF Hızlı Adımlar)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF",
    "image": "/assets/items/fleetfoot.png",
    "imageAlt": "Fleetfoot (AKTİF Hızlı Adımlar) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%6 Silah Hasarı | +%35 Kayma Mesafesi | +%6 Mermi Direnci | Pasif: Ateş ederken oluşan hareket hızı cezasını kaldırır. | Aktif (Bekleme Süresi: 16 sn): +3m/sn Hareket Hızı ve +%40 Yavaşlatma Direnci sağlar.",
    "baseDesc": "+%6 Silah Hasarı | +%35 Kayma Mesafesi | +%6 Mermi Direnci | Pasif: Ateş ederken oluşan hareket hızı cezasını kaldırır. | Aktif (Bekleme Süresi: 16 sn): +3m/sn Hareket Hızı ve +%40 Yavaşlatma Direnci sağlar.",
    "patchTrend": "neutral"
  },
  "intensifying-magazine": {
    "id": "intensifying-magazine",
    "name": "Intensifying Magazine (Şiddetlenen Şarjör)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/intensifying-magazine.png",
    "imageAlt": "Intensifying Magazine (Şiddetlenen Şarjör) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%20 Maksimum Cephane | Pasif: Silahınızı kesintisiz ateşledikçe Silah Hasarınız kademeli olarak artar (2.5 saniye sonunda maksimum +%45 Silah Hasarı).",
    "baseDesc": "+%20 Maksimum Cephane | Pasif: Silahınızı kesintisiz ateşledikçe Silah Hasarınız kademeli olarak artar (2.5 saniye sonunda maksimum +%45 Silah Hasarı).",
    "patchTrend": "neutral"
  },
  "kinetic-dash": {
    "id": "kinetic-dash",
    "name": "Kinetic Dash (Kinetik Atılma)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/kinetic-dash.png",
    "imageAlt": "Kinetic Dash (Kinetik Atılma) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+1 Stamina | +%12 Stamina Yenilenmesi | Pasif: Atılma-Zıplama (Dash-Jump) yaptığınızda bir sonraki şarjör değişimine kadar (en fazla 7 sn) +%25 Atış Hızı ve +6 geçici mermi kazanırsınız.",
    "baseDesc": "+1 Stamina | +%12 Stamina Yenilenmesi | Pasif: Atılma-Zıplama (Dash-Jump) yaptığınızda bir sonraki şarjör değişimine kadar (en fazla 7 sn) +%25 Atış Hızı ve +6 geçici mermi kazanırsınız.",
    "patchTrend": "neutral"
  },
  "long-range": {
    "id": "long-range",
    "name": "Long Range (Uzun Menzil)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/long-range.png",
    "imageAlt": "Long Range (Uzun Menzil) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%8 Silah Hasar Düşüş Menzili | +0.75m/sn Koşu Hızı | Pasif: Hedefe 15 metreden daha uzaktayken +%40 ilave Silah Hasarı verirsiniz.",
    "baseDesc": "+%8 Silah Hasar Düşüş Menzili | +0.75m/sn Koşu Hızı | Pasif: Hedefe 15 metreden daha uzaktayken +%40 ilave Silah Hasarı verirsiniz.",
    "patchTrend": "neutral"
  },
  "melee-charge": {
    "id": "melee-charge",
    "name": "Melee Charge (Yakın Dövüş Hücumu)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/melee-charge.png",
    "imageAlt": "Melee Charge (Yakın Dövüş Hücumu) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%50 Ağır Yakın Dövüş Mesafesi | +%10 Yakın Dövüş Hasarı | +%6 Mermi Direnci | Pasif (Bekleme Süresi: 5 sn): Rakibe yapacağınız bir sonraki Ağır Yakın Dövüş (Heavy Melee) saldırısı +%25 fazladan hasar verir.",
    "baseDesc": "+%50 Ağır Yakın Dövüş Mesafesi | +%10 Yakın Dövüş Hasarı | +%6 Mermi Direnci | Pasif (Bekleme Süresi: 5 sn): Rakibe yapacağınız bir sonraki Ağır Yakın Dövüş (Heavy Melee) saldırısı +%25 fazladan hasar verir.",
    "patchTrend": "neutral"
  },
  "mystic-shot": {
    "id": "mystic-shot",
    "name": "Mystic Shot (Mistik Atış)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/mystic-shot.png",
    "imageAlt": "Mystic Shot (Mistik Atış) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+7 Büyü Gücü | Pasif (Bekleme Süresi: 8 sn): Bir sonraki merminiz hedefe +40 (+0.9 Büyü Gücü çarpanı) ilave büyü hasarı verir.",
    "baseDesc": "+7 Büyü Gücü | Pasif (Bekleme Süresi: 8 sn): Bir sonraki merminiz hedefe +40 (+0.9 Büyü Gücü çarpanı) ilave büyü hasarı verir.",
    "patchTrend": "neutral"
  },
  "opening-rounds": {
    "id": "opening-rounds",
    "name": "Opening Rounds (Deşici Mermiler)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/opening-rounds.png",
    "imageAlt": "Opening Rounds (Deşici Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%60 Mermi Hızı | +%8 Silah Hasarı | +7 Büyü Gücü | Pasif: Canı %50'nin üzerinde olan rakiplere karşı saldırılarınız +%25 ilave Silah Hasarı verir.",
    "baseDesc": "+%60 Mermi Hızı | +%8 Silah Hasarı | +7 Büyü Gücü | Pasif: Canı %50'nin üzerinde olan rakiplere karşı saldırılarınız +%25 ilave Silah Hasarı verir.",
    "patchTrend": "neutral"
  },
  "recharging-rush": {
    "id": "recharging-rush",
    "name": "Recharging Rush (Şarj Edici Mermiler)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/recharging-rush.png",
    "imageAlt": "Recharging Rush (Şarj Edici Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%20 Maksimum Cephane | +%10 Silah Hasarı | Pasif (Bekleme Süresi: 25 sn): 3.5 saniye içinde 200 ve üzeri silah hasarı vermek, yüklemeli (Charged) yeteneklerinizin her birine 1 yük kazandırır.",
    "baseDesc": "+%20 Maksimum Cephane | +%10 Silah Hasarı | Pasif (Bekleme Süresi: 25 sn): 3.5 saniye içinde 200 ve üzeri silah hasarı vermek, yüklemeli (Charged) yeteneklerinizin her birine 1 yük kazandırır.",
    "patchTrend": "neutral"
  },
  "slowing-bullets": {
    "id": "slowing-bullets",
    "name": "Slowing Bullets (Yavaşlatan Mermiler)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Mermi Etkisi)",
    "image": "/assets/items/slowing-bullets.png",
    "imageAlt": "Slowing Bullets (Yavaşlatan Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "Pasif: Mermileriniz rakiplerde yavaşlatma biriktirerek 3.5 saniyeliğine -%24 Hareket Hızı ve -%20 Atılma Mesafesi uygular.",
    "baseDesc": "Pasif: Mermileriniz rakiplerde yavaşlatma biriktirerek 3.5 saniyeliğine -%24 Hareket Hızı ve -%20 Atılma Mesafesi uygular.",
    "patchTrend": "neutral"
  },
  "spirit-shredder": {
    "id": "spirit-shredder",
    "name": "Spirit Shredder Bullets (Büyü Parçalayan Mermiler)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Mermi Etkisi)",
    "image": "/assets/items/spirit-shredder.png",
    "imageAlt": "Spirit Shredder Bullets (Büyü Parçalayan Mermiler) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "Pasif: Mermileriniz hedefin Büyü Direncini 8 saniyeliğine -%8 düşürür ve size/müttefiklerinize o hedefe karşı +%10 Büyü Can Çalması (Spirit Lifesteal) kazandırır.",
    "baseDesc": "Pasif: Mermileriniz hedefin Büyü Direncini 8 saniyeliğine -%8 düşürür ve size/müttefiklerinize o hedefe karşı +%10 Büyü Can Çalması (Spirit Lifesteal) kazandırır.",
    "patchTrend": "neutral"
  },
  "split-shot": {
    "id": "split-shot",
    "name": "Split Shot (AKTİF Parçalı Atış)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF",
    "image": "/assets/items/split-shot.png",
    "imageAlt": "Split Shot (AKTİF Parçalı Atış) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "Aktif (Bekleme Süresi: 27 sn): Silahınızın 5'li saçma (Multishot) ateşlemesini sağlar. Saldırı başına birden fazla kahramanı vurmak biriken +%8 Silah Hasarı bonusu verir.",
    "baseDesc": "Aktif (Bekleme Süresi: 27 sn): Silahınızın 5'li saçma (Multishot) ateşlemesini sağlar. Saldırı başına birden fazla kahramanı vurmak biriken +%8 Silah Hasarı bonusu verir.",
    "patchTrend": "neutral"
  },
  "stalker": {
    "id": "stalker",
    "name": "Stalker (İz Sürücü)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/stalker.png",
    "imageAlt": "Stalker (İz Sürücü) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "-%50 Ayak Sesi Duyulma Mesafesi | +50 Bonus Can | Pasif (Bekleme Süresi: 6 sn): Yakın mesafeden silah hasarı vermek hedefte yara açarak size hareket hızı kazandırır; yaralı rakipler zamanla büyü hasarı alır ve mermi dirençleri düşer.",
    "baseDesc": "-%50 Ayak Sesi Duyulma Mesafesi | +50 Bonus Can | Pasif (Bekleme Süresi: 6 sn): Yakın mesafeden silah hasarı vermek hedefte yara açarak size hareket hızı kazandırır; yaralı rakipler zamanla büyü hasarı alır ve mermi dirençleri düşer.",
    "patchTrend": "neutral"
  },
  "swift-striker": {
    "id": "swift-striker",
    "name": "Swift Striker (Tempolu Atış)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/swift-striker.png",
    "imageAlt": "Swift Striker (Tempolu Atış) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%20 Atış Hızı (Fire Rate) | +0.75m/sn Koşu Hızı | Seri Atış (Rapid Rounds) eşyasından geliştirilen yüksek tempolu Aşama II Silah eşyası.",
    "baseDesc": "+%20 Atış Hızı (Fire Rate) | +0.75m/sn Koşu Hızı | Seri Atış (Rapid Rounds) eşyasından geliştirilen yüksek tempolu Aşama II Silah eşyası.",
    "patchTrend": "neutral"
  },
  "titanic-magazine": {
    "id": "titanic-magazine",
    "name": "Titanic Magazine (Devasa Şarjör)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/titanic-magazine.png",
    "imageAlt": "Titanic Magazine (Devasa Şarjör) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+%100 Maksimum Cephane | +%14 Silah Hasarı | Şarjör kapasitesini ikiye katlayan ve silah hasarını artıran Aşama II Silah eşyası.",
    "baseDesc": "+%100 Maksimum Cephane | +%14 Silah Hasarı | Şarjör kapasitesini ikiye katlayan ve silah hasarını artıran Aşama II Silah eşyası.",
    "patchTrend": "neutral"
  },
  "weakening-headshot": {
    "id": "weakening-headshot",
    "name": "Weakening Headshot (Zayıflatan Kafadan Vuruş)",
    "category": "Weapon",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/weakening-headshot.png",
    "imageAlt": "Weakening Headshot (Zayıflatan Kafadan Vuruş) eşya ikonu - $ 1600 (Aşama II) değerinde Silah (Turuncu) eşyası",
    "description": "+60 Bonus Can | Pasif: Rakibe kafadan vuruş (Headshot) yapmak 12 saniyeliğine Mermi Direncini -%12 düşürür.",
    "baseDesc": "+60 Bonus Can | Pasif: Rakibe kafadan vuruş (Headshot) yapmak 12 saniyeliğine Mermi Direncini -%12 düşürür.",
    "patchTrend": "neutral"
  },
  "alchemical-fire": {
    "id": "alchemical-fire",
    "name": "Alchemical Fire (AKTİF Simya Alevi)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/alchemical-fire.png",
    "imageAlt": "Alchemical Fire (AKTİF Simya Alevi) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+10 Büyü Gücü | Aktif (Bekleme Süresi: 30 sn): Temas anında patlayan bir simya şişesi fırlatır; oluşan alan saniye başına artan büyü hasarı (Alan Hasarı / AoE) verir ve rakiplerin Mermi Direncini düşürür (Kahraman olmayanlara %50 daha az etkili).",
    "baseDesc": "+10 Büyü Gücü | Aktif (Bekleme Süresi: 30 sn): Temas anında patlayan bir simya şişesi fırlatır; oluşan alan saniye başına artan büyü hasarı (Alan Hasarı / AoE) verir ve rakiplerin Mermi Direncini düşürür (Kahraman olmayanlara %50 daha az etkili).",
    "patchTrend": "neutral"
  },
  "ballistic-enchantment": {
    "id": "ballistic-enchantment",
    "name": "Ballistic Enchantment (GÜÇLENDİR Balistik Sihir)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/ballistic-enchantment.png",
    "imageAlt": "Ballistic Enchantment (GÜÇLENDİR Balistik Sihir) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "Pasif (Güçlendirme / Imbue): Seçilen bir yeteneğin menzilini artırır. Bu yetenekle hasar verdiğiniz her benzersiz rakip kahraman başına +%20 Silah Hasarı kazanırsınız.",
    "baseDesc": "Pasif (Güçlendirme / Imbue): Seçilen bir yeteneğin menzilini artırır. Bu yetenekle hasar verdiğiniz her benzersiz rakip kahraman başına +%20 Silah Hasarı kazanırsınız.",
    "patchTrend": "neutral"
  },
  "berserker": {
    "id": "berserker",
    "name": "Berserker (Cinnetkâr)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/berserker.png",
    "imageAlt": "Berserker (Cinnetkâr) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%8 Mermi Direnci | Pasif: Sürekli hasar aldıkça Silah Hasarınız artar (Alınan her 120 hasar için yük başına +%7 Silah Hasarı, maksimum 10 yük, 10 sn süre).",
    "baseDesc": "+%8 Mermi Direnci | Pasif: Sürekli hasar aldıkça Silah Hasarınız artar (Alınan her 120 hasar için yük başına +%7 Silah Hasarı, maksimum 10 yük, 10 sn süre).",
    "patchTrend": "neutral"
  },
  "blood-tribute": {
    "id": "blood-tribute",
    "name": "Blood Tribute (AKTİF Kanlı Haraç)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/blood-tribute.png",
    "imageAlt": "Blood Tribute (AKTİF Kanlı Haraç) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%8 Zayıflatma Direnci | +%8 Büyü Direnci | +4 Çatışma Dışı Can Yenilenmesi | Aktif (Aç/Kapat): Saniyede 50 Can feda ederek +%35 Atış Hızı, +%35 Zayıflatma Direnci ve Hareket Hızı kazanırsınız.",
    "baseDesc": "+%8 Zayıflatma Direnci | +%8 Büyü Direnci | +4 Çatışma Dışı Can Yenilenmesi | Aktif (Aç/Kapat): Saniyede 50 Can feda ederek +%35 Atış Hızı, +%35 Zayıflatma Direnci ve Hareket Hızı kazanırsınız.",
    "patchTrend": "neutral"
  },
  "burst-fire": {
    "id": "burst-fire",
    "name": "Burst Fire (Hızlı Atış)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/burst-fire.png",
    "imageAlt": "Burst Fire (Hızlı Atış) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%50 Kayma Mesafesi | +%10 Atış Hızı | Pasif (Bekleme Süresi: 9 sn): Mermilerinizden biri rakip kahramana isabet ettiğinde 4.5 saniyeliğine +%32 Atış Hızı ve +1.25m/sn Hareket Hızı kazanırsınız.",
    "baseDesc": "+%50 Kayma Mesafesi | +%10 Atış Hızı | Pasif (Bekleme Süresi: 9 sn): Mermilerinizden biri rakip kahramana isabet ettiğinde 4.5 saniyeliğine +%32 Atış Hızı ve +1.25m/sn Hareket Hızı kazanırsınız.",
    "patchTrend": "neutral"
  },
  "cultist-sacrifice": {
    "id": "cultist-sacrifice",
    "name": "Cultist Sacrifice (AKTİF Kült Kurbanı)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/cultist-sacrifice.png",
    "imageAlt": "Cultist Sacrifice (AKTİF Kült Kurbanı) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+2 Çatışma Dışı Can Yenilenmesi | NPC'lere Karşı +%30 Silah Hasarı | NPC'lere Karşı +%30 Mermi Direnci | Aktif (Bekleme Süresi: 270 sn): Bir düşman NPC'yi kurban ederek %170 Bonus Ruh (Soul) ve uzun süreli güçlendirme kazanırsınız.",
    "baseDesc": "+2 Çatışma Dışı Can Yenilenmesi | NPC'lere Karşı +%30 Silah Hasarı | NPC'lere Karşı +%30 Mermi Direnci | Aktif (Bekleme Süresi: 270 sn): Bir düşman NPC'yi kurban ederek %170 Bonus Ruh (Soul) ve uzun süreli güçlendirme kazanırsınız.",
    "patchTrend": "neutral"
  },
  "escalating-resilience": {
    "id": "escalating-resilience",
    "name": "Escalating Resilience (Artan Direnç)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/escalating-resilience.png",
    "imageAlt": "Escalating Resilience (Artan Direnç) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%35 Maksimum Cephane | +75 Bonus Can | +%18 Silah Hasarı | Pasif: Mermileriniz bir rakip kahramana isabet ettikçe Mermi Direnci kazanırsınız (İsabet başına +%2, maksimum +%30 Mermi Direnci).",
    "baseDesc": "+%35 Maksimum Cephane | +75 Bonus Can | +%18 Silah Hasarı | Pasif: Mermileriniz bir rakip kahramana isabet ettikçe Mermi Direnci kazanırsınız (İsabet başına +%2, maksimum +%30 Mermi Direnci).",
    "patchTrend": "neutral"
  },
  "express-shot": {
    "id": "express-shot",
    "name": "Express Shot (Ekspres Atış)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/express-shot.png",
    "imageAlt": "Express Shot (Ekspres Atış) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%60 Mermi Hızı | +%8 Silah Hasarı | Pasif (Bekleme Süresi: 8 sn): Bir sonraki saldırınız ekstra cephane tüketerek art arda iki kez, +%125 artırılmış silah hasarı ve mermi hızıyla ateşlenir.",
    "baseDesc": "+%60 Mermi Hızı | +%8 Silah Hasarı | Pasif (Bekleme Süresi: 8 sn): Bir sonraki saldırınız ekstra cephane tüketerek art arda iki kez, +%125 artırılmış silah hasarı ve mermi hızıyla ateşlenir.",
    "patchTrend": "nerf"
  },
  "headhunter": {
    "id": "headhunter",
    "name": "Headhunter (Kelle Avcısı)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/headhunter.png",
    "imageAlt": "Headhunter (Kelle Avcısı) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%5 Silah Hasarı | +50 Bonus Can | Pasif (Bekleme Süresi: 8 sn): Rakip bir kahramana yapacağınız bir sonraki kafadan vuruş (Headshot) ilave silah hasarı verir, sizi iyileştirir ve kısa süreliğine hareket hızı kazandırır.",
    "baseDesc": "+%5 Silah Hasarı | +50 Bonus Can | Pasif (Bekleme Süresi: 8 sn): Rakip bir kahramana yapacağınız bir sonraki kafadan vuruş (Headshot) ilave silah hasarı verir, sizi iyileştirir ve kısa süreliğine hareket hızı kazandırır.",
    "patchTrend": "neutral"
  },
  "heroic-aura": {
    "id": "heroic-aura",
    "name": "Heroic Aura (AKTİF Kahramanlık Aurası)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/heroic-aura.png",
    "imageAlt": "Heroic Aura (AKTİF Kahramanlık Aurası) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+1.5m/sn Koşu Hızı | Pasif: 35m çevredeki dost birimlere +%17 Mermi Direnci sağlar. | Aktif (Bekleme Süresi: 22 sn): Size ve yakındaki müttefiklere hareket hızı ve atış hızı kazandırır (Minyonlarda iki kat etkili).",
    "baseDesc": "+1.5m/sn Koşu Hızı | Pasif: 35m çevredeki dost birimlere +%17 Mermi Direnci sağlar. | Aktif (Bekleme Süresi: 22 sn): Size ve yakındaki müttefiklere hareket hızı ve atış hızı kazandırır (Minyonlarda iki kat etkili).",
    "patchTrend": "neutral"
  },
  "hollow-point": {
    "id": "hollow-point",
    "name": "Hollow Point (Oyuklu Mermi)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/hollow-point.png",
    "imageAlt": "Hollow Point (Oyuklu Mermi) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+4.5 Çatışma Dışı Can Yenilenmesi | +125 Bonus Can | Pasif: Canınız %65'in üzerindeyken +%35 ilave Silah Hasarı verirsiniz ve mermileriniz rakiplerin Mermi Direncini 8 saniyeliğine -%10 düşürür.",
    "baseDesc": "+4.5 Çatışma Dışı Can Yenilenmesi | +125 Bonus Can | Pasif: Canınız %65'in üzerindeyken +%35 ilave Silah Hasarı verirsiniz ve mermileriniz rakiplerin Mermi Direncini 8 saniyeliğine -%10 düşürür.",
    "patchTrend": "neutral"
  },
  "hunters-aura": {
    "id": "hunters-aura",
    "name": "Hunter's Aura (Avcı Aurası)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Aura)",
    "image": "/assets/items/hunters-aura.png",
    "imageAlt": "Hunter's Aura (Avcı Aurası) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+100 Bonus Can | +0.75m/sn Koşu Hızı | Pasif (Aura): 15m yakındaki rakiplerin Mermi Direncini -%10 ve Atış Hızını -%15 düşürür. Yakında yalnızca tek bir rakip kahraman varsa bu etki ikiye katlanır.",
    "baseDesc": "+100 Bonus Can | +0.75m/sn Koşu Hızı | Pasif (Aura): 15m yakındaki rakiplerin Mermi Direncini -%10 ve Atış Hızını -%15 düşürür. Yakında yalnızca tek bir rakip kahraman varsa bu etki ikiye katlanır.",
    "patchTrend": "nerf"
  },
  "point-blank": {
    "id": "point-blank",
    "name": "Point Blank (Yakından Vuruş)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/point-blank.png",
    "imageAlt": "Point Blank (Yakından Vuruş) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+75 Bonus Can | +%30 Yakın Dövüş Direnci | Pasif: Hedefe 15m yakın mesafedeyken +%50 Silah Hasarı kazanırsınız ve mermileriniz 2.5 saniyeliğine -%20 Hareket Yavaşlatması uygular.",
    "baseDesc": "+75 Bonus Can | +%30 Yakın Dövüş Direnci | Pasif: Hedefe 15m yakın mesafedeyken +%50 Silah Hasarı kazanırsınız ve mermileriniz 2.5 saniyeliğine -%20 Hareket Yavaşlatması uygular.",
    "patchTrend": "buff"
  },
  "shadow-weave": {
    "id": "shadow-weave",
    "name": "Shadow Weave (AKTİF Gölge Pelerin)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/shadow-weave.png",
    "imageAlt": "Shadow Weave (AKTİF Gölge Pelerin) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+5 Çatışma Dışı Can Yenilenmesi | +2m/sn Koşu Hızı | Aktif (Bekleme Süresi: 37 sn): 13 saniye boyunca Görünmez (Stealth) olursunuz. Görünmezlikten çıktığınızda pusu bonusu olarak yüksek Atış Hızı ve Büyü Gücü kazanırsınız.",
    "baseDesc": "+5 Çatışma Dışı Can Yenilenmesi | +2m/sn Koşu Hızı | Aktif (Bekleme Süresi: 37 sn): 13 saniye boyunca Görünmez (Stealth) olursunuz. Görünmezlikten çıktığınızda pusu bonusu olarak yüksek Atış Hızı ve Büyü Gücü kazanırsınız.",
    "patchTrend": "buff"
  },
  "sharpshooter": {
    "id": "sharpshooter",
    "name": "Sharpshooter (Keskin Nişancı)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/sharpshooter.png",
    "imageAlt": "Sharpshooter (Keskin Nişancı) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%20 Silah Hasar Düşüş Menzili | +%25 Silah Yakınlaştırma (Zoom) | +%60 Mermi Hızı | +%10 Silah Hasarı | +1m/sn Koşu Hızı | -0.7m/sn Hareket Hızı | Pasif: Hedefe minimum mesafeden daha uzaktayken yüksek miktarda ilave Silah Hasarı verirsiniz.",
    "baseDesc": "+%20 Silah Hasar Düşüş Menzili | +%25 Silah Yakınlaştırma (Zoom) | +%60 Mermi Hızı | +%10 Silah Hasarı | +1m/sn Koşu Hızı | -0.7m/sn Hareket Hızı | Pasif: Hedefe minimum mesafeden daha uzaktayken yüksek miktarda ilave Silah Hasarı verirsiniz.",
    "patchTrend": "neutral"
  },
  "spirit-rend": {
    "id": "spirit-rend",
    "name": "Spirit Rend (Büyü Parçalama)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/spirit-rend.png",
    "imageAlt": "Spirit Rend (Büyü Parçalama) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+75 Bonus Can | Pasif: Mermileriniz hedefin Büyü Direncini -%8 düşüren bir zayıflatma uygular ve size/müttefiklerinize o hedefe karşı +%10 Büyü Can Çalması (Spirit Lifesteal) sağlar.",
    "baseDesc": "+75 Bonus Can | Pasif: Mermileriniz hedefin Büyü Direncini -%8 düşüren bir zayıflatma uygular ve size/müttefiklerinize o hedefe karşı +%10 Büyü Can Çalması (Spirit Lifesteal) sağlar.",
    "patchTrend": "neutral"
  },
  "tesla-bullets": {
    "id": "tesla-bullets",
    "name": "Tesla Bullets (Tesla Mermileri)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Mermi Etkisi)",
    "image": "/assets/items/tesla-bullets.png",
    "imageAlt": "Tesla Bullets (Tesla Mermileri) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "Pasif (Bekleme Süresi: 0.2 sn): Mermileriniz %15 olasılıkla hedefi elektrikle çarparak 33 (+0.19 Büyü Gücü) şok hasarı verir; elektrik 8m içindeki en fazla 4 yakındaki rakibe sıçrar.",
    "baseDesc": "Pasif (Bekleme Süresi: 0.2 sn): Mermileriniz %15 olasılıkla hedefi elektrikle çarparak 33 (+0.19 Büyü Gücü) şok hasarı verir; elektrik 8m içindeki en fazla 4 yakındaki rakibe sıçrar.",
    "patchTrend": "neutral"
  },
  "toxic-bullets": {
    "id": "toxic-bullets",
    "name": "Toxic Bullets (Toksik Mermiler)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Mermi Etkisi)",
    "image": "/assets/items/toxic-bullets.png",
    "imageAlt": "Toxic Bullets (Toksik Mermiler) eşya ikonu - Mermilerle kanama ve iyileşme azaltma uygulayan $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "Pasif: Mermileriniz rakiplerde Kanama (Bleed) biriktirerek zamanla maksimum canlarının yüzdesi kadar hasar verir ve kanayan hedefin aldığı iyileştirmeyi -%40 azaltır.",
    "baseDesc": "Pasif: Mermileriniz rakiplerde Kanama (Bleed) biriktirerek zamanla maksimum canlarının yüzdesi kadar hasar verir ve kanayan hedefin aldığı iyileştirmeyi -%40 azaltır.",
    "patchTrend": "buff"
  },
  "weighted-shots": {
    "id": "weighted-shots",
    "name": "Weighted Shots (Ağırlıklı Atışlar)",
    "category": "Weapon",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/weighted-shots.png",
    "imageAlt": "Weighted Shots (Ağırlıklı Atışlar) eşya ikonu - $ 3200 (Aşama III) değerinde Silah (Turuncu) eşyası",
    "description": "+%30 Silah Hasarı | +%22 Zayıflatma Direnci | -%14 Stamina Yenilenmesi | -0.5m/sn Hareket Hızı | Pasif: Mermileriniz rakiplerde yavaşlatma biriktirerek 3.5 saniyeliğine -%24 Hareket Hızı ve -%20 Atılma Mesafesi uygular.",
    "baseDesc": "+%30 Silah Hasarı | +%22 Zayıflatma Direnci | -%14 Stamina Yenilenmesi | -0.5m/sn Hareket Hızı | Pasif: Mermileriniz rakiplerde yavaşlatma biriktirerek 3.5 saniyeliğine -%24 Hareket Hızı ve -%20 Atılma Mesafesi uygular.",
    "patchTrend": "neutral"
  },
  "armor-piercer": {
    "id": "armor-piercer",
    "name": "Armor Piercing Rounds (Zırh Delen)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/armor-piercer.png",
    "imageAlt": "Armor Piercing Rounds (Zırh Delen) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%60 Mermi Hızı | +%8 Silah Hasarı | Pasif: Mermileriniz %60 olasılıkla kaçınılmaz hale gelerek rakipleri deler ve Mermi Dirençlerini tamamen yok sayar.",
    "baseDesc": "+%60 Mermi Hızı | +%8 Silah Hasarı | Pasif: Mermileriniz %60 olasılıkla kaçınılmaz hale gelerek rakipleri deler ve Mermi Dirençlerini tamamen yok sayar.",
    "patchTrend": "buff"
  },
  "capacitor": {
    "id": "capacitor",
    "name": "Capacitor (AKTİF Kondansatör)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/capacitor.png",
    "imageAlt": "Capacitor (AKTİF Kondansatör) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%5 Atış Hızı | Pasif (0.2 sn): Mermileriniz %20 olasılıkla 43 şok hasarı verir ve 10m içindeki 6 hedefe sıçrar. | Aktif (Bekleme Süresi: 40 sn): Hedefe elektrik mermisi göndererek üzerindeki güçlendirmeleri siler ve ağır yavaşlatma uygular.",
    "baseDesc": "+%5 Atış Hızı | Pasif (0.2 sn): Mermileriniz %20 olasılıkla 43 şok hasarı verir ve 10m içindeki 6 hedefe sıçrar. | Aktif (Bekleme Süresi: 40 sn): Hedefe elektrik mermisi göndererek üzerindeki güçlendirmeleri siler ve ağır yavaşlatma uygular.",
    "patchTrend": "neutral"
  },
  "crippling-headshot": {
    "id": "crippling-headshot",
    "name": "Crippling Headshot (Sakatlayan Kafadan Vuruş)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/crippling-headshot.png",
    "imageAlt": "Crippling Headshot (Sakatlayan Kafadan Vuruş) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+125 Bonus Can | Pasif: Rakibe kafadan vuruş (Headshot) yapmak 12 saniye boyunca Mermi Direncini -%16, Büyü Direncini -%16 ve Aldığı İyileştirmeyi -%40 azaltır.",
    "baseDesc": "+125 Bonus Can | Pasif: Rakibe kafadan vuruş (Headshot) yapmak 12 saniye boyunca Mermi Direncini -%16, Büyü Direncini -%16 ve Aldığı İyileştirmeyi -%40 azaltır.",
    "patchTrend": "buff"
  },
  "crushing-fists": {
    "id": "crushing-fists",
    "name": "Crushing Fists (Ezici Yumruklar)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/crushing-fists.png",
    "imageAlt": "Crushing Fists (Ezici Yumruklar) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%60 Ağır Yakın Dövüş Mesafesi | +%22 Yakın Dövüş Hasarı | +%12 Mermi Direnci | Pasif (5 sn): Bir sonraki Ağır Yakın Dövüş saldırınız +%25 bonus hasar verir, Mermi Direncini düşürür ve yük biriktirerek hedefi Sersemletir (Stun).",
    "baseDesc": "+%60 Ağır Yakın Dövüş Mesafesi | +%22 Yakın Dövüş Hasarı | +%12 Mermi Direnci | Pasif (5 sn): Bir sonraki Ağır Yakın Dövüş saldırınız +%25 bonus hasar verir, Mermi Direncini düşürür ve yük biriktirerek hedefi Sersemletir (Stun).",
    "patchTrend": "neutral"
  },
  "frenzy": {
    "id": "frenzy",
    "name": "Frenzy (Savaş Çılgınlığı)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/frenzy.png",
    "imageAlt": "Frenzy (Savaş Çılgınlığı) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+160 Bonus Can | +%15 Atış Hızı | +%10 Mermi Can Çalması | Pasif (Bekleme Süresi: 16 sn): Canınız %50'nin altına düştüğünde mevcut zayıflatmalarınız azalır ve geçici olarak +4m/sn Hareket Hızı, +%40 Atış Hızı ve Büyü Direnci kazanırsınız.",
    "baseDesc": "+160 Bonus Can | +%15 Atış Hızı | +%10 Mermi Can Çalması | Pasif (Bekleme Süresi: 16 sn): Canınız %50'nin altına düştüğünde mevcut zayıflatmalarınız azalır ve geçici olarak +4m/sn Hareket Hızı, +%40 Atış Hızı ve Büyü Direnci kazanırsınız.",
    "patchTrend": "neutral"
  },
  "glass-cannon": {
    "id": "glass-cannon",
    "name": "Glass Cannon (Kırılgan Kudret)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/glass-cannon.png",
    "imageAlt": "Glass Cannon (Kırılgan Kudret) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%85 Silah Hasarı | -%13 Maksimum Can | Pasif: Öldürdüğünüz her rakip kahraman kalıcı olarak +%7 Atış Hızı kazandırır (Maksimum 8 yük; öldüğünüzde 1 yük kaybedilir).",
    "baseDesc": "+%85 Silah Hasarı | -%13 Maksimum Can | Pasif: Öldürdüğünüz her rakip kahraman kalıcı olarak +%7 Atış Hızı kazandırır (Maksimum 8 yük; öldüğünüzde 1 yük kaybedilir).",
    "patchTrend": "buff"
  },
  "lucky-shot": {
    "id": "lucky-shot",
    "name": "Lucky Shot (Şanslı Atış)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/lucky-shot.png",
    "imageAlt": "Lucky Shot (Şanslı Atış) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%30 Maksimum Cephane | Pasif: Mermileriniz %25 olasılıkla güçlenerek isabet halinde +%100 ilave Silah Hasarı verir.",
    "baseDesc": "+%30 Maksimum Cephane | Pasif: Mermileriniz %25 olasılıkla güçlenerek isabet halinde +%100 ilave Silah Hasarı verir.",
    "patchTrend": "neutral"
  },
  "ricochet": {
    "id": "ricochet",
    "name": "Ricochet (Mermi Sekmesi)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/ricochet.png",
    "imageAlt": "Ricochet (Mermi Sekmesi) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%18 Atış Hızı | Pasif: Mermileriniz hedefin 13m yakınındaki 2 rakibe daha sekerek orijinal hasarın %65'ini verir ve tüm mermi etkilerini (Proc) uygular.",
    "baseDesc": "+%18 Atış Hızı | Pasif: Mermileriniz hedefin 13m yakınındaki 2 rakibe daha sekerek orijinal hasarın %65'ini verir ve tüm mermi etkilerini (Proc) uygular.",
    "patchTrend": "neutral"
  },
  "silencer": {
    "id": "silencer",
    "name": "Silencer (Susturucu)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/silencer.png",
    "imageAlt": "Silencer (Susturucu) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%12 Büyü Direnci | Pasif: Mermileriniz hedefin verdiği büyü hasarını 6 saniyeliğine -%25 azaltır ve mermi isabetleri birikerek hedefe Susturma (Silence) uygular.",
    "baseDesc": "+%12 Büyü Direnci | Pasif: Mermileriniz hedefin verdiği büyü hasarını 6 saniyeliğine -%25 azaltır ve mermi isabetleri birikerek hedefe Susturma (Silence) uygular.",
    "patchTrend": "neutral"
  },
  "spellsinger": {
    "id": "spellsinger",
    "name": "Spellslinger (Büyü Silahşoru)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/spellsinger.png",
    "imageAlt": "Spellslinger (Büyü Silahşoru) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%5 Yetenek Bekleme Süresi Azaltma | Pasif: Çatışma halindeyken her yetenek veya eşya kullandığınızda +%11 Atış Hızı ve şarjör değiştirme hızı veren biriken bir güçlendirme kazanırsınız.",
    "baseDesc": "+%5 Yetenek Bekleme Süresi Azaltma | Pasif: Çatışma halindeyken her yetenek veya eşya kullandığınızda +%11 Atış Hızı ve şarjör değiştirme hızı veren biriken bir güçlendirme kazanırsınız.",
    "patchTrend": "neutral"
  },
  "spiritual-overflow": {
    "id": "spiritual-overflow",
    "name": "Spiritual Overflow (Büyülü Coşkunluk)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/spiritual-overflow.png",
    "imageAlt": "Spiritual Overflow (Büyülü Coşkunluk) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%13 Yetenek Süresi | +%15 Büyü Can Çalması | +90 Bonus Can | +8 Büyü Gücü | Pasif: Rakip kahramanlara ateş ederek yük biriktirir; dolduğunda +%25 Atış Hızı, Büyü Gücü ve Büyü Can Çalması kazanırsınız.",
    "baseDesc": "+%13 Yetenek Süresi | +%15 Büyü Can Çalması | +90 Bonus Can | +8 Büyü Gücü | Pasif: Rakip kahramanlara ateş ederek yük biriktirir; dolduğunda +%25 Atış Hızı, Büyü Gücü ve Büyü Can Çalması kazanırsınız.",
    "patchTrend": "buff"
  },
  "extra-charge": {
    "id": "extra-charge",
    "name": "Extra Charge (Ekstra Şarj)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/extra-charge.png",
    "imageAlt": "Extra Charge (Ekstra Şarj) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "+1 İlave Yetenek Yükü | Yüklemeli Yetenekler İçin +7 Bonus Büyü Gücü | Yük (Charge) kullanan yeteneklerin kapasitesini ve hasarını artırır.",
    "baseDesc": "+1 İlave Yetenek Yükü | Yüklemeli Yetenekler İçin +7 Bonus Büyü Gücü | Yük (Charge) kullanan yeteneklerin kapasitesini ve hasarını artırır.",
    "patchTrend": "neutral"
  },
  "extra-spirit": {
    "id": "extra-spirit",
    "name": "Extra Spirit (Ekstra Büyü)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/extra-spirit.png",
    "imageAlt": "Extra Spirit (Ekstra Büyü) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "+10 Büyü Gücü (Spirit Power) | Yetenek ve eşya etkinliğini artıran temel Aşama I Büyü eşyası.",
    "baseDesc": "+10 Büyü Gücü (Spirit Power) | Yetenek ve eşya etkinliğini artıran temel Aşama I Büyü eşyası.",
    "patchTrend": "neutral"
  },
  "golden-goose-egg": {
    "id": "golden-goose-egg",
    "name": "Golden Goose Egg (AKTİF Altın Kaz Yumurtası)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "AKTİF",
    "image": "/assets/items/golden-goose-egg.png",
    "imageAlt": "Golden Goose Egg (AKTİF Altın Kaz Yumurtası) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "-%12 Hasar Cezası | +1m/sn Koşu Hızı | +1 Çatışma Dışı Can Yenilenmesi | Aktif: Yumurtayı kırarak Ruh (Soul) ve kalıcı güçlendirmeler kazanırsınız; yumurtayı envanterinizde ne kadar uzun süre tutarsanız değeri o kadar artar.",
    "baseDesc": "-%12 Hasar Cezası | +1m/sn Koşu Hızı | +1 Çatışma Dışı Can Yenilenmesi | Aktif: Yumurtayı kırarak Ruh (Soul) ve kalıcı güçlendirmeler kazanırsınız; yumurtayı envanterinizde ne kadar uzun süre tutarsanız değeri o kadar artar.",
    "patchTrend": "buff"
  },
  "mystic-burst": {
    "id": "mystic-burst",
    "name": "Mystic Burst (Mistik Patlama)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/mystic-burst.png",
    "imageAlt": "Mystic Burst (Mistik Patlama) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (Bekleme Süresi: 14 sn): Zamanla büyü enerjisi biriktirerek 80'den fazla hasar veren yeteneklerinizin +40 ilave büyü hasarı vurmasını sağlar.",
    "baseDesc": "Pasif (Bekleme Süresi: 14 sn): Zamanla büyü enerjisi biriktirerek 80'den fazla hasar veren yeteneklerinizin +40 ilave büyü hasarı vurmasını sağlar.",
    "patchTrend": "neutral"
  },
  "mystic-expansion": {
    "id": "mystic-expansion",
    "name": "Mystic Expansion (GÜÇLENDİR Mistik Genişleme)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/mystic-expansion.png",
    "imageAlt": "Mystic Expansion (GÜÇLENDİR Mistik Genişleme) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (Güçlendirme / Imbue): Seçtiğiniz bir yeteneğin menzilini ve etki alanı yarıçapını (AoE) +%20 artırır.",
    "baseDesc": "Pasif (Güçlendirme / Imbue): Seçtiğiniz bir yeteneğin menzilini ve etki alanı yarıçapını (AoE) +%20 artırır.",
    "patchTrend": "neutral"
  },
  "mystic-regeneration": {
    "id": "mystic-regeneration",
    "name": "Mystic Regeneration (Mistik Yenilenme)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/mystic-regeneration.png",
    "imageAlt": "Mystic Regeneration (Mistik Yenilenme) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "+50 Bonus Can | Pasif: Rakip kahramanlara büyü hasarı vermek 7 saniye boyunca saniyede +4 Can Yenilenmesi sağlar (Farklı kahramanlara hasar verildiğinde birikir).",
    "baseDesc": "+50 Bonus Can | Pasif: Rakip kahramanlara büyü hasarı vermek 7 saniye boyunca saniyede +4 Can Yenilenmesi sağlar (Farklı kahramanlara hasar verildiğinde birikir).",
    "patchTrend": "neutral"
  },
  "rusted-barrel": {
    "id": "rusted-barrel",
    "name": "Rusted Barrel (AKTİF Paslı Namlu)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/rusted-barrel.png",
    "imageAlt": "Rusted Barrel (AKTİF Paslı Namlu) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "+60 Bonus Can | +0.5m/sn Koşu Hızı | Aktif (Bekleme Süresi: 16 sn, Menzil: 32m): Bir rakibi hedef alarak 5 saniyeliğine Atış Hızını -%32 ve Mermi Direncini -%8 düşürür.",
    "baseDesc": "+60 Bonus Can | +0.5m/sn Koşu Hızı | Aktif (Bekleme Süresi: 16 sn, Menzil: 32m): Bir rakibi hedef alarak 5 saniyeliğine Atış Hızını -%32 ve Mermi Direncini -%8 düşürür.",
    "patchTrend": "neutral"
  },
  "spirit-strike": {
    "id": "spirit-strike",
    "name": "Spirit Strike (Büyülü Yumruk)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/spirit-strike.png",
    "imageAlt": "Spirit Strike (Büyülü Yumruk) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (Bekleme Süresi: 8 sn): Bir rakip kahramana Hafif veya Ağır Yakın Dövüş saldırısı yaptığınızda +40 ilave büyü hasarı verir ve Büyü Direncini düşürür (Hafif yakın dövüşte bekleme süresi 2 katıdır).",
    "baseDesc": "Pasif (Bekleme Süresi: 8 sn): Bir rakip kahramana Hafif veya Ağır Yakın Dövüş saldırısı yaptığınızda +40 ilave büyü hasarı verir ve Büyü Direncini düşürür (Hafif yakın dövüşte bekleme süresi 2 katıdır).",
    "patchTrend": "neutral"
  },
  "arcane-surge": {
    "id": "arcane-surge",
    "name": "Arcane Surge (Gizemli Dalgalanma)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/arcane-surge.png",
    "imageAlt": "Arcane Surge (Gizemli Dalgalanma) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+1 Stamina | +%12 Stamina Yenilenmesi | Pasif: Atılma-Zıplama (Dash-Jump) yaptıktan sonra 7 saniye içinde kullanacağınız ilk yetenek +%12 Menzil, +%15 Süre ve +20 Büyü Gücü kazanır.",
    "baseDesc": "+1 Stamina | +%12 Stamina Yenilenmesi | Pasif: Atılma-Zıplama (Dash-Jump) yaptıktan sonra 7 saniye içinde kullanacağınız ilk yetenek +%12 Menzil, +%15 Süre ve +20 Büyü Gücü kazanır.",
    "patchTrend": "neutral"
  },
  "arctic-blast": {
    "id": "arctic-blast",
    "name": "Arctic Blast (AKTİF Kutup Patlaması)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/arctic-blast.png",
    "imageAlt": "Arctic Blast (AKTİF Kutup Patlaması) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%10 Büyü Direnci | Aktif (Bekleme Süresi: 24 sn): Genişleyen bir buz patlaması yayarak 175 büyü hasarı verir; hedefleri 1 saniye Dondurur (Freeze) ve ardından yavaşlatarak kuvvet yenilenmelerini durdurur.",
    "baseDesc": "+%10 Büyü Direnci | Aktif (Bekleme Süresi: 24 sn): Genişleyen bir buz patlaması yayarak 175 büyü hasarı verir; hedefleri 1 saniye Dondurur (Freeze) ve ardından yavaşlatarak kuvvet yenilenmelerini durdurur.",
    "patchTrend": "neutral"
  },
  "battle-vest": {
    "id": "battle-vest",
    "name": "Battle Vest (Savaş Yeleği)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/battle-vest.png",
    "imageAlt": "Battle Vest (Savaş Yeleği) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+%18 Mermi Direnci | +3 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %65'in üzerindeyken +%22 Silah Hasarı ve +%7 Atış Hızı kazanırsınız.",
    "baseDesc": "+%18 Mermi Direnci | +3 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %65'in üzerindeyken +%22 Silah Hasarı ve +%7 Atış Hızı kazanırsınız.",
    "patchTrend": "buff"
  },
  "boundless-spirit": {
    "id": "boundless-spirit",
    "name": "Boundless Spirit (Sınırsız Büyü)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/boundless-spirit.png",
    "imageAlt": "Boundless Spirit (Sınırsız Büyü) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%15 Büyü Gücü | +30 Büyü Gücü | +75 Bonus Can | +4 Çatışma Dışı Can Yenilenmesi | Yetenek hasarını ve büyü ölçeklenmesini zirveye taşıyan Aşama IV Büyü eşyası.",
    "baseDesc": "+%15 Büyü Gücü | +30 Büyü Gücü | +75 Bonus Can | +4 Çatışma Dışı Can Yenilenmesi | Yetenek hasarını ve büyü ölçeklenmesini zirveye taşıyan Aşama IV Büyü eşyası.",
    "patchTrend": "neutral"
  },
  "bullet-lifesteal-item": {
    "id": "bullet-lifesteal-item",
    "name": "Bullet Lifesteal (Mermi Can Çalması)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/bullet-lifesteal-item.png",
    "imageAlt": "Bullet Lifesteal (Mermi Can Çalması) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "Pasif: Mermi saldırılarınızla verdiğiniz silah hasarının belirli bir yüzdesi kadar can çalmanızı (Bullet Lifesteal) sağlayan Can (Yeşil) eşyası.",
    "baseDesc": "Pasif: Mermi saldırılarınızla verdiğiniz silah hasarının belirli bir yüzdesi kadar can çalmanızı (Bullet Lifesteal) sağlayan Can (Yeşil) eşyası.",
    "patchTrend": "buff"
  },
  "bullet-resilience": {
    "id": "bullet-resilience",
    "name": "Bullet Resilience (Mermi Dayanıklılığı)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/bullet-resilience.png",
    "imageAlt": "Bullet Resilience (Mermi Dayanıklılığı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%35 Mermi Direnci | +5 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %50'nin altına düştüğünde ilave +%15 Mermi Direnci kazanırsınız.",
    "baseDesc": "+%35 Mermi Direnci | +5 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %50'nin altına düştüğünde ilave +%15 Mermi Direnci kazanırsınız.",
    "patchTrend": "buff"
  },
  "bullet-resist-shredder": {
    "id": "bullet-resist-shredder",
    "name": "Bullet Resist Shredder (Mermi Direnci Kırıcı)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/bullet-resist-shredder.png",
    "imageAlt": "Bullet Resist Shredder (Mermi Direnci Kırıcı) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+%9 Mermi Direnci | +%9 Silah Hasarı | Pasif: Rakiplere büyü (Spirit) hasarı verdiğinizde Mermi Dirençlerini 8 saniyeliğine -%10 düşürür.",
    "baseDesc": "+%9 Mermi Direnci | +%9 Silah Hasarı | Pasif: Rakiplere büyü (Spirit) hasarı verdiğinizde Mermi Dirençlerini 8 saniyeliğine -%10 düşürür.",
    "patchTrend": "neutral"
  },
  "cheat-death": {
    "id": "cheat-death",
    "name": "Cheat Death (Kefen Yırtan)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/cheat-death.png",
    "imageAlt": "Cheat Death (Kefen Yırtan) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+200 Bonus Can | +%15 Mermi Direnci | Pasif (Bekleme Süresi: 90 sn): Ölümcül hasar alacağınız anda geçici olarak ölümsüz (Death Immune) olursunuz ve sersemletme dışındaki tüm zayıflatmalarınız silinir.",
    "baseDesc": "+200 Bonus Can | +%15 Mermi Direnci | Pasif (Bekleme Süresi: 90 sn): Ölümcül hasar alacağınız anda geçici olarak ölümsüz (Death Immune) olursunuz ve sersemletme dışındaki tüm zayıflatmalarınız silinir.",
    "patchTrend": "neutral"
  },
  "cold-front": {
    "id": "cold-front",
    "name": "Cold Front (AKTİF Soğuk Dalga)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF",
    "image": "/assets/items/cold-front.png",
    "imageAlt": "Cold Front (AKTİF Soğuk Dalga) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+%6 Büyü Direnci | Aktif (Bekleme Süresi: 25 sn): 10m yarıçapında genişleyen bir buz dalgası yayarak isabet eden rakiplere 95 büyü hasarı verir ve 4 saniyeliğine hareket hızlarını -%48 yavaşlatır.",
    "baseDesc": "+%6 Büyü Direnci | Aktif (Bekleme Süresi: 25 sn): 10m yarıçapında genişleyen bir buz dalgası yayarak isabet eden rakiplere 95 büyü hasarı verir ve 4 saniyeliğine hareket hızlarını -%48 yavaşlatır.",
    "patchTrend": "neutral"
  },
  "colossus": {
    "id": "colossus",
    "name": "Colossus (AKTİF Dev)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/colossus.png",
    "imageAlt": "Colossus (AKTİF Dev) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%25 Temel Can | +%15 Silah Hasarı | Aktif (Bekleme Süresi: 37 sn): Boyutunuz büyür; +%35 Mermi Direnci, +%35 Büyü Direnci ve Yakın Dövüş Hasarı kazanırsınız. Yakındaki rakipler yavaşlar ve atılma hızları düşer.",
    "baseDesc": "+%25 Temel Can | +%15 Silah Hasarı | Aktif (Bekleme Süresi: 37 sn): Boyutunuz büyür; +%35 Mermi Direnci, +%35 Büyü Direnci ve Yakın Dövüş Hasarı kazanırsınız. Yakındaki rakipler yavaşlar ve atılma hızları düşer.",
    "patchTrend": "neutral"
  },
  "compress-cooldown": {
    "id": "compress-cooldown",
    "name": "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/compress-cooldown.png",
    "imageAlt": "Compress Cooldown (GÜÇLENDİR Kısa Dolum Süresi) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (Güçlendirme / Imbue): Seçtiğiniz bir yeteneğin bekleme süresini (Cooldown) +%18 azaltır.",
    "baseDesc": "Pasif (Güçlendirme / Imbue): Seçtiğiniz bir yeteneğin bekleme süresini (Cooldown) +%18 azaltır.",
    "patchTrend": "neutral"
  },
  "counterspell": {
    "id": "counterspell",
    "name": "Counterspell (Karşı Büyü)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/counterspell.png",
    "imageAlt": "Counterspell (Karşı Büyü) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+50 Bonus Can | +5 Büyü Gücü | Pasif (Bekleme Süresi: 23 sn): Bir sonraki savuşturmanız (Parry) sizi rakip yetenek ve eşyaların hasarından/etkilerinden korur. Başarılı büyü savuşturmasında can yeniler, hareket hızı ve büyü gücü kazanırsınız.",
    "baseDesc": "+50 Bonus Can | +5 Büyü Gücü | Pasif (Bekleme Süresi: 23 sn): Bir sonraki savuşturmanız (Parry) sizi rakip yetenek ve eşyaların hasarından/etkilerinden korur. Başarılı büyü savuşturmasında can yeniler, hareket hızı ve büyü gücü kazanırsınız.",
    "patchTrend": "neutral"
  },
  "cursed-relic": {
    "id": "cursed-relic",
    "name": "Cursed Relic (AKTİF Lanetli Yadigâr)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/cursed-relic.png",
    "imageAlt": "Cursed Relic (AKTİF Lanetli Yadigâr) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "Aktif (Bekleme Süresi: 55 sn): Bir rakibi lanetleyerek kanalize yeteneklerini keser, Susturur (Silence), Silahsızlandırır (Disarm), eşya kullanımını kilitler ve ulti dışı güçlendirmelerini siler (Süre boyunca kendi hasarınız da bir miktar azalır).",
    "baseDesc": "Aktif (Bekleme Süresi: 55 sn): Bir rakibi lanetleyerek kanalize yeteneklerini keser, Susturur (Silence), Silahsızlandırır (Disarm), eşya kullanımını kilitler ve ulti dışı güçlendirmelerini siler (Süre boyunca kendi hasarınız da bir miktar azalır).",
    "patchTrend": "neutral"
  },
  "disarming-hex": {
    "id": "disarming-hex",
    "name": "Disarming Hex (AKTİF Etkisizleştirme Büyüsü)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/disarming-hex.png",
    "imageAlt": "Disarming Hex (AKTİF Etkisizleştirme Büyüsü) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+75 Bonus Can | +0.75m/sn Koşu Hızı | Aktif (Bekleme Süresi: 16 sn, Menzil: 32m): Rakip hedefi 4.25 saniyeliğine Silahsızlandırır (Disarm - ateş etmesini engeller) ve Mermi Direncini -%13 düşürür.",
    "baseDesc": "+75 Bonus Can | +0.75m/sn Koşu Hızı | Aktif (Bekleme Süresi: 16 sn, Menzil: 32m): Rakip hedefi 4.25 saniyeliğine Silahsızlandırır (Disarm - ateş etmesini engeller) ve Mermi Direncini -%13 düşürür.",
    "patchTrend": "neutral"
  },
  "dispel-magic": {
    "id": "dispel-magic",
    "name": "Dispel Magic (AKTİF Etki Geçirme Büyüsü)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/dispel-magic.png",
    "imageAlt": "Dispel Magic (AKTİF Etki Geçirme Büyüsü) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%10 Büyü Direnci | Aktif (Bekleme Süresi: 45 sn): Üzerinizdeki ulti kaynaklı olmayan tüm olumsuz etkileri temizler; eğer bir etki temizlenirse kendinizi iyileştirir ve hareket hızı kazanırsınız.",
    "baseDesc": "+%10 Büyü Direnci | Aktif (Bekleme Süresi: 45 sn): Üzerinizdeki ulti kaynaklı olmayan tüm olumsuz etkileri temizler; eğer bir etki temizlenirse kendinizi iyileştirir ve hareket hızı kazanırsınız.",
    "patchTrend": "neutral"
  },
  "divine-barrier": {
    "id": "divine-barrier",
    "name": "Divine Barrier (AKTİF İlahi Bariyer)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/divine-barrier.png",
    "imageAlt": "Divine Barrier (AKTİF İlahi Bariyer) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%10 Yetenek Menzili | +1.5 Çatışma Dışı Can Yenilenmesi | Aktif (Bekleme Süresi: 55 sn): Hedefin üzerindeki sersemletme dışı tüm zayıflatmaları siler, koruyucu Bariyer ve Hareket Hızı sağlar (Başkasına kullanıldığında bekleme süresi yarıya iner).",
    "baseDesc": "+%10 Yetenek Menzili | +1.5 Çatışma Dışı Can Yenilenmesi | Aktif (Bekleme Süresi: 55 sn): Hedefin üzerindeki sersemletme dışı tüm zayıflatmaları siler, koruyucu Bariyer ve Hareket Hızı sağlar (Başkasına kullanıldığında bekleme süresi yarıya iner).",
    "patchTrend": "nerf"
  },
  "diviners-kevlar": {
    "id": "diviners-kevlar",
    "name": "Diviner's Kevlar (Kâhin Zırhı)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/diviners-kevlar.png",
    "imageAlt": "Diviner's Kevlar (Kâhin Zırhı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%15 Yetenek Süresi | +%10 Ulti Bekleme Süresi Azaltma | Pasif (Bekleme Süresi: 40 sn): Ulti yeteneğinizi kullandığınızda 20 saniyeliğine 1000 kapasiteli Bariyer ve +40 Büyü Gücü kazanırsınız.",
    "baseDesc": "+%15 Yetenek Süresi | +%10 Ulti Bekleme Süresi Azaltma | Pasif (Bekleme Süresi: 40 sn): Ulti yeteneğinizi kullandığınızda 20 saniyeliğine 1000 kapasiteli Bariyer ve +40 Büyü Gücü kazanırsınız.",
    "patchTrend": "neutral"
  },
  "duration-extender": {
    "id": "duration-extender",
    "name": "Duration Extender (GÜÇLENDİR Süre Uzatıcı)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/duration-extender.png",
    "imageAlt": "Duration Extender (GÜÇLENDİR Süre Uzatıcı) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (Güçlendirme / Imbue): Seçtiğiniz bir yeteneğin etki süresini +%22 uzatır.",
    "baseDesc": "Pasif (Güçlendirme / Imbue): Seçtiğiniz bir yeteneğin etki süresini +%22 uzatır.",
    "patchTrend": "neutral"
  },
  "echo-shard": {
    "id": "echo-shard",
    "name": "Echo Shard (GÜÇLENDİR Yankı Parçası)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF / GÜÇLENDİR",
    "image": "/assets/items/echo-shard.png",
    "imageAlt": "Echo Shard (GÜÇLENDİR Yankı Parçası) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%5 Büyü Direnci | +%5 Mermi Direnci | Aktif (Bekleme Süresi: 30 sn): Güçlendirilen (Imbued) ulti dışı yeteneğinizin bekleme süresini anında sıfırlar.",
    "baseDesc": "+%5 Büyü Direnci | +%5 Mermi Direnci | Aktif (Bekleme Süresi: 30 sn): Güçlendirilen (Imbued) ulti dışı yeteneğinizin bekleme süresini anında sıfırlar.",
    "patchTrend": "buff"
  },
  "enchanters-emblem": {
    "id": "enchanters-emblem",
    "name": "Enchanter's Emblem (Büyücü Amblemi)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/enchanters-emblem.png",
    "imageAlt": "Enchanter's Emblem (Büyücü Amblemi) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+%18 Büyü Direnci | +2 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %65'in üzerindeyken +15 Büyü Gücü ve +%5 Yetenek Bekleme Süresi Azaltma kazanırsınız.",
    "baseDesc": "+%18 Büyü Direnci | +2 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %65'in üzerindeyken +15 Büyü Gücü ve +%5 Yetenek Bekleme Süresi Azaltma kazanırsınız.",
    "patchTrend": "neutral"
  },
  "enduring-speed": {
    "id": "enduring-speed",
    "name": "Enduring Speed (Kalıcı Hız)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/enduring-speed.png",
    "imageAlt": "Enduring Speed (Kalıcı Hız) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+2m/sn Hareket Hızı | +2 Çatışma Dışı Can Yenilenmesi | Pasif: Rakiplerin uyguladığı hareket yavaşlatması etkilerini azaltır (+%25 Yavaşlatma Direnci / Slow Resist).",
    "baseDesc": "+2m/sn Hareket Hızı | +2 Çatışma Dışı Can Yenilenmesi | Pasif: Rakiplerin uyguladığı hareket yavaşlatması etkilerini azaltır (+%25 Yavaşlatma Direnci / Slow Resist).",
    "patchTrend": "neutral"
  },
  "escalating-exposure": {
    "id": "escalating-exposure",
    "name": "Escalating Exposure (Artan Hassasiyet)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/escalating-exposure.png",
    "imageAlt": "Escalating Exposure (Artan Hassasiyet) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "Büyü Hasarında -%8 Büyü Direnci Kırma | +%17 Büyü Direnci | Pasif (0.7 sn): Büyü hasarı vermek hedefte biriken Büyü Güçlendirmesi (Yük başına +%4.5 Büyü Hasarı Artışı) uygular.",
    "baseDesc": "Büyü Hasarında -%8 Büyü Direnci Kırma | +%17 Büyü Direnci | Pasif (0.7 sn): Büyü hasarı vermek hedefte biriken Büyü Güçlendirmesi (Yük başına +%4.5 Büyü Hasarı Artışı) uygular.",
    "patchTrend": "neutral"
  },
  "extra-health": {
    "id": "extra-health",
    "name": "Extra Health (Ekstra Sağlık)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/extra-health.png",
    "imageAlt": "Extra Health (Ekstra Sağlık) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "+210 Bonus Can | Koridor aşamasında hayatta kalma kapasitesini artıran temel Aşama I Can eşyası.",
    "baseDesc": "+210 Bonus Can | Koridor aşamasında hayatta kalma kapasitesini artıran temel Aşama I Can eşyası.",
    "patchTrend": "neutral"
  },
  "extra-regen": {
    "id": "extra-regen",
    "name": "Extra Regen (Ekstra Yenilenme)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/extra-regen.png",
    "imageAlt": "Extra Regen (Ekstra Yenilenme) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "+2.5 Can Yenilenmesi | +1.5 Çatışma Dışı Can Yenilenmesi | Sürekli sağlık yenilemesi sağlayan Aşama I Can eşyası.",
    "baseDesc": "+2.5 Can Yenilenmesi | +1.5 Çatışma Dışı Can Yenilenmesi | Sürekli sağlık yenilemesi sağlayan Aşama I Can eşyası.",
    "patchTrend": "neutral"
  },
  "extra-stamina": {
    "id": "extra-stamina",
    "name": "Extra Stamina (Ekstra Kuvvet)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/extra-stamina.png",
    "imageAlt": "Extra Stamina (Ekstra Kuvvet) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "+1 Stamina | +%12 Stamina Yenilenmesi | Ekstra atılma (Dash) ve zıplama imkanı sağlayan temel hareketlilik eşyası.",
    "baseDesc": "+1 Stamina | +%12 Stamina Yenilenmesi | Ekstra atılma (Dash) ve zıplama imkanı sağlayan temel hareketlilik eşyası.",
    "patchTrend": "neutral"
  },
  "focus-lens": {
    "id": "focus-lens",
    "name": "Focus Lens (AKTİF Odaklı Mercek)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/focus-lens.png",
    "imageAlt": "Focus Lens (AKTİF Odaklı Mercek) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%10 Atış Hızı | Aktif (Bekleme Süresi: 40 sn): Bir rakibi hedef alarak Susturur (Silence); susturma süresi boyunca hedefe verilen tüm hasarın %35'i etki bittiğinde patlayarak tekrar uygulanır.",
    "baseDesc": "+%10 Atış Hızı | Aktif (Bekleme Süresi: 40 sn): Bir rakibi hedef alarak Susturur (Silence); susturma süresi boyunca hedefe verilen tüm hasarın %35'i etki bittiğinde patlayarak tekrar uygulanır.",
    "patchTrend": "buff"
  },
  "fortitude": {
    "id": "fortitude",
    "name": "Fortitude (Metanet)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/fortitude.png",
    "imageAlt": "Fortitude (Metanet) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+375 Bonus Can | Pasif: 10 saniye boyunca hasar almadığınızda saniyede Maksimum Canınızın %2.25'i kadar can yenilersiniz. Canınız %75'in üzerindeyken +1.5m/sn Hareket Hızı kazanırsınız.",
    "baseDesc": "+375 Bonus Can | Pasif: 10 saniye boyunca hasar almadığınızda saniyede Maksimum Canınızın %2.25'i kadar can yenilersiniz. Canınız %75'in üzerindeyken +1.5m/sn Hareket Hızı kazanırsınız.",
    "patchTrend": "neutral"
  },
  "fury-trance": {
    "id": "fury-trance",
    "name": "Fury Trance (AKTİF Öfke Transı)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/fury-trance.png",
    "imageAlt": "Fury Trance (AKTİF Öfke Transı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%15 Mermi Can Çalması | +100 Bonus Can | +%10 Silah Hasarı | Aktif (Bekleme Süresi: 18 sn): Yüksek Atış Hızı, Büyü Direnci ve Hareket Hızı sağlar, ateş ederken yavaşlamayı kaldırır; ancak süre boyunca sizi Susturur (yetenek kullanımını kapatır).",
    "baseDesc": "+%15 Mermi Can Çalması | +100 Bonus Can | +%10 Silah Hasarı | Aktif (Bekleme Süresi: 18 sn): Yüksek Atış Hızı, Büyü Direnci ve Hareket Hızı sağlar, ateş ederken yavaşlamayı kaldırır; ancak süre boyunca sizi Susturur (yetenek kullanımını kapatır).",
    "patchTrend": "buff"
  },
  "greater-expansion": {
    "id": "greater-expansion",
    "name": "Greater Expansion (Büyük Genişleme)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/greater-expansion.png",
    "imageAlt": "Greater Expansion (Büyük Genişleme) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+%10 Büyü Direnci | Pasif: Tüm yetenek ve eşyalarınızın menzilini ve etki alanı yarıçapını (AoE) +%30 artırır.",
    "baseDesc": "+%10 Büyü Direnci | Pasif: Tüm yetenek ve eşyalarınızın menzilini ve etki alanı yarıçapını (AoE) +%30 artırır.",
    "patchTrend": "neutral"
  },
  "grit": {
    "id": "grit",
    "name": "Grit (AKTİF Azim)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "AKTİF",
    "image": "/assets/items/grit.png",
    "imageAlt": "Grit (AKTİF Azim) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "+1 Çatışma Dışı Can Yenilenmesi | Aktif (Bekleme Süresi: 60 sn): Kısa süreliğine (4 sn) 200 kapasiteli koruyucu bir Bariyer kazandırır.",
    "baseDesc": "+1 Çatışma Dışı Can Yenilenmesi | Aktif (Bekleme Süresi: 60 sn): Kısa süreliğine (4 sn) 200 kapasiteli koruyucu bir Bariyer kazandırır.",
    "patchTrend": "neutral"
  },
  "guardian-ward": {
    "id": "guardian-ward",
    "name": "Guardian Ward (AKTİF Koruyucu Bariyer)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF",
    "image": "/assets/items/guardian-ward.png",
    "imageAlt": "Guardian Ward (AKTİF Koruyucu Bariyer) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+%8 Yetenek Menzili | +1.5 Çatışma Dışı Can Yenilenmesi | Aktif (Bekleme Süresi: 60 sn): Hedefe 250 kapasiteli Bariyer ve geçici Hareket Hızı sağlar (Bir müttefike kullanıldığında bekleme süresi yarıya iner).",
    "baseDesc": "+%8 Yetenek Menzili | +1.5 Çatışma Dışı Can Yenilenmesi | Aktif (Bekleme Süresi: 60 sn): Hedefe 250 kapasiteli Bariyer ve geçici Hareket Hızı sağlar (Bir müttefike kullanıldığında bekleme süresi yarıya iner).",
    "patchTrend": "neutral"
  },
  "healing-booster": {
    "id": "healing-booster",
    "name": "Healing Booster (İyileştirme Güçlendirici)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/healing-booster.png",
    "imageAlt": "Healing Booster (İyileştirme Güçlendirici) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+2 Çatışma Dışı Can Yenilenmesi | Pasif: Yaptığınız tüm iyileştirmelerin (Outgoing Healing) etkinliğini +%20 artırır.",
    "baseDesc": "+2 Çatışma Dışı Can Yenilenmesi | Pasif: Yaptığınız tüm iyileştirmelerin (Outgoing Healing) etkinliğini +%20 artırır.",
    "patchTrend": "nerf"
  },
  "healing-nova": {
    "id": "healing-nova",
    "name": "Healing Nova (AKTİF İyileştirme Dalgası)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/healing-nova.png",
    "imageAlt": "Healing Nova (AKTİF İyileştirme Dalgası) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%5 Yetenek Menzili | +8 Büyü Gücü | Aktif (Bekleme Süresi: 60 sn): 18m yarıçapındaki kendinizi ve yakındaki tüm müttefiklerinizi 2 saniye içinde 325 (+1.1 Büyü Gücü) iyileştirir.",
    "baseDesc": "+%5 Yetenek Menzili | +8 Büyü Gücü | Aktif (Bekleme Süresi: 60 sn): 18m yarıçapındaki kendinizi ve yakındaki tüm müttefiklerinizi 2 saniye içinde 325 (+1.1 Büyü Gücü) iyileştirir.",
    "patchTrend": "buff"
  },
  "healing-rite": {
    "id": "healing-rite",
    "name": "Healing Rite (AKTİF İyileştirme Ayini)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "AKTİF",
    "image": "/assets/items/healing-rite.png",
    "imageAlt": "Healing Rite (AKTİF İyileştirme Ayini) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "Aktif (Bekleme Süresi: 70 sn, Menzil: 30m): Hedefe 20 saniye boyunca toplam 300 Can Yenilenmesi ve +2m/sn Koşu Hızı sağlar (Rakip oyunculardan veya kulelerden hasar alınırsa etki bozulur).",
    "baseDesc": "Aktif (Bekleme Süresi: 70 sn, Menzil: 30m): Hedefe 20 saniye boyunca toplam 300 Can Yenilenmesi ve +2m/sn Koşu Hızı sağlar (Rakip oyunculardan veya kulelerden hasar alınırsa etki bozulur).",
    "patchTrend": "neutral"
  },
  "healing-tempo": {
    "id": "healing-tempo",
    "name": "Healing Tempo (İyileştirici Tempo)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/healing-tempo.png",
    "imageAlt": "Healing Tempo (İyileştirici Tempo) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%25 Yapılan İyileştirme | +%10 Büyü Direnci | +6 Can Yenilenmesi | +4 Çatışma Dışı Can Yenilenmesi | Pasif: Kendinizi veya bir müttefiki iyileştirmek hedefe geçici Atış Hızı ve Hareket Hızı kazandırır.",
    "baseDesc": "+%25 Yapılan İyileştirme | +%10 Büyü Direnci | +6 Can Yenilenmesi | +4 Çatışma Dışı Can Yenilenmesi | Pasif: Kendinizi veya bir müttefiki iyileştirmek hedefe geçici Atış Hızı ve Hareket Hızı kazandırır.",
    "patchTrend": "neutral"
  },
  "improved-spirit": {
    "id": "improved-spirit",
    "name": "Improved Spirit (Geliştirilmiş Büyü)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/improved-spirit.png",
    "imageAlt": "Improved Spirit (Geliştirilmiş Büyü) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+18 Büyü Gücü (Spirit Power) | +1.5 Çatışma Dışı Can Yenilenmesi | Ekstra Büyü eşyasından geliştirilen Aşama II Büyü eşyası.",
    "baseDesc": "+18 Büyü Gücü (Spirit Power) | +1.5 Çatışma Dışı Can Yenilenmesi | Ekstra Büyü eşyasından geliştirilen Aşama II Büyü eşyası.",
    "patchTrend": "neutral"
  },
  "indomitable": {
    "id": "indomitable",
    "name": "Indomitable (Boyun Eğmez)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/indomitable.png",
    "imageAlt": "Indomitable (Boyun Eğmez) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%10 Mermi Direnci | +%10 Büyü Direnci | +2 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 55 sn): Maruz kalacağınız bir sonraki Sersemletme, Zincirleme, Sabitleme, Uyutma, Susturma veya Korku etkisini otomatik olarak temizler ve Bariyer kazandırır.",
    "baseDesc": "+%10 Mermi Direnci | +%10 Büyü Direnci | +2 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 55 sn): Maruz kalacağınız bir sonraki Sersemletme, Zincirleme, Sabitleme, Uyutma, Susturma veya Korku etkisini otomatik olarak temizler ve Bariyer kazandırır.",
    "patchTrend": "neutral"
  },
  "infuser": {
    "id": "infuser",
    "name": "Infuser (AKTİF Aşılayıcı)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/infuser.png",
    "imageAlt": "Infuser (AKTİF Aşılayıcı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%15 Büyü Can Çalması | +%10 Büyü Direnci | +100 Bonus Can | +8 Büyü Gücü | Aktif (Bekleme Süresi: 30 sn): 7 saniyeliğine +%75 Büyü Can Çalması ve +30 Büyü Gücü kazandırır.",
    "baseDesc": "+%15 Büyü Can Çalması | +%10 Büyü Direnci | +100 Bonus Can | +8 Büyü Gücü | Aktif (Bekleme Süresi: 30 sn): 7 saniyeliğine +%75 Büyü Can Çalması ve +30 Büyü Gücü kazandırır.",
    "patchTrend": "buff"
  },
  "inhibitor": {
    "id": "inhibitor",
    "name": "Inhibitor (Köstek)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif (Mermi Etkisi)",
    "image": "/assets/items/inhibitor.png",
    "imageAlt": "Inhibitor (Köstek) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%10 Silah Hasarı | +150 Bonus Can | Pasif: Mermileriniz hedefte birikerek 5 saniyeliğine rakibin verdiği hasarı -%30 ve aldığı iyileştirmeyi -%40 azaltır.",
    "baseDesc": "+%10 Silah Hasarı | +150 Bonus Can | Pasif: Mermileriniz hedefte birikerek 5 saniyeliğine rakibin verdiği hasarı -%30 ve aldığı iyileştirmeyi -%40 azaltır.",
    "patchTrend": "neutral"
  },
  "juggernaut": {
    "id": "juggernaut",
    "name": "Juggernaut (Yıkıcı Güç)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/juggernaut.png",
    "imageAlt": "Juggernaut (Yıkıcı Güç) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%50 Yavaşlatma Direnci | +2.5m/sn Hareket Hızı | +%25 Yakın Dövüş Direnci | +15 Can Yenilenmesi | Pasif: Size ateş eden rakiplerin Atış Hızı 4 saniyeliğine -%40 yavaşlar.",
    "baseDesc": "+%50 Yavaşlatma Direnci | +2.5m/sn Hareket Hızı | +%25 Yakın Dövüş Direnci | +15 Can Yenilenmesi | Pasif: Size ateş eden rakiplerin Atış Hızı 4 saniyeliğine -%40 yavaşlar.",
    "patchTrend": "buff"
  },
  "leech": {
    "id": "leech",
    "name": "Leech (Sülük)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/leech.png",
    "imageAlt": "Leech (Sülük) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%30 Büyü Can Çalması | +%30 Mermi Can Çalması | +180 Bonus Can | +%12 Silah Hasarı | +12 Büyü Gücü | Hem silah hem büyü hasarından yüksek miktarda Can Çalma (Lifesteal) sağlayan Aşama IV Can eşyası.",
    "baseDesc": "+%30 Büyü Can Çalması | +%30 Mermi Can Çalması | +180 Bonus Can | +%12 Silah Hasarı | +12 Büyü Gücü | Hem silah hem büyü hasarından yüksek miktarda Can Çalma (Lifesteal) sağlayan Aşama IV Can eşyası.",
    "patchTrend": "buff"
  },
  "lifestrike": {
    "id": "lifestrike",
    "name": "Lifestrike (İyileştiren Yumruk)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/lifestrike.png",
    "imageAlt": "Lifestrike (İyileştiren Yumruk) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%16 Yakın Dövüş Hasarı | +125 Bonus Can | Pasif (Bekleme Süresi: 4 sn): Yakın Dövüş saldırılarınız hedefi yavaşlatır ve verilen yakın dövüş hasarının yüzdesi + sabit miktar kadar sizi iyileştirir.",
    "baseDesc": "+%16 Yakın Dövüş Hasarı | +125 Bonus Can | Pasif (Bekleme Süresi: 4 sn): Yakın Dövüş saldırılarınız hedefi yavaşlatır ve verilen yakın dövüş hasarının yüzdesi + sabit miktar kadar sizi iyileştirir.",
    "patchTrend": "neutral"
  },
  "lightning-scroll": {
    "id": "lightning-scroll",
    "name": "Lightning Scroll (Yıldırım Parşömeni)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/lightning-scroll.png",
    "imageAlt": "Lightning Scroll (Yıldırım Parşömeni) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "Büyü Hasarında -%24 Hareket Yavaşlatması | +50 Bonus Can | +0.75m/sn Koşu Hızı | Pasif: Ulti yeteneğinizle verdiğiniz hasar kısa bir gecikmenin ardından hedefe Sersemletme (Stun) ve ilave büyü hasarı uygular.",
    "baseDesc": "Büyü Hasarında -%24 Hareket Yavaşlatması | +50 Bonus Can | +0.75m/sn Koşu Hızı | Pasif: Ulti yeteneğinizle verdiğiniz hasar kısa bir gecikmenin ardından hedefe Sersemletme (Stun) ve ilave büyü hasarı uygular.",
    "patchTrend": "buff"
  },
  "magic-carpet": {
    "id": "magic-carpet",
    "name": "Magic Carpet (AKTİF Sihirli Halı)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/magic-carpet.png",
    "imageAlt": "Magic Carpet (AKTİF Sihirli Halı) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%15 Yetenek Süresi | +125 Bonus Can | +14 Büyü Gücü | -%15 Yerçekimi | +%25 Hava Kontrolü | Aktif (Bekleme Süresi: 32 sn): Sizi uçurarak uzaklaştıran Sihirli Halı çağırır; uçarken yavaşlatmalara bağışıksınızdır.",
    "baseDesc": "+%15 Yetenek Süresi | +125 Bonus Can | +14 Büyü Gücü | -%15 Yerçekimi | +%25 Hava Kontrolü | Aktif (Bekleme Süresi: 32 sn): Sizi uçurarak uzaklaştıran Sihirli Halı çağırır; uçarken yavaşlatmalara bağışıksınızdır.",
    "patchTrend": "neutral"
  },
  "majestic-leap": {
    "id": "majestic-leap",
    "name": "Majestic Leap (AKTİF Görkemli Sıçrama)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF",
    "image": "/assets/items/majestic-leap.png",
    "imageAlt": "Majestic Leap (AKTİF Görkemli Sıçrama) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "Aktif (Bekleme Süresi: 45 sn): Kendinizi gökyüzüne fırlatarak koruyucu bir Bariyer kazanırsınız; havadayken tekrar kullanarak hızla yere dalış yapabilirsiniz (Rakip kahramanlardan hasar alındığında 5 sn kullanılamaz).",
    "baseDesc": "Aktif (Bekleme Süresi: 45 sn): Kendinizi gökyüzüne fırlatarak koruyucu bir Bariyer kazanırsınız; havadayken tekrar kullanarak hızla yere dalış yapabilirsiniz (Rakip kahramanlardan hasar alındığında 5 sn kullanılamaz).",
    "patchTrend": "neutral"
  },
  "melee-lifesteal": {
    "id": "melee-lifesteal",
    "name": "Melee Lifesteal (Vampir Yumruklar)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/melee-lifesteal.png",
    "imageAlt": "Melee Lifesteal (Vampir Yumruklar) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "+%12 Yakın Dövüş Hasarı | Pasif (Bekleme Süresi: 8 sn): Bir sonraki Yakın Dövüş saldırınız sizi +100 iyileştirir (Kahraman olmayanlara %30 etkili; hafif yakın dövüşte bekleme süresi 1.5 katıdır).",
    "baseDesc": "+%12 Yakın Dövüş Hasarı | Pasif (Bekleme Süresi: 8 sn): Bir sonraki Yakın Dövüş saldırınız sizi +100 iyileştirir (Kahraman olmayanlara %30 etkili; hafif yakın dövüşte bekleme süresi 1.5 katıdır).",
    "patchTrend": "neutral"
  },
  "mercurial-magnum": {
    "id": "mercurial-magnum",
    "name": "Mercurial Magnum (GÜÇLENDİR Merkür Magnum)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/mercurial-magnum.png",
    "imageAlt": "Mercurial Magnum (GÜÇLENDİR Merkür Magnum) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%20 Maksimum Cephane | +7 Büyü Gücü | Pasif (Bekleme Süresi: 14 sn): Güçlendirilen yeteneğiniz zamanla bonus büyü hasarı ve atış hızı biriktirir; kullanıldığında şarjörünüzü doldurur ve bir sonraki şarjöre kadar mermileriniz büyü hasarı verir.",
    "baseDesc": "+%20 Maksimum Cephane | +7 Büyü Gücü | Pasif (Bekleme Süresi: 14 sn): Güçlendirilen yeteneğiniz zamanla bonus büyü hasarı ve atış hızı biriktirir; kullanıldığında şarjörünüzü doldurur ve bir sonraki şarjöre kadar mermileriniz büyü hasarı verir.",
    "patchTrend": "neutral"
  },
  "mystic-regereneration": {
    "id": "mystic-regereneration",
    "name": "Mystic Regeneration (Mistik Yenilenme)",
    "category": "Spirit",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/mystic-regereneration.png",
    "imageAlt": "Mystic Regeneration (Mistik Yenilenme) eşya ikonu - $ 800 (Aşama I) değerinde Büyü (Mor) eşyası",
    "description": "+50 Bonus Can | Pasif: Rakip kahramanlara büyü hasarı vermek 7 saniye boyunca saniyede +4 Can Yenilenmesi sağlar (Farklı kahramanlara hasar verildiğinde birikir).",
    "baseDesc": "+50 Bonus Can | Pasif: Rakip kahramanlara büyü hasarı vermek 7 saniye boyunca saniyede +4 Can Yenilenmesi sağlar (Farklı kahramanlara hasar verildiğinde birikir).",
    "patchTrend": "neutral"
  },
  "mystic-reverb": {
    "id": "mystic-reverb",
    "name": "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/mystic-reverb.png",
    "imageAlt": "Mystic Reverb (GÜÇLENDİR Mistik Titreşimler) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%8 Büyü Can Çalması | Pasif (6.25 sn - Güçlendirme / Imbue): Seçilen yeteneğe Can Çalma kazandırır; isabet eden hedefi yavaşlatır ve kısa bir gecikmeyle çevredeki rakiplere verilen hasarın yüzdesi kadar alan hasarı (AoE) vurur.",
    "baseDesc": "+%8 Büyü Can Çalması | Pasif (6.25 sn - Güçlendirme / Imbue): Seçilen yeteneğe Can Çalma kazandırır; isabet eden hedefi yavaşlatır ve kısa bir gecikmeyle çevredeki rakiplere verilen hasarın yüzdesi kadar alan hasarı (AoE) vurur.",
    "patchTrend": "neutral"
  },
  "mystic-slow": {
    "id": "mystic-slow",
    "name": "Mystic Slow (Mistik Yavaşlatma)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/mystic-slow.png",
    "imageAlt": "Mystic Slow (Mistik Yavaşlatma) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+50 Bonus Can | +0.75m/sn Koşu Hızı | Pasif: Büyü hasarı verdiğiniz hedeflerin Hareket Hızı 2 saniyeliğine -%24 ve Atılma Mesafesi -%12 azalır.",
    "baseDesc": "+50 Bonus Can | +0.75m/sn Koşu Hızı | Pasif: Büyü hasarı verdiğiniz hedeflerin Hareket Hızı 2 saniyeliğine -%24 ve Atılma Mesafesi -%12 azalır.",
    "patchTrend": "buff"
  },
  "mystic-vulnerability": {
    "id": "mystic-vulnerability",
    "name": "Mystic Vulnerability (Mistik Hassasiyet)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/mystic-vulnerability.png",
    "imageAlt": "Mystic Vulnerability (Mistik Hassasiyet) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+%8 Büyü Direnci | Pasif: Bir rakip büyü hasarı aldığında Büyü Direnci 7 saniyeliğine -%8 düşer.",
    "baseDesc": "+%8 Büyü Direnci | Pasif: Bir rakip büyü hasarı aldığında Büyü Direnci 7 saniyeliğine -%8 düşer.",
    "patchTrend": "neutral"
  },
  "phantom-strike": {
    "id": "phantom-strike",
    "name": "Phantom Strike (AKTİF Hayalet Saldırı)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/phantom-strike.png",
    "imageAlt": "Phantom Strike (AKTİF Hayalet Saldırı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%15 Silah Hasarı | +8 Büyü Gücü | Aktif (Bekleme Süresi: 35 sn): Bir rakip hedefe anında ışınlanarak onu yere çeker; büyü hasarı verir, -%40 Hareket Yavaşlatması ve Silahsızlandırma (Disarm) uygular.",
    "baseDesc": "+%15 Silah Hasarı | +8 Büyü Gücü | Aktif (Bekleme Süresi: 35 sn): Bir rakip hedefe anında ışınlanarak onu yere çeker; büyü hasarı verir, -%40 Hareket Yavaşlatması ve Silahsızlandırma (Disarm) uygular.",
    "patchTrend": "neutral"
  },
  "plated-armor": {
    "id": "plated-armor",
    "name": "Plated Armor (Kaplamalı Zırh)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/plated-armor.png",
    "imageAlt": "Plated Armor (Kaplamalı Zırh) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+130 Bonus Can | Pasif: Gelen mermileri %30 olasılıkla saptırarak tüm silah hasarını engeller veya %50 olasılıkla mermilerin isabet etkilerini (On-Hit) önler.",
    "baseDesc": "+130 Bonus Can | Pasif: Gelen mermileri %30 olasılıkla saptırarak tüm silah hasarını engeller veya %50 olasılıkla mermilerin isabet etkilerini (On-Hit) önler.",
    "patchTrend": "neutral"
  },
  "quicksilver-reload": {
    "id": "quicksilver-reload",
    "name": "Quicksilver Reload (GÜÇLENDİR Hızlı Şarjör Değiştirme)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/quicksilver-reload.png",
    "imageAlt": "Quicksilver Reload (GÜÇLENDİR Hızlı Şarjör Değiştirme) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (18 sn - Güçlendirme / Imbue): Seçilen yetenek zamanla +44 büyü hasarı ve +%10 Atış Hızı biriktirir; yetenek kullanıldığında şarjörünüz anında %100 doldurulur.",
    "baseDesc": "Pasif (18 sn - Güçlendirme / Imbue): Seçilen yetenek zamanla +44 büyü hasarı ve +%10 Atış Hızı biriktirir; yetenek kullanıldığında şarjörünüz anında %100 doldurulur.",
    "patchTrend": "neutral"
  },
  "radiant-regeneration": {
    "id": "radiant-regeneration",
    "name": "Radiant Regeneration (Parlak Yenilenme)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/radiant-regeneration.png",
    "imageAlt": "Radiant Regeneration (Parlak Yenilenme) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+90 Bonus Can | Pasif: Rakip kahramanlara büyü hasarı vermek 7 saniye boyunca yüksek Can Yenilenmesi sağlar (Farklı kahramanlara hasar verildiğinde birikir).",
    "baseDesc": "+90 Bonus Can | Pasif: Rakip kahramanlara büyü hasarı vermek 7 saniye boyunca yüksek Can Yenilenmesi sağlar (Farklı kahramanlara hasar verildiğinde birikir).",
    "patchTrend": "nerf"
  },
  "rapid-recharge": {
    "id": "rapid-recharge",
    "name": "Rapid Recharge (Hızlı Şarj)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/rapid-recharge.png",
    "imageAlt": "Rapid Recharge (Hızlı Şarj) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+2 İlave Yetenek Yükü | Yükler Arası +%30 Daha Hızlı Dolum | Yüklemeli Yeteneklerde +%14 Bekleme Süresi Azaltma | +14 Bonus Büyü Gücü | Yüklemeli yeteneklerin dolum hızını ve kapasitesini artırır.",
    "baseDesc": "+2 İlave Yetenek Yükü | Yükler Arası +%30 Daha Hızlı Dolum | Yüklemeli Yeteneklerde +%14 Bekleme Süresi Azaltma | +14 Bonus Büyü Gücü | Yüklemeli yeteneklerin dolum hızını ve kapasitesini artırır.",
    "patchTrend": "neutral"
  },
  "rebuttal": {
    "id": "rebuttal",
    "name": "Rebuttal (Karşı Saldırı)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/rebuttal.png",
    "imageAlt": "Rebuttal (Karşı Saldırı) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "-1.25 sn Savuşturma (Parry) Bekleme Süresi | +%18 Yakın Dövüş Direnci | +75 Bonus Can | Pasif: Rakip bir kahramana karşı başarılı Savuşturma (Parry) yaptığınızda engellenen hasar kadar iyileşir ve o hasarı hedefe geri yansıtırsınız.",
    "baseDesc": "-1.25 sn Savuşturma (Parry) Bekleme Süresi | +%18 Yakın Dövüş Direnci | +75 Bonus Can | Pasif: Rakip bir kahramana karşı başarılı Savuşturma (Parry) yaptığınızda engellenen hasar kadar iyileşir ve o hasarı hedefe geri yansıtırsınız.",
    "patchTrend": "nerf"
  },
  "refresher": {
    "id": "refresher",
    "name": "Refresher (AKTİF Yenileyici)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/refresher.png",
    "imageAlt": "Refresher (AKTİF Yenileyici) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "Aktif (Bekleme Süresi: 300 sn): Tüm yeteneklerinizin bekleme süresini (Cooldown) anında sıfırlar ve tüm yetenek yüklerinizi (Charges) doldurur.",
    "baseDesc": "Aktif (Bekleme Süresi: 300 sn): Tüm yeteneklerinizin bekleme süresini (Cooldown) anında sıfırlar ve tüm yetenek yüklerinizi (Charges) doldurur.",
    "patchTrend": "neutral"
  },
  "rescue-beam": {
    "id": "rescue-beam",
    "name": "Rescue Beam (AKTİF Kurtarma Işını)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/rescue-beam.png",
    "imageAlt": "Rescue Beam (AKTİF Kurtarma Işını) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+0.75m/sn Koşu Hızı | +%6 Yetenek Menzili | Aktif (Bekleme Süresi: 60 sn): Hedef dost kahramanı ve kendinizi Maksimum Canın %20'si oranında iyileştirir; kanalize sırasında hedefi kendinize doğru çekebilirsiniz (Pull).",
    "baseDesc": "+0.75m/sn Koşu Hızı | +%6 Yetenek Menzili | Aktif (Bekleme Süresi: 60 sn): Hedef dost kahramanı ve kendinizi Maksimum Canın %20'si oranında iyileştirir; kanalize sırasında hedefi kendinize doğru çekebilirsiniz (Pull).",
    "patchTrend": "neutral"
  },
  "restorative-locket": {
    "id": "restorative-locket",
    "name": "Restorative Locket (AKTİF Şifalı Madalyon)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF",
    "image": "/assets/items/restorative-locket.png",
    "imageAlt": "Restorative Locket (AKTİF Şifalı Madalyon) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+%8 Büyü Direnci | Aktif (Bekleme Süresi: 20 sn): 32m çevrenizde bir rakip her yetenek kullandığında 1 İyileşme Yükü biriktirir; aktif edildiğinde tüm yükleri tüketerek sizi iyileştirir ve 3'e kadar Stamina yeniler.",
    "baseDesc": "+%8 Büyü Direnci | Aktif (Bekleme Süresi: 20 sn): 32m çevrenizde bir rakip her yetenek kullandığında 1 İyileşme Yükü biriktirir; aktif edildiğinde tüm yükleri tüketerek sizi iyileştirir ve 3'e kadar Stamina yeniler.",
    "patchTrend": "neutral"
  },
  "return-fire": {
    "id": "return-fire",
    "name": "Return Fire (AKTİF İade-i Ateş)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF",
    "image": "/assets/items/return-fire.png",
    "imageAlt": "Return Fire (AKTİF İade-i Ateş) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+%10 Mermi Direnci | Aktif (Bekleme Süresi: 23 sn): 6.5 saniye boyunca size silah veya yetenekle hasar veren her saldırgana otomatik olarak karşı ateş açar (Alınan Mermi Hasarının %65'ini, Büyü Hasarının %25'ini geri yansıtır).",
    "baseDesc": "+%10 Mermi Direnci | Aktif (Bekleme Süresi: 23 sn): 6.5 saniye boyunca size silah veya yetenekle hasar veren her saldırgana otomatik olarak karşı ateş açar (Alınan Mermi Hasarının %65'ini, Büyü Hasarının %25'ini geri yansıtır).",
    "patchTrend": "buff"
  },
  "scourge": {
    "id": "scourge",
    "name": "Scourge (AKTİF Bela)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/scourge.png",
    "imageAlt": "Scourge (AKTİF Bela) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+100 Bonus Can | Aktif (Bekleme Süresi: 35 sn): Dost bir hedefe Büyü Direnci, Zayıflatma Direnci ve çevredeki rakiplere maksimum canlarına oranla hasar veren bir aura uygular.",
    "baseDesc": "+100 Bonus Can | Aktif (Bekleme Süresi: 35 sn): Dost bir hedefe Büyü Direnci, Zayıflatma Direnci ve çevredeki rakiplere maksimum canlarına oranla hasar veren bir aura uygular.",
    "patchTrend": "neutral"
  },
  "silence-wave": {
    "id": "silence-wave",
    "name": "Silence Wave (AKTİF Susturma Dalgası)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "AKTİF (Atış)",
    "image": "/assets/items/silence-wave.png",
    "imageAlt": "Silence Wave (AKTİF Susturma Dalgası) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+90 Bonus Can | Aktif (Bekleme Süresi: 42 sn, Menzil: 40m): İleri doğru genişleyen bir dalga göndererek isabet ettiği rakiplere 75 büyü hasarı verir ve kısa süreliğine Susturma (Silence) uygular.",
    "baseDesc": "+90 Bonus Can | Aktif (Bekleme Süresi: 42 sn, Menzil: 40m): İleri doğru genişleyen bir dalga göndererek isabet ettiği rakiplere 75 büyü hasarı verir ve kısa süreliğine Susturma (Silence) uygular.",
    "patchTrend": "buff"
  },
  "siphon-bullets": {
    "id": "siphon-bullets",
    "name": "Siphon Bullets (Can Çalma Mermileri)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif (Mermi Etkisi)",
    "image": "/assets/items/siphon-bullets.png",
    "imageAlt": "Siphon Bullets (Can Çalma Mermileri) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%15 Silah Hasarı | +%10 Mermi Direnci | Pasif (Bekleme Süresi: 1.2 sn): Mermileriniz rakiplerden 17 saniyeliğine %2.5 Maksimum Can çalar (Etki bittiğinde çalınan can geri döner).",
    "baseDesc": "+%15 Silah Hasarı | +%10 Mermi Direnci | Pasif (Bekleme Süresi: 1.2 sn): Mermileriniz rakiplerden 17 saniyeliğine %2.5 Maksimum Can çalar (Etki bittiğinde çalınan can geri döner).",
    "patchTrend": "neutral"
  },
  "spellbreaker": {
    "id": "spellbreaker",
    "name": "Spellbreaker (Büyü Bozan)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/spellbreaker.png",
    "imageAlt": "Spellbreaker (Büyü Bozan) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%18 Büyü Direnci | +%25 Zayıflatma Direnci | +90 Bonus Can | Pasif (Bekleme Süresi: 9 sn): Alacağınız bir sonraki yüksek büyü hasarını (175 hasar eşiği üzeri) %65 oranında azaltır.",
    "baseDesc": "+%18 Büyü Direnci | +%25 Zayıflatma Direnci | +90 Bonus Can | Pasif (Bekleme Süresi: 9 sn): Alacağınız bir sonraki yüksek büyü hasarını (175 hasar eşiği üzeri) %65 oranında azaltır.",
    "patchTrend": "buff"
  },
  "spellslinger": {
    "id": "spellslinger",
    "name": "Spellslinger (Büyü Silahşoru)",
    "category": "Weapon",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/spellslinger.png",
    "imageAlt": "Spellslinger (Büyü Silahşoru) eşya ikonu - $ 6400 (Aşama IV) değerinde Silah (Turuncu) eşyası",
    "description": "+%5 Yetenek Bekleme Süresi Azaltma | Pasif: Çatışma halindeyken her yetenek veya eşya kullandığınızda +%11 Atış Hızı ve şarjör değiştirme hızı veren biriken bir güçlendirme kazanırsınız.",
    "baseDesc": "+%5 Yetenek Bekleme Süresi Azaltma | Pasif: Çatışma halindeyken her yetenek veya eşya kullandığınızda +%11 Atış Hızı ve şarjör değiştirme hızı veren biriken bir güçlendirme kazanırsınız.",
    "patchTrend": "neutral"
  },
  "spirit-burn": {
    "id": "spirit-burn",
    "name": "Spirit Burn (Yakıcı Büyü)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/spirit-burn.png",
    "imageAlt": "Spirit Burn (Yakıcı Büyü) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%6 Yetenek Menzili | Pasif: Bir rakibe 5 saniye içinde yüksek miktarda büyü hasarı vermek patlama oluşturarak hedefi yakar; yanan rakipler zamanla hasar alır ve iyileşmeleri azalır.",
    "baseDesc": "+%6 Yetenek Menzili | Pasif: Bir rakibe 5 saniye içinde yüksek miktarda büyü hasarı vermek patlama oluşturarak hedefi yakar; yanan rakipler zamanla hasar alır ve iyileşmeleri azalır.",
    "patchTrend": "neutral"
  },
  "spirit-lifesteal-item": {
    "id": "spirit-lifesteal-item",
    "name": "Spirit Lifesteal (Büyü Can Çalması)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/spirit-lifesteal-item.png",
    "imageAlt": "Spirit Lifesteal (Büyü Can Çalması) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "Pasif: Yetenekleriniz ve büyü hasarınızla verdiğiniz hasarın belirli bir yüzdesi kadar can çalmanızı (Spirit Lifesteal) sağlayan Can (Yeşil) eşyası.",
    "baseDesc": "Pasif: Yetenekleriniz ve büyü hasarınızla verdiğiniz hasarın belirli bir yüzdesi kadar can çalmanızı (Spirit Lifesteal) sağlayan Can (Yeşil) eşyası.",
    "patchTrend": "buff"
  },
  "spirit-resilience": {
    "id": "spirit-resilience",
    "name": "Spirit Resilience (Büyü Dayanıklılığı)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/spirit-resilience.png",
    "imageAlt": "Spirit Resilience (Büyü Dayanıklılığı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+%30 Büyü Direnci | +3 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %50'nin altına düştüğünde ilave +%15 Büyü Direnci kazanırsınız.",
    "baseDesc": "+%30 Büyü Direnci | +3 Çatışma Dışı Can Yenilenmesi | Pasif: Canınız %50'nin altına düştüğünde ilave +%15 Büyü Direnci kazanırsınız.",
    "patchTrend": "neutral"
  },
  "spirit-sap": {
    "id": "spirit-sap",
    "name": "Spirit Sap (AKTİF Büyü Zayıflatma)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "AKTİF (Hedefli)",
    "image": "/assets/items/spirit-sap.png",
    "imageAlt": "Spirit Sap (AKTİF Büyü Zayıflatma) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+50 Bonus Can | Aktif (Bekleme Süresi: 22 sn, Menzil: 35m): Bir rakibi hedef alarak 12 saniyeliğine Büyü Direncini -%9 ve Büyü Gücünü -30 düşürür.",
    "baseDesc": "+50 Bonus Can | Aktif (Bekleme Süresi: 22 sn, Menzil: 35m): Bir rakibi hedef alarak 12 saniyeliğine Büyü Direncini -%9 ve Büyü Gücünü -30 düşürür.",
    "patchTrend": "nerf"
  },
  "spirit-shielding": {
    "id": "spirit-shielding",
    "name": "Spirit Shielding (Büyü Kalkanı)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/spirit-shielding.png",
    "imageAlt": "Spirit Shielding (Büyü Kalkanı) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+2.5 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 45 sn): Rakip kahramanlardan 3.5 saniye içinde 225 ve üzeri büyü hasarı aldığınızda 300 kapasiteli Bariyer ve +%15 Büyü Direnci kazanırsınız.",
    "baseDesc": "+2.5 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 45 sn): Rakip kahramanlardan 3.5 saniye içinde 225 ve üzeri büyü hasarı aldığınızda 300 kapasiteli Bariyer ve +%15 Büyü Direnci kazanırsınız.",
    "patchTrend": "nerf"
  },
  "spirit-snatch": {
    "id": "spirit-snatch",
    "name": "Spirit Snatch (Büyü Kapma)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/spirit-snatch.png",
    "imageAlt": "Spirit Snatch (Büyü Kapma) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+%7 Yakın Dövüş Hasarı | +75 Bonus Can | Pasif (Bekleme Süresi: 6 sn): Bir rakip kahramana Hafif veya Ağır Yakın Dövüş saldırısı yaptığınızda ilave büyü hasarı verir, hedefin Büyü Direncini ve Büyü Gücünü çalarsınız.",
    "baseDesc": "+%7 Yakın Dövüş Hasarı | +75 Bonus Can | Pasif (Bekleme Süresi: 6 sn): Bir rakip kahramana Hafif veya Ağır Yakın Dövüş saldırısı yaptığınızda ilave büyü hasarı verir, hedefin Büyü Direncini ve Büyü Gücünü çalarsınız.",
    "patchTrend": "neutral"
  },
  "sprint-boots": {
    "id": "sprint-boots",
    "name": "Sprint Boots (Hızlı Koşma Botları)",
    "category": "Vitality",
    "cost": "$ 800",
    "tier": "Aşama I",
    "activation": "Pasif",
    "image": "/assets/items/sprint-boots.png",
    "imageAlt": "Sprint Boots (Hızlı Koşma Botları) eşya ikonu - $ 800 (Aşama I) değerinde Can (Yeşil) eşyası",
    "description": "+2m/sn Koşu Hızı | +2 Çatışma Dışı Can Yenilenmesi | Harita rotasyonlarını hızlandıran temel Aşama I Can eşyası.",
    "baseDesc": "+2m/sn Koşu Hızı | +2 Çatışma Dışı Can Yenilenmesi | Harita rotasyonlarını hızlandıran temel Aşama I Can eşyası.",
    "patchTrend": "neutral"
  },
  "stamina-mastery": {
    "id": "stamina-mastery",
    "name": "Stamina Mastery (Kuvvet Ustalığı)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/stamina-mastery.png",
    "imageAlt": "Stamina Mastery (Kuvvet Ustalığı) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+2 Stamina | +%18 Stamina Yenilenmesi | +%23 Hava Zıplaması/Atılması Mesafesi | Pasif: Yere inmeden önce fazladan bir Hava Zıplaması (Air Jump) veya Hava Atılması (Air Dash) kullanmanıza olanak tanır.",
    "baseDesc": "+2 Stamina | +%18 Stamina Yenilenmesi | +%23 Hava Zıplaması/Atılması Mesafesi | Pasif: Yere inmeden önce fazladan bir Hava Zıplaması (Air Jump) veya Hava Atılması (Air Dash) kullanmanıza olanak tanır.",
    "patchTrend": "neutral"
  },
  "superior-duration": {
    "id": "superior-duration",
    "name": "Superior Duration (Üstün Süre Uzatıcı)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/superior-duration.png",
    "imageAlt": "Superior Duration (Üstün Süre Uzatıcı) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+%8 Mermi Direnci | Pasif: Tüm yeteneklerinizin ve eşyalarınızın etki süresini +%28 artırır.",
    "baseDesc": "+%8 Mermi Direnci | Pasif: Tüm yeteneklerinizin ve eşyalarınızın etki süresini +%28 artırır.",
    "patchTrend": "neutral"
  },
  "suppressor": {
    "id": "suppressor",
    "name": "Suppressor (Baskılayıcı)",
    "category": "Spirit",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/suppressor.png",
    "imageAlt": "Suppressor (Baskılayıcı) eşya ikonu - $ 1600 (Aşama II) değerinde Büyü (Mor) eşyası",
    "description": "+6 Büyü Gücü | +%8 Mermi Direnci | Pasif: Rakiplere büyü (Spirit) hasarı verdiğinizde Atış Hızlarını 4.5 saniyeliğine -%28 düşürür.",
    "baseDesc": "+6 Büyü Gücü | +%8 Mermi Direnci | Pasif: Rakiplere büyü (Spirit) hasarı verdiğinizde Atış Hızlarını 4.5 saniyeliğine -%28 düşürür.",
    "patchTrend": "neutral"
  },
  "surge-of-power": {
    "id": "surge-of-power",
    "name": "Surge of Power (GÜÇLENDİR Güç Artışı)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "GÜÇLENDİR (Imbue)",
    "image": "/assets/items/surge-of-power.png",
    "imageAlt": "Surge of Power (GÜÇLENDİR Güç Artışı) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "Pasif (Bekleme Süresi: 14 sn - Güçlendirme / Imbue): Seçilen bir yeteneğe kalıcı olarak +28 Büyü Gücü kazandırır. Bu yetenek kullanıldığında +%20 Atış Hızı ve Hareket Hızı kazanır, ateş ederken yavaşlamazsınız.",
    "baseDesc": "Pasif (Bekleme Süresi: 14 sn - Güçlendirme / Imbue): Seçilen bir yeteneğe kalıcı olarak +28 Büyü Gücü kazandırır. Bu yetenek kullanıldığında +%20 Atış Hızı ve Hareket Hızı kazanır, ateş ederken yavaşlamazsınız.",
    "patchTrend": "neutral"
  },
  "tankbuster": {
    "id": "tankbuster",
    "name": "Tankbuster (Tank Patlatan)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/tankbuster.png",
    "imageAlt": "Tankbuster (Tank Patlatan) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+50 Bonus Can | Pasif (Bekleme Süresi: 14 sn): Zamanla bonus büyü hasarı biriktirir; 165'ten fazla hasar veren yeteneklerinizin Büyü Direncini yok sayarak +40 (+hedefin mevcut canının %7.5'i) ilave hasar vurmasını sağlar.",
    "baseDesc": "+50 Bonus Can | Pasif (Bekleme Süresi: 14 sn): Zamanla bonus büyü hasarı biriktirir; 165'ten fazla hasar veren yeteneklerinizin Büyü Direncini yok sayarak +40 (+hedefin mevcut canının %7.5'i) ilave hasar vurmasını sağlar.",
    "patchTrend": "neutral"
  },
  "torment-pulse": {
    "id": "torment-pulse",
    "name": "Torment Pulse (Yayılan İşkence)",
    "category": "Spirit",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif",
    "image": "/assets/items/torment-pulse.png",
    "imageAlt": "Torment Pulse (Yayılan İşkence) eşya ikonu - $ 3200 (Aşama III) değerinde Büyü (Mor) eşyası",
    "description": "+100 Bonus Can | +%22 Yakın Dövüş Direnci | Pasif (Bekleme Süresi: 1.4 sn): 9m yarıçapındaki en yakın iki rakibe periyodik olarak 25 (+0.23 Büyü Gücü) büyü hasarı (Alan Hasarı) verir.",
    "baseDesc": "+100 Bonus Can | +%22 Yakın Dövüş Direnci | Pasif (Bekleme Süresi: 1.4 sn): 9m yarıçapındaki en yakın iki rakibe periyodik olarak 25 (+0.23 Büyü Gücü) büyü hasarı (Alan Hasarı) verir.",
    "patchTrend": "buff"
  },
  "trophy-collector": {
    "id": "trophy-collector",
    "name": "Trophy Collector (Ganimet Avcısı)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif",
    "image": "/assets/items/trophy-collector.png",
    "imageAlt": "Trophy Collector (Ganimet Avcısı) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "NPC'lere Karşı -%15 Silah Hasarı | +2m/sn Koşu Hızı | +2 Çatışma Dışı Can Yenilenmesi | Pasif: Aldığınız her asist veya skor (Kill) başına biriken ilave Koşu Hızı, Yetenek Menzili ve pasif Ruh (Soul) üretimi kazandırır.",
    "baseDesc": "NPC'lere Karşı -%15 Silah Hasarı | +2m/sn Koşu Hızı | +2 Çatışma Dışı Can Yenilenmesi | Pasif: Aldığınız her asist veya skor (Kill) başına biriken ilave Koşu Hızı, Yetenek Menzili ve pasif Ruh (Soul) üretimi kazandırır.",
    "patchTrend": "neutral"
  },
  "vampiric-burst": {
    "id": "vampiric-burst",
    "name": "Vampiric Burst (AKTİF Vampir Coşkusu)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/vampiric-burst.png",
    "imageAlt": "Vampiric Burst (AKTİF Vampir Coşkusu) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%15 Mermi Can Çalması | +%10 Mermi Direnci | +100 Bonus Can | +%10 Silah Hasarı | Aktif (Bekleme Süresi: 30 sn): +%75 Mermi Can Çalması (Lifesteal), Atış Hızı ve maksimum şarjör sınırını aşan ilave cephane kazandırır.",
    "baseDesc": "+%15 Mermi Can Çalması | +%10 Mermi Direnci | +100 Bonus Can | +%10 Silah Hasarı | Aktif (Bekleme Süresi: 30 sn): +%75 Mermi Can Çalması (Lifesteal), Atış Hızı ve maksimum şarjör sınırını aşan ilave cephane kazandırır.",
    "patchTrend": "buff"
  },
  "veil-walker": {
    "id": "veil-walker",
    "name": "Veil Walker (Kozmik Seyahat)",
    "category": "Vitality",
    "cost": "$ 3200",
    "tier": "Aşama III",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/veil-walker.png",
    "imageAlt": "Veil Walker (Kozmik Seyahat) eşya ikonu - $ 3200 (Aşama III) değerinde Can (Yeşil) eşyası",
    "description": "+125 Bonus Can | +6 Büyü Gücü | Pasif (Bekleme Süresi: 15 sn): Kozmik bir perdeden (Cosmic Veil) geçmek size 8 saniye Görünmezlik (Stealth), +3.5m/sn Hareket Hızı ve 85 Can İyileştirmesi kazandırır.",
    "baseDesc": "+125 Bonus Can | +6 Büyü Gücü | Pasif (Bekleme Süresi: 15 sn): Kozmik bir perdeden (Cosmic Veil) geçmek size 8 saniye Görünmezlik (Stealth), +3.5m/sn Hareket Hızı ve 85 Can İyileştirmesi kazandırır.",
    "patchTrend": "neutral"
  },
  "vortex-web": {
    "id": "vortex-web",
    "name": "Vortex Web (AKTİF Girdap Ağı)",
    "category": "Spirit",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "AKTİF",
    "image": "/assets/items/vortex-web.png",
    "imageAlt": "Vortex Web (AKTİF Girdap Ağı) eşya ikonu - $ 6400 (Aşama IV) değerinde Büyü (Mor) eşyası",
    "description": "+%8 Yetenek Menzili | +0.75m/sn Koşu Hızı | Aktif (Bekleme Süresi: 42 sn): Vakum bombası fırlatarak 12m alandaki tüm rakipleri merkeze çeker, Sabitler (Immobilize) ve Yavaşlatma Büyüsü (Slowing Hex) uygular.",
    "baseDesc": "+%8 Yetenek Menzili | +0.75m/sn Koşu Hızı | Aktif (Bekleme Süresi: 42 sn): Vakum bombası fırlatarak 12m alandaki tüm rakipleri merkeze çeker, Sabitler (Immobilize) ve Yavaşlatma Büyüsü (Slowing Hex) uygular.",
    "patchTrend": "neutral"
  },
  "weapon-shielding": {
    "id": "weapon-shielding",
    "name": "Weapon Shielding (Silah Kalkanı)",
    "category": "Vitality",
    "cost": "$ 1600",
    "tier": "Aşama II",
    "activation": "Pasif (Tetiklemeli)",
    "image": "/assets/items/weapon-shielding.png",
    "imageAlt": "Weapon Shielding (Silah Kalkanı) eşya ikonu - $ 1600 (Aşama II) değerinde Can (Yeşil) eşyası",
    "description": "+2.5 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 35 sn): Rakip kahramanlardan 4 saniye içinde 250 ve üzeri silah hasarı aldığınızda 300 kapasiteli Bariyer ve +%18 Mermi Direnci kazanırsınız.",
    "baseDesc": "+2.5 Çatışma Dışı Can Yenilenmesi | Pasif (Bekleme Süresi: 35 sn): Rakip kahramanlardan 4 saniye içinde 250 ve üzeri silah hasarı aldığınızda 300 kapasiteli Bariyer ve +%18 Mermi Direnci kazanırsınız.",
    "patchTrend": "neutral"
  },
  "witchmail": {
    "id": "witchmail",
    "name": "Witchmail (Cadı Zırhı)",
    "category": "Vitality",
    "cost": "$ 6400",
    "tier": "Aşama IV",
    "activation": "Pasif",
    "image": "/assets/items/witchmail.png",
    "imageAlt": "Witchmail (Cadı Zırhı) eşya ikonu - $ 6400 (Aşama IV) değerinde Can (Yeşil) eşyası",
    "description": "+%22 Büyü Direnci | +14 Büyü Gücü | Pasif (Bekleme Süresi: 1 sn): Bir rakipten ağır büyü hasarı (75 hasar eşiği üzeri) almak, rastgele bir yeteneğinizin bekleme süresini (Cooldown) 4 saniye azaltır.",
    "baseDesc": "+%22 Büyü Direnci | +14 Büyü Gücü | Pasif (Bekleme Süresi: 1 sn): Bir rakipten ağır büyü hasarı (75 hasar eşiği üzeri) almak, rastgele bir yeteneğinizin bekleme süresini (Cooldown) 4 saniye azaltır.",
    "patchTrend": "neutral"
  }
};

// Yardımcı fonksiyon: katalog verisi ile karşılaşmaya özel açıklamayı birleştirir.
const buildItemRecommendation = (itemId, priority, matchupReason) => {
  const item = itemsCatalog[itemId] || itemsCatalog['reactive-barrier'];
  return {
    ...item,
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
        'Seven’ın Storm Cloud ultisi görüş hattı (Line of Sight) gerektirir; bir baca veya duvar kenarından Peek (Çık-Vur) atarak sadece dürbün atışı için çıkın.',
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
        'Seven koridorları hızla pushladığı için kulenizin altına yaklaşmak zorunda kalacaktır. Kinetic Pulse ile onu havaya kaldırıp kule ve takım arkadaşlarınızın önüne düşürün.',
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
        'Trooper dalgasına Lightning Ball atarak koridoru hızla pushlayın; böylece Abrams minyonlarınızın arasında sizinle savaşamaz. Üzerinize yürümeye başladığı an Static Charge bırakıp geriye doğru kayarak (Slide) ateş edin.',
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

// Tüm karakterlerin counters / counteredBy mekaniklerine dayalı dinamik eşleşme üreteci
export const getPendingMatchup = (playerHero, enemyHero) => {
  const playerCountersEnemy = playerHero.counters.some((entry) =>
    entry.toLowerCase().includes(enemyHero.name.toLowerCase())
  );
  const enemyCountersPlayer = playerHero.counteredBy.some((entry) =>
    entry.toLowerCase().includes(enemyHero.name.toLowerCase())
  );

  const difficulty = playerCountersEnemy
    ? 'Avantajlı'
    : enemyCountersPlayer
      ? 'Zorlu'
      : 'Dengeli';

  const itemIds =
    Array.isArray(enemyHero.counterItems) && enemyHero.counterItems.length > 0
      ? enemyHero.counterItems
      : ['reactive-barrier', 'warp-stone', 'silence-glyph'];

  return {
    summary: `${playerHero.name} (${playerHero.role}) vs ${enemyHero.name} (${enemyHero.role}): ${enemyHero.shortBio} Bu eşleşmede ${enemyHero.name} karakterinin zayıf noktalarını hedefleyen counter eşyaları, Stamina disiplini ve doğru zamanlamalı takaslar belirleyicidir.`,
    difficulty,
    counters: playerHero.counters,
    counteredBy: enemyHero.counteredBy,
    recommendedItems: [
      buildItemRecommendation(
        itemIds[0] || 'reactive-barrier',
        'Zorunlu Counter',
        `${enemyHero.name} karakterinin temel yetenek kitini ve hasar/sustain döngüsünü doğrudan kıran birincil counter eşyasıdır.`
      ),
      buildItemRecommendation(
        itemIds[1] || 'warp-stone',
        'Orta Oyun Kritik',
        `${enemyHero.name} ile yapılan takaslarda mekanik üstünlük sağlayan, dive ve kitle kontrol (CC) tehdit menzilini yöneten ikinci kilit eşyadır.`
      ),
      buildItemRecommendation(
        itemIds[2] || 'silence-glyph',
        'Takım Savaşı Güvencesi',
        `Geç oyunda ${enemyHero.name} karakterinin ulti veya kaçış pencerelerini Silence/CC ile cezalandırmak için tamamlanması önerilir.`
      ),
    ],
    playstyle: {
      earlyGame: `Koridorda ${playerHero.name} olarak ${playerHero.abilities[0].split(' (')[0]} yeteneğinizle Trooper dalgasını pushlayın ve Deny üstünlüğü kurun; ${enemyHero.name} karakterinin ${enemyHero.abilities[0].split(' (')[0]} ve ${enemyHero.abilities[1].split(' (')[0]} takas pencerelerine dikkat edin.`,
      midGame: `Orta oyunda ${enemyHero.name} karşısında önerilen ilk counter eşyasını tamamladıktan sonra yan koridorları pushlayıp orman kamplarını farmlayın ve Soul Urn savaşlarında ${playerHero.abilities[2].split(' (')[0]} ile tempo kurun.`,
      lateGame: `Takım savaşlarında ${enemyHero.name} karakterinin ${enemyHero.abilities[3].split(' (')[0]} ultisini takip edin; Stamina barınızı ve kendi ${playerHero.abilities[3].split(' (')[0]} ultinizi en yüksek etki anı için saklayın.`,
      counterTips: [
        `${enemyHero.name} karşısında kadro avantajı sağlayan herolar: ${enemyHero.counteredBy.filter((x) => characters.some((c) => c.name === x)).join(', ')}.`,
        `${enemyHero.name} yetenek setini doğrudan kıran taktiksel counter eşyalar: ${enemyHero.counteredBy.filter((x) => !characters.some((c) => c.name === x)).join(', ')}.`,
        `${playerHero.name} oynarken ${enemyHero.name} karakterinin ${enemyHero.abilities[0].split(' (')[0]} ve ${enemyHero.abilities[3].split(' (')[0]} bekleme sürelerini (Cooldown) takip ederek dive veya takasa girin.`,
      ],
      winCondition: `${enemyHero.name} karşısında ${enemyHero.counteredBy.slice(-2).join(' ve ')} odaklı counter stratejisiyle takım savaşlarında onu etkisiz bırakmak.`,
    },
  };
};

// 2. BÖLÜM: Genel Meta Tavsiyeleri (4 Temel E-Spor Sütunu)
export const generalMetaTips = [
  {
    id: 'soul-and-spirit-economy',
    badge: 'Ruh & Spirit Ekonomisi',
    title: 'Ruh (Soul) Ekonomisi, Deny ve Farm Optimizasyonu',
    subtitle: 'Koridor Pushlama, Küre Onaylama ve Güç Patlamaları',
    description:
      'Deadlock’ta ilk 8 dakika boyunca Trooper son vuruşlarının yarısı, 8. dakikadan sonra ise %100’ü havaya çıkan Ruh Kürelerinden (Soul Orbs) gelir. Turuncu küreleri rakibinizden önce vurarak Deny etmek hem kendi Spirit/Silah eşya güç patlamanızı (Power Spike) hızlandırır hem de rakibi ekonomide geriye düşürür.',
    highlights: [
      'Yakın dövüş (Light/Heavy Melee) ile kesilen Trooperlar küre çıkarmadan ruhu anında %100 güvenceye alır ve rakibe Deny şansı bırakmaz.',
      'Trooper dalgasını rakip Guardian kulesine pushladıktan sonra koridorda boş beklemeyin; yan orman kamplarını (Jungle Farm), kutuları ve Altın Heykelleri temizleyin.',
      'Gerideyken (Net Worth farkı %20’ye ulaştığında) nötr kamplardan ve Haunt ruhlarından gelen telafi (Comeback) ruh bonusu %30’a kadar yükselir.',
    ],
    keyMetric: '%100 Küre & Melee Onayı',
    metricLabel: '8. dakika sonrası Trooper ruhlarının tamamının küreye aktarılması ve yakın dövüş son vuruş güvencesi',
  },
  {
    id: 'stamina-and-movement-mastery',
    badge: 'Stamina & Hareket Mekaniği',
    title: 'Stamina Yönetimi, Dash-Jump ve Slide (Kayma) Tekniği',
    subtitle: 'Sınırsız Mermi, Rotasyon Hızı ve Dive Savunması',
    description:
      'Stamina barlarınız hem saldırı (agresif dive) hem de hayatta kalma kaynağınızdır. Çatışma ortasında tüm Stamina barlarını rastgele tüketmek, Lash, Dynamo veya Abrams gibi karakterlerin kitle kontrol (CC) kombolarına açık hedef olmanıza yol açar.',
    highlights: [
      'Her zaman en az 1 Stamina barını rakibin alan etkili ultilerinden veya ani gank girişimlerinden kaçmak (Air-Dash) için cepte tutun.',
      'Dash veya merdiven/eğim sonrasında Ctrl tuşuyla kayarken (Slide) silahınız mermi tüketmez (Infinite Ammo); takaslarda şarjör bitirmeden hasar vurun.',
      'Çatılardaki Buhar Fanları (Steam Vents) Stamina yenilenmesini %150 hızlandırır; hava rotasyonlarında fanları aktif kullanın.',
    ],
    keyMetric: 'Slide = Sınırsız Mermi',
    metricLabel: 'Kayma (Slide) animasyonu süresince cephane harcamadan ateş etme ve Dash-Jump mesafe avantajı',
  },
  {
    id: 'mid-boss-and-rejuvenator',
    badge: 'Mid-Boss & Objektif Kontrolü',
    title: 'Mid-Boss Kontrolü ve 3 Rejuvenator Kristali',
    subtitle: '10. Dakika Sonrası Harita Hakimiyeti ve Kuşatma',
    description:
      'Merkezdeki Mid-Boss 10. dakikada doğar (%25 canda kükreyerek Roar atar) ve kesildiğinde 7.5 saniye içinde çukur etrafına eşit dağılmış 3 adet Rejuvenator kristali düşürür. Her kristal 1 Ağır Yakın Dövüş (Heavy Melee) vuruşuyla kırılır, kıran oyuncuya ekstra ruh ve takıma tam can yenilenmesi + Rejuvenator buff’ı kazandırır.',
    highlights: [
      'Mid-Boss’un canı %20 artırıldığı ve direnç kırma (Shred) etkileri %50 azaltıldığı için rakip takımdan en az 2 oyuncuyu düşürmeden (Pick) Mid-Boss’a girmeyin.',
      '3 kristal çukur etrafına dağıldığı için takım arkadaşlarınızı kristallere paylaştırın ve Parry (F tuşu) + kitle kontrol ile rakibin çalma (Steal) dive’ını cezalandırın.',
      'Rejuvenator aldıktan sonra orman farmlamak yerine 3 koridoru aynı anda pushlayarak rakip Walker ve Patron savunmasını yıkın.',
    ],
    keyMetric: '3 Rejuvenator Kristali',
    metricLabel: 'Mid-Boss kesildiğinde 7.5 saniyede inen ve her biri 1 Heavy Melee ile kırılan kristal sayısı',
  },
  {
    id: 'zipline-ganks-and-flex-slots',
    badge: 'Zip-Line Baskınları & Flex Slot',
    title: 'Zip-Line Baskınları (Gank), Soul Urn ve Flex Slotlar',
    subtitle: 'Hızlı Koridor Rotasyonu ve Eşya Slotu Açma Sırası',
    description:
      '3 renkli Zipline (Teleferik) hattı (Sarı, Mavi ve Yeşil koridorlar) harita genelinde en hızlı rotasyon ve gank aracıdır; ancak Zipline üzerindeyken hasar almak sizi yere düşürüp uzun süre sersemletir (Knockdown). Güvenli noktada Zipline’dan atlayıp ivmeyle yan koridorlara baskın (Gank) yapmak üst liglerin temel makro oyunudur.',
    highlights: [
      'Zipline Boost (Hızlandırma) bekleme süresini rastgele harcamayın; Base savunmasına yetişmek veya 10. dakikadaki Soul Urn (Ruh Vazosu) savaşına dive atmak için saklayın.',
      'Dış koridorlardaki Köşe Işınlayıcıları (8. dk) kullanarak rakip bir kanada yüklendiğinde saniyeler içinde ters kanattan Walker kulesi pushlayın (Split Push).',
      'Rakip Guardian, Walker ve Base Guardian kulelerini yıkarak açılan 4 adet Flex Slot, geç oyunda ekstra counter eşyası takmanızı sağlar.',
    ],
    keyMetric: '4 Flex Slot & Zipline',
    metricLabel: 'Kule objektifleriyle açılan ekstra eşya yuvaları ve Zipline ivmesiyle yapılan koridor baskınları',
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
        'Mavi (Merkez) koridorun ortasındaki Mid-Boss binasının üst balkonları, nehir köprüsü ayakları ve büfe alanlarını kapsayan haritanın en yoğun kutu kümesidir.',
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
      connects: 'Sarı Koridor ⟷ Mavi Koridor (Mid-Boss) ⟷ Yeşil Koridor',
      description:
        'Vindicta ve Seven gibi havadan görüşe dayalı karakterlerin (Line of Sight) mermi ve ultilerinden tamamen korunarak 3 koridor arasında baskın (Gank) yapmanızı ve Urn taşımanızı sağlar.',
    },
    {
      id: 'zipline-air-vents',
      name: 'Transit Zipline Hatları ve Çatı Hava Fanları (Air Vents)',
      badge: 'Yüksek Mobilite',
      routeType: 'Hava & Raylı Ulaşım',
      connects: 'Patron Üssü ⟷ 3 Ana Koridor & Yüksek Çatılar',
      description:
        '3 renkli Zipline hattı üsten 3 ana koridora hızlı ulaşım sunar. Zipline üzerinde hasar alırsanız yere düşüp sersemlersiniz; bu yüzden çatılardaki dikey Buhar Fanlarını (Steam Vents) kullanarak koridor değiştirmek savaş anında çok daha güvenlidir.',
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


