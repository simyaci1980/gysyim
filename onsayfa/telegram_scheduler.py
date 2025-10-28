from apscheduler.schedulers.background import BackgroundScheduler
from .views import fetch_telegram_messages
import logging

logger = logging.getLogger(__name__)

def start():
    """
    Telegram mesajlarını her 3 saniyede bir kontrol eden scheduler
    """
    scheduler = BackgroundScheduler()
    
    # Her 3 saniyede bir fetch_telegram_messages çalıştır
    scheduler.add_job(
        fetch_telegram_messages,
        'interval',
        seconds=3,
        id='telegram_fetch',
        replace_existing=True
    )
    
    scheduler.start()
    logger.info("Telegram mesaj scheduler başlatıldı (her 3 saniyede bir)")
