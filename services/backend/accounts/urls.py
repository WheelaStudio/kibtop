from django.urls import path, include

from accounts.views import ActivateUser

urlpatterns = [
    path('verify/<str:uid>/<str:token>/', ActivateUser.as_view()),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
]
