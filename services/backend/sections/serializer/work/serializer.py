from rest_framework import serializers
from sections.models import (
    WorkFull, WorkFullUpload, WorkFullViewsUser, WorkFullFavouritesUser
)


class WorkFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkFullUpload
        fields = '__all__'


class WorkFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkFullViewsUser
        fields = '__all__'


class WorkFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkFullFavouritesUser
        fields = '__all__'


class WorkFullSerializerDetail(serializers.ModelSerializer):
    work_full_upload = WorkFullUploadSerializer(many=True, required=False)

    class Meta:
        model = WorkFull
        fields = '__all__'


class WorkFullSerializerEN(serializers.ModelSerializer):
    work_full_upload = WorkFullUploadSerializer(many=True, required=False)

    class Meta:
        model = WorkFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'work_full_upload', 'sub_category_en', 'for_work_type_en', 'employment_en',
                  'category_en', 'recommend', 'publisher', 'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class WorkFullSerializerRU(serializers.ModelSerializer):
    work_full_upload = WorkFullUploadSerializer(many=True, required=False)

    class Meta:
        model = WorkFull
        fields = ('id', 'title_ru', 'description_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'work_full_upload', 'sub_category_ru', 'for_work_type_ru', 'employment_ru',
                  'category_ru', 'recommend',
                  'publisher', 'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class WorkFullSerializerTR(serializers.ModelSerializer):
    work_full_upload = WorkFullUploadSerializer(many=True, required=False)

    class Meta:
        model = WorkFull
        fields = ('id', 'title_tr', 'description_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'work_full_upload', 'sub_category_tr', 'for_work_type_tr', 'employment_tr',
                  'category_tr', 'recommend',
                  'publisher', 'city', 'geocode', 'currency', 'full_price',
                  'lifts', 'top', 'vip',)


class WorkFullSerializer(serializers.Serializer):
    en = WorkFullSerializerEN(many=True)
    ru = WorkFullSerializerRU(many=True)
    tr = WorkFullSerializerTR(many=True)
