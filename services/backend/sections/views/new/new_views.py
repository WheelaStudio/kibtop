from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from django.utils import timezone

from sections.models import (
    AvtoFull, ChildrenFull, FashionFull, RealtyFull, HouseGardenFull, ServicesFull, WorkFull,
    ElectronicsFull, FreeFull
)
from sections.serializer import (
    CategoryFullSerializerEN, CategoryFullSerializerRU, CategoryFullSerializerTR,
    CategoryFullSerializer
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterCategory


class NewLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class NewAPIList(generics.ListAPIView):
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filterset_class = FilterCategory
    pagination_class = NewLimitPagination

    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        filters = {
            'avto': AvtoFull.objects.filter(publisher=True, created_at__lte=timezone.now()).order_by('-created_at'),
            'children': ChildrenFull.objects.filter(publisher=True,created_at__lte=timezone.now()).order_by('-created_at'),
            'electronics': ElectronicsFull.objects.filter(publisher=True,created_at__lte=timezone.now()).order_by('-created_at'),
            'fashion': FashionFull.objects.filter(publisher=True,created_at__lte=timezone.now()).order_by('-created_at'),
            'house_garden': HouseGardenFull.objects.filter(publisher=True,created_at__lte=timezone.now()).order_by('-created_at'),
            'realty': RealtyFull.objects.filter(publisher=True,created_at__lte=timezone.now()).order_by('-created_at'),
            'services': ServicesFull.objects.filter(publisher=True,created_at__lte=timezone.now()).order_by('-created_at'),
            'work': WorkFull.objects.filter(publisher=True, created_at__lte=timezone.now()).order_by('-created_at'),
            'free': FreeFull.objects.filter(publisher=True, created_at__lte=timezone.now()).order_by('-created_at'),
        }
        serializer_en = CategoryFullSerializerEN(filters)
        serializer_ru = CategoryFullSerializerRU(filters)
        serializer_tr = CategoryFullSerializerTR(filters)

        try:
            if query['lang'] == 'en':
                return Response(serializer_en.data, status=HTTP_200_OK)
            elif query['lang'] == 'ru':
                return Response(serializer_ru.data, status=HTTP_200_OK)
            elif query['lang'] == 'tr':
                return Response(serializer_tr.data, status=HTTP_200_OK)
            return Response(serializer_en.data, status=HTTP_200_OK)
        except Exception:
            return Response(serializer_en.data, status=HTTP_200_OK)