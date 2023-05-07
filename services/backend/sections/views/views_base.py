from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from django.db.models import QuerySet, Model
from rest_framework import generics
from sections.models import Money, City
from sections.serializer import MoneySerializer, CitySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class MoneyAPIList(generics.ListCreateAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class MoneyAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class CityAPIList(generics.ListAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


def with_price_sorting(model: QuerySet, query):
    sorting = query['sorting'] if 'sorting' in query else 'default'
    if sorting == 'expensive':
        return model.order_by('price').reverse()

    if sorting == 'cheap':
        return model.order_by('price')

    return model


def full_with_price_sorting(full_adverts: list, query):
    sorting = query['sorting'] if 'sorting' in query else 'default'

    if sorting == 'expensive':
        return sorted(full_adverts, key=lambda advert: int(advert['price_dol']), reverse=True)

    if sorting == 'cheap':
        return sorted(full_adverts, key=lambda advert: int(advert['price_dol']))

    return full_adverts


def convert_currency_price(price: int, from_currency: str):
    exchange = {
        "$": 1,
        "€": 0.92319,
        "₤": 18.8
    }

    if from_currency == "$":
        price_dol = price
        price_eur = round(price_dol * exchange["€"])
        price_lir = round(price_dol * exchange["₤"])

    if from_currency == "€":
        price_dol = round(price / exchange[from_currency])
        price_eur = price
        price_lir = round(price_dol * exchange["₤"])

    if from_currency == "₤":
        price_dol = round(price / exchange[from_currency])
        price_eur = round(price_dol * exchange["€"])
        price_lir = price

    return {
        "price_dol": price_dol,
        "price_eur": price_eur,
        "price_lir": price_lir,
    }


def get_price_list(request_data):
    if not ('price' in request_data):
        return print('Нет поля price')

    if not ('currency' in request_data):
        return print('Нет поля currency')

    price = int(request_data["price"])
    currency = request_data["currency"]

    return convert_currency_price(price, currency)

