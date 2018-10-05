from rest_framework import viewsets

from .models import Card, Subject
from .serializers import CardSerializer, SubjectSerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    http_method_names = ['get', 'post', 'head']


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    http_method_names = ['get', 'head']


