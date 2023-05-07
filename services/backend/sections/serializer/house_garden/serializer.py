from rest_framework import serializers
from sections.models import (
    HouseGardenFull, HouseGardenFullUpload, HouseGardenFullViewsUser, HouseGardenFullFavouritesUser
)


class HouseGardenFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFullUpload
        fields = '__all__'


class HouseGardenFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFullViewsUser
        fields = '__all__'


class HouseGardenFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFullFavouritesUser
        fields = '__all__'


class HouseGardenFullSerializerDetail(serializers.ModelSerializer):
    house_garden_full_upload = HouseGardenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = HouseGardenFull
        fields = '__all__'


class HouseGardenFullSerializerEN(serializers.ModelSerializer):
    house_garden_full_upload = HouseGardenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = HouseGardenFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'house_garden_full_upload', 'sub_category_en', 'category_en', 'recommend',
                  'publisher', 'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class HouseGardenFullSerializerRU(serializers.ModelSerializer):
    house_garden_full_upload = HouseGardenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = HouseGardenFull
        fields = ('id', 'title_ru', 'description_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'house_garden_full_upload', 'sub_category_ru', 'category_ru', 'recommend',
                  'publisher', 'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class HouseGardenFullSerializerTR(serializers.ModelSerializer):
    house_garden_full_upload = HouseGardenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = HouseGardenFull
        fields = ('id', 'title_tr', 'description_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'house_garden_full_upload', 'sub_category_tr', 'category_tr', 'recommend',
                  'publisher', 'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class HouseGardenFullSerializer(serializers.Serializer):
    en = HouseGardenFullSerializerEN(many=True)
    ru = HouseGardenFullSerializerRU(many=True)
    tr = HouseGardenFullSerializerTR(many=True)
