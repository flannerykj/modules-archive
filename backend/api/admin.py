from django.contrib import admin
from django.contrib.gis.db import models
from .models import Task

# Register your models here.
class TaskAdmin(admin.ModelAdmin):
	model = Task
	fieldsets = [
        (None,               {'fields': ['title', 'description', 'owner']}),
    ]

admin.site.register(Task, TaskAdmin)
