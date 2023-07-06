from django.urls import  path
from .views import FAQView,FAQRetrieveView,SEOTextListView,SEOTextRetrieveView
from rest_framework import routers


urlpatterns = [
    path('', FAQView.as_view()),
    path('<int:pk>', FAQRetrieveView.as_view()),
    path('seo-texts/', SEOTextListView.as_view(), name='seo-text-list'),
    path('seo-texts/<int:pk>/', SEOTextRetrieveView.as_view(), name='seo-text-detail'),
]
