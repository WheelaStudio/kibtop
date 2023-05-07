from django.urls import path

from sections.views import NewAPIList

urlpatterns = [
    path('new/', NewAPIList.as_view()),
]