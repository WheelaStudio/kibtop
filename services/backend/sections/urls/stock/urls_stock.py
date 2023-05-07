from django.urls import path

from sections.views import StockAPIList, StockAPIUpdateDestroy

urlpatterns = [
    path('stock/', StockAPIList.as_view()),
    path('stock/<int:pk>/', StockAPIUpdateDestroy.as_view()),
]
