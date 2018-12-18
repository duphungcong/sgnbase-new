from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Aircraft, Area, Note, Task, Tool, Spare


class AircraftAdmin(admin.ModelAdmin):
    list_display = ('register', 'type')
    ordering = ('type', 'register',)


class AreaAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'main_area')
    ordering = ('main_area',)


class NoteAdmin(admin.ModelAdmin):
    exclude = ['created_by']
    list_display = ('content', 'created_by')

    def save_model(self, request, obj, form, change):
        obj.created_by = request.user
        super().save_model(request, obj, form, change)


class TaskResource(resources.ModelResource):
    class Meta:
        model = Task


class TaskAdmin(ImportExportModelAdmin):
    resource_class = TaskResource
    list_display = ('number', 'zone', 'code', 'title')
    filter_horizontal = ('areas', 'tools', 'spares')
    fieldsets = (
        (None, {
            'fields': ('number', 'zone', 'code', 'title', 'areas')
        }),
        ('Tools and Preloads', {
            'classes': ('collapse',),
            'fields': ('tools', 'spares'),
        })
    )


# Register your models here.
admin.site.register(Aircraft, AircraftAdmin)
admin.site.register(Area, AreaAdmin)
admin.site.register(Note, NoteAdmin)
admin.site.register(Task, TaskAdmin)
admin.site.register(Tool)
admin.site.register(Spare)
