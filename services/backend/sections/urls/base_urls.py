from django.urls import path, include

from sections.views import MoneyAPIList, CityAPIList, MoneyAPIUpdateDestroy, FullFavouritesUser

urlpatterns = [
    path('city/', CityAPIList.as_view()),
    path('money/', MoneyAPIList.as_view()),
    path('money/<int:pk>/', MoneyAPIUpdateDestroy.as_view()),
    path('', include('sections.urls.recommend.urls_recommend')),
    path('', include('sections.urls.new.urls_new')),
    path('', include('sections.urls.my_ads.my_ads_urls')),
    path('', include('sections.urls.user_archive.user_archive_urls')),
    path('', include('sections.urls.category.urls_category')),
    path('', include('sections.urls.stock.urls_stock')),
    path('', include('sections.urls.realty.urls_realty')),
    path('', include('sections.urls.avto.urls_avto')),
    path('', include('sections.urls.work.urls_work')),
    path('', include('sections.urls.services.urls_services')),
    path('', include('sections.urls.children.urls_children')),
    path('', include('sections.urls.electronics.urls_electronics')),
    path('', include('sections.urls.fashion.urls_fashion')),
    path('', include('sections.urls.house_garden.urls_house_garden')),
    path('', include('sections.urls.free.urls_free')),
    path('', include('sections.urls.ad_vert.urls_ad_vert')),
    path('favourites/all/', FullFavouritesUser.as_view()),
]
