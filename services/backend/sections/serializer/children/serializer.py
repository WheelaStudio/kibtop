from rest_framework import serializers

from sections.models import (
    ChildrenFull, ChildrenFullUpload, ChildrenFullViewsUser, ChildrenFullFavouritesUser
)


class ChildrenFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFullUpload
        fields = '__all__'


class ChildrenFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFullViewsUser
        fields = '__all__'


class ChildrenFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFullFavouritesUser
        fields = '__all__'


class ChildrenFullSerializerDetail(serializers.ModelSerializer):
    children_full_upload = ChildrenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = ChildrenFull
        fields = '__all__'


class ChildrenFullSerializerEN(serializers.ModelSerializer):
    children_full_upload = ChildrenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = ChildrenFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'children_full_upload', 'sub_category_en', 'category_en', 'recommend', 'publisher',
                  'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class ChildrenFullSerializerRU(serializers.ModelSerializer):
    children_full_upload = ChildrenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = ChildrenFull
        fields = ('id', 'title_ru', 'description_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'children_full_upload', 'sub_category_ru', 'category_ru', 'recommend', 'publisher',
                  'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class ChildrenFullSerializerTR(serializers.ModelSerializer):
    children_full_upload = ChildrenFullUploadSerializer(many=True, required=False)

    class Meta:
        model = ChildrenFull
        fields = ('id', 'title_tr', 'description_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'children_full_upload', 'sub_category_tr', 'category_tr', 'recommend', 'publisher',
                  'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class ChildrenFullSerializer(serializers.Serializer):
    en = ChildrenFullSerializerEN(many=True)
    ru = ChildrenFullSerializerRU(many=True)
    tr = ChildrenFullSerializerTR(many=True)
