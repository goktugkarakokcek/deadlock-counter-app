# Deadlock Counter App (YZO 205)

Bu proje, YZO 205 (Yapay Zeka Operatörlüğü) dersindeki "AI-Assisted Website Deployment" ödevi için geliştirdiğim Deadlock taktik ve eşleşme aracıdır. React (Vite) ve Tailwind CSS kullanılarak yapıldı.

Amacım oyundayken alt-tab yapıp hızlıca karakter eşleşmelerine, güncel eşya fiyatlarına ve harita rotalarına bakılabilecek temiz bir araç yapmaktı.

## 🚀 Canlı Site
Proje GitHub'a bağlı olarak Vercel üzerinden otomatik deploy ediliyor:
**[https://deadlock-counter-app.vercel.app/]**

## 🤖 Yapay Zeka (AI) Yönetimi ve Kural Setleri

Kodu yazarken Antigravity ajanını serbest bırakmadım. AI'ın kronik hatalarını (halüsinasyon, spagetti kod) engellemek için `.agents/skills/` altına kendi yazdığım `SKILL.md` kurallarını ekleyerek ajanı yönlendirdim:

* **Zorunlu Güncelleme Döngüsü:** AI'ın verdiği kodları doğrudan projeye yığmadım. Her yeni özelliği önce `npm run dev` ile test edip, `npm run build` ile patlamadığından emin olduktan sonra parça parça ve anlamlı mesajlarla (commit) Git'e işledim.
* **React Modülerliği:** Yapay zeka genellikle tüm kodu tek bir `App.jsx` dosyasına sıkıştırmaya meyilli. Buna engel olmak için ajana modülerlik kuralı koydum ve harita, karakter kartları gibi parçaları `src/components/` klasörüne böldürttüm.
* **Veri Bütünlüğü (Data Integrity):** Deadlock sürekli yama alan bir beta oyunu olduğu için, ajanın bilmediği item fiyatlarını veya kazanma oranlarını kafasından uydurmasını (halüsinasyon) yasakladım. Tüm veriyi arayüzden koparıp `src/data.js` içine aldırdım. Böylece oyuna güncelleme geldiğinde React kodlarına dokunmadan sadece data dosyasını güncelleyerek siteyi canlıya alabiliyorum.

## 🛠️ Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak isterseniz:

```bash
git clone https://github.com/goktugkarakokcek/deadlock-counter-app.gitcd deadlock-counter-app
npm install
npm run dev