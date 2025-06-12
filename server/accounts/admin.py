from django.contrib import admin
from .models import CustomUser, CreatorProfile, ProjectProfile, EmailVerificationOTP
from django.contrib.auth.admin import UserAdmin



@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser

    list_display = (
        'email', 'username', 'first_name', 'last_name',
        'is_email_verified', 'is_profile', 'is_profile_complete',
        'is_creator', 'is_staff', 'is_active'
    )
    list_filter = (
        'is_email_verified', 'is_profile', 'is_profile_complete',
        'is_creator', 'is_staff', 'is_superuser', 'is_active'
    )
    search_fields = ('email', 'username', 'first_name', 'last_name')
    ordering = ('email',)

    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {
            'fields': (
                'is_email_verified',
                'is_profile',
                'is_profile_complete',
                'is_creator',
            )
        }),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'username', 'first_name', 'last_name', 'password1', 'password2',
                'is_email_verified', 'is_profile', 'is_profile_complete',
                'is_creator', 'is_staff', 'is_active'
            ),
        }),
    )
@admin.register(CreatorProfile)
class CreatorProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'display_name', 'gender', 'date_of_birth')
    search_fields = ('user__username', 'display_name', 'bio')
    list_filter = ('gender',)

    fieldsets = (
        (None, {
            'fields': ('user', 'profile_picture', 'cover_pics')
        }),
        ('Personal Info', {
            'fields': ('display_name', 'gender', 'date_of_birth', 'bio')
        }),
        ('Work Details', {
            'fields': ('category_of_work',)
        }),
    )


@admin.register(ProjectProfile)
class ProjectProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'project_name', 'industry')
    search_fields = ('user__username', 'project_name', 'bio', 'industry')
    list_filter = ('industry',)

    fieldsets = (
        (None, {
            'fields': ('user', 'profile_picture', 'cover_pics')
        }),
        ('Project Info', {
            'fields': ('project_name', 'bio', 'industry', 'talents_needed')
        }),
    )

@admin.register(EmailVerificationOTP)
class EmailVerificationOTPAdmin(admin.ModelAdmin):
    list_display = ('user', 'otp_code', 'created_at', 'expires_at', 'is_used', 'attempts')
    list_filter = ('is_used', 'created_at', 'expires_at')
    search_fields = ('user__email', 'user__username', 'otp_code')
    readonly_fields = ('created_at', 'expires_at')
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related('user')