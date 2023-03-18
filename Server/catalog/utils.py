from rest_framework.response import Response
from .models import Reservation
from .serializers import catalogSerializer

from django.http import JsonResponse



def getInfolist(request):
    re1 = Reservation.objects.all()
    serializer = catalogSerializer(re1, many=True)
    return Response(serializer.data)


def getLoginInfo(request):
    data = request.data
    
    print(f"{data['username']} and {data['password']}")

    return JsonResponse(data)

def getRegister(request):
    
    data = request.data
    
    print(f"{data['username']} and {data['email']} and {data['password']} and {data['rpassword']}")
    
    return JsonResponse(data)
