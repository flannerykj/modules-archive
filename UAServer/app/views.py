from __future__ import unicode_literals
from django.views import View
from django.http import HttpResponse
from rest_framework import generics, viewsets
from .models import Musician, Performance, Test
from .serializers import MusicianSerializer, PerformanceSerializer, UserSerializer, TestSerializer
from django.contrib.auth.models import User
from rest_framework import permissions
from .permissions import IsOwnerOrReadOnly

def home_view(View):
    return HttpResponse('Home')

class MusicianViewSet(viewsets.ModelViewSet):
    queryset = Musician.objects.all()
    serializer_class = MusicianSerializer


class PerformanceViewSet(viewsets.ModelViewSet):
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                      IsOwnerOrReadOnly,)
    def perform_create(self, serializer):
        serializer.save(audience=self.request.user)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(generics.CreateAPIView):
    #provides only post method
    model = User
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer


class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
