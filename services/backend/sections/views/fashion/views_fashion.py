from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    FashionFull, FashionFullViewsUser, FashionFullFavouritesUser, FashionFullUpload
)
from sections.serializer import (
    FashionFullSerializer, FashionFullSerializerEN, FashionFullSerializerRU, FashionFullSerializerTR,
    FashionFullSerializerDetail, FashionFullFavouritesUserSerializer, FashionFullViewsUserSerializer,
    FashionFullUploadSerializer
)
from sections.service import (
    FilterFashion, FilterFashionViews, FilterFashionFavourites
)
from sections.utils import query_list_lang
from sections.views.view_tools import get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price

model_fashion = FashionFull.objects.filter(publisher=True)


class FashionLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class FashionFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = FashionFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterFashion
    pagination_class = FashionLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_fashion, query),
                'serializer_class': FashionFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_fashion, query),
                'serializer_class': FashionFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_fashion, query),
                'serializer_class': FashionFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_fashion, query), FashionFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_fashion, query), FashionFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_fashion, query), FashionFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class FashionFullAPIListCreate(generics.CreateAPIView):
    queryset = model_fashion
    serializer_class = FashionFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        model_args_list = get_base_fields_trans(request_data, 'fashion')

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('fashion', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class FashionFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_fashion
    serializer_class = FashionFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterFashionViews
    queryset = FashionFullViewsUser.objects.all()
    serializer_class = FashionFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterFashionFavourites
    queryset = FashionFullFavouritesUser.objects.all()
    serializer_class = FashionFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = FashionFullFavouritesUser.objects.all()
    serializer_class = FashionFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = FashionFull.objects.all()
    serializer_class = FashionFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = FashionFullUpload.objects.all()
    serializer_class = FashionFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = FashionFullUpload.objects.all()
    serializer_class = FashionFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
