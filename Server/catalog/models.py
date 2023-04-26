from django.db import models
from django.contrib.auth.models import User

# Create your models here.

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class HotelAmenity(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Hotel(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    price= models.FloatField(null=True)
    # photo = models.ImageField(upload_to='room_photos/', null=True, blank=True)
    hotel_amenities = models.TextField(null=True)
    # amenities = models.ManyToManyField(HotelAmenity, blank=True)
    rating= models.FloatField(null=True)

    def __str__(self):
        return f"Hotel {self.name}"
        
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
    room_amenities = models.TextField(null=True)
    # amenities = models.ManyToManyField(RoomAmenity)
    
    def __str__(self):
        return f"{self.hotel.name} - Price {self.price_per_night}"
        # return f"{self.hotel.name} - Room number {self.room_number} at {self.price_per_night}"
    
class Reward(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # reward_name = models.CharField(max_length=100)
    # reward_description = models.TextField()
    reward_points = models.IntegerField(null=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.reward_points}"

class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #room = models.CharField(max_length=50)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    check_in = models.DateField(null=True)
    check_out = models.DateField(null=True)
    # check_in = models.DateTimeField(null=True)
    # check_out = models.DateTimeField(null=True)
    travelers=models.IntegerField(null=True)
    num_of_rooms=models.IntegerField(null=True)


    def __str__(self):
        return f"Reservation for {self.room} from {self.check_in} to {self.check_out}"
    
    # check if a reservation is paid or not   
    def is_paid(self):
        try:
            payment = Payment.objects.get(reservation=self)
            return True
        except Payment.DoesNotExist:
            return False
            


# class Reservation(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     room = models.CharField(max_length=50)
#     start_time = models.CharField(max_length=30,null=True)
#     end_time = models.CharField(max_length=30,null=True)
#     reserve_date = models.CharField(max_length=30,null=True)

#     total_Price=models.FloatField(null=True)
#     def __str__(self):
#         return f"Reservation for {self.room} from {self.start_time} to {self.end_time}"

# class ReservationRoom(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     res_Id=models.ForeignKey(Reservation, on_delete=models.CASCADE)
#     day_Duration=models.IntegerField()
#     cost=models.FloatField()



# class Address(models.Model):
#     street_Number=models.IntegerField()
#     street_Name=models.CharField(max_length=40)
#     city=models.CharField(max_length=20)
#     state=models.CharField(max_length=5)
#     zipcode=models.IntegerField()

# class HotelCampus(models.Model):
#     name=models.CharField(max_length=30)
#     address_Id=models.ForeignKey(Address,on_delete=models.CASCADE)
#     phone=models.IntegerField()

# class RoomType(models.Model):
#     campus_Id=models.ForeignKey(HotelCampus,on_delete=models.CASCADE)
#     maxPeople=models.IntegerField()
#     maxBed=models.IntegerField()
#     pricePerDay=models.FloatField()

# class Room(models.Model):
#     room_Number=models.IntegerField()
#     type_Id=models.ForeignKey(RoomType,on_delete=models.CASCADE)
#     availability=models.BooleanField()

# class Reward(models.Model):
#     point=models.IntegerField()
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
