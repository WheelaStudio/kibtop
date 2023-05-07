from sections.models import RealtyFullUpload, RealtyFull
from django.contrib import admin

from sections.models.realty.models_realty import RealtyFullViewsUser


class RealtyFullImageAdmin(admin.StackedInline):
    model = RealtyFullUpload


@admin.register(RealtyFull)
class RUAdmin(admin.ModelAdmin):
    inlines = [RealtyFullImageAdmin]

    class Meta:
        model = RealtyFull


admin.site.register(RealtyFullViewsUser)
