# Generated by Django 4.1.7 on 2023-04-28 22:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0012_room_price_per_night'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='price_per_night',
        ),
    ]
