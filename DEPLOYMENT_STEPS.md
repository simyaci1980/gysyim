# 🚀 PythonAnywhere'e Canlı Aktarma Adımları

## Tarih: 31 Ekim 2025

---

## 1️⃣ PythonAnywhere Konsolu

**Bash konsolunda şu komutları çalıştır:**

```bash
cd ~/GYSYIM
git pull origin main
```

---

## 2️⃣ Web App'i Reload Et

1. PythonAnywhere Dashboard'a git
2. **Web** sekmesine tıkla
3. Yeşil **Reload** butonuna bas
4. Birkaç saniye bekle

---

## 3️⃣ Test Et

Tarayıcıda şunları kontrol et:

✅ **Ana sayfa:** https://gysyim.pythonanywhere.com/  
✅ **Robots.txt:** https://gysyim.pythonanywhere.com/robots.txt  
✅ **Ads.txt:** https://gysyim.pythonanywhere.com/ads.txt  
✅ **Gizlilik:** https://gysyim.pythonanywhere.com/privacy/  
   - E-posta: altinsoyali1980@gmail.com  
   - Telefon: 423-709-5811  
✅ **Chat çalışıyor mu?**

---

## 4️⃣ Güvenlik Kontrol (Opsiyonel)

Tarayıcıda F12 (Developer Tools) → **Network** sekmesi → Response Headers:

- `Content-Security-Policy` var mı?
- `Strict-Transport-Security` var mı?
- `Referrer-Policy` var mı?

---

## 📝 Google Ads İtiraz Metni

**İngilizce (önerilen):**
```
Our new site (gysyim.pythonanywhere.com) contains no external or suspicious links. 
The domains mentioned in the previous report (arapexel, borrowmarmotforester, 
extensionworthwhile) are not present in our codebase. Security headers (HSTS, CSP, 
Referrer-Policy), robots.txt, and legal pages (privacy, terms) are in place. 
SSL is enabled. We request a re-review.
```

**Türkçe:**
```
Yeni sitemizde (gysyim.pythonanywhere.com) harici ve şüpheli bağlantılar 
bulunmamaktadır. Önceki raporda geçen alan adları kod tabanımızda yoktur. 
Güvenlik başlıkları (HSTS, CSP, Referrer-Policy), robots.txt ve yasal 
sayfalar mevcuttur. SSL aktiftir. Yeniden inceleme talep ederiz.
```

---

## 🆘 Sorun Çıkarsa

**Geri alma:**
```bash
cd ~/GYSYIM
git reset --hard HEAD~1
# Dashboard'dan Reload et
```

**CSP sorunu varsa (sayfa bozuksa):**
```bash
nano ~/GYSYIM/yaziisleri1/settings.py
# MIDDLEWARE listesinden bu satırı yorum yap (# ekle):
# 'middlewares.security_headers.ContentSecurityPolicyMiddleware',
# Kaydet: Ctrl+X, Y, Enter
# Dashboard'dan Reload et
```

---

## ✅ Yapılan Güncellemeler

- CSP (Content Security Policy) middleware eklendi
- robots.txt ve ads.txt eklendi
- İletişim bilgileri güncellendi (gmail.com + telefon)
- Cookie güvenlik ayarları (SameSite, Referrer-Policy)
- HSTS, SSL redirect, secure headers aktif

---

**Not:** Bu dosya GitHub'da da mevcut, istediğin zaman bakabilirsin.
