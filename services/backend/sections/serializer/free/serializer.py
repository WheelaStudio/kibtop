from rest_framework import serializers

from sections.models import (
    FreeFull, FreeFullUpload, FreeFullViewsUser, FreeFullFavouritesUser
)


class FreeFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeFullUpload
        fields = '__all__'


class FreeFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeFullViewsUser
        fields = '__all__'


class FreeFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreeFullFavouritesUser
        fields = '__all__'


class FreeFullSerializerDetail(serializers.ModelSerializer):
    free_full_upload = FreeFullUploadSerializer(many=True, required=False)

    class Meta:
        model = FreeFull
        fields = '__all__'


class FreeFullSerializerEN(serializers.ModelSerializer):
    free_full_upload = FreeFullUploadSerializer(many=True, required=False)

    class Meta:
        model = FreeFull

        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address', 'city', 'geocode',
                  'category_en', 'currency', 'price', 'upload', 'free_full_upload', 'full_price',
                  'lifts', 'top', 'vip',)




class FreeFullSerializerRU(serializers.ModelSerializer):
    free_full_upload = FreeFullUploadSerializer(many=True, required=False)

    class Meta:
        model = FreeFull
        fields = ('id', 'title_ru', 'description_ru', 'created_at', 'updated_at', 'address', 'city', 'geocode',
                  'category_ru', 'currency', 'price', 'upload', 'free_full_upload', 'full_price',
                  'lifts', 'top', 'vip',)



class FreeFullSerializerTR(serializers.ModelSerializer):
    free_full_upload = FreeFullUploadSerializer(many=True, required=False)

    class Meta:
        model = FreeFull
        fields = ('id', 'title_tr', 'description_tr', 'created_at', 'updated_at', 'address', 'city', 'geocode',
                  'category_tr', 'currency', 'price', 'upload', 'free_full_upload', 'full_price',
                  'lifts', 'top', 'vip',)



class FreeFullSerializer(serializers.Serializer):
    en = FreeFullSerializerEN(many=True)
    ru = FreeFullSerializerRU(many=True)
    tr = FreeFullSerializerTR(many=True)
