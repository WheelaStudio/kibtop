from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator
from sections.models import (
    AvtoFull, AvtoFullFavouritesUser, AvtoFullViewsUser, AvtoFullUpload
)
from sections.serializer import (
    AvtoFullSerializer, AvtoFullSerializerEN, AvtoFullSerializerRU, AvtoFullSerializerTR,
    AvtoFullSerializerDetail, AvtoFullViewsUserSerializer, AvtoFullFavouritesUserSerializer, AvtoFullUploadSerializer
)
from sections.service import (
    FilterAvto, FilterAvtoViews, FilterAvtoFavourites)

from sections.utils import query_list_lang
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.view_tools import get_category_trans, get_sub_category_trans, get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price, get_price_list

model_avto = AvtoFull.objects.filter(publisher=True)


class AvtoLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class AvtoFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = AvtoFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterAvto
    pagination_class = AvtoLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_avto, query),
                'serializer_class': AvtoFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_avto, query),
                'serializer_class': AvtoFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_avto, query),
                'serializer_class': AvtoFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_avto, query), AvtoFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_avto, query), AvtoFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_avto, query), AvtoFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class AvtoFullAPIListCreate(generics.CreateAPIView):
    queryset = model_avto
    serializer_class = AvtoFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):
        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        model_args_list = get_base_fields_trans(request_data, 'avto')

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('avto', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class AvtoFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_avto
    serializer_class = AvtoFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterAvtoViews
    queryset = AvtoFullViewsUser.objects.all()
    serializer_class = AvtoFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = AvtoFullUpload.objects.all()
    serializer_class = AvtoFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = AvtoFullUpload.objects.all()
    serializer_class = AvtoFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterAvtoFavourites
    queryset = AvtoFullFavouritesUser.objects.all()
    serializer_class = AvtoFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = AvtoFullFavouritesUser.objects.all()
    serializer_class = AvtoFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = AvtoFull.objects.all()
    serializer_class = AvtoFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
