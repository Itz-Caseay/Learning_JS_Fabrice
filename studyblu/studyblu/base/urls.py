from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.login_user, name='login'),
    path('chatbot/', views.ai, name="chatbot"),
    
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('', views.index, name='index'),
    path('room/<str:pk>', views.home, name='home'),
    path('unread_notif/', views.unread_notif, name='unread_notif'),
    path('mark_read/', views.mark_read, name='mark_read'),
    path('create-room/', views.create_room, name='create-room'),
    path('update-room/<str:pk>', views.update_room, name='update-room'),
    path('delete-room/<str:pk>', views.delete_room, name='delete-room'),
    path('delete-message/<str:pk>', views.user_delete, name='delete-message'),
    path('delete-user/<str:pk>', views.delete_account, name='delete-account'),
    path('profile/<str:pk>', views.user_profile, name='profile-page'),
    path('account-info/<str:pk>', views.account_info, name='acount-info'),
    path('edit-user/', views.edit_user, name='edit-user'),
    path('settings/', views.settings, name='settings'),
    path('topics/', views.topics, name='topics'),
    path('activity/', views.activity, name='activity'),
    path('report/', views.report, name='report'),
    path('about/', views.about, name="about"),

   #light theme

   
]


