
from django.conf.urls import url, include
from django.contrib import admin
from . import views
from app.views import CreateUserView


urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^register/', CreateUserView.as_view()),
    url(r'^', include('app.urls')),
]
