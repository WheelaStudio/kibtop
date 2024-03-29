from django.contrib import admin
from django.urls import path, include
from drf_yasg.generators import OpenAPISchemaGenerator
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.conf import settings
from django.conf.urls.static import static


class BothHttpAndHttpsSchemaGenerator(OpenAPISchemaGenerator):
    def get_schema(self, request=None, public=False):
        schema = super().get_schema(request, public)
        schema.schemes = ["http", "https"]
        return schema


schema_view = get_schema_view(
    openapi.Info(
        title="KibTop API",
        default_version='v1',
        description="API documentation",
    ),
    public=True,
    generator_class=BothHttpAndHttpsSchemaGenerator,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('v1/', include("chat.urls")),
                  path('v1/', include([
                      path('auth/', include('accounts.urls')),
                      path('social_auth/', include(('social_auth.urls', 'social_auth'), namespace="social_auth")),
                      path('', include('sections.urls.base_urls')),
                      path('chat/', include('chat.urls')),
                      path('docs/', include([
                          path('', schema_view.with_ui('swagger', cache_timeout=0), name="swagger-schema"),
                          path('api.json/', schema_view.without_ui(cache_timeout=0), name='schema-swagger-ui'),
                      ])),
                  ]))
              ] + static(
    settings.STATIC_URL, document_root=settings.STATIC_ROOT
) + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
