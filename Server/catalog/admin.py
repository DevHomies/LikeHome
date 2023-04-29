from django.contrib import admin
from catalog.models import Reservation, Hotel, HotelAmenity, RoomAmenity, Payment, Room, Reward

# Register your models here.
admin.site.register(Reservation)
admin.site.register(Hotel)
admin.site.register(HotelAmenity)
admin.site.register(RoomAmenity)
admin.site.register(Payment)
admin.site.register(Room)
admin.site.register(Reward)


