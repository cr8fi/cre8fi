# Create this file as: management/commands/cleanup_expired_otps.py
from django.core.management.base import BaseCommand
from django.utils import timezone
from accounts.models import EmailVerificationOTP  # Replace with your app name

class Command(BaseCommand):
    help = 'Clean up expired OTP codes'
    
    def handle(self, *args, **options):
        expired_otps = EmailVerificationOTP.objects.filter(
            expires_at__lt=timezone.now()
        )
        count = expired_otps.count()
        expired_otps.delete()
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully deleted {count} expired OTP codes')
        )

# Run this command periodically with: python manage.py cleanup_expired_otps