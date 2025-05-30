from rest_framework import serializers
from .models import CustomUser, CreatorProfile, ProjectProfile


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
    

