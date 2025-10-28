# PYTHONANYWHERE DEPLOYMENT REHBERİ

## 1. Dosyaları Yükle
- Tüm projeyi PythonAnywhere'e yükle
- `.env` dosyasını düzenle ve production ayarlarını yap

## 2. .env Dosyası (Production)
```env
# Django Settings
SECRET_KEY=yeni-gizli-anahtar-olustur-32-karakter-uzunlugunda
DEBUG=False
ALLOWED_HOSTS=yourusername.pythonanywhere.com
CSRF_TRUSTED_ORIGINS=https://yourusername.pythonanywhere.com

# Telegram Bot  
TELEGRAM_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

## 3. Virtual Environment Kur
```bash
mkvirtualenv --python=/usr/bin/python3.10 myenv
pip install -r requirements.txt
```

## 4. requirements.txt Oluştur
```
Django==5.2.7
python-decouple==3.8
requests==2.31.0
bleach==6.1.0
django-apscheduler==0.6.2
```

## 5. Static Dosyalar
settings.py'ye ekle:
```python
STATIC_ROOT = BASE_DIR / 'staticfiles'
```

Sonra çalıştır:
```bash
python manage.py collectstatic
```

PythonAnywhere Web ayarlarında Static files bölümüne şu eşlemeyi ekle:
- URL: /static/
- Directory: /home/yourusername/PROJE_KLASORU/staticfiles

## 6. Database Migrate
```bash
python manage.py migrate
```

## 7. WSGI Yapılandırması
PythonAnywhere WSGI dosyasını düzenle:
```python
import sys
import os

path = '/home/yourusername/yaziisleri1'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'yaziisleri1.settings'

# Web worker içinde scheduler'ı devre dışı bırak (APScheduler sadece ayrı görevde çalışsın)
os.environ.setdefault('RUN_TELEGRAM_SCHEDULER', 'false')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

## 8. Güvenlik Kontrolleri
✅ DEBUG=False
✅ SECRET_KEY değiştirildi
✅ ALLOWED_HOSTS ayarlandı
✅ HTTPS yönlendirmesi aktif
✅ CSRF koruması aktif
✅ XSS koruması aktif
✅ API anahtarları .env'de saklı

## 9. Google Ads İçin Gereksinimler
✅ HTTPS (PythonAnywhere otomatik sağlar)
✅ Gizlilik Politikası sayfası ekle
✅ Kullanım Koşulları sayfası ekle
✅ İletişim bilgileri ekle
✅ Güvenlik sertifikaları güncel

## 10. Scheduler (Background Task)
Seçenek A — Scheduled Task (önerilen, basit): PythonAnywhere'de "Tasks" sekmesinden her 3 dakikada bir çalışacak şekilde ayarla:
```bash
cd /home/yourusername/yaziisleri1 && /home/yourusername/.virtualenvs/myenv/bin/python manage.py shell -c "from onsayfa.views import fetch_telegram_messages; fetch_telegram_messages()"
```

Seçenek B — Always-on task (sürekli 3 saniyede bir): Web uygulamasında scheduler kapalı kalır (RUN_TELEGRAM_SCHEDULER=false). Ayrı bir Always-on task olarak aşağıdakini çalıştır:
```bash
cd /home/yourusername/PROJE_KLASORU && /home/yourusername/.virtualenvs/myenv/bin/python - << 'PY'
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'yaziisleri1.settings')
os.environ.setdefault('RUN_TELEGRAM_SCHEDULER', 'true')
import django
django.setup()
from onsayfa.telegram_scheduler import start
start()
# Süreci canlı tut
import time
while True:
    time.sleep(60)
PY
```
