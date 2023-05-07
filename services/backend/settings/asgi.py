from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator

import os

from django.core.asgi import get_asgi_application

from chat.utils import AuthJwtMiddleware

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings.settings')

asgi_application = get_asgi_application()

import chat.routing

application = ProtocolTypeRouter({
  "http": asgi_application,
  "websocket":
  # AllowedHostsOriginValidator(
  #       AuthMiddlewareStack(
            AuthJwtMiddleware(
                URLRouter(
                    chat.routing.websocket_urlpatterns
            )

            # )
    # ),
)})
