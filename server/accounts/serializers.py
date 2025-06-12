from rest_framework import serializers
from .models import CustomUser, CreatorProfile, ProjectProfile,EmailVerificationOTP


class CreatorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreatorProfile
        fields = [
            'profile_picture', 'cover_pics',
            'gender', 'display_name', 'date_of_birth',
            'bio', 'category_of_work'
        ]



class ProjectProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectProfile
        fields = [
            'profile_picture', 'cover_pics',
            'project_name', 'bio', 'industry', 'talents_needed'
        ]

   

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    creator_profile = CreatorProfileSerializer(required=False)
    project_profile = ProjectProfileSerializer(required=False)

    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'creator_profile', 'project_profile']

    def create(self, validated_data):
        creator_data = validated_data.pop('creator_profile', None)
        project_data = validated_data.pop('project_profile', None)

        
        email = validated_data['email']
        username = "user_" + email.split('@')[0]
        user = CustomUser.objects.create_user(
            email=email,
            password=validated_data['password'],
            username=username
        )

        
        if creator_data:
            CreatorProfile.objects.create(user=user, **creator_data)

        if project_data:
            ProjectProfile.objects.create(user=user, **project_data)

        return user
   

class EmailVerificationSerializer(serializers.Serializer):
    User = CustomUser 
    email = serializers.EmailField()
    otp_code = serializers.CharField(max_length=6, min_length=6)
    
    def validate_email(self, value):
        try:
            user = self.User.objects.get(email=value)
            if user.is_email_verified:
                raise serializers.ValidationError("Email is already verified")
        except self.User.DoesNotExist:
            raise serializers.ValidationError("User with this email does not exist")
        return value
    
    def validate(self, attrs):
        email = attrs['email']
        otp_code = attrs['otp_code']
        
        try:
            user = self.User.objects.get(email=email)
            otp = EmailVerificationOTP.objects.filter(
                user=user,
                otp_code=otp_code,
                is_used=False
            ).first()
            
            if not otp:
                raise serializers.ValidationError("Invalid OTP code")
            
            if not otp.is_valid():
                if otp.is_expired():
                    raise serializers.ValidationError("OTP has expired")
                elif otp.attempts >= 3:
                    raise serializers.ValidationError("Maximum attempts exceeded")
                else:
                    raise serializers.ValidationError("OTP is no longer valid")
            
            attrs['user'] = user
            attrs['otp'] = otp
            
        except self.User.DoesNotExist:
            raise serializers.ValidationError("User not found")
        
        return attrs

class ResendOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    
    def validate_email(self, value):
        try:
            user = self.User.objects.get(email=value)
            if user.is_email_verified:
                raise serializers.ValidationError("Email is already verified")
        except self.User.DoesNotExist:
            raise serializers.ValidationError("User with this email does not exist")
        return value