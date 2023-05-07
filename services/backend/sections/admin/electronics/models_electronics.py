from sections.models import ElectronicsFullUpload, ElectronicsFull
from django.contrib import admin

from sections.models.electronics.models_electronics import ElectronicsFullViewsUser


class ElectronicsFullImageAdmin(admin.StackedInline):
    model = ElectronicsFullUpload


@admin.register(ElectronicsFull)
class EUAdmin(admin.ModelAdmin):
    inlines = [ElectronicsFullImageAdmin]

    class Meta:
        model = ElectronicsFull


admin.site.register(ElectronicsFullViewsUser)
