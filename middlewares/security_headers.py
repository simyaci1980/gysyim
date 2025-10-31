from django.utils.deprecation import MiddlewareMixin


class ContentSecurityPolicyMiddleware(MiddlewareMixin):
    """
    Adds a basic Content-Security-Policy header to reduce risk of loading
    external resources. Adjust if you later add external CDNs or ad scripts.
    """

    def process_response(self, request, response):
        # Allow self resources; inline scripts/styles allowed for current templates
        csp = " ; ".join([
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data:",
            "connect-src 'self'",
            "font-src 'self' data:",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
        ])
        response.setdefault('Content-Security-Policy', csp)

        # Extra hardening headers (non-breaking)
        response.setdefault('Permissions-Policy', "geolocation=(), camera=(), microphone=()")
        response.setdefault('Cross-Origin-Resource-Policy', 'same-origin')
        response.setdefault('Cross-Origin-Opener-Policy', 'same-origin')
        response.setdefault('Cross-Origin-Embedder-Policy', 'require-corp')
        return response
