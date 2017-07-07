from django.db import models

INSTRUMENTS = ['drums', 'keyboard', 'guitar', 'violin', 'banjo', 'harmonia', 'saxophone']

class Performance(models.Model):
    comments = models.CharField(max_length=200, blank=True, default='')
    owner = models.ForeignKey('auth.User', related_name='performances_added', on_delete=models.CASCADE)
    musician = models.ForeignKey(Musician, related_name='musicians_spotted', on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        order = ('created', )

class Musician(models.Model):
    name = models.CharField(max_length=200)
    instrument = models.TextField(choices=INSTRUMENTS, blank=True)
