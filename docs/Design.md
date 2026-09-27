# Wixtory Mobile Apps & Landing Page UI/UX Design System Guidelines

> **Versiyon:** 2.0.0 (Curated & Modernized)  
> **Durum:** Single Source of Truth (SSOT)  
> **Platformlar:** Next.js 16 (Web Showcase), Flutter 3.x (AstroVibe & Excuse Mobile Apps)  
> **Tarih:** 2026-09-23  

---

## 1. Tasarım Felsefesi ve Görsel Kimlik (Aesthetic Persona)

Wixtory ekosistemi, **Apple Human Interface Guidelines** sadeliğini ve **Linear / Vercel** seviyesindeki karanlık/aydınlık mikro-etkileşimleri bir araya getiren, modern, ferah ve cam efektli (**Neo-Glassmorphism**) bir tasarım dilini benimser.

### 1.1 Temel Estetik Direkleri
1. **Ferahlık & Açık Renk Dengelemesi:** Açık modda boğucu beyazlık yerine ferah gök mavisi ve camgöbeği esintisi (`#F0F7FF`), derin lacivert tipografi (`#0C2340`) ve yüksek kontrastlı okunaklılık.
2. **Karanlık Modda Minimalist Asalet:** Siyah OLED pikselleriyle uyumlu, derin kömür ve arduvaz grisi (`#090D16`), gözü yormayan neon vurgular.
3. **Dokunsal Geri Bildirim ve Mikro-Etkileşimler:**
   - Butonlarda `active:scale-95` veya `transform: translateY(-2px)`.
   - Kartlarda `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
   - Mobilde haptic titreşim (`HapticFeedback.mediumImpact()`) ve ivmeölçer hareketleri (Shake).
4. **Bileşen Köşe Yuvarlama (Border Radius) Standartları:**
   - **Pill Rozetler:** `9999px` (`rounded-full`)
   - **Butonlar:** `12px` - `14px` (`rounded-xl`)
   - **Standart Kartlar:** `20px` - `24px` (`rounded-2xl`)
   - **Ana Konteynerler & Modallar:** `28px` - `32px` (`rounded-3xl`)
5. **8pt Grid Boşluk Sistemi:**
   - `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `96px`.

---

## 2. Küratörlü Çift Tema Sistemi (Curated Dual-Theme Engine)

Gereksiz ve göz yoran tema kalabalığı yerine, her iki zıt kullanım senaryosunu mükemmel karşılayan **2 ana tema** kullanılır:

```
┌───────────────────────────────────────────────┬───────────────────────────────────────────────┐
│ 1. Ferah Gök Mavisi (sky-breeze) - AÇIK MOD    │ 2. Gece Obsidiyen (midnight-dark) - KOYU MOD │
└───────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

### 2.1 Tema 1: Ferah Gök Mavisi (`sky-breeze`) — Flagship Light Mode
Gündüz kullanımı, editoryal yaşam tarzı ve ferahlık hissi için özel olarak tasarlanmıştır.

| CSS Değişkeni | Renk Kodu | Rol ve Kullanım Alanı |
| :--- | :--- | :--- |
| `--bg-primary` | `#F0F7FF` | Sayfa zemin rengi (Ferah gökyüzü sisi) |
| `--bg-secondary`| `#E2EFFD` | İkincil panel ve arkaplan zeminleri |
| `--bg-card` | `rgba(255, 255, 255, 0.94)` | Kart yüzeyi (Süt beyazı cam, yüksek kontrast) |
| `--bg-card-hover` | `#FFFFFF` | Kart hover durumundaki saf beyaz parlama |
| `--bg-glass` | `rgba(255, 255, 255, 0.85)` | Navigasyon ve footer için buzlu cam filtresi |
| `--border-subtle` | `rgba(2, 132, 199, 0.16)` | Kart ve bölüm sınırları (Hafif gök mavisi kontur) |
| `--border-active` | `rgba(2, 132, 199, 0.55)` | Odaklanmış veya seçili durum çerçevesi |
| `--text-main` | `#0C2340` | Birincil başlıklar ve gövde metni (Derin deniz laciverti) |
| `--text-secondary`| `#33557A` | Açıklama ve paragraf metinleri (Dengeli lacivert-gri) |
| `--text-muted` | `#64748B` | Tarihler, dipnotlar ve pasif etiketler |
| `--primary` | `#0284C7` | Ana aksiyon rengi (Canlı Gök Mavisi - Sky 600) |
| `--secondary` | `#06B6D4` | İkincil vurgu (Camgöbeği Neon - Cyan 500) |
| `--accent` | `#2563EB` | Üçüncü dikkat çekici renk (Kraliyet Mavisi - Blue 600) |
| `--badge-bg` | `rgba(2, 132, 199, 0.08)` | Rozet arkaplanı |
| `--shadow-card` | `0 16px 36px -12px rgba(2, 132, 199, 0.12)` | Yumuşak mavi kart gölgesi |
| `--is-dark` | `0` | Koyu mod bayrağı (Kapalı) |

