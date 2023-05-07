from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    ElectronicsFull, ElectronicsFullFavouritesUser, ElectronicsFullViewsUser, ElectronicsFullUpload
)
from sections.serializer import (
    ElectronicsFullSerializer, ElectronicsFullSerializerEN, ElectronicsFullSerializerRU, ElectronicsFullSerializerTR,
    ElectronicsFullSerializerDetail, ElectronicsFullFavouritesUserSerializer, ElectronicsFullViewsUserSerializer,
    ElectronicsFullUploadSerializer
)
from sections.service import (
    FilterElectronics, FilterElectronicsViews, FilterElectronicsFavourites,
)
from sections.utils import query_list_lang
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.view_tools import get_category_trans, get_sub_category_trans, get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price, get_price_list

model_electronics = ElectronicsFull.objects.filter(publisher=True)


class ElectronicsLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class ElectronicsFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = ElectronicsFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterElectronics
    pagination_class = ElectronicsLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_electronics, query),
                'serializer_class': ElectronicsFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_electronics, query),
                'serializer_class': ElectronicsFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_electronics, query),
                'serializer_class': ElectronicsFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_electronics, query), ElectronicsFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_electronics, query), ElectronicsFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_electronics, query), ElectronicsFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class ElectronicsFullAPIListCreate(generics.CreateAPIView):
    queryset = model_electronics
    serializer_class = ElectronicsFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        model_args_list = get_base_fields_trans(request_data, 'electronics')

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('electronics', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ElectronicsFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_electronics
    serializer_class = ElectronicsFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterElectronicsViews
    queryset = ElectronicsFullViewsUser.objects.all()
    serializer_class = ElectronicsFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterElectronicsFavourites
    queryset = ElectronicsFullFavouritesUser.objects.all()
    serializer_class = ElectronicsFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = ElectronicsFullFavouritesUser.objects.all()
    serializer_class = ElectronicsFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = ElectronicsFull.objects.all()
    serializer_class = ElectronicsFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = ElectronicsFullUpload.objects.all()
    serializer_class = ElectronicsFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = ElectronicsFullUpload.objects.all()
    serializer_class = ElectronicsFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
