# Deadlock Counter & Matchup Rehberi

Rekabetçi **Deadlock** oyuncuları için geliştirilmiş, Vercel üzerinde doğrudan deploy edilmeye hazır, **React (Vite)** ve **Tailwind CSS** tabanlı dinamik karşılaşma (Hero Matchup) ve counter eşya (Item) rehberi.

## Özellikler

- **Dinamik Veri Mimarisi (`src/data.js`):** Tüm karakterler (`Abrams`, `Vindicta`, `Dynamo`, `Seven`), eşya kataloğu ve 12+ karşılaşma kombinasyonu tek bir merkezi veri dosyasından yönetilir.
- **3 Ana Bölüm Yapısı:**
  1. **Hero Matchup Bölümü:** Görsel destekli ve klavye/ekran okuyucu erişilebilirliğine sahip 2 adet özel Dropdown/Select bileşeni, dinamik **Önerilen Counter Eşyalar** ve safha bazlı **Taktiksel Oynayış (Playstyle)** rehberi.
  2. **Genel Meta Tavsiyeleri:** Koridor/Ruh ekonomisi, Mid-Boss & Rejuvenator zamanlaması ve Soul Urn & Flex Slot stratejilerini içeren 3 kolonlu statik meta kartları.
  3. **Araç Hakkında / Metodoloji & Footer:** Verilerin nasıl hesaplandığını açıklayan okunabilir tipografili metodoloji alanı ve semantic alt bilgi.
- **SEO & Erişilebilirlik (WCAG):** Semantic HTML5 etiketleri (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), SEO uyumlu `<title>` ve `<meta name="description">`, tüm görsellerde anlamlı `alt` metinleri ve kırık görsel korumalı yerel yer tutucular.

## Görsel Klasör Yapısı (`public/assets/`)

Görsellerinizi aşağıdaki dosya adlarıyla ilgili klasörlere manuel olarak ekleyebilirsiniz:

- **Karakter Görselleri (`public/assets/characters/`):**
  - `abrams.png`
  - `vindicta.png`
  - `dynamo.png`
  - `seven.png`
- **Eşya Görselleri (`public/assets/items/`):**
  - `knockdown.png`
  - `healbane.png`
  - `decay.png`
  - `reactive-barrier.png`
  - `silence-glyph.png`
  - `metal-skin.png`
  - `warp-stone.png`
  - `debuff-reducer.png`
  - `ethereal-shift.png`
  - `toxic-bullets.png`
  - `unstoppable.png`
  - `slowing-hex.png`

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

## Production Build & Vercel Deploy

```bash
npm run build
```
