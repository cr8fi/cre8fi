from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import LogoutView
from . import views

from .views import RegisterView, UpdateView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('verify-email/', views.verify_email, name='verify-email'),
    path('resend-otp/', views.resend_otp, name='resend-otp'),
    path('check-verification/', views.check_verification_status, name='check-verification'),
    # path('verify-email/', VerifyEmail.as_view(), name='email-verify'),
    path('users/<int:pk>/update/', UpdateView.as_view(), name='update-user'),
    path('logout/', LogoutView.as_view(), name='logout'),
]