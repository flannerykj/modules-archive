from __future__ import unicode_literals
from django.db import models

# Create your models here.

INSTRUMENT_CHOICES = (('DRUMS', 'Drums'), ('KEYBOARD', 'Keyboard'), ('GUITAR', 'Guitar'), ('VIOLIN', 'Violin'))

class Musician(models.Model):
    name = models.CharField(max_length=200)
    instrument = models.CharField(choices=INSTRUMENT_CHOICES, default='GUITAR', max_length=100)
    associated_user = models.ForeignKey('auth.User', related_name='owner', blank=True, null=True)
    def __str__(self):
        return self.name

class Performance(models.Model):
    comments = models.CharField(max_length=200, blank=True, default='')
    audience = models.ForeignKey('auth.User', related_name='performances_added', on_delete=models.CASCADE)
    musician = models.ForeignKey(Musician, related_name='performances', on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('date_time',)

class Test(models.Model):
    title = models.CharField(max_length=200, blank=True, default='')
    def __str__(self):
        return self.title
