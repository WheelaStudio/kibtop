from sections.models import FreeFullUpload, FreeFull
from django.contrib import admin

from sections.models.free.models_free import FreeFullViewsUser


class FreeFullImageAdmin(admin.StackedInline):
    model = FreeFullUpload


@admin.register(FreeFull)
class AUAdmin(admin.ModelAdmin):
    inlines = [FreeFullImageAdmin]

    class Meta:
        model = FreeFull


admin.site.register(FreeFullViewsUser)
