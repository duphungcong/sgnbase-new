from django.shortcuts import render
from .models import Aircraft
from rest_framework import viewsets
from .serializers import AircraftSerializer


# Create your views here.
class AircraftViewSet(viewsets.ModelViewSet):
    queryset = Aircraft.objects.all().order_by('register')
    serializer_class = AircraftSerializer