### 2.2 Tema 2: Gece Obsidiyen (`midnight-dark`) — Flagship Dark Mode
OLED ekran uyumluluğu, gece okunabilirliği ve siber estetik için optimize edilmiştir.

| CSS Değişkeni | Renk Kodu | Rol ve Kullanım Alanı |
| :--- | :--- | :--- |
| `--bg-primary` | `#090D16` | Derin kömür/arduvaz siyahı |
| `--bg-secondary`| `#0F1523` | İkincil zemin katmanı |
| `--bg-card` | `rgba(18, 24, 38, 0.76)` | Yarı saydam füme cam kart |
| `--bg-card-hover` | `rgba(26, 34, 54, 0.90)` | Kart hover aydınlanması |
| `--bg-glass` | `rgba(14, 19, 32, 0.70)` | Buzlu cam navigasyon ve alt bilgi |
| `--border-subtle` | `rgba(255, 255, 255, 0.09)` | İnce beyaz kontur |
| `--border-active` | `rgba(99, 102, 241, 0.55)` | Neon çivit mavisi odak çerçevesi |
| `--text-main` | `#F8FAFC` | Bembeyaz net başlıklar (Slate 50) |
| `--text-secondary`| `#94A3B8` | Okunaklı gri paragraflar (Slate 400) |
| `--text-muted` | `#64748B` | Pasif metinler |
| `--primary` | `#6366F1` | Çivit mavisi vurgu (Indigo 500) |
| `--secondary` | `#22D3EE` | Neon Camgöbeği (Cyan 400) |
| `--badge-bg` | `rgba(99, 102, 241, 0.15)` | Parlayan rozet kutusu |
| `--shadow-card` | `0 20px 48px -12px rgba(0, 0, 0, 0.70)` | Derin siyah gölge |
| `--is-dark` | `1` | Koyu mod bayrağı (Açık) |

### 2.3 Tema Kuralları
- **ASLA bileşenlerde sabit koyu/açık hex kodları (örn: `background: #000`, `background: rgba(10, 10, 15, 0.6)`) hardcode edilmemelidir.**
- Tüm yüzeyler `var(--bg-card)` veya `var(--bg-glass)`, tüm metinler `var(--text-main)` veya `var(--text-secondary)` üzerinden çekilmelidir.
- Footer, Navbar ve Kartlar her iki temada da arka planla kusursuz uyum sağlamalı, açık modda siyah leke oluşturmamalıdır.
- Tüm gövde metinleri **WCAG AA standardında minimum 4.5:1 kontrast oranını** karşılamak zorundadır.

---

## 3. Tipografi ve Yazı Tipi Hiyerarşisi

