from rest_framework.response import Response
from .models import Reservation,Hotel
from .serializers import catalogSerializer, searchSerializer
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User

from django.http import JsonResponse



def getInfolist(request):
    re1 = Reservation.objects.all()
    serializer = catalogSerializer(re1, many=True)
    return Response(serializer.data)


def getLoginInfo(request):
    data = request.data
    
    #print(f"{data['username']} and {data['password']}")
    user1 = authenticate(username=data['username'], password=data['password'])
    
    if user1:
        auth_login(request, user1)
        
        return JsonResponse({'success': True})
    else:

        return JsonResponse({'success': False})

        
def getRegister(request):
    
    data = request.data
    
    #print(f"{data['username']} and {data['email']} and {data['password']} and {data['rpassword']}")
    if data['password'] != data['rpassword']:
        
        print("pass won't match")
        return JsonResponse({'success': False})

        
    elif User.objects.filter(email=data['email']).exists():
        
        print("email exist")
        return JsonResponse({'success': False})

    else:
        user1 = User.objects.create_user(username=data['username'], password=data['password'], email=data['email'])
        user1.save()
        print("can be created")
        return JsonResponse({'success': True})


def logout_user(request):
    
    logout(request)
    
    return JsonResponse({'success': True})
#12
def getSearch(request):
    
    data = request.data
    location = data['location']
    room = data['rooms']
    traveler = data['travelers']
    check_in = data['checkDates']

    print(location)
    print(room)
    print(traveler)
    print(check_in)
    
    hotel = Hotel.objects.filter(city = location,room_available__gt=room)
    serializer = searchSerializer(hotel,many = True)
    print(hotel)
    for i in hotel:
        print(i.city)
        print(i.hotel_amenities)
        print(i.room_available)
    return Response({'success': True})

def hotel_info(request):
    hotel = Hotel.objects.all()
    serializer = searchSerializer(hotel,many = True)
    return Response(serializer.data)


