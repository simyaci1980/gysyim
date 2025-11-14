from django.urls import path
from . import views
from onsayfa.views import chat_api

urlpatterns = [
    path('', views.index, name='index'),
    path('anayasa1/', views.anayasa1, name='anayasa1'),
    path('anayasaNot/', views.anayasaNot, name='anayasaNot'),
    path('devletintemelorg/', views.devletintemelorg, name='devletintemelorg'),
    path('turkiyebmm/', views.turkiyebmm, name='turkiyebmm'),
    path('ornek1/', views.ornek1, name='ornek1'),
    path('darisureler/', views.darisureler, name='darisureler'),
    path('bim5mad/', views.bim5mad, name='bim5mad'),
    path('dersler/', views.dersler_page, name='dersler'),
    path('chat-api/', views.chat_api, name='chat_api'),
    
    # Yasal Sayfalar
    path('privacy/', views.privacy, name='privacy'),
    path('terms/', views.terms, name='terms'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]
