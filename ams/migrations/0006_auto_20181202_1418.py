# Generated by Django 2.1.3 on 2018-12-02 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ams', '0005_auto_20181202_1310'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='task',
            options={'ordering': ('number',)},
        ),
        migrations.AddField(
            model_name='task',
            name='areas',
            field=models.ManyToManyField(to='ams.Area'),
        ),
        migrations.AddField(
            model_name='task',
            name='notes',
            field=models.ManyToManyField(to='ams.Note'),
        ),
        migrations.AddField(
            model_name='task',
            name='spare',
            field=models.ManyToManyField(to='ams.Spare'),
        ),
        migrations.AddField(
            model_name='task',
            name='tools',
            field=models.ManyToManyField(to='ams.Tool'),
        ),
    ]