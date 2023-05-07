from sections.models import ServicesFullUpload, ServicesFull
from django.contrib import admin

from sections.models.services.models_services import ServicesFullViewsUser


class ServicesFullImageAdmin(admin.StackedInline):
    model = ServicesFullUpload


@admin.register(ServicesFull)
class SUAdmin(admin.ModelAdmin):
    inlines = [ServicesFullImageAdmin]

    class Meta:
        model = ServicesFull


admin.site.register(ServicesFullViewsUser)
