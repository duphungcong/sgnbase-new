from django.db import models
from ams.models import Aircraft


# Create your models here.

class Check(models.Model):
    name = models.CharField(max_length=40)
    start_date = models.DateTimeField('start date')
    finish_date = models.DateTimeField('finish date')
    aircraft = models.ForeignKey(Aircraft, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
