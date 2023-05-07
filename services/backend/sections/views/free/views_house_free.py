from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    FreeFull, FreeFullViewsUser, FreeFullFavouritesUser, FreeFullUpload
)
from sections.serializer import (
    FreeFullSerializer, FreeFullSerializerEN, FreeFullSerializerRU, FreeFullSerializerTR,
    FreeFullSerializerDetail, FreeFullViewsUserSerializer, FreeFullFavouritesUserSerializer,
    FreeFullUploadSerializer
)
from sections.utils import query_list_lang
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.view_tools import get_base_fields_trans, get_category_trans, send_to_pay
from sections.views.views_base import get_price_list

model_fashion = FreeFull.objects.filter(publisher=True)


class FreeLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class FreeFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = FreeFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    pagination_class = FreeLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_fashion,
                'serializer_class': FreeFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_fashion,
                'serializer_class': FreeFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_fashion,
                'serializer_class': FreeFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_fashion, FreeFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_fashion, FreeFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_fashion, FreeFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class FreeFullAPIListCreate(generics.CreateAPIView):
    queryset = model_fashion
    serializer_class = FreeFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        price_list = get_price_list(request_data)
        category_list = get_category_trans(request_data)
        flexible_fields_list = translate_all_flexible_fields(request_data)

        model_args_list = {
            **price_list,
            **category_list,
            **flexible_fields_list,
        }

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('free', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class FreeFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_fashion
    serializer_class = FreeFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FreeFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    queryset = FreeFullViewsUser.objects.all()
    serializer_class = FreeFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FreeFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    queryset = FreeFullFavouritesUser.objects.all()
    serializer_class = FreeFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FreeFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = FreeFullFavouritesUser.objects.all()
    serializer_class = FreeFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FreeFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = FreeFull.objects.all()
    serializer_class = FreeFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FreeFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = FreeFullUpload.objects.all()
    serializer_class = FreeFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FreeFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = FreeFullUpload.objects.all()
    serializer_class = FreeFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
