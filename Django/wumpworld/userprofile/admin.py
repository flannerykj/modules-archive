from django.contrib import admin
from .models import Profile

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['profile_pic']}),
        (None,               {'fields': ['bio']}),
        (None,               {'fields': ['location']}),
    ]

admin.site.register(Profile, ProfileAdmin)