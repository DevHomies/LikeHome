# Generated by Django 4.1.2 on 2023-05-01 06:35

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "catalog",
            "0005_remove_reservation_end_time_remove_reservation_room_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="reservation",
            name="num_of_rooms",
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name="reservation",
            name="travelers",
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name="reservation",
            name="payment_date",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 5, 1, 6, 35, 55, 252980)
            ),
        ),
    ]
