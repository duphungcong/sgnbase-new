# Generated by Django 2.1.3 on 2018-12-02 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ams', '0002_auto_20181201_0539'),
    ]

    operations = [
        migrations.RenameField(
            model_name='aircraft',
            old_name='resgister',
            new_name='register',
        ),
        migrations.AlterField(
            model_name='aircraft',
            name='type',
            field=models.IntegerField(choices=[(1, 'ATR72'), (2, 'A320'), (3, 'A321'), (4, 'B787'), (5, 'B777'), (6, 'A330'), (7, 'A350')], default=1),
        ),
    ]