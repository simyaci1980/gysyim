from django.db import models
from django.contrib.auth.models import User

class ChatMessage(models.Model):
    session_key = models.CharField(max_length=100)
    visitor_name = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    is_admin = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.visitor_name or 'Ziyaretçi'}: {self.message[:20]}"
