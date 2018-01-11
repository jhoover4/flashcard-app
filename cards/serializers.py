from rest_framework import serializers
from .models import Cards


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cards
        fields = ('id', 'title', 'content')
