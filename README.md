# General Apps (Wixtory) - Çoklu Dilli Uygulama Portalı & Ortak Gizlilik Platformu

Bu proje; **Wixtory: Domain Track** (Gerçek Zamanlı Alan Adı Sorgulama & Portföy Takip), **AstroVibe** (Kozmik Astroloji, Tarot ve Protez Tırnak Stil Rehberi) ile **Excuse** (Zeki, Eğlenceli ve Yaratıcı Bahanematik) uygulamalarını tanıtan, gelecekte eklenecek yeni uygulamalara hazır, modern çoklu tema (multi-theme) ve **11 dil desteğine** sahip, tüm ekosistem için ortak yasal **Gizlilik Politikası (Privacy Policy)** sunan Next.js web portalıdır.

---

## 📱 Ekosistem Projeleri & Sayfaları

1. **Wixtory: Domain Track (`/domain-track`)**:
   - Ana Sayfa: `/domain-track`
   - Ekran Görüntüleri & 3D Telefon Vitrini: `/domain-track/screenshots`
   - Özellikler: `/domain-track/features`
   - Neden Biz?: `/domain-track/why-us`
   - Sıkça Sorulan Sorular: `/domain-track/faq`
   - Gizlilik Politikası: `/domain-track/privacy-policy`
   - 10 Dünya Dili: Türkçe, İngilizce, Fransızca, Almanca, İtalyanca, İspanyolca, Portekizce, Rusça, Çince, Korece.

2. **AstroVibe (`/astrovibe`)**:
   - Kozmik Astroloji, 3D Tarot & Burca Özel Protez Tırnak Stil Rehberi.

3. **Excuse AI (`/excuse`)**:
   - Hayatın her anı için zeki, diplomatik ve esprili mazeret asistanı.

4. **Evrensel Gizlilik Platformu (`/privacy-policy`, `/privacy`, `/privacy-policy.md`)**:
   - Tüm Wixtory projeleri için tek, ortak, bağlayıcı yasal gizlilik sözleşmesi (Sıfır kişisel veri toplama, tamamen cihaz içi önbellek, AdMob ve 18 yaş altı güvencesi).

---

## 🌍 Desteklenen Diller (Multi-Language Engine)

Portal; yerel `localStorage` kalıcılığı ve Arapça için otomatik **RTL (Sağdan Sola)** yerleşim desteği ile aşağıdaki 11 dilde eksiksiz çalışır:

1. 🇹🇷 **Türkçe** (`tr`)
2. 🇬🇧 **İngilizce** (`en`)
3. 🇮🇹 **İtalyanca** (`it`)
4. 🇵🇹 **Portekizce** (`pt`)
5. 🇪🇸 **İspanyolca** (`es`)
6. 🇫🇷 **Fransızca** (`fr`)
7. 🇩🇪 **Almanca** (`de`)
8. 🇷🇺 **Rusça** (`ru`)
9. 🇯🇵 **Japonca** (`ja`)
10. 🇨🇳 **Çince** (`zh`)
11. 🇸🇦 **Arapça** (`ar` - RTL Desteği)

---

## 🌟 Öne Çıkan Özellikler

1. **İnteraktif Uygulama Seçici (App Switcher)**:
   - Ana sayfada yer alan kartlar veya üst menüdeki hızlı hap butonlar üzerinden **Domain Track**, **AstroVibe** ve **Excuse** arasında anında geçiş.
   - Sayfa seçilen uygulamaya göre renklerini, başlığını, neden kullanılmalı (problem/çözüm) kartlarını, metriklerini ve vitrinini dinamik olarak adapte eder.

2. **Dinamik Çoklu Tema Desteği (Multi-Theme System)**:
   - CSS değişkenleri tabanlı, sıfır gecikmeli 4 zengin tema:
     - 🌌 **Kozmik Gece (`cosmic-midnight`)**
     - ⚡ **Siber Neon (`cyber-neon`)**
     - ☀️ **Solar Lüks (`solar-luxury`)**
     - 🌹 **Ametist Gül (`rose-amethyst`)**

