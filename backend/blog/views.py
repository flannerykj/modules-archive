from django.shortcuts import render
from django.views.generic import ListView
from .models import Post, Category
from django.shortcuts import render_to_response, get_object_or_404
from django.utils import timezone
from django.views import generic
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.core import serializers

def home(request):
    data = {
      "title": "The Basics - Networking",
      "description": "Your app fetched this from a remote endpoint!",
      "movies": [
        { "title": "StarWas", "releaseYear": "1977"},
        { "title": "Back to the Future", "releaseYear": "1985"},
        { "title": "The Matrix", "releaseYear": "1999"},
        { "title": "Inception", "releaseYear": "2010"},
        { "title": "Interstellar", "releaseYear": "2014"}
      ]
    }
    return JsonResponse(data)

def get_posts(request):
    posts = Post.objects.all().order_by('-pub_date').values()
    posts_list = list(posts)  # important: convert the QuerySet to a list object
    return JsonResponse(posts_list, safe=False)

def get_post(request, slug):
    try:
        p = Post.objects.get(pk=slug)
    except Post.DoesNotExist:
        p = "Post does not exist"
    serialized_obj = serializers.serialize('json', [ p, ])
    return JsonResponse(serialized_obj, safe=False)

def get_categories(request):
    categories = Post.objects.filter(category=category).order_by('-pub_date').values()
    json_list = list(categories)  # important: convert the QuerySet to a list object
    return JsonResponse(json_list, safe=False)

class CategoryIndexView(ListView):
    model = Post
    template_name = "blog-index.html"
    def get_context_data(self, **kwargs):
        context = super(CategoryIndexView, self).get_context_data(**kwargs)
        category = Category.objects.get(slug=self.kwargs['category'])
        context['page_title'] = category.title+" Posts"
        context['object_list'] = Post.objects.filter(category=category).order_by('-pub_date')
        context['category_list'] = Category.objects.all()
        return context

class TagIndexView(ListView):
	model = Post
 	template_name = "blog-index.html"
 	def get_context_data(self, **kwargs):
 		context = super(TagIndexView, self).get_context_data(**kwargs)
 		context['page_title'] = " Posts tagged "+self.kwargs['tag']
 		context['object_list'] = Post.objects.filter(tags__name__in=[self.kwargs['tag']]).order_by('-pub_date')
 		context['category_list'] = Category.objects.all()
 		return context

class DetailView(generic.DetailView):
    model = Post
    template_name = 'blog-detail.html'
