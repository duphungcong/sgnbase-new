from django.shortcuts import render
from django.http import HttpResponse
from .models import Aircraft
from rest_framework import viewsets
from .serializers import AircraftSerializer

# Create your views here.
class AircraftViewSet(viewsets.ModelViewSet):
    # API endpoint that allows users to be viewed or edited.
    queryset = Aircraft.objects.all().order_by('register')
    serializer_class = AircraftSerializer
