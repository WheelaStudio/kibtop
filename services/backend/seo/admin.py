from django.contrib import admin

# Register your models here.
from seo.models import CategoryKey, MetaDescription, MetaKeywords, Pathname, QuestionSchem


@admin.register(Pathname)
class PathnameAdmin(admin.ModelAdmin):
    list_filter = ('category',)


@admin.register(MetaDescription)
class MetaDescriptionAdmin(admin.ModelAdmin):
    list_filter = ('pathname', 'pathname__category',)


@admin.register(MetaKeywords)
class MetaKeywordsAdmin(admin.ModelAdmin):
    list_filter = ('pathname', 'pathname__category',)


@admin.register(QuestionSchem)
class QuestionSchemAdmin(admin.ModelAdmin):
    list_filter = ('pathname', 'pathname__category')



admin.site.register(CategoryKey)
# admin.site.register(MetaKeywords)
# admin.site.register(Pathname)
