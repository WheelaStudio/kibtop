from rest_framework import serializers

from sections.models import Stock


class StockSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = Stock
        #fields = ('id', 'isDark', 'img', 'title_en', 'desc_en', 'background', 'link')
        fields = ('id', 'title_en', 'image_en', 'image_mobile_en', 'link')


class StockSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = Stock
        #fields = ('id', 'isDark', 'img', 'title_ru', 'desc_ru', 'background', 'link')
        fields = ('id', 'title_ru', 'image_ru', 'image_mobile_ru', 'link')


class StockSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = Stock
        #fields = ('id', 'isDark', 'img', 'title_tr', 'desc_tr', 'background', 'link')
        fields = ('id', 'title_tr', 'image_tr', 'image_mobile_tr', 'link')


class StockSerializer(serializers.Serializer):
    en = StockSerializerEN(many=True)
    ru = StockSerializerRU(many=True)
    tr = StockSerializerTR(many=True)
