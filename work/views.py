from django.shortcuts import render
from .models import Check
from rest_framework import viewsets
from .serializers import CheckSerializer


# Create your views here.
class CheckViewSet(viewsets.ModelViewSet):
    queryset = Check.objects.all().order_by('start_date')
    serializer_class = CheckSerializer
