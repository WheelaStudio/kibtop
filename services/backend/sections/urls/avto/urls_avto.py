from django.urls import path
from sections.views import (
    AvtoFullAPIUpdateDestroy, AvtoFullAPIListCreate, AvtoFullAPIList, AvtoFullViewsUserAPIList,
    AvtoFullFavouritesUserAPIList, AvtoFullFavouritesUserAPIUpdateDestroy, AvtoFullArchiveUserAPIDestroy,
    AvtoFullUploadsAPIList, AvtoFullUploadsAPIUpdateList
)

urlpatterns = [
    path('avto/', AvtoFullAPIList.as_view()),
    path('avto/create/', AvtoFullAPIListCreate.as_view()),
    path('avto/views/', AvtoFullViewsUserAPIList.as_view()),
    path('avto/favourites/', AvtoFullFavouritesUserAPIList.as_view()),
    path('avto/favourites/<int:pk>/', AvtoFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('avto/<int:pk>/', AvtoFullAPIUpdateDestroy.as_view()),
    path('avto/archive/<int:pk>/', AvtoFullArchiveUserAPIDestroy.as_view()),
    path('avto/full_uploads/', AvtoFullUploadsAPIList.as_view()),
    path('avto/full_uploads/<int:pk>/', AvtoFullUploadsAPIUpdateList.as_view()),
]
