from django.urls import path
from . import views

urlpatterns = [
    # path('home', views.home, name='home'),
    # path('login', views.login,name='login'),
    # path('register',views.register,name='register'),
    # path('logout_view', views.logout_view,name='logout_view')
    
    path('', views.getRoutes, name="routes"),
    path('info/', views.getInfo, name="info"),
    path('login/', views.loginview, name='login'),
    path('register/', views.registerview, name='register'),
    path('logout/', views.logout_view, name="logout"),
    path('search/',views.searchview, name ='search'),
    path('hotelinfo/', views.hotel_view, name="hotelinfo"),
    path('reservation/', views.reservation_view, name="reservation"),
    path('currentreservation/', views.current_reservation_view,name="currentreservation"),
    path('reward/', views.reward_view, name="reward"),
    path('edit/', views.edit_view, name="edit"),
    

]
