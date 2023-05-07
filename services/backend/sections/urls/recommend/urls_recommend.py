from django.urls import path

from sections.views import RecommendFullAPIList

urlpatterns = [
    path('recommend/', RecommendFullAPIList.as_view()),
]
