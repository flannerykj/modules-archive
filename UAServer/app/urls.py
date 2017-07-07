
from django.conf.urls import url, include
from django.contrib import admin
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'musicians', views.MusicianViewSet)
router.register(r'performances', views.PerformanceViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'test', views.TestViewSet)

urlpatterns = router.urls
