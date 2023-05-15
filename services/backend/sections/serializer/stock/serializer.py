from rest_framework import serializers

from sections.models import Stock


class StockSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('id', 'isDark', 'img', 'title_en', 'desc_en', 'background', 'link')


class StockSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('id', 'isDark', 'img', 'title_ru', 'desc_ru', 'background', 'link')


class StockSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('id', 'isDark', 'img', 'title_tr', 'desc_tr', 'background', 'link')


class StockSerializer(serializers.Serializer):
    en = StockSerializerEN(many=True)
    ru = StockSerializerRU(many=True)
    tr = StockSerializerTR(many=True)
