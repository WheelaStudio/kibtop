from rest_framework import serializers
from sections.models import (
    AvtoFull, AvtoFullUpload, AvtoFullViewsUser, AvtoFullFavouritesUser
)

from sections.models import Money, City
from sections.serializer import (
    AvtoFullSerializerEN, ChildrenFullSerializerEN, ElectronicsFullSerializerEN, FashionFullSerializerEN,
    HouseGardenFullSerializerEN, RealtyFullSerializerEN, ServicesFullSerializerEN, WorkFullSerializerEN, FreeFullSerializerEN,
    AvtoFullSerializerRU, ChildrenFullSerializerRU, ElectronicsFullSerializerRU, FashionFullSerializerRU,
    HouseGardenFullSerializerRU, RealtyFullSerializerRU, ServicesFullSerializerRU, WorkFullSerializerRU, FreeFullSerializerRU,
    AvtoFullSerializerTR, ChildrenFullSerializerTR, ElectronicsFullSerializerTR, FashionFullSerializerTR,
    HouseGardenFullSerializerTR, RealtyFullSerializerTR, ServicesFullSerializerTR, WorkFullSerializerTR, FreeFullSerializerTR
)
from sections.serializer import (
    AvtoFullFavouritesUserSerializer, ChildrenFullFavouritesUserSerializer,
    ElectronicsFullFavouritesUserSerializer, FashionFullFavouritesUserSerializer,
    HouseGardenFullFavouritesUserSerializer, RealtyFullFavouritesUserSerializer,
    ServicesFullFavouritesUserSerializer, WorkFullFavouritesUserSerializer, FreeFullFavouritesUserSerializer
)


class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class CategoryFullSerializerEN(serializers.Serializer):
    avto = AvtoFullSerializerEN(many=True)
    children = ChildrenFullSerializerEN(many=True)
    electronics = ElectronicsFullSerializerEN(many=True)
    fashion = FashionFullSerializerEN(many=True)
    house_garden = HouseGardenFullSerializerEN(many=True)
    realty = RealtyFullSerializerEN(many=True)
    services = ServicesFullSerializerEN(many=True)
    work = WorkFullSerializerEN(many=True)
    free = FreeFullSerializerEN(many=True)


class CategoryFullSerializerRU(serializers.Serializer):
    avto = AvtoFullSerializerRU(many=True)
    children = ChildrenFullSerializerRU(many=True)
    electronics = ElectronicsFullSerializerRU(many=True)
    fashion = FashionFullSerializerRU(many=True)
    house_garden = HouseGardenFullSerializerRU(many=True)
    realty = RealtyFullSerializerRU(many=True)
    services = ServicesFullSerializerRU(many=True)
    work = WorkFullSerializerRU(many=True)
    free = FreeFullSerializerRU(many=True)



class CategoryFullSerializerTR(serializers.Serializer):
    avto = AvtoFullSerializerTR(many=True)
    children = ChildrenFullSerializerTR(many=True)
    electronics = ElectronicsFullSerializerTR(many=True)
    fashion = FashionFullSerializerTR(many=True)
    house_garden = HouseGardenFullSerializerTR(many=True)
    realty = RealtyFullSerializerTR(many=True)
    services = ServicesFullSerializerTR(many=True)
    work = WorkFullSerializerTR(many=True)
    free = FreeFullSerializerTR(many=True)


class CategoryFullSerializer(serializers.Serializer):
    en = CategoryFullSerializerEN(many=True)
    ru = CategoryFullSerializerRU(many=True)
    tr = CategoryFullSerializerTR(many=True)


class FullFavouritesUserSerializer(serializers.Serializer):
    avto = AvtoFullFavouritesUserSerializer(many=True)
    children = ChildrenFullFavouritesUserSerializer(many=True)
    electronics = ElectronicsFullFavouritesUserSerializer(many=True)
    fashion = FashionFullFavouritesUserSerializer(many=True)
    house_garden = HouseGardenFullFavouritesUserSerializer(many=True)
    realty = RealtyFullFavouritesUserSerializer(many=True)
    services = ServicesFullFavouritesUserSerializer(many=True)
    work = WorkFullFavouritesUserSerializer(many=True)
    free = FreeFullFavouritesUserSerializer(many=True)

class FullCategoryFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = '__all__'
