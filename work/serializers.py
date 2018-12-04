from rest_framework import serializers
from .models import Check
from ams.serializers import AircraftSerializer


class CheckSerializer(serializers.HyperlinkedModelSerializer):
    aircraft = AircraftSerializer(read_only=True)
    class Meta:
        model = Check
        fields = ('name', 'aircraft', 'start_date', 'finish_date')
