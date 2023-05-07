from django.urls import path
from sections.views import (
    ChildrenFullAPIUpdateDestroy, ChildrenFullAPIListCreate, ChildrenFullAPIList,
    ChildrenFullFavouritesUserAPIUpdateDestroy, ChildrenFullViewsUserAPIList,
    ChildrenFullFavouritesUserAPIList, ChildrenFullArchiveUserAPIDestroy, ChildrenFullUploadsAPIList,
    ChildrenFullUploadsAPIUpdateList
)

urlpatterns = [
    path('children/', ChildrenFullAPIList.as_view()),
    path('children/create/', ChildrenFullAPIListCreate.as_view()),
    path('children/views/', ChildrenFullViewsUserAPIList.as_view()),
    path('children/favourites/', ChildrenFullFavouritesUserAPIList.as_view()),
    path('children/favourites/<int:pk>/', ChildrenFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('children/<int:pk>/', ChildrenFullAPIUpdateDestroy.as_view()),
    path('children/archive/<int:pk>/', ChildrenFullArchiveUserAPIDestroy.as_view()),
    path('children/full_uploads/', ChildrenFullUploadsAPIList.as_view()),
    path('children/full_uploads/<int:pk>/', ChildrenFullUploadsAPIUpdateList.as_view()),
]
