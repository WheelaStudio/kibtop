from django.urls import path
from sections.views import (
    FreeFullAPIUpdateDestroy, FreeFullAPIListCreate, FreeFullAPIList,
    FreeFullViewsUserAPIList, FreeFullFavouritesUserAPIList,
    FreeFullFavouritesUserAPIUpdateDestroy, FreeFullArchiveUserAPIDestroy,
    FreeFullUploadsAPIList, FreeFullUploadsAPIUpdateList
)

urlpatterns = [
    path('free/', FreeFullAPIList.as_view()),
    path('free/create/', FreeFullAPIListCreate.as_view()),
    path('free/views/', FreeFullViewsUserAPIList.as_view()),
    path('free/favourites/', FreeFullFavouritesUserAPIList.as_view()),
    path('free/favourites/<int:pk>/', FreeFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('free/<int:pk>/', FreeFullAPIUpdateDestroy.as_view()),
    path('free/archive/<int:pk>/', FreeFullArchiveUserAPIDestroy.as_view()),
    path('free/full_uploads/', FreeFullUploadsAPIList.as_view()),
    path('free/full_uploads/<int:pk>/', FreeFullUploadsAPIUpdateList.as_view()),
]
