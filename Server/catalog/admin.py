from django.contrib import admin
from catalog.models import Reservation,HotelAmenity,Hotel

# Register your models here.
admin.site.register(Reservation)
admin.site.register(HotelAmenity)
admin.site.register(Hotel)
