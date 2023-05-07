from django_filters.rest_framework import DjangoFilterBackend
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics
from sections.models import Stock
from sections.serializer import StockSerializerEN, StockSerializerRU, StockSerializerTR, StockSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.utils import query_list_lang

model_stock = Stock.objects.all()


class StockLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class StockAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    pagination_class = StockLimitPagination
    serializer_class = StockSerializer

    def get_querylist(self):
        query = self.request.query_params
        querylist_full = [
            {
                'queryset': model_stock,
                'serializer_class': StockSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_stock,
                'serializer_class': StockSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_stock,
                'serializer_class': StockSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_stock, StockSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_stock, StockSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_stock, StockSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class StockAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_stock
    serializer_class = StockSerializerEN
    permission_classes = (IsAuthenticatedOrReadOnly,)
