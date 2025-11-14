def anayasa1(request):
    return render(request, 'onsayfa/anayasa1.html')

def anayasaNot(request):
    return render(request, 'onsayfa/anayasaNot.html')

def devletintemelorg(request):
    return render(request, 'onsayfa/devletintemelorg.html')

def turkiyebmm(request):
    return render(request, 'onsayfa/turkıyebmm.html')

def ornek1(request):
    return render(request, 'onsayfa/ornek1.html')

def bim5mad(request):
    return render(request, 'onsayfa/bim5mad.html')

def darisureler(request):
    return render(request, 'onsayfa/darisureler.html')

def dersler_page(request):
    lessons = [
        {
            "title": "ANAYASA",
            "desc": "Anayasa ile ilgili temel dersler ve alt başlıklar.",
            "children": [
                {"title": "Genel Esaslar ve Temel Hak/Hürriyetler", "url_name": "anayasa1"},
                {"title": "Devletin Temel Organları", "url_name": "devletintemelorg"},
                {"title": "Anayasa Notları (Kendi Notlarım)", "url_name": "anayasaNot"},
                {"title": "TBMM Karar ve Süre Notları", "url_name": "turkiyebmm"},
            ]
        },
        {
            "title": "Örnek 1",
            "desc": "Örnek içerik sayfası",
            "url_name": "ornek1",
        },
        {
            "title": "Dari Süreler",
            "desc": "Dari sürelerle ilgili notlar",
            "url_name": "darisureler",
        },
        {
            "title": "BİM 5 Madde",
            "desc": "BİM 5 madde özet notları",
            "url_name": "bim5mad",
        },
    ]
    return render(request, 'onsayfa/dersler.html', {"lessons": lessons})
from django.shortcuts import render

# Telegram performans optimizasyonu için
last_telegram_check = 0


def index(request):
    # Basit server-side günlük soru: daily_questions.get_daily_question()
    try:
        from .daily_questions import get_daily_question

        dq = get_daily_question()
    except Exception:
        dq = None

    return render(request, 'index.html', {'daily_question': dq})



def privacy(request):
	return render(request, 'privacy.html')

def terms(request):
	return render(request, 'terms.html')

def about(request):
	return render(request, 'about.html')

def contact(request):
	return render(request, 'contact.html')


# --- Telegram fonksiyonu düzgün blokta tanımlanmalı ---
import os, re, requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from .models import ChatMessage

LAST_UPDATE_FILE = os.path.join(os.path.dirname(__file__), "../last_update.txt")
from decouple import config
TELEGRAM_TOKEN = config('TELEGRAM_TOKEN')
CHAT_ID = config('TELEGRAM_CHAT_ID')

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
    try:
        r = requests.get(url, timeout=5)
        r.raise_for_status()
        data = r.json()
    except Exception as e:
        print(f"[Telegram Hatası] Bağlantı kurulamadı: {e}")
        return

    for update in data.get("result", []):
        update_id = update["update_id"]
        if "message" in update:
            text = update["message"].get("text", "")
            user_name = update["message"]["from"].get("first_name", "Admin")
            match = re.match(r"\(session=([a-zA-Z0-9]+)\)\s*(.+)", text, re.DOTALL)
            if match:
                session_key = match.group(1)
                pure_text = match.group(2).strip()
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
        last_update_id = update_id

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

    # ✅ Telegram'dan mesajları sadece 30 saniyede bir kontrol et (performans için)
    # Sadece RUN_TELEGRAM_SCHEDULER=true ise Telegram API'ye bağlan
    if os.environ.get('RUN_TELEGRAM_SCHEDULER', 'false').lower() == 'true':
        global last_telegram_check
        current_time = __import__('time').time()
        if current_time - last_telegram_check > 30:
            fetch_telegram_messages()
            last_telegram_check = current_time


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

        # Hep ziyaretçi olarak kaydet
        name = "Ziyaretçi"
        ChatMessage.objects.create(
            visitor_name=name,
            message=text,
            is_admin=False,
            session_key=session_key
        )

        # E-posta bildirimi sadece admin henüz cevap vermediyse gönder
        admin_replied = ChatMessage.objects.filter(
            session_key=session_key,
            is_admin=True
        ).exists()
        
        if settings.ADMIN_EMAIL and not admin_replied:
            try:
                send_mail(
                    subject=f'Yeni Mesaj: {name}',
                    message=f'Yeni bir ziyaretçi mesajı geldi:\n\nGönderen: {name}\nSession: {session_key}\nMesaj: {text}\n\nAdmin panelinden görüntüle: https://gysyim.pythonanywhere.com/admin/',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.ADMIN_EMAIL],
                    fail_silently=True,
                )
            except Exception:
                pass  # E-posta hatası uygulamayı çökertmez

        # Telegram'a gönder (sadece RUN_TELEGRAM_SCHEDULER=true ise)
        if os.environ.get('RUN_TELEGRAM_SCHEDULER', 'false').lower() == 'true':
            requests.get(
                f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage",
                params={"chat_id": CHAT_ID, "text": f"(session={session_key})"}
            )
            requests.get(
                f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage",
                params={"chat_id": CHAT_ID, "text": f"{name}: {text}"}
            )

    return JsonResponse({"status": "ok"})


