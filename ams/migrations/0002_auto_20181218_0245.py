# Generated by Django 2.1.3 on 2018-12-18 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ams', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='code',
            field=models.CharField(max_length=10),
        ),
    ]
