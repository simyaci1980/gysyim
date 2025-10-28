from django.apps import AppConfig
import os


class OnsayfaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'onsayfa'
    
    def ready(self):
        """Django başlatıldığında Telegram scheduler'ı sadece izin verilmişse başlat"""
        run_scheduler = os.environ.get('RUN_TELEGRAM_SCHEDULER', 'true').lower() in ('1', 'true', 'yes', 'on')
        if run_scheduler:
            from . import telegram_scheduler
            telegram_scheduler.start()
