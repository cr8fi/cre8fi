from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import PermissionDenied
from .models import CustomUser,EmailVerificationOTP
from .serializers import  RegisterSerializer, EmailVerificationSerializer, ResendOTPSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
import jwt
from django.conf import settings
import uuid
from django.core.mail import send_mail
from rest_framework.decorators import api_view, permission_classes
from django.utils import timezone
from datetime import timedelta
import resend



resend.api_key = "re_GuUvPa5p_Lz6ZDbjpEnGWivnG2mv62rj9"
User = CustomUser
class RegisterView(APIView):
    permission_classes = [AllowAny]


    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
            otp = EmailVerificationOTP.objects.create(user=user)
            self.send_verification_email(user, otp.otp_code)
            user_data = RegisterSerializer(user).data
            response = Response({
                "message": "User created successfully",
                "access_token": access_token,
                "user":user_data,
                "refresh_token": str(refresh),
            }, status=status.HTTP_201_CREATED)

        # Set cookies
            response.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,  # Make sure you're using HTTPS in production
                samesite='Lax'
            )
            response.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='Lax'
            )
            return response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def send_verification_email(self, user, otp_code):
        subject = 'Email Verification - Your OTP Code'
        message = f'''
         <html>
            <body>
                <h2>Hello {user.username},</h2>
                <p>Thank you for registering! Please use the following OTP code to verify your email address:</p>
                <p>OTP Code: {otp_code}</p>
                <p>This code will expire in 10 minutes.</p>
                <p>If you didn't request this verification, please ignore this email.</p>
                <p>Best regards,<br>The Cr8fi Team</p>
            </body>
        </html>
        '''
        
        try:
            r = resend.Emails.send({
                "from": "onboarding@resend.dev",
                "to": user.email,
                "subject": subject,
                "html": message
            })
            return r  # Optional: return or log result
        except Exception as e:
            # Handle errors appropriately
            print(f"Error sending verification email: {e}")
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def verify_email(request):
    serializer = EmailVerificationSerializer(data=request.data)
    if serializer.is_valid():
        user = request.user 
        otp = serializer.validated_data['otp']
        
        # Increment attempts
        otp.attempts += 1
        otp.save()
        
        # Mark OTP as used and verify user
        otp.is_used = True
        otp.save()
        
        user.is_email_verified = True
        user.save()
        
        return Response({
            'message': 'Email verified successfully!',
            'user_id': user.id,
            'email': user.email
        }, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def resend_otp(request):
    serializer = ResendOTPSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        user = User.objects.get(email=email)
        
        # Check if user can request new OTP (rate limiting)
        last_otp = EmailVerificationOTP.objects.filter(user=user).first()
        if last_otp and last_otp.created_at > timezone.now() - timedelta(minutes=1):
            return Response({
                'error': 'Please wait at least 1 minute before requesting a new OTP'
            }, status=status.HTTP_429_TOO_MANY_REQUESTS)
        
        # Invalidate previous OTPs
        EmailVerificationOTP.objects.filter(user=user, is_used=False).update(is_used=True)
        
        # Create new OTP
        otp = EmailVerificationOTP.objects.create(user=user)
        
        # Send email
        send_verification_email(user, otp.otp_code)
        
        return Response({
            'message': 'New OTP sent successfully. Please check your email.',
            'email': user.email
        }, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def send_verification_email(user, otp_code):
    subject = 'Email Verification - Your New OTP Code'
    message = f'''
    Hello {user.first_name or user.username},
    
    You requested a new verification code. Please use the following OTP code to verify your email address:
    
    OTP Code: {otp_code}
    
    This code will expire in 10 minutes.
    
    If you didn't request this verification, please ignore this email.
    
    Best regards,
    Your App Team
    '''
    
    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=False,
    )

@api_view(['GET'])
@permission_classes([AllowAny])
def check_verification_status(request):
    email = request.query_params.get('email')
    if not email:
        return Response({'error': 'Email parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.get(email=email)
        return Response({
            'email': user.email,
            'is_verified': user.is_email_verified,
            'user_id': user.id
        }, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        


class UpdateView(APIView):
    permission_classes = [IsAuthenticated]  

    def get_object(self, user_id):
        try:
            return CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return None

    def put(self, request, *args, **kwargs):
        user_id = kwargs.get("pk")
        user = self.get_object(user_id)

        if user != request.user:
            raise PermissionDenied("You can only update your own account.")

        # serializer = CustomUserSerializer(user, data=request.data, partial=True)
        # if serializer.is_valid():
        #     serializer.save()
            return Response({"message": "User updated successfully."}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # Blacklist the refresh token to invalidate it
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the refresh token
            
            return Response({"message": "Successfully logged out."}, status=200)
        except Exception as e:
            return Response({"message": "Invalid token."}, status=400)