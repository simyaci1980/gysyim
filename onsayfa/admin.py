from django.contrib import admin
from django.utils.html import format_html
from django.urls import path
from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from .models import ChatMessage

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("visitor_name", "message_preview", "is_admin_badge", "timestamp", "session_key")
    list_filter = ("is_admin", "timestamp")
    search_fields = ("visitor_name", "message", "session_key")
    ordering = ("-timestamp",)
    
    def message_preview(self, obj):
        """Mesajın ilk 50 karakterini göster"""
        return obj.message[:50] + "..." if len(obj.message) > 50 else obj.message
    message_preview.short_description = "Mesaj"
    
    def is_admin_badge(self, obj):
        """Admin/Ziyaretçi rozeti"""
        if obj.is_admin:
            return format_html('<span style="background:#28a745;color:white;padding:3px 8px;border-radius:3px;">Admin</span>')
        return format_html('<span style="background:#6c757d;color:white;padding:3px 8px;border-radius:3px;">Ziyaretçi</span>')
    is_admin_badge.short_description = "Kimlik"
    
    def get_urls(self):
        """Özel chat görünüm URL'si ekle"""
        urls = super().get_urls()
        custom_urls = [
            path('chat-view/', self.admin_site.admin_view(self.chat_view), name='chat_view'),
            path('chat-view/<str:session_key>/', self.admin_site.admin_view(self.chat_detail_view), name='chat_detail_view'),
            path('send-reply/<str:session_key>/', self.admin_site.admin_view(self.send_reply), name='send_reply'),
        ]
        return custom_urls + urls
    
    def chat_view(self, request):
        """Tüm aktif konuşmaları listele"""
        # Session'lara göre grupla
        sessions = ChatMessage.objects.values('session_key').distinct().order_by('-id')
        
        chat_sessions = []
        for session in sessions:
            session_key = session['session_key']
            messages = ChatMessage.objects.filter(session_key=session_key).order_by('-timestamp')
            last_message = messages.first()
            unread_count = messages.filter(is_admin=False).count()
            
            chat_sessions.append({
                'session_key': session_key,
                'visitor_name': last_message.visitor_name or 'Ziyaretçi',
                'last_message': last_message.message[:50],
                'last_time': last_message.timestamp,
                'message_count': messages.count(),
                'unread_count': unread_count,
            })
        
        context = {
            'title': 'Chat Yönetimi',
            'chat_sessions': chat_sessions,
        }
        return render(request, 'admin/chat_view.html', context)
    
    def chat_detail_view(self, request, session_key):
        """Belirli bir konuşmanın detaylarını göster"""
        messages_list = ChatMessage.objects.filter(session_key=session_key).order_by('timestamp')
        
        context = {
            'title': f'Konuşma: {session_key[:8]}...',
            'session_key': session_key,
            'messages': messages_list,
        }
        return render(request, 'admin/chat_detail_view.html', context)
    
    def send_reply(self, request, session_key):
        """Admin cevabı gönder"""
        if request.method == 'POST':
            reply_text = request.POST.get('reply_text', '').strip()
            if reply_text:
                ChatMessage.objects.create(
                    session_key=session_key,
                    visitor_name="Admin",
                    message=reply_text,
                    is_admin=True,
                    timestamp=timezone.now()
                )
                messages.success(request, "Cevabınız gönderildi!")
            else:
                messages.error(request, "Boş mesaj gönderilemez!")
        
        return redirect('admin:chat_detail_view', session_key=session_key)
    
    # Admin panelinde özel buton ekle
    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['show_chat_button'] = True
        return super().changelist_view(request, extra_context)
