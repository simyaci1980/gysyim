from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import ChatMessage

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("visitor_name", "message", "is_admin", "timestamp")
    list_filter = ("is_admin", "timestamp")
    search_fields = ("visitor_name", "message")
