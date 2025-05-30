from django.urls import reverse
from django.conf import settings
from django.core.mail import send_mail
from rest_framework_simplejwt.tokens import RefreshToken

def send_verification_email(user, request):
    token = str(RefreshToken.for_user(user).access_token)  # or create a custom token if needed

    email_body = (
        f"Hi {user.username},\n\n"
        f"Use the following verification code/token to verify your account:\n\n"
        f"{token}\n\n"
        f"This code will expire in 5 minutes (or whatever the token's lifetime is).\n"
    )

    send_mail(
        subject='Your Verification Code',
        message=email_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
    )
