from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView)

from .models import Task
from api.serializers import TaskSerializer
from api.permissions import IsOwnerOrReadOnly


class TaskMixin(object):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (IsOwnerOrReadOnly,)
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)

class TaskList(TaskMixin, ListCreateAPIView):
    pass


class TaskDetail(TaskMixin, RetrieveUpdateDestroyAPIView):
    pass
