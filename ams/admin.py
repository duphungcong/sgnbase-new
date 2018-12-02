from django.contrib import admin
from django import forms
from .models import Aircraft, Area, Note, Task


class AreaAdmin(admin.ModelAdmin):
    list_display = ('name', 'main_area')
    ordering = ('main_area',)


class NoteAdmin(admin.ModelAdmin):
    exclude = ['created_by']
    list_display = ('content', 'created_by')

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)


# Register your models here.
admin.site.register(Aircraft)
admin.site.register(Area, AreaAdmin)
admin.site.register(Note, NoteAdmin)
admin.site.register(Task)
