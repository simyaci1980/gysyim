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
            # Allow Google Tag Manager and Meta Pixel scripts
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
            "style-src 'self' 'unsafe-inline'",
            # Allow images from self, data URIs, Google analytics/tag and Facebook pixel
            "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com",
            # Allow XHR/fetch to GA/GTM and Facebook endpoints
            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://graph.facebook.com",
            "font-src 'self' data:",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            # Send CSP violation reports to our endpoint for diagnostics
            "report-uri /csp-report/",
        ])
        response.setdefault('Content-Security-Policy', csp)

        # Extra hardening headers (non-breaking)
        response.setdefault('Permissions-Policy', "geolocation=(), camera=(), microphone=()")
        response.setdefault('Cross-Origin-Resource-Policy', 'same-origin')
        response.setdefault('Cross-Origin-Opener-Policy', 'same-origin')
        response.setdefault('Cross-Origin-Embedder-Policy', 'require-corp')
        return response
