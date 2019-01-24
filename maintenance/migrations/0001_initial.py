# Generated by Django 2.1.5 on 2019-01-24 16:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('facility', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Check',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('start_date', models.DateTimeField()),
                ('finish_date', models.DateTimeField()),
                ('aircraft', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='facility.Aircraft')),
            ],
        ),
    ]
