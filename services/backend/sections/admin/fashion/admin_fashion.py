from sections.models import FashionFullUpload, FashionFull
from django.contrib import admin

from sections.models.fashion.models_fashion import FashionFullViewsUser


class FashionFullImageAdmin(admin.StackedInline):
    model = FashionFullUpload


@admin.register(FashionFull)
class FUAdmin(admin.ModelAdmin):
    inlines = [FashionFullImageAdmin]

    class Meta:
        model = FashionFull


admin.site.register(FashionFullViewsUser)
