from django.db import models


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


class Task(models.Model):
    number = models.CharField(max_length=20)
    zone = models.CharField(max_length=10)
    code = models.CharField(max_length=3)
    title = models.CharField
    ams_mh = models.FloatField
    actual_mh = models.FloatField
    men = models.IntegerField
    hour = models.FloatField

    def __str__(self):
        return self.number


class Area(models.Model):
    name = models.CharField(max_length=10)
    main_area = models.ForeignKey('self', null=True, related_name='area', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Tool(models.Model):
    name = models.CharField(max_length=20)
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


class Note(models.Model):
    content = models.CharField