Sistemde 3 amaca yönelik Google Fonts ailesi kullanılır:
1. **`Outfit` (Ana Gövde ve Modern UI):** Temiz, geometrik, mükemmel Türkçe ve Latin karakter uyumlu modern sans-serif.
2. **`Cinzel` (Editoryal & Kozmik Başlıklar):** AstroVibe tarot ve zodyak başlıklarında asil bir his uyandıran serif font.
3. **`Space Grotesk` (Teknik Veriler & Metrikler):** Excuse mazeret sayıları, saatler ve istatistik sayaçları için monospaced etkili sans-serif.

### Tipografi Skalası:
- **Hero Display:** `clamp(36px, 5.5vw, 62px)` — 850 Weight, `-0.04em` letter-spacing
- **Section Heading (H2):** `clamp(28px, 4vw, 44px)` — 800 Weight, `-0.03em` letter-spacing
- **Card Title (H3):** `20px` - `24px` — 700 Weight, `-0.02em` letter-spacing
- **Body Large:** `17px` — Line-height `1.65`
- **Body Regular:** `15px` — Line-height `1.60`
- **Caption / Badge:** `11px` - `12px` — 700-800 Weight, `0.06em` letter-spacing, uppercase

---

## 4. Landing Page Standart Mimarisi (7 Aşamalı Sıralama)

Her uygulama sayfası (`/astrovibe`, `/excuse`), dönüşüm oranını maksimize etmek için aşağıdaki **kesin sıralamaya** uymak zorundadır:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Header & Hero Section (Value Proposition, Badges, 3D Phone Mockup)  │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Features Section (Core Architectural Pillars - 3-Column Grid)       │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Key Features Section (Alternating Z-Pattern + Live Mockup Frames)   │
├────────────────────────────────────────────────────────────────────────┤
│ 4. How to Use Section (Step-by-Step 01-02-03 Workflow Stepper)         │
├────────────────────────────────────────────────────────────────────────┤
│ 5. Why Choose ? Section (Value Proposition Matrix & Competitive Edge)  │
├────────────────────────────────────────────────────────────────────────┤
│ 6. FAQ Section (Accessible Accordion + 24h Developer Support Box)      │
├────────────────────────────────────────────────────────────────────────┤
│ 7. Final Call to Action (High-Converting Banner) & Unified Footer      │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Bölüm 4.1: Hero Section (Giriş ve 3D Telefon Maketi)
- **Başlık (H1):** Çift tonlu gradyan vurgulu, çarpıcı problem çözme vaadi.
- **Rozetler:** Sürüm numarası (`v1.2.0`), yıldız puanı (`4.9 ⭐`), toplam indirme (`50K+`).
- **Aksiyonlar (CTA):** App Store ve Google Play butonları + ikincil keşif bağlantısı.
- **Görsel:** Gerçekçi 3D derinlikli telefon çerçevesi (Dynamic Island, yüzen parçacıklar, canlı ekran simülasyonu).

---

### Bölüm 4.2: Features (Temel Özellik Seti)
- **Düzen:** Masaüstünde 3 sütunlu (`repeat(3, 1fr)`), mobilde tek sütunlu kart ızgarası.
- **Kart Anatomisi:**
  - Üstte glowing renkli ikon kutusu (`50x50px`) + Sağda durum rozeti.
  - Vurucu Başlık (`H3`, 20px, Bold).
  - 2-3 satırlık net ve öz açıklama metni.
  - Kartın en üstünde 3px yüksekliğinde degrade çizgi.

---

