from django.conf.urls import include, url
from . import views
from django.views.generic.base import TemplateView
from unidecode import unidecode

app_name = 'blog'
urlpatterns = [
    url(r'^$', views.get_posts, name='index'),
    url(r'^post/(?P<slug>[^\.]+)/$', views.get_post, name='post-detail'),
    url(r'^category/(?P<category>[^\.]+)/$', views.CategoryIndexView.as_view(), name='category-index'),
    url(r'^tag/(?P<tag>[^\.]+)/$', views.TagIndexView.as_view(), name='tag-index'),
]
