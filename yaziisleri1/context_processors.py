from django.conf import settings

def marketing(request):
    """
    Expose marketing/tracking related settings to templates.
    If META_PIXEL_ID is empty, templates can safely skip injecting Pixel.
    """
    return {
        'META_PIXEL_ID': getattr(settings, 'META_PIXEL_ID', ''),
    }
