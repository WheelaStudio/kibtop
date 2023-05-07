from django.db import models
from django.utils import timezone
from accounts.models import CustomUser
#from sections.views.view_dicts.category_dicts import *

# CATEGORY_EN = get_one_nesting_choices(category_lang_dict, 'en')
# CATEGORY_RU = get_one_nesting_choices(category_lang_dict, 'ru')
# CATEGORY_TR = get_one_nesting_choices(category_lang_dict, 'tr')

# CATEGORY_EN = [
#     ('Real estate', 'Real estate'),
#     ('Auto', 'Auto'),
#     ('Job', 'Job'),
#     ('Services', 'Services'),
#     ('For kids', 'For kids'),
#     ('Electronics', 'Electronics'),
#     ('House and garden', 'House and garden'),
#     ('Fashion and style', 'Fashion and style'),
#     ('Free', 'Free')
# ]
# CATEGORY_RU = [
#     ('Недвижимость', 'Недвижимость'),
#     ('Авто', 'Авто'),
#     ('Работа', 'Работа'),
#     ('Услуги', 'Услуги'),
#     ('Для детей', 'Для детей'),
#     ('Электроника', 'Электроника'),
#     ('Дом и сад', 'Дом и сад'),
#     ('Мода и стиль', 'Мода и стиль'),
#     ('Бесплатный', 'Бесплатный')
# ]
# CATEGORY_TR = [
#     ('Emlak', 'Emlak'),
#     ('Oto', 'Oto'),
#     ('İş', 'İş'),
#     ('Hizmetler', 'Hizmetler'),
#     ('Çocuklar için', 'Çocuklar için'),
#     ('Elektronik', 'Elektronik'),
#     ('Ev ve bahçe', 'Ev ve bahçe'),
#     ('Moda ve stil', 'Moda ve stil'),
#     ('ücretsiz', 'ücretsiz')
# ]
from sections.models.for_base import CATEGORY_EN, CATEGORY_RU, CATEGORY_TR

CITY_EN = [
    ('Nicosia', 'Nicosia'),
    ('Kyrenia', 'Kyrenia'),
    ('Famagusta', 'Famagusta'),
    ('Iskele', 'Iskele'),
    ('Guzelyurt', 'Guzelyurt'),
    ('Lefke', 'Lefke'),
]
CITY_RU = [
    ('Никосия', 'Никосия'),
    ('Кирения', 'Кирения'),
    ('Фамагуста', 'Фамагуста'),
    ('Док', 'Док'),
    ('Гюзельюрт', 'Гюзельюрт'),
    ('Лефке', 'Лефке')
]
CITY_TR = [
    ('Lefkoşa', 'Lefkoşa'),
    ('Girne', 'Girne'),
    ('Gazimağusa', 'Gazimağusa'),
    ('Iskele', 'Iskele'),
    ('Güzelyurt', 'Güzelyurt'),
    ('Lefke', 'Lefke')
]

CURRENCY = [
    ('€', '€'),
    ('$', '$'),
    ('₤', '₤'),
]


class City(models.Model):
    city_name_en = models.CharField(max_length=255)
    city_name_ru = models.CharField(max_length=255)
    city_name_tr = models.CharField(max_length=255)

    def __str__(self):
        return f"en - {self.city_name_en}, ru - {self.city_name_ru}, tr - {self.city_name_tr}"


class Money(models.Model):
    money_dollar = models.IntegerField()
    monet_rub = models.IntegerField()
    money_tr = models.IntegerField()

    def __str__(self):
        return f"en - {self.money_dollar}$, ru - {self.monet_rub}₽, tr - {self.money_tr}₤"


class BaseModelFull(models.Model):
    title_en = models.CharField(max_length=255, blank=True, null=True)
    title_ru = models.CharField(max_length=255, blank=True, null=True)
    title_tr = models.CharField(max_length=255, blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    description_ru = models.TextField(blank=True, null=True)
    description_tr = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)
    address = models.CharField(max_length=1024, verbose_name='The address is')

    price = models.IntegerField(verbose_name='Starting price')
    price_dol = models.IntegerField(verbose_name='Dollar price', default=0)
    price_eur = models.IntegerField(verbose_name='Euro price', default=0)
    price_lir = models.IntegerField(verbose_name='Lira price', default=0)

    upload = models.FileField(upload_to='', blank=False)
    category_en = models.CharField(choices=CATEGORY_EN, max_length=255, blank=True, null=True, default=None)
    category_ru = models.CharField(choices=CATEGORY_RU, max_length=255, blank=True, null=True, default=None)
    category_tr = models.CharField(choices=CATEGORY_TR, max_length=255, blank=True, null=True, default=None)
    recommend = models.BooleanField()
    publisher = models.BooleanField()
    city = models.CharField(max_length=255, blank=True, null=True)
    geocode = models.CharField(max_length=255, blank=True, null=True)
    currency = models.CharField(choices=CURRENCY, max_length=1, blank=True, null=True)
    full_price = models.IntegerField(default=None, null=True)
    lifts = models.IntegerField(default=0)
    top = models.IntegerField(default=0)
    vip = models.IntegerField(default=0)
    pay_day = models.DateTimeField(verbose_name='Дата оплаты', null=True, default=None)

    def updated_at(self):
        self.published_date = timezone.now()
        self.save()

    def set_pay_day(self):
        self.pay_day = timezone.now()
        self.save()

    def __str__(self):
        return f'{self.title_en} {self.user} {self.address}'

    class Meta:
        abstract = True
