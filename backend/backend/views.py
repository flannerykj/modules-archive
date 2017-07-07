from django.shortcuts import render
from rest_framework import permissions, routers, serializers, viewsets
from django.contrib.auth.models import User
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope

# Create your views here.

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
    queryset = User.objects.all()
    serializer_class = UserSerializer
