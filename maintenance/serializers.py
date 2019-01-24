from rest_framework import serializers
from .models import Check
from facility.serializers import AircraftSerializer


class CheckSerializer(serializers.ModelSerializer):
    aircraft = AircraftSerializer(is_relation=True)

    class Meta:
        model = Check
        fields = ('id', 'name', 'aircraft', 'start_date', 'finish_date')
