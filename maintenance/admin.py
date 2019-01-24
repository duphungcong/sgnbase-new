from django.contrib import admin
from .models import Check


class CheckAdmin(admin.ModelAdmin):
    list_display = ('name', 'aircraft', 'start_date', 'finish_date')
    ordering = ('start_date',)


# Register your models here.
admin.site.register(Check, CheckAdmin)
