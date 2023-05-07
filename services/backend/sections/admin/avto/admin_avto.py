from sections.models import AvtoFullUpload, AvtoFull
from django.contrib import admin

from sections.models.avto.models_avto import AvtoFullViewsUser


class AvtoFullImageAdmin(admin.StackedInline):
    model = AvtoFullUpload


@admin.register(AvtoFull)
class AUAdmin(admin.ModelAdmin):
    inlines = [AvtoFullImageAdmin]

    class Meta:
        model = AvtoFull


admin.site.register(AvtoFullViewsUser)