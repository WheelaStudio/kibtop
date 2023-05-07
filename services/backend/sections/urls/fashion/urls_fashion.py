from django.urls import path
from sections.views import (
    FashionFullAPIUpdateDestroy, FashionFullAPIListCreate, FashionFullAPIList, FashionFullViewsUserAPIList,
    FashionFullFavouritesUserAPIList, FashionFullFavouritesUserAPIUpdateDestroy, FashionFullArchiveUserAPIDestroy,
    FashionFullUploadsAPIList, FashionFullUploadsAPIUpdateList
)

urlpatterns = [
    path('fashion/', FashionFullAPIList.as_view()),
    path('fashion/create/', FashionFullAPIListCreate.as_view()),
    path('fashion/views/', FashionFullViewsUserAPIList.as_view()),
    path('fashion/favourites/', FashionFullFavouritesUserAPIList.as_view()),
    path('fashion/favourites/<int:pk>/', FashionFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('fashion/<int:pk>/', FashionFullAPIUpdateDestroy.as_view()),
    path('fashion/archive/<int:pk>/', FashionFullArchiveUserAPIDestroy.as_view()),
    path('fashion/full_uploads/', FashionFullUploadsAPIList.as_view()),
    path('fashion/full_uploads/<int:pk>/', FashionFullUploadsAPIUpdateList.as_view()),
]
