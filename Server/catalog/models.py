from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #room = models.CharField(max_length=50)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()

    def __str__(self):
        return f"Reservation for {self.room} from {self.check_in} to {self.check_out}"
    
    # check if a reservation is paid or not   
    def is_paid(self):
        try:
            payment = Payment.objects.get(reservation=self)
            return True
        except Payment.DoesNotExist:
            return False
            
class HotelAmenity(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Hotel(models.Model):
    #photo = models.ImageField(upload_to='hotel_photos/', null=True, blank=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    website = models.URLField()
    hotel_description = models.TextField()
    amenities = models.ManyToManyField(HotelAmenity, blank=True)

    
    def __str__(self):
        return f"Hotel {self.name}"
        
class RoomAmenity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    #icon = models.ImageField(upload_to='room_amenities/', null=True, blank=True)

    def __str__(self):
        return self.name

    
class Room(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    room_number = models.CharField(max_length=10)
    room_type = models.CharField(max_length=50)
    price_per_night = models.DecimalField(max_digits=8, decimal_places=2)
    #photo = models.ImageField(upload_to='room_photos/', null=True, blank=True)
    amenities = models.ManyToManyField(RoomAmenity)
    
    def __str__(self):
        return f"{self.hotel.name} - Room number {self.room_type} at {self.price_per_night}"
    
class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reservation = models.ForeignKey('Reservation', on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.user.username} - {self.amount}"

class Reward(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reward_name = models.CharField(max_length=100)
    reward_description = models.TextField()
    reward_points = models.IntegerField()
    
    def __str__(self):
        return f"{self.user.username} - {self.points}"
