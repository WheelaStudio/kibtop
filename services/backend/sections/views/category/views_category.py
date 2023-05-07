import math
import random
from functools import reduce
from itertools import chain

from django.core import serializers
from django.core.paginator import Paginator
from django.db.models import Q

import requests
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.parsers import JSONParser
from rest_framework import filters
from sections.serializer.base_serializer import FullCategoryFieldsSerializer
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
from datetime import datetime

from sections.models import (
    AvtoFull,
    ChildrenFull,
    ElectronicsFull,
    FashionFull,
    HouseGardenFull,
    RealtyFull,
    ServicesFull,
    WorkFull,
    FreeFull
)
from sections.serializer import (
    CategoryFullSerializer

)
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from sections.views.views_base import full_with_price_sorting
from settings.settings import BASE_URL


class CategoryLimitPagination(PageNumberPagination):
    default_limit = 10


class CategoryCities(generics.ListAPIView):
    serializer_class = CategoryFullSerializer
    queryset = AvtoFull
    # filter_backends = (DjangoFilterBackend,)
    pagination_class = CategoryLimitPagination

    def get(self, request, *args, **kwargs):
        query = self.request.query_params

        models_list = {
            'avto': AvtoFull,
            'children': ChildrenFull,
            'electronics': ElectronicsFull,
            'fashion': FashionFull,
            'house_garden': HouseGardenFull,
            'realty': RealtyFull,
            'services': ServicesFull,
            'work': WorkFull,
            'free': FreeFull
        }

        category = query['category'] if ('category' in query) and (query['category'] in models_list) else None

        models = [models_list[category], ] if category else models_list.values()

        cities = []
        for model in models:
            cities = [*cities, *list(chain(model.objects.values_list('city', flat=True)))]

        cities = sorted(set([city.strip() for city in cities if city]))

        return Response(cities, status=HTTP_200_OK)


