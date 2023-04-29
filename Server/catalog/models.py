from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.CharField(max_length=50)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"Reservation for {self.room} from {self.start_time} to {self.end_time}"
    
class HotelAmenity(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Hotel(models.Model):
    city = models.CharField(max_length=100,null = True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    price= models.FloatField(null=True)
    # photo = models.ImageField(upload_to='room_photos/', null=True, blank=True)
    hotel_amenities = models.TextField(null=True)
    # amenities = models.ManyToManyField(HotelAmenity, blank=True)
    rating= models.FloatField(null=True)
    room_available = models.IntegerField(null = True)

    def __str__(self):
        return f"Hotel {self.name}"