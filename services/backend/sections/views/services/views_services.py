from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    ServicesFull, ServicesFullFavouritesUser, ServicesFullViewsUser, ServicesFullUpload
)
from sections.serializer import (
    ServicesFullSerializer, ServicesFullSerializerEN, ServicesFullSerializerRU, ServicesFullSerializerTR,
    ServicesFullSerializerDetail, ServicesFullFavouritesUserSerializer, ServicesFullViewsUserSerializer,
    ServicesFullUploadSerializer
)
from sections.service import (
    FilterServices, FilterServicesViews, FilterServicesFavourites
)
from sections.utils import query_list_lang
from sections.views.view_tools import get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price

model_services = ServicesFull.objects.filter(publisher=True, )


class ServicesLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class ServicesFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = ServicesFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterServices
    pagination_class = ServicesLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_services, query),
                'serializer_class': ServicesFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_services, query),
                'serializer_class': ServicesFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_services, query),
                'serializer_class': ServicesFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_services, query), ServicesFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_services, query), ServicesFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_services, query), ServicesFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class ServicesFullAPIListCreate(generics.CreateAPIView):
    queryset = model_services
    serializer_class = ServicesFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        model_args_list = get_base_fields_trans(request_data, 'services')

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('services', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ServicesFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_services
    serializer_class = ServicesFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterServicesViews
    queryset = ServicesFullViewsUser.objects.all()
    serializer_class = ServicesFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterServicesFavourites
    queryset = ServicesFullFavouritesUser.objects.all()
    serializer_class = ServicesFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = ServicesFullFavouritesUser.objects.all()
    serializer_class = ServicesFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = ServicesFull.objects.all()
    serializer_class = ServicesFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = ServicesFullUpload.objects.all()
    serializer_class = ServicesFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = ServicesFullUpload.objects.all()
    serializer_class = ServicesFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
