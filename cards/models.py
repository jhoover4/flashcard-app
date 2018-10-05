from django.db import models
from django.utils import timezone


class Subject(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Card(models.Model):
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE, related_name='subjects')
    question = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.question
