from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from.views import LogoutView

from .views import RegisterView, UpdateView, VerifyEmail

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('verify-email/', VerifyEmail.as_view(), name='email-verify'),
    path('users/<int:pk>/update/', UpdateView.as_view(), name='update-user'),
    path('logout/', LogoutView.as_view(), name='logout'),
]