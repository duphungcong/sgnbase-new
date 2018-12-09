from django.shortcuts import render
from .models import Check
from rest_framework import viewsets, pagination
from .serializers import CheckSerializer


# Create your views here.
class CheckSetPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 1000


class CheckViewSet(viewsets.ModelViewSet):
    queryset = Check.objects.all().order_by('-start_date')
    serializer_class = CheckSerializer
    pagination_class = CheckSetPagination
