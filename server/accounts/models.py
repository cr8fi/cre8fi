from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models, transaction
from django.db.models import JSONField
import logging
from django.utils.translation import gettext_lazy as _
import uuid
from django.utils import timezone
from datetime import timedelta
import random
import string


logger = logging.getLogger(__name__)
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        """
        Create and return a regular user with an email and password.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        
        user.save()
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        """
        Create and return a superuser with an email, username, and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        logger.info(f"Creating superuser: {email}, {username}")  

        return self.create_user(email, username, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_profile = models.BooleanField(default=False)
    is_profile_complete =models.BooleanField(default=False)
    is_email_verified = models.BooleanField(default=False)
    is_creator = models.BooleanField(default=True)

    objects = CustomUserManager()


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    
    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        
        super().save(*args, **kwargs)



class CreatorProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='creator_profile')
    profile_picture = models.ImageField(upload_to="profileImages/", default="avatar.png")
    cover_pics = models.ImageField(upload_to="coverImage/", default="avatar.png")
    gender = models.CharField(max_length=10, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], null=True, blank=True)
    display_name = models.CharField(max_length=255, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    category_of_work = JSONField(default=list, blank=True)

    

    def __str__(self):
        return f'{self.user.username} - Creator Profile'
    def save(self, *args, **kwargs):
        self.user.is_creator = True
        super().save(*args, **kwargs)

    

class ProjectProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='project_profile')
    profile_picture = models.ImageField(upload_to="projectImages/", default="avatar.png")
    cover_pics = models.ImageField(upload_to="coverProject/", default="avatar.png")
    project_name = models.CharField(max_length=255, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    industry = models.CharField(max_length=255, null=True, blank=True)
    talents_needed = JSONField(default=list, blank=True)

    def __str__(self):
        return f'{self.user.username} - Project Profile'
    
    def save(self, *args, **kwargs):
        self.user.is_creator = False
        super().save(*args, **kwargs)




User = CustomUser


class EmailVerificationOTP(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='email_otps')
    otp_code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    is_used = models.BooleanField(default=False)
    attempts = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-created_at']
    
    def save(self, *args, **kwargs):
        if not self.otp_code:
            self.otp_code = self.generate_otp()
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(minutes=10)  # 10 minutes expiry
        super().save(*args, **kwargs)
    
    @staticmethod
    def generate_otp():
        return ''.join(random.choices(string.digits, k=6))
    
    def is_expired(self):
        return timezone.now() > self.expires_at
    
    def is_valid(self):
        return not self.is_used and not self.is_expired() and self.attempts < 3
    
    def __str__(self):
        return f"OTP for {self.user.email} - {self.otp_code}"