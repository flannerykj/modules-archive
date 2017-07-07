from django.conf.urls import include, url
from . import views
from django.views.generic.base import TemplateView
from django.views.generic.base import RedirectView

app_name = 'userprofile'
urlpatterns = [
    url(r'^(?P<username>\w+)$', views.profile_view, name='main'),
    url(r'^(?P<username>\w+)/edit$', views.profile_edit, name='edit'),
]