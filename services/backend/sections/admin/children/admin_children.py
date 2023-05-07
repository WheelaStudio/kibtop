from sections.models import ChildrenFullUpload, ChildrenFull
from django.contrib import admin

from sections.models.children.models_children import ChildrenFullViewsUser


class ChildrenFullImageAdmin(admin.StackedInline):
    model = ChildrenFullUpload


@admin.register(ChildrenFull)
class CUAdmin(admin.ModelAdmin):
    inlines = [ChildrenFullImageAdmin]

    class Meta:
        model = ChildrenFull

admin.site.register(ChildrenFullViewsUser)