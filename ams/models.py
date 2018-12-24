from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Aircraft(models.Model):
    register = models.CharField(max_length=10)
    AIRCRAFT_TYPE_CHOICES = (
        (1, 'ATR72'),
        (2, 'A320'),
        (3, 'A321'),
        (4, 'B787'),
        (5, 'B777'),
        (6, 'A330'),
        (7, 'A350'),
    )
    type = models.IntegerField(
        choices=AIRCRAFT_TYPE_CHOICES,
        default=1,
    )

    def __str__(self):
        return self.register


class Area(models.Model):
    name = models.CharField(max_length=20)
    main_area = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='areas')

    def __str__(self):
        if self.main_area is None:
            return self.name
        else:
            return '%s %s' % (self.main_area, self.name)


class Tool(models.Model):
    name = models.CharField(max_length=40)
    pn = models.CharField(max_length=20)

    def __str__(self):
        return self.pn


class Spare(models.Model):
    name = models.CharField(max_length=20)
    pn = models.CharField(max_length=20)
    SPARE_TYPE_CHOICES = (
        (1, 'EP'),
        (2, 'CO'),
        (3, 'AS')
    )
    type = models.IntegerField(
        choices=SPARE_TYPE_CHOICES,
        default=1
    )

    def __str__(self):
        return self.pn


class Task(models.Model):
    number = models.CharField(max_length=20)
    zone = models.CharField(max_length=10)
    code = models.CharField(max_length=10)
    title = models.CharField(max_length=200)
    ams_mh = models.FloatField
    actual_mh = models.FloatField
    men = models.IntegerField
    hour = models.FloatField

    areas = models.ManyToManyField(Area)
    tools = models.ManyToManyField(Tool, blank=True)
    spares = models.ManyToManyField(Spare, blank=True)

    def __str__(self):
        return self.number

    class Meta:
        ordering = ('number',)


class Note(models.Model):
    content = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)

    def __str__(self):
        return self.content

