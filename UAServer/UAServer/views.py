from __future__ import unicode_literals
from django.views import View
from django.http import HttpResponse
from rest_framework import generics, viewsets

def home_view(View):
    return HttpResponse('Home')
