from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.CharField(max_length=50)
    start_time = models.CharField(max_length=30,null=True)
    end_time = models.CharField(max_length=30,null=True)
    reserve_date = models.CharField(max_length=30,null=True)

    total_Price=models.FloatField(null=True)
    def __str__(self):
        return f"Reservation for {self.room} from {self.start_time} to {self.end_time}"

class ReservationRoom(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    res_Id=models.ForeignKey(Reservation, on_delete=models.CASCADE)
    day_Duration=models.IntegerField()
    cost=models.FloatField()



class Address(models.Model):
    street_Number=models.IntegerField()
    street_Name=models.CharField(max_length=40)
    city=models.CharField(max_length=20)
    state=models.CharField(max_length=5)
    zipcode=models.IntegerField()

class HotelCampus(models.Model):
    name=models.CharField(max_length=30)
    address_Id=models.ForeignKey(Address,on_delete=models.CASCADE)
    phone=models.IntegerField()

class RoomType(models.Model):
    campus_Id=models.ForeignKey(HotelCampus,on_delete=models.CASCADE)
    maxPeople=models.IntegerField()
    maxBed=models.IntegerField()
    pricePerDay=models.FloatField()

class Room(models.Model):
    room_Number=models.IntegerField()
    type_Id=models.ForeignKey(RoomType,on_delete=models.CASCADE)
    availability=models.BooleanField()

class Reward(models.Model):
    point=models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
