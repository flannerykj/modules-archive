from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token

from . import views as local_view
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    # Session Login
    #url(r'^login/$', local_views.get_auth_token, name='login'),
    #url(r'^logout/$', local_views.logout_user, name='logout'),
    #url(r'^auth/$', local_views.login_form, name='login_form'),
    url(r'^api-auth/$', obtain_jwt_token, name='get_auth_token'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
