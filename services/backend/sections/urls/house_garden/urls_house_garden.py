from django.urls import path
from sections.views import (
    HouseGardenFullAPIUpdateDestroy, HouseGardenFullAPIListCreate, HouseGardenFullAPIList,
    HouseGardenFullViewsUserAPIList, HouseGardenFullFavouritesUserAPIList,
    HouseGardenFullFavouritesUserAPIUpdateDestroy, HouseGardenFullArchiveUserAPIDestroy,
    HouseGardenFullUploadsAPIList, HouseGardenFullUploadsAPIUpdateList
)

urlpatterns = [
    path('house_garden/', HouseGardenFullAPIList.as_view()),
    path('house_garden/create/', HouseGardenFullAPIListCreate.as_view()),
    path('house_garden/views/', HouseGardenFullViewsUserAPIList.as_view()),
    path('house_garden/favourites/', HouseGardenFullFavouritesUserAPIList.as_view()),
    path('house_garden/favourites/<int:pk>/', HouseGardenFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('house_garden/<int:pk>/', HouseGardenFullAPIUpdateDestroy.as_view()),
    path('house_garden/archive/<int:pk>/', HouseGardenFullArchiveUserAPIDestroy.as_view()),
    path('house_garden/full_uploads/', HouseGardenFullUploadsAPIList.as_view()),
    path('house_garden/full_uploads/<int:pk>/', HouseGardenFullUploadsAPIUpdateList.as_view()),
]
