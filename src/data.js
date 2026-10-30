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