### Bölüm 4.3: Key Features (Derinlemesine İnceleme & Canlı Önizlemeler)
- **Düzen:** **Alternating Z-Pattern** (1. blok: Sol Metin / Sağ Canlı Önizleme; 2. blok: Sol Canlı Önizleme / Sağ Metin; 3. blok: Sol Metin / Sağ Canlı Önizleme).
- **Canlı İnteraktif Önizleme Çerçeveleri:**
  - *AstroVibe:*
    1. Tıklanabilir kalp animasyonlu TikTok dikey tırnak reels akışı.
    2. Tıklandığında 3D dönen (180° flip) ve kart açan interaktif Tarot destesi.
    3. Aşk, Kariyer ve Sezgi güç barlarını gösteren kozmik transit paneli.
  - *Excuse:*
    1. "Telefonu Salla" butonuyla tetiklenen ivmeölçer panik sallama simülatörü.
    2. "Sıradaki" ve "Seç & Kopyala" aksiyonlu Tinder tarzı kaydırma destesi.
    3. Ekran içinden tek dokunuşla renk değiştiren canlı tema test kabini.

---

### Bölüm 4.4: How to Use (01-02-03 Adım Adım Kullanım)
- **Düzen:** Zaman tüneli (timeline) stepper tasarımı.
- **Numaralandırma:** `01`, `02`, `03` yüksek kontrastlı sayaçlar.
- **İpucu Kutusu:** Her adımın altında ampul ikonuyla desteklenen "Pro İpucu" kılavuzu.

---

### Bölüm 4.5: Why Choose ? (Değer Matrisi ve Rakiplerden Farklar)
- **Düzen:** 4 adet geniş karşılaştırma paneli.
- **Fark Şeridi:** Her kartın altında `"DİĞER UYGULAMALARA KARŞI FARKI"` başlıklı özel yeşil rozetli analiz kutusu (Geleneksel çözümlere kıyasla üstünlükler).

---

### Bölüm 4.6: FAQ (Sıkça Sorulan Sorular)
- **Düzen:** Tam erişilebilir akordeon (`aria-expanded`, pürüzsüz yükseklik animasyonu).
- **Destek Modülü:** SSS listesinin altında 24 saat içinde yanıt veren doğrudan geliştirici e-posta kartı.

---

### Bölüm 4.7: Final Call to Action & Footer
- **Final CTA:** Sayfanın alt kısmında kullanıcıyı indirmeye teşvik eden, parlayan gradyan zeminli, QR kod ve mağaza butonlarını içeren dönüşüm odaklı kart.
- **Footer:** Cam efektli zemin, portal ana sayfasına link, diğer uygulamaya geçiş, ortak `/privacy` gizlilik politikası ve telif hakları bilgisi.

---

## 5. Çoklu Dil (i18n) ve Yön (RTL) Standartları

- **Desteklenen Diller:** Türkçe (`tr`), İngilizce (`en`), İtalyanca (`it`), Portekizce (`pt`), İspanyolca (`es`), Fransızca (`fr`), Almanca (`de`), Rusça (`ru`), Japonca (`ja`), Çince (`zh`), Arapça (`ar`).
- **RTL Kuralı:** Arapça seçildiğinde `<html>` etiketine `dir="rtl"` eklenir. Sol/sağ sabit fiziksel CSS özellikleri yerine **mantıksal özellikler** (`margin-inline-start`, `padding-inline-end`) kullanılır.
- **Metin Taşması:** Almanca ve Rusça gibi dillerde kelime uzunluğu %30 arttığı için başlık ve butonlar her zaman esnek (`flex-wrap`, `min-width`) tanımlanmalıdır.

---

## 6. Mühendislik ve Kod Standartları (React & Flutter)

1. **Next.js 16 Derleme Standartları:** `npm run build` daima 0 hata ve sıfır TypeScript uyarısı ile tamamlanmalıdır.
2. **Semantik HTML5:** Sayfa iskeletinde `<main>`, `<header>`, `<nav>`, `<section>`, `<footer>` gibi anlamsal etiketler zorunludur.
3. **Erişilebilirlik (a11y):** Tıklanabilir tüm ikonlarda `aria-label`, resimlerde anlamlı `alt` etiketleri bulunmalıdır.
4. **Performans:** Yüksek çözünürlüklü görseller WebP formatında sunulmalı, MinIO CDN üzerinden önbelleklenmelidir.