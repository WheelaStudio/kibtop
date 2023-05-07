from django.urls import path

from sections.views import MyAdsAPIList

urlpatterns = [
    path('my_ads/', MyAdsAPIList.as_view()),
]
