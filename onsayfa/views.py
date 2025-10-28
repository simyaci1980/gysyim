from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def ornek1(request):
	return render (request, 'onsayfa/ornek1.html') 

def bim5mad(request):
	return render (request, 'onsayfa/bim5mad.html')

def darisureler(request):
	return render (request, 'onsayfa/darisureler.html')

def privacy(request):
	return render(request, 'privacy.html')

def terms(request):
	return render(request, 'terms.html')

def about(request):
	return render(request, 'about.html')

def contact(request):
	return render(request, 'contact.html')

import os, re, requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from .models import ChatMessage
from decouple import config
import bleach

LAST_UPDATE_FILE = "last_update.txt"
TELEGRAM_TOKEN = config('TELEGRAM_TOKEN')
CHAT_ID = config('TELEGRAM_CHAT_ID')

# Telegram’dan mesajları çek
def fetch_telegram_messages():
    last_update_id = 0
    if os.path.exists(LAST_UPDATE_FILE):
        with open(LAST_UPDATE_FILE, "r") as f:
            try:
                last_update_id = int(f.read().strip())
            except ValueError:
                last_update_id = 0
    else:
        last_update_id = 0            

    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/getUpdates?offset={last_update_id + 1}"
    r = requests.get(url).json()
    
    try:
        # 🛡 Telegram API çağrısı
        r = requests.get(url, timeout=5)
        r.raise_for_status()  # HTTP hatalarını yakalar
        data = r.json()
    except Exception as e:
        # ❗ Telegram bağlantısı başarısızsa siteyi çökertmez
        print(f"[Telegram Hatası] Bağlantı kurulamadı: {e}")
        return  # fonksiyondan çık, hata vermeden

    # 🔽 Gelen mesajları işle
    for update in data.get("result", []):
        update_id = update["update_id"]

        if "message" in update:
            text = update["message"].get("text", "")
            user_name = update["message"]["from"].get("first_name", "Admin")

            # 🔹 Adminin cevabında session=(...) var mı kontrol et
            # Artık \n sonrası metni de yakalar (DOTALL)
            match = re.match(r"\(session=(?P<sid>[a-zA-Z0-9]+)\)\s*(?P<msg>.*)", text, re.DOTALL)

            if match:
                session_key = match.group("sid")
                pure_text = match.group("msg").strip()  # Başta/sonda boşluk temizle

                # Aynı admin mesajı DB'de yoksa ekle
                if not ChatMessage.objects.filter(
                    session_key=session_key,
                    message=pure_text,
                    is_admin=True
                ).exists():
                    ChatMessage.objects.create(
                        session_key=session_key,
                        visitor_name="Admin",
                        message=pure_text,
                        is_admin=True
                    )

        # Güncel offset’i sakla
        last_update_id = update_id

    # ✅ Son ID’yi güncelle
    with open(LAST_UPDATE_FILE, "w") as f:
        f.write(str(last_update_id))



from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ChatMessage
import requests
from django.db.models import Q
from decouple import config
import bleach

# Telegram bilgilerin - artık .env'den geliyor
TELEGRAM_TOKEN = config('TELEGRAM_TOKEN')
CHAT_ID = config('TELEGRAM_CHAT_ID')




@csrf_exempt
def chat_api(request):
    # Session key oluştur
    session_key = request.session.session_key
    if not session_key:
        request.session.create()
        session_key = request.session.session_key

    # ❌ Artık burada çağırmaya gerek yok - scheduler otomatik çalışıyor
    # fetch_telegram_messages()


    if request.method == "GET":
        # 🔹 Ziyaretçi kendi mesajlarını görecek
        # 🔹 Admin mesajları sadece aynı session_key için gözükecek
        messages = ChatMessage.objects.filter(
            Q(session_key=session_key, is_admin=False) |  # Ziyaretçinin kendi mesajları
            Q(session_key=session_key, is_admin=True)    # O session’a özel admin cevapları
        ).order_by("timestamp")

        data = [
            {
                "id": m.id,
                "user": "Admin" if m.is_admin else (m.visitor_name or "Ziyaretçi"),
                "message": m.message,
                "time": m.timestamp.strftime("%H:%M")
            }
            for m in messages
        ]
        return JsonResponse(data, safe=False)

    elif request.method == "POST":
        text = request.POST.get("text", "").strip()

        if not text:
            return JsonResponse({"status": "error", "message": "Mesaj boş"}, status=400)

        if request.user.is_authenticated:
            # 🔹 Kullanıcı giriş yaptıysa
            ChatMessage.objects.create(
                user=request.user,
                visitor_name=request.user.username,  # kullanıcı adı yazılsın
                message=text,
                is_admin=False,
                session_key=session_key
            )
            name = request.user.username
        else:
            # 🔹 Giriş yapmamışsa ziyaretçi
            name = request.POST.get("name", "Ziyaretçi").strip()
            ChatMessage.objects.create(
                visitor_name=name,
                message=text,
                is_admin=False,
                session_key=session_key
            )

    # Telegram’a tek seferde session ile birlikte gönder
    telegram_text = f"(session={session_key})\n{name}: {text}"
    requests.get(
        f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage",
        params={"chat_id": CHAT_ID, "text": telegram_text}
    )

    return JsonResponse({"status": "ok"})


