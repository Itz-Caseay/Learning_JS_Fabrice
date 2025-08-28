from . import views_2
from django.urls import path

urlpatterns = [
     path('light/', views_2.index_2, name='light-index'),
    path('light/login/', views_2.login_user_2, name='light-login'),
    path('light/logout/', views_2.logout_user_2, name='light-logout'),
    path('light/register/', views_2.register_user_2, name='light-register'),
    path('light/chatbot/', views_2.ai, name="light-chatbot"),
    path('light/room/<str:pk>', views_2.home_2, name='light-home'),
    path('light/unread_notif/', views_2.unread_notif_2, name='light-unread_notif'),
    path('light/mark_read/', views_2.mark_read_2, name='light-mark_read'),
    path('light/create-room/', views_2.create_room_2, name='light-create-room'),
    path('light/update-room/<str:pk>', views_2.update_room_2, name='light-update-room'),
    path('light/delete-room/<str:pk>', views_2.delete_room_2, name='light-delete-room'),
    path('light/delete-message/<str:pk>', views_2.user_delete_2, name='light-delete-message'),
    path('light/delete-user/<str:pk>', views_2.delete_account_2, name='light-delete-account'),
    path('light/profile/<str:pk>', views_2.user_profile_2, name='light-profile-page'),
    path('light/account-info/<str:pk>', views_2.account_info_2, name='light-acount-info'),
    path('light/edit-user/', views_2.edit_user_2, name='light-edit-user'),
    path('light/settings/', views_2.settings_2, name='light-settings'),
    path('light/topics/', views_2.topics_2, name='light-topics'),
    path('light/activity/', views_2.activity_2, name='light-activity'),
    path('light/report/', views_2.report_2, name='light-report'),
    path('light/about/', views_2.about_2, name="light-about"),
]
