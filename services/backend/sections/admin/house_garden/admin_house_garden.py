from sections.models import HouseGardenFullUpload, HouseGardenFull
from django.contrib import admin

from sections.models.house_garden.models_house_garden import HouseGardenFullViewsUser


class HouseGardenFullImageAdmin(admin.StackedInline):
    model = HouseGardenFullUpload


@admin.register(HouseGardenFull)
class HGUAdmin(admin.ModelAdmin):
    inlines = [HouseGardenFullImageAdmin]

    class Meta:
        model = HouseGardenFull


admin.site.register(HouseGardenFullViewsUser)
