from django.urls import reverse
from django.conf import settings
from django.core.mail import send_mail
from rest_framework_simplejwt.tokens import RefreshToken
import jwt

def send_verification_email(user, request):
    token = RefreshToken.for_user(user).access_token
    relative_link = reverse('email-verify')
    absurl = f'{request.scheme}://{request.get_host()}{relative_link}?token={str(token)}'
    email_body = f'Hi {user.username}, Use the link below to verify your email:\n{absurl}'
    
    send_mail(
        subject='Verify your email',
        message=email_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
    )