3. **"Neden Kullanılmalı?" ve Faydalar**:
   - Kullanıcının karşılaştığı günlük hayat problemlerini ve uygulamanın getirdiği çözümleri karşılaştıran görsel kartlar.
   - Yüksek başarı oranları, indirme sayıları ve kullanıcı puanları göstergeleri.

4. **Canlı Arayüz Vitrini (Interactive Mockup Showcase)**:
   - Domain Track için: Alan Adı Arama, Favori Takip ve Arama Geçmişi sekmeleri.
   - AstroVibe için: Protez Tırnak, 3D Tarot Açılımı ve Burç Analizi sekmeleri.
   - Excuse için: İş & Toplantı, Sosyal & Parti ve Şans Çarkı sekmeleri.

5. **İletişim & Hızlı Destek**:
   - Destek e-posta adresi (`wixtoryy@gmail.com`), yayıncı firma bilgileri ve geri bildirim formu.

6. **Ortak Gizlilik Politikası (`/privacy-policy`)**:
   - **Tüm uygulamalar için ortak tek bir yasal metin** (KVKK & GDPR & App Store & Google Play uyumlu).
   - Domain Track, AstroVibe, Excuse AI ve gelecekteki tüm projeleri kapsayan sıfır kişisel veri güvencesi.

---

## 🚀 Yeni Bir Uygulama Nasıl Eklenir? (Extensible Architecture)

Projeye ileride 3., 4. veya 5. bir uygulama eklemek istediğinizde hiçbir yeni sayfa kodlamanıza gerek yoktur! Sadece `src/data/apps-data.ts` dosyasına yeni bir obje eklemeniz yeterlidir:

```typescript
// src/data/apps-data.ts içine yeni uygulamanızı ekleyin:
{
  id: "yeni_uygulama",
  slug: "yeni-uygulama",
  name: "Yeni Uygulama Adı",
  tagline: "Uygulamanın Çarpıcı Sloganı",
  shortDesc: "Kısa açıklama...",
  fullDesc: "Detaylı açıklama...",
  category: "Kategori Adı",
  badge: "Yeni Çıkan",
  version: "v1.0.0",
  rating: 5.0,
  reviewsCount: "1.2K",
  downloads: "10.000+",
  primaryColor: "#3B82F6",
  secondaryColor: "#10B981",
  glowColor: "rgba(59, 130, 246, 0.45)",
  contactEmail: "iletisim@wixtory.com",
  whyUse: [ /* 3 adet Problem / Çözüm objesi */ ],
  benefits: [ /* 4 adet Metrik & Fayda objesi */ ],
  features: [ /* 6 adet Özellik objesi */ ],
  showcaseTabs: [ /* 3 adet Vitrin Sekmesi */ ],
  privacyHighlights: [ /* Gizlilik maddeleri */ ]
}
```

---

## 🛠️ Yerel Geliştirme (Local Development)

```bash
# Proje dizinine gidin
cd general_apps_fe

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (Port: 5113)
npm run dev

# Tarayıcınızda açın: http://localhost:5113
# Gizlilik sayfası: http://localhost:5113/privacy
```

---

## 🐳 Docker ile Canlıya Alma (Production Deployment)

Sunucunuzda (`Ubuntu`) Docker üzerinde ayağa kaldırmak için:

```bash
cd general_apps_fe

# Eğer wixtory_network ağı henüz oluşturulmadıysa:
docker network create wixtory_network

# Docker imajını derleyin ve arka planda çalıştırın:
docker compose up --build -d

# Logları kontrol edin:
docker compose logs -f

# Durdurmak için:
docker compose down
```

Nginx yapılandırması:
```nginx
server {
    listen 80;
    server_name apps.wixtory.com;

    location / {
        proxy_pass http://127.0.0.1:5113;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
