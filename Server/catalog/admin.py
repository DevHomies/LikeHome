from django.contrib import admin
from catalog.models import Reservation,Hotel,Room,Reward,Payment

# Register your models here.
admin.site.register(Reservation)
# admin.site.register(HotelAmenity)
admin.site.register(Hotel)
# admin.site.register(RoomAmenity)
admin.site.register(Room)
admin.site.register(Reward)
admin.site.register(Payment)
