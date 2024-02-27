from rest_framework import generics
from .models import QuestionSchem, Seo
from .serializers import SEOTextSerializer, FaqSerializer


class SEOTextListView(generics.ListAPIView):
    queryset = Seo.objects.all()
    serializer_class = SEOTextSerializer


class SEOTextRetrieveView(generics.RetrieveAPIView):
    queryset = Seo.objects.all()
    serializer_class = SEOTextSerializer


class FAQView(generics.ListAPIView):
    serializer_class = FaqSerializer

    def get_queryset(self):
        qs = QuestionSchem.objects.all()
        if category := self.request.GET.get('category'):
            qs = qs.filter(pathname__category__name=category)
        return qs


class FAQRetrieveView(generics.RetrieveAPIView):
    serializer_class = FaqSerializer
    queryset = QuestionSchem.objects.all()
    lookup_field = 'pk'