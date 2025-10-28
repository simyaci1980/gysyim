from django.urls import path
from . import views
from onsayfa.views import chat_api

urlpatterns = [
    path('', views.index, name='index'),
    path('ornek1/', views.ornek1, name='ornek1'),
    path('darisureler/', views.darisureler, name='darisureler'),
    path('bim5mad/', views.bim5mad, name='bim5mad'),
    path('chat-api/', views.chat_api, name='chat_api'),
    
    # Yasal Sayfalar
    path('privacy/', views.privacy, name='privacy'),
    path('terms/', views.terms, name='terms'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]
