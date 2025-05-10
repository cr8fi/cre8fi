from django.contrib import admin
from .models import CustomUser, CreatorProfile, ProjectProfile
# Register your models here.


admin.site.register(CustomUser)
admin.site.register(CreatorProfile)
admin.site.register(ProjectProfile)