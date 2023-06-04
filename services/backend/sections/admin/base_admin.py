from django.contrib import admin
from modeltranslation.translator import TranslationOptions, translator

from sections.models import Money, City
from sections.models import Stock


class StockTranslationOptions(TranslationOptions):
    fields = ('title', 'desc',)


translator.register(Stock, StockTranslationOptions)

admin.site.register(Stock)
admin.site.register(City)
admin.site.register(Money)

admin.site.site_header = 'KIBTOP Administration'
admin.site.index_title = 'Panel'
admin.site.site_title = 'KIBTOP'