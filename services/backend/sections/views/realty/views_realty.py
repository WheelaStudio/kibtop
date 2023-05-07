from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    RealtyFull, RealtyFullFavouritesUser, RealtyFullViewsUser, RealtyFullUpload
)
from sections.serializer import (
    RealtyFullSerializerDetail, RealtyFullSerializerEN, RealtyFullSerializerRU, RealtyFullUploadSerializer,
    RealtyFullSerializerTR, RealtyFullSerializer, RealtyFullViewsUserSerializer, RealtyFullFavouritesUserSerializer
)
from sections.service import (
    FilterRealty, FilterRealtyFavourites, FilterRealtyViews
)
from sections.service.realty.service_filter_realty import FilterRealtyLand
from sections.utils import query_list_lang
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.view_tools import get_sub_category_trans, get_category_trans, get_all_old_new_trans, \
    get_number_rooms_trans, get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price, get_price_list

model_realty = RealtyFull.objects.filter(publisher=True, )


class RealtyLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class RealtyFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = RealtyFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealty
    pagination_class = RealtyLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_realty, query),
                'serializer_class': RealtyFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_realty, query),
                'serializer_class': RealtyFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_realty, query),
                'serializer_class': RealtyFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_realty, query), RealtyFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_realty, query), RealtyFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_realty, query), RealtyFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full

class RealtyLandFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = RealtyFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealtyLand
    pagination_class = RealtyLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_realty, query),
                'serializer_class': RealtyFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_realty, query),
                'serializer_class': RealtyFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_realty, query),
                'serializer_class': RealtyFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_realty, query), RealtyFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_realty, query), RealtyFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_realty, query), RealtyFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class RealtyFullAPIListCreate(generics.CreateAPIView):
    queryset = model_realty
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):
        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        base_fields_list = get_base_fields_trans(request_data, 'realty')

        all_old_new_list = get_all_old_new_trans(request_data)
        number_rooms_list = get_number_rooms_trans(request_data)

        model_args_list = {
            **base_fields_list,
            **all_old_new_list,
            **number_rooms_list
        }

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('realty', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class RealtyLandFullAPIListCreate(generics.CreateAPIView):
    queryset = model_realty
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):
        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        base_fields_list = get_base_fields_trans(request_data, 'realty')

        model_args_list = {
            **base_fields_list,
        }

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('realty', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class RealtyFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_realty
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealtyViews
    queryset = RealtyFullViewsUser.objects.all()
    serializer_class = RealtyFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealtyFavourites
    queryset = RealtyFullFavouritesUser.objects.all()
    serializer_class = RealtyFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = RealtyFullFavouritesUser.objects.all()
    serializer_class = RealtyFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = RealtyFullUpload.objects.all()
    serializer_class = RealtyFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = RealtyFullUpload.objects.all()
    serializer_class = RealtyFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    # title_en = flexible_fields_list['title_en'],
    # title_ru = flexible_fields_list['title_ru'],
    # title_tr = flexible_fields_list['title_tr'],
    # description_tr = lang_tr['description'],
    # description_ru = lang_ru['description'],
    # category_tr = lang_tr['category'],
    # category_ru = lang_ru['category'],
    # sub_category_tr = lang_tr['sub_category'],
    # sub_category_ru = lang_ru['sub_category'],
    # price_dol = price_dol,
    # price_eur = price_eur,
    # price_lir = price_lir