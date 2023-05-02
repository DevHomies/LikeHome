from django.db import models
from django.contrib.auth.models import User

from datetime import datetime

# Create your models here.
class Reservation(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # room = models.CharField(max_length=50)
    # start_time = models.DateTimeField()
    # end_time = models.DateTimeField()
    
    user = models.TextField(null=True)
    name= models.CharField(max_length=100, null=True)
    check_in = models.DateField(null=True)
    check_out = models.DateField(null=True)
    payment_date = models.DateTimeField(default=datetime.now())
    total = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    travelers=models.IntegerField(null=True)
    num_of_rooms=models.IntegerField(null=True)

    def __str__(self):
        return f"Reservation for {self.user} from {self.check_in} to {self.check_out}"
    
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
    

class HotelAmenity(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
        
class RoomAmenity(models.Model):
    name = models.CharField(max_length=100)
    # description = models.TextField()
    #icon = models.ImageField(upload_to='room_amenities/', null=True, blank=True)

    def __str__(self):
        return self.name

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reservation = models.ForeignKey('Reservation', on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    # payment_method = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.user.username} - {self.amount}"
    
    
class Room(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE,null=True)
    # room_number = models.CharField(max_length=10,null=True)
    # room_type = models.CharField(max_length=50)
    price_per_night = models.DecimalField(max_digits=8, decimal_places=2,null=True)
    #photo = models.ImageField(upload_to='room_photos/', null=True, blank=True)
    amenities = models.ManyToManyField(RoomAmenity)
    
    def __str__(self):
        return f"{self.hotel.name} - Price {self.price_per_night}"
        # return f"{self.hotel.name} - Room number {self.room_number} at {self.price_per_night}"
    
class Reward(models.Model):
    user = models.TextField(null=True)
    # reward_name = models.CharField(max_length=100)
    # reward_description = models.TextField()
    reward_points = models.IntegerField(default=150)
    
    def __str__(self):
        return f"{self.user} - {self.reward_points}"
