from django.urls import path
from sections.views.ad_vert.views_ad_vert import AdVertApiVIew

urlpatterns = [
    path('ad_vert/', AdVertApiVIew.as_view()),
]
