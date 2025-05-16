from rest_framework import serializers
from .models import CustomUser, CreatorProfile, ProjectProfile

class CreatorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreatorProfile
        fields = ['gender', 'display_name', 'date_of_birth', 'bio', 'category_of_work']

class ProjectProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectProfile
        fields = ['project_name', 'bio', 'industry', 'talents_needed']

class CustomUserSerializer(serializers.ModelSerializer):
    creator_profile = CreatorProfileSerializer(required=False)
    project_profile = ProjectProfileSerializer(required=False)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'creator_profile', 'project_profile']
        
    def create(self, validated_data):
        creator_data = validated_data.pop('creator_profile', None)
        project_data = validated_data.pop('project_profile', None)
        user = CustomUser.objects.create(**validated_data)
        
        if creator_data:
            CreatorProfile.objects.create(user=user, **creator_data)
        if project_data:
            ProjectProfile.objects.create(user=user, **project_data)
        
        return user

    def update(self, instance, validated_data):
        creator_data = validated_data.pop('creator_profile', None)
        project_data = validated_data.pop('project_profile', None)
        
        
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username', instance.username)
        instance.save()

       
        if creator_data:
            creator_profile = instance.creator_profile
            creator_profile.gender = creator_data.get('gender', creator_profile.gender)
            creator_profile.display_name = creator_data.get('display_name', creator_profile.display_name)
            creator_profile.date_of_birth = creator_data.get('date_of_birth', creator_profile.date_of_birth)
            creator_profile.bio = creator_data.get('bio', creator_profile.bio)
            creator_profile.category_of_work = creator_data.get('category_of_work', creator_profile.category_of_work)
            creator_profile.save()

        
        if project_data:
            project_profile = instance.project_profile
            project_profile.project_name = project_data.get('project_name', project_profile.project_name)
            project_profile.bio = project_data.get('bio', project_profile.bio)
            project_profile.industry = project_data.get('industry', project_profile.industry)
            project_profile.talents_needed = project_data.get('talents_needed', project_profile.talents_needed)
            project_profile.save()

        return instance
    

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    verifyPassword = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'verifyPassword']

    def validate(self, data):
        if data['password'] != data['verifyPassword']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('verifyPassword')
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            useername= "user"+validated_data['email']
        )
        return user