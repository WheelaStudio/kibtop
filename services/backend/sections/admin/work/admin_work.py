from sections.models import WorkFullUpload, WorkFull
from django.contrib import admin

from sections.models.work.models_work import WorkFullViewsUser, WorkFullFavouritesUser


class WorkFullImageAdmin(admin.StackedInline):
    model = WorkFullUpload


@admin.register(WorkFull)
class WUAdmin(admin.ModelAdmin):
    inlines = [WorkFullImageAdmin]

    class Meta:
        model = WorkFull


admin.site.register(WorkFullFavouritesUser)
