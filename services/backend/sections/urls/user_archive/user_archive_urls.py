from django.urls import path

from sections.views import UserArchiveAPIList

urlpatterns = [
    path('user_archive/', UserArchiveAPIList.as_view()),
]
