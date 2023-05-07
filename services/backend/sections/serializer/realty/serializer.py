from rest_framework import serializers


from sections.models.realty.models_realty import RealtyFull, RealtyFullUpload, RealtyFullViewsUser, RealtyFullFavouritesUser

class RealtyFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFullUpload
        fields = '__all__'


class RealtyFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFullViewsUser
        fields = '__all__'


class RealtyFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFullFavouritesUser
        fields = '__all__'


class RealtyFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True, required=False)

    class Meta:
        model = RealtyFull
        fields = '__all__'


class RealtyFullSerializerEN(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True, required=False)

    class Meta:
        model = RealtyFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'realty_full_upload', 'sub_category_en',
                  'all_old_new_en', 'number_rooms_en', 'category_en', 'recommend', 'publisher', 'city', 'geocode',
                  'currency', 'full_price', 'type_sell',
                  'lifts', 'top', 'vip',)


class RealtyFullSerializerRU(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True, required=False)

    class Meta:
        model = RealtyFull
        fields = ('id', 'title_ru', 'description_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'realty_full_upload', 'sub_category_ru',
                  'all_old_new_ru', 'number_rooms_ru', 'category_ru', 'recommend', 'publisher', 'city', 'geocode',
                  'currency', 'full_price', 'type_sell',
                  'lifts', 'top', 'vip',)


class RealtyFullSerializerTR(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True, required=False)

    class Meta:
        model = RealtyFull
        fields = ('id', 'title_tr', 'description_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'realty_full_upload', 'sub_category_tr',
                  'all_old_new_tr', 'number_rooms_tr', 'category_tr', 'recommend', 'publisher', 'city', 'geocode',
                  'currency', 'full_price', 'type_sell',
                  'lifts', 'top', 'vip',)


class RealtyFullSerializer(serializers.Serializer):
    en = RealtyFullSerializerEN(many=True)
    ru = RealtyFullSerializerRU(many=True)
    tr = RealtyFullSerializerTR(many=True)
