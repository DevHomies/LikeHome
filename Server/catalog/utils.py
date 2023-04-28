from rest_framework.response import Response
from .models import Reservation, Hotel
from .serializers import catalogSerializer
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


def hotel_info(request):
    test1 = Hotel.objects.all()
    serializer = catalogSerializer(test1, many=True)
    return Response(serializer.data)

def logout_user(request):
    
    logout(request)
    
    return JsonResponse({'success': True})
