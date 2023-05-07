from django.urls import path
from .views import MessageAPIList, GroupAPIList, MessageAPIUpdate, HomeView, GroupChatView, get_my_connected_users, \
    GroupDetailView, GroupAPICreate, mass_update_messages, get_support_chat, MessageSearchView

from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", HomeView, name="home"),
    path("groups/<uuid:uuid>/", GroupChatView, name="group"),

    path('messages/', MessageAPIList.as_view()),
    path('messages/<int:pk>/', MessageAPIUpdate.as_view()),
    path('messages/read_update/', mass_update_messages),
    path('group/', GroupAPIList.as_view()),
    path('group/create/', GroupAPICreate.as_view()),
    path('group/<int:pk>/', GroupDetailView.as_view()),
    path('connected/', get_my_connected_users),
    path('get_support/', get_support_chat),
    path('messages/search/', MessageSearchView.as_view())
]