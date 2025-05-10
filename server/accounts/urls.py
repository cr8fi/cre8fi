from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from.views import LogoutView

from .views import RegisterView, UpdateView, DeleteView

urlpatterns = [
    # Token obtain (login)
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # Token refresh
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Register, Update, Delete user
    path('register/', RegisterView.as_view(), name='register'),
    path('users/<int:pk>/update/', UpdateView.as_view(), name='update-user'),
    path('users/<int:pk>/delete/', DeleteView.as_view(), name='delete-user'),
    path('logout/', LogoutView.as_view(), name='logout'),
]