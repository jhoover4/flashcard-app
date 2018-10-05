from rest_framework import serializers
from .models import Card, Subject


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ('name',)


class CardSerializer(serializers.ModelSerializer):
    subject = SubjectSerializer().fields['name']

    def create(self, validated_data):
        """
        Create and return a new Subject instance, given the validated data.
        """

        subject_name = validated_data.pop('subject', None)
        if subject_name:
            subject = Subject.objects.get_or_create(name=subject_name)[0]
            validated_data['subject'] = subject
        return Card.objects.create(**validated_data)

    class Meta:
        model = Card
        fields = ('id', 'question', 'answer', 'subject')