class CategoryFullAPIList(generics.ListAPIView):
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = AvtoFull
    # filter_backends = (DjangoFilterBackend,)
    pagination_class = CategoryLimitPagination

    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        limit = int(query['limit']) if 'limit' in query.keys() else 8
        page = int(query['page']) if 'page' in query.keys() else 0


        category_list = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work',
                         'free']

        models = {
            'avto': [{**advert, 'categoryType': 'avto', 'upload': f'/media/{advert["upload"]}'} for advert in
                     list(chain(AvtoFull.objects.all().values()))],
            'children': [{**advert, 'categoryType': 'children', 'upload': f'/media/{advert["upload"]}'} for advert in
                         list(chain(ChildrenFull.objects.all().values()))],
            'electronics': [{**advert, 'categoryType': 'electronics', 'upload': f'/media/{advert["upload"]}'} for advert
                            in list(chain(ElectronicsFull.objects.all().values()))],
            'fashion': [{**advert, 'categoryType': 'fashion', 'upload': f'/media/{advert["upload"]}'} for advert in
                        list(chain(FashionFull.objects.all().values()))],
            'house_garden': [{**advert, 'categoryType': 'house_garden', 'upload': f'/media/{advert["upload"]}'} for
                             advert in list(chain(HouseGardenFull.objects.all().values()))],
            'realty': [{**advert, 'categoryType': 'realty', 'upload': f'/media/{advert["upload"]}'} for advert in
                       list(chain(RealtyFull.objects.all().values()))],
            'services': [{**advert, 'categoryType': 'services', 'upload': f'/media/{advert["upload"]}'} for advert in
                         list(chain(ServicesFull.objects.all().values()))],
            'work': [{**advert, 'categoryType': 'work', 'upload': f'/media/{advert["upload"]}'} for advert in
                     list(chain(WorkFull.objects.all().values()))],
            'free': [{**advert, 'categoryType': 'free', 'upload': f'/media/{advert["upload"]}'} for advert in
                     list(chain(FreeFull.objects.all().values()))],
        }

        full_adverts = [*models['avto'], *models['children'], *models['electronics'], *models['fashion'],
                        *models['house_garden'], *models['realty'], *models['services'], *models['work'],
                        *models['free']]

        search_category = query['cat'] if 'cat' in query.keys() else False
        if search_category in category_list:
            try:
                full_adverts = [*models[search_category]]
            except:
                pass

        full_adverts = sorted(full_adverts, key=lambda advert: advert['created_at'], reverse=True)

        if 'search' in query.keys():
            try:
                search_unique = bool(int(query['unique'])) if 'unique' in query.keys() else False
            except:
                search_unique = True

            search = query['search']
            fuzz_int = int(query['fuzz']) if 'fuzz' in query.keys() else 70

            full_adverts = self.search_models(full_adverts, search, fuzz_int)

            if search_unique:
                unique_adverts = []
                for advert in full_adverts:
                    if not any([advert['title_en'] in unique_ad.values() for unique_ad in unique_adverts]):
                        unique_adverts.append(advert)

                full_adverts = unique_adverts

            def get_fuzz(advert):
                search_fields = ['title_en', 'title_ru', 'title_tr']
                return sorted([fuzz.token_set_ratio(advert[field], search) for field in search_fields], reverse=True)[0]

            full_adverts = [{**advert, 'fuzz': get_fuzz(advert)} for advert in full_adverts]

            full_adverts = sorted(full_adverts, key=lambda advert: advert['fuzz'], reverse=True)

        if 'city' in query:
            location = query['city']

            full_adverts = [advert for advert in full_adverts if bool(advert['city']) and location in advert['city']]

        full_adverts = full_with_price_sorting(full_adverts, query)

        adverts_len = len(full_adverts)

        if limit <= adverts_len:
            first = page * limit
            last = first + limit
            full_adverts = full_adverts[first:last]



        res = {
            "results": {
                'avto': [advert for advert in full_adverts if advert['categoryType'] == 'avto'],
                'children': [advert for advert in full_adverts if advert['categoryType'] == 'children'],
                'electronics': [advert for advert in full_adverts if advert['categoryType'] == 'electronics'],
                'fashion': [advert for advert in full_adverts if advert['categoryType'] == 'fashion'],
                'house_garden': [advert for advert in full_adverts if advert['categoryType'] == 'house_garden'],
                'realty': [advert for advert in full_adverts if advert['categoryType'] == 'realty'],
                'services': [advert for advert in full_adverts if advert['categoryType'] == 'services'],
                'work': [advert for advert in full_adverts if advert['categoryType'] == 'work'],
                'free': [advert for advert in full_adverts if advert['categoryType'] == 'free']
            },
            "total": int(adverts_len)
        }

        return Response(res, status=HTTP_200_OK)

    @staticmethod
    def search_models(model, search: str, fuzz_int: int):
        def generate_expression(advert):
            search_fields = ['title_en', 'title_ru', 'title_tr']

            entry = any(
                [any(word in advert[field].lower() for word in search.lower().split(' ')) for field in search_fields])

            if entry:
                return True

            def prepare_words(string: str):
                word_list = string.replace(',', ' ').replace('.', ' ').replace('-', ' ').strip().split(' ')
                return [word.lower() for word in word_list if word]

            similarity = any([
                any([
                    any([
                        fuzz.token_set_ratio(field_word, word) > fuzz_int for word in prepare_words(search)])
                    for field_word in prepare_words(advert[field])
                ]) for field in search_fields
            ])

            return similarity

        return [advert for advert in model if generate_expression(advert)]


def create_filter_expression(fields, search, table_name):
    return " ".join([f"LOWER('{table_name}.{field}') LIKE LOWER('%%{search}%%') OR" for field in fields])[:-3]


class CategorySearchAPI(generics.ListAPIView):
    serializer_class = FullCategoryFieldsSerializer
    queryset = AvtoFull

    def get(self, request, *args, **kwargs):
        search = self.request.query_params['search']

        avto = self.search_models(list(chain(AvtoFull.objects.all().values())), search)
        children = self.search_models(list(chain(ChildrenFull.objects.all().values())), search)
        electronics = self.search_models(list(chain(ElectronicsFull.objects.all().values())), search)
        fashion = self.search_models(list(chain(FashionFull.objects.all().values())), search)
        house_garden = self.search_models(list(chain(HouseGardenFull.objects.all().values())), search)
        realty = self.search_models(list(chain(RealtyFull.objects.all().values())), search)
        services = self.search_models(list(chain(ServicesFull.objects.all().values())), search)
        work = self.search_models(list(chain(WorkFull.objects.all().values())), search)

        return Response({
            'avto': avto,
            'children': children,
            'electronics': electronics,
            'fashion': fashion,
            'house_garden': house_garden,
            'realty': realty,
            'services': services,
            'work': work,
        }, status=HTTP_200_OK)

    @staticmethod
    def search_models(model, search):
        def generate_expression(advert):
            search_fields = ['title_en', 'title_ru', 'title_tr']

            similarity = any([fuzz.token_set_ratio(advert[field], search) > 70 for field in search_fields])
            entry = any(
                [any(word in advert[field].lower() for word in search.lower().split(' ')) for field in search_fields])

            return similarity or entry

        return [advert for advert in model if generate_expression(advert)]

