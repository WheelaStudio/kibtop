from rest_framework import serializers
from .models import QuestionSchem,Pathname

class PathnameSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Pathname
        fields = ('id', 'category', 'pathname')

class FaqSerializer(serializers.ModelSerializer):
    pathname = PathnameSerializer()
    class Meta:
        model =QuestionSchem
        fields = ('id', 'question', 'answer', 'pathname')

from .models import Seo

class SEOTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seo
        fields = '__all__'