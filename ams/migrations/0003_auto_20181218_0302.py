# Generated by Django 2.1.3 on 2018-12-18 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ams', '0002_auto_20181218_0245'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='spare',
        ),
        migrations.AddField(
            model_name='task',
            name='spares',
            field=models.ManyToManyField(blank=True, to='ams.Spare'),
        ),
        migrations.AlterField(
            model_name='task',
            name='tools',
            field=models.ManyToManyField(blank=True, to='ams.Tool'),
        ),
    ]
