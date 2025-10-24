from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ornek1/', views.ornek1, name='ornek1'),
    path('darisureler/', views.darisureler, name='darisureler'),
    path('bim5mad/', views.bim5mad, name='bim5mad'),
]
