# Generated by Django 2.1.3 on 2018-12-07 07:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Aircraft',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('register', models.CharField(max_length=10)),
                ('type', models.IntegerField(choices=[(1, 'ATR72'), (2, 'A320'), (3, 'A321'), (4, 'B787'), (5, 'B777'), (6, 'A330'), (7, 'A350')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10)),
                ('main_area', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='areas', to='ams.Area')),
            ],
        ),
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Spare',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('pn', models.CharField(max_length=20)),
                ('type', models.IntegerField(choices=[(1, 'EP'), (2, 'CO'), (3, 'AS')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=20)),
                ('zone', models.CharField(max_length=10)),
                ('code', models.CharField(max_length=3)),
                ('title', models.CharField(max_length=200)),
                ('areas', models.ManyToManyField(to='ams.Area')),
                ('spare', models.ManyToManyField(to='ams.Spare')),
            ],
            options={
                'ordering': ('number',),
            },
        ),
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('pn', models.CharField(max_length=20)),
            ],
        ),
        migrations.AddField(
            model_name='task',
            name='tools',
            field=models.ManyToManyField(to='ams.Tool'),
        ),
        migrations.AddField(
            model_name='note',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ams.Task'),
        ),
    ]
