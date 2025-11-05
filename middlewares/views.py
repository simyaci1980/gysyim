from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.conf import settings


@csrf_exempt
def csp_report(request):
	"""
	Accept CSP violation reports and append them to a local log file.
	This helps diagnose any third-party or injected requests (e.g., suspicious domains).
	"""
	if request.method != 'POST':
		return HttpResponseNotAllowed(['POST'])

	try:
		body = request.body.decode('utf-8', errors='replace')
	except Exception:
		body = '<unreadable>'

	log_path = settings.BASE_DIR / 'csp_reports.log'
	timestamp = timezone.now().isoformat()
	user_agent = request.META.get('HTTP_USER_AGENT', '-')
	line = f"[{timestamp}] UA={user_agent} IP={request.META.get('REMOTE_ADDR','-')} BODY={body}\n"

	try:
		with open(log_path, 'a', encoding='utf-8') as f:
			f.write(line)
	except Exception:
		# Swallow logging errors to avoid impacting users
		pass

	return JsonResponse({'status': 'ok'})
