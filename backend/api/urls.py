from django.conf.urls import url

from api.views import TaskList, TaskDetail
from django.conf import settings
from django.conf.urls.static import static


from . import views as local_view
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    url(r'^tasks/$', TaskList.as_view(), name='task_list'),
    url(r'^tasks/(?P<pk>[0-9]+)$', TaskDetail.as_view(), name='task_detail'),
    url(r'^get_auth_token/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),
]
