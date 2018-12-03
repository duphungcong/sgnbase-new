from .models import Check
from rest_framework import serializers


class CheckSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Check
        fields = ('name', 'aircraft')
