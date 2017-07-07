from rest_framework import serializers
from .models import Musician, Performance, Test
from django.contrib.auth.models import User

class MusicianSerializer(serializers.ModelSerializer):
    performances = serializers.PrimaryKeyRelatedField(many=True, queryset=Performance.objects.all())
    class Meta:
        model = Musician
        fields = ('__all__')

class PerformanceSerializer(serializers.ModelSerializer):
    audience = serializers.ReadOnlyField(source='audience.username')
    class Meta:
        model = Performance
        fields = ('audience', 'musician', 'comments')

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    performances_added = serializers.PrimaryKeyRelatedField(many=True, queryset=Performance.objects.all())
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    class Meta:
        model = User
        fields = ('username', 'password', 'performances_added')

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('__all__')
