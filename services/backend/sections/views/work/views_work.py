from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    WorkFull, WorkFullFavouritesUser, WorkFullViewsUser, WorkFullUpload
)
from sections.serializer import (
    WorkFullSerializer, WorkFullSerializerEN, WorkFullSerializerRU, WorkFullSerializerTR, WorkFullSerializerDetail,
    WorkFullViewsUserSerializer, WorkFullFavouritesUserSerializer, WorkFullUploadSerializer
)
from sections.service import (
    FilterWork, FilterWorkFavourites, FilterWorkViews
)
from sections.utils import query_list_lang
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.view_tools import get_number_rooms_trans, get_sub_category_trans, get_category_trans, \
    get_for_work_type_trans, get_employment_trans, get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price, get_price_list

model_work = WorkFull.objects.filter(publisher=True, )


class WorkLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class WorkFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = WorkFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterWork
    pagination_class = WorkLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_work, query),
                'serializer_class': WorkFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_work, query),
                'serializer_class': WorkFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_work, query),
                'serializer_class': WorkFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_work, query), WorkFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_work, query), WorkFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_work, query), WorkFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class WorkFullAPIListCreate(generics.CreateAPIView):
    queryset = model_work
    serializer_class = WorkFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        base_fields_list = get_base_fields_trans(request_data, 'work')

        for_work_type_list = get_for_work_type_trans(request_data)
        employment_list = get_employment_trans(request_data)

        model_args_list = {
            **base_fields_list,
            **for_work_type_list,
            **employment_list
        }

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('work', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class WorkFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_work
    serializer_class = WorkFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterWorkViews
    queryset = WorkFullViewsUser.objects.all()
    serializer_class = WorkFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterWorkFavourites
    queryset = WorkFullFavouritesUser.objects.all()
    serializer_class = WorkFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = WorkFullFavouritesUser.objects.all()
    serializer_class = WorkFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = WorkFull.objects.all()
    serializer_class = WorkFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = WorkFullUpload.objects.all()
    serializer_class = WorkFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = WorkFullUpload.objects.all()
    serializer_class = WorkFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
