from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CardSerializer
from .models import Cards

# Create your views here.
def home(request):
    return render(request, 'cards/index.html')

class CardViewSet(viewsets.ModelViewSet):
    queryset = Cards.objects.all()
    serializer_class = CardSerializer
    http_method_names = ['get', 'head']
