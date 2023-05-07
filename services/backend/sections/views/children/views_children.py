from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    ChildrenFull, ChildrenFullFavouritesUser, ChildrenFullViewsUser, ChildrenFullUpload
)
from sections.serializer import (
    ChildrenFullSerializer, ChildrenFullSerializerEN, ChildrenFullSerializerRU,
    ChildrenFullSerializerTR, ChildrenFullSerializerDetail, ChildrenFullFavouritesUserSerializer,
    ChildrenFullViewsUserSerializer, ChildrenFullUploadSerializer
)
from sections.service import (
    FilterChildren, FilterChildrenViews, FilterChildrenFavourites
)
from sections.utils import query_list_lang
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.view_tools import get_category_trans, get_sub_category_trans, get_base_fields_trans, send_to_pay
from sections.views.views_base import with_price_sorting, convert_currency_price, get_price_list

model_children = ChildrenFull.objects.filter(publisher=True)


class ChildrenLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class ChildrenFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = ChildrenFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterChildren
    pagination_class = ChildrenLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': with_price_sorting(model_children, query),
                'serializer_class': ChildrenFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': with_price_sorting(model_children, query),
                'serializer_class': ChildrenFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': with_price_sorting(model_children, query),
                'serializer_class': ChildrenFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(with_price_sorting(model_children, query), ChildrenFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(with_price_sorting(model_children, query), ChildrenFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(with_price_sorting(model_children, query), ChildrenFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class ChildrenFullAPIListCreate(generics.CreateAPIView):
    queryset = model_children
    serializer_class = ChildrenFullSerializerDetail

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):

        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        model_args_list = get_base_fields_trans(request_data, 'children')

        if serializer.is_valid():
            serializer.save(**model_args_list)

        headers = self.get_success_headers(serializer.data)
        if ('servicePrice' in request_data):
            price = request_data['servicePrice'].split(' ')[0]
            currency = request_data['servicePrice'].split(' ')[1]
            url = send_to_pay('children', serializer.data['id'], service={'price': price, 'currency': currency})
            pass_data = serializer.data
            pass_data['url'] = url
            return Response(pass_data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ChildrenFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_children
    serializer_class = ChildrenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterChildrenViews
    queryset = ChildrenFullViewsUser.objects.all()
    serializer_class = ChildrenFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterChildrenFavourites
    queryset = ChildrenFullFavouritesUser.objects.all()
    serializer_class = ChildrenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = ChildrenFullFavouritesUser.objects.all()
    serializer_class = ChildrenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = ChildrenFull.objects.all()
    serializer_class = ChildrenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = ChildrenFullUpload.objects.all()
    serializer_class = ChildrenFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = ChildrenFullUpload.objects.all()
    serializer_class = ChildrenFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)