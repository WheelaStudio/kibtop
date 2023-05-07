from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    HouseGardenFull, HouseGardenFullViewsUser, HouseGardenFullFavouritesUser, HouseGardenFullUpload
)
from sections.serializer import (
    HouseGardenFullSerializer, HouseGardenFullSerializerEN, HouseGardenFullSerializerRU, HouseGardenFullSerializerTR,
    HouseGardenFullSerializerDetail, HouseGardenFullViewsUserSerializer, HouseGardenFullFavouritesUserSerializer,
    HouseGardenFullUploadSerializer
)
from sections.service import (
    FilterHouseGarden, FilterHouseGardenViews, FilterHouseGardenFavourites
)
from sections.utils import query_list_lang
from sections.views.view_tools import get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price

model_fashion = HouseGardenFull.objects.filter(publisher=True)


class HouseGardenLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class HouseGardenFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = HouseGardenFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterHouseGarden
    pagination_class = HouseGardenLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_fashion, query),
                'serializer_class': HouseGardenFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_fashion, query),
                'serializer_class': HouseGardenFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_fashion, query),
                'serializer_class': HouseGardenFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_fashion, query), HouseGardenFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_fashion, query), HouseGardenFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_fashion, query), HouseGardenFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class HouseGardenFullAPIListCreate(generics.CreateAPIView):
    queryset = model_fashion
    serializer_class = HouseGardenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        model_args_list = get_base_fields_trans(request_data, 'house_garden')

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('housegarden', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class HouseGardenFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_fashion
    serializer_class = HouseGardenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterHouseGardenViews
    queryset = HouseGardenFullViewsUser.objects.all()
    serializer_class = HouseGardenFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterHouseGardenFavourites
    queryset = HouseGardenFullFavouritesUser.objects.all()
    serializer_class = HouseGardenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = HouseGardenFullFavouritesUser.objects.all()
    serializer_class = HouseGardenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = HouseGardenFull.objects.all()
    serializer_class = HouseGardenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = HouseGardenFullUpload.objects.all()
    serializer_class = HouseGardenFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = HouseGardenFullUpload.objects.all()
    serializer_class = HouseGardenFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
