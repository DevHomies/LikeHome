from rest_framework.response import Response
from .models import Reservation,Hotel, Reward
from .serializers import catalogSerializer, searchSerializer, rewardSerializer, reserveSerializer, userSerializer
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib.auth.models import User
from django.db.models import F, Q

import datetime

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
        # auth_login(request, user1)
        global current_user
        current_user = user1
        
        #print(user1)
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
        
        reward1 = Reward(user=user1)
        reward1.save()
        
        user1.is_staff = True
        user1.save()
        print("can be created")
        return JsonResponse({'success': True})


# def hotel_info(request):
#     test1 = Hotel.objects.all()
#     serializer = catalogSerializer(test1, many=True)
#     return Response(serializer.data)

def logout_user(request):
    
    # logout(request)
    current_user = ''
    return JsonResponse({'success': True})
#12
def getSearch(request):
    
    data = request.data
    
    global location
    location = data['location'].title().strip()
    
    global room
    room = data['rooms']
    
    #traveler = data['travelers']
    global checkin 
    global checkout
    global hotel_real
    
    hotel_real = Hotel.objects.filter(city = location,room_available__gt=room)
    
    checkin = data['checkDates'][0][:10]
    checkout = data['checkDates'][1][:10]
    
    checkin_1 = datetime.datetime.strptime(checkin, '%Y-%m-%d')
    checkout_1 = datetime.datetime.strptime(checkout, '%Y-%m-%d')

    re1_check = Reservation.objects.filter(user=current_user)
    
    for i in re1_check:
        temp1 = datetime.datetime.min.time()
        start_date = datetime.datetime.combine(i.check_in,temp1)
        end_date = datetime.datetime.combine(i.check_out,temp1)
        
        if start_date<=checkin_1<=end_date or start_date<=checkout_1<=end_date or (checkin_1 <= start_date and checkout_1 >= end_date):
            hotel_real = hotel_real.filter(city = location,room_available__gt=room).exclude(name=i.name)
            
        # print(start_date<=checkin_1<=end_date)
        # print(start_date<=checkout_1<=end_date)
        # print(checkin_1 <= start_date and checkout_1 >= end_date)
        

    return Response({'success': True})

def hotel_info(request):
    # re1_check = Reservation.objects.filter(user=current_user,check_in=checkin,check_out=checkout)
    re1_check = Reservation.objects.filter(user=current_user)
    # print("NEWWWWWW: ", re1_check)
    
    
    # if re1_check:
    #     templist = []
    #     for i in range(0,len(re1_check)):
    #         templist.append(re1_check[i].name)
            
    #     #print(re1_check[0].name)
        
    #     hotel1 = Hotel.objects.filter(city = location,room_available__gt=room).exclude(name__in=templist)
    #     serializer1 = searchSerializer(hotel1,many = True)
    #     return Response(serializer1.data)

    # else:
    # hotel = Hotel.objects.filter(city = location,room_available__gt=room)
    serializer = searchSerializer(hotel_real,many = True)

    return Response(serializer.data)

def postReserve(request):
    data = request.data
    
    checkin = data['state']['search']['checkDates'][0][:10]
    checkout = data['state']['search']['checkDates'][1][:10]
    
    checkin_1 = datetime.datetime.strptime(checkin, '%Y-%m-%d')
    checkout_1 = datetime.datetime.strptime(checkout, '%Y-%m-%d')
    
    night = int(str(checkout_1 - checkin_1).split(',')[0].split()[0])
    print("---------------------")
    print(checkin_1)
    print(checkout_1)
    print(night)
    print("---------------------")

    if data['rewardApplied']:
        re = Reservation(user=current_user, name=data['state']['title'], 
                    check_in=data['state']['search']['checkDates'][0][:10],
                    check_out=data['state']['search']['checkDates'][1][:10],
                    total=0,
                    travelers=data['state']['search']['travelers'],
                    num_of_rooms=data['state']['search']['rooms'])
        
        reward1 = Reward.objects.filter(user=current_user).update(reward_points=F("reward_points") - 150)
        
        re.save()
    else:
        
        final_result = night * int(data['state']['search']['rooms']) * int(data['state']['price'])
        
        # print(type(data['nights']))
        # print("printing: " + data['nights'])
            
        re1 = Reservation(user=current_user, name=data['state']['title'], 
                        check_in=data['state']['search']['checkDates'][0][:10],
                        check_out=data['state']['search']['checkDates'][1][:10],
                        total=final_result,
                        travelers=data['state']['search']['travelers'],
                        num_of_rooms=data['state']['search']['rooms'])
        re1.save()
        # print(data['state']['search']['checkDates'][0][:10])
    # print(data['state']['search']['checkDates'][1][:10])
    
    rooms_check = Hotel.objects.filter(name=data['state']['title']).update(room_available=F("room_available") - data['state']['search']['rooms'])
    reward1 = Reward.objects.filter(user=current_user).update(reward_points=F("reward_points") + 50)
    return Response({'success': True})

def post_current_reserve(request):
    
    pcr = Reservation.objects.filter(user=current_user)
    
    serializer = reserveSerializer(pcr,many=True)
    
    return Response(serializer.data)

def post_reward_point(request):
    reward = Reward.objects.filter(user=current_user)
    serializer = rewardSerializer(reward,many=True)
    
    return Response(serializer.data)

def cancel_reserve(request):
    data = request.data

    cancel1 = Reservation.objects.filter(user=data[0]['user'], name=data[0]['name'], check_in=data[0]['check_in']).delete()
    
    hotel1 = Hotel.objects.filter(name=data[0]['name']).update(room_available=F("room_available") + data[0]["num_of_rooms"])
    
    pcr = Reservation.objects.filter(user=current_user)
    
    serializer = reserveSerializer(pcr,many=True)
    
    return Response(serializer.data)

def edit_reserve(request):
    data = request.data
        
    r1 = Reservation.objects.filter(user=data['upcSelected']['user'], name=data['upcSelected']['name'], check_in=data['upcSelected']['check_in'])
    
    checkin = str(r1[0].check_in)
    checkout = str(r1[0].check_out)
    
    checkin_1 = datetime.datetime.strptime(checkin, '%Y-%m-%d')
    checkout_1 = datetime.datetime.strptime(checkout, '%Y-%m-%d')
    
    print("----------------")
    print(type(checkin))
    print(type(checkout))
    
    night = int(str(checkout_1 - checkin_1).split(',')[0].split()[0])
    print(night)
    
    room = int(r1[0].num_of_rooms)
    
    o_price = (int(r1[0].total) / night) / room
    
    new_total = o_price * night * int(data['editrooms'])
    # print(checkin)
    # print(checkout)
    # print(o_price)
    # print(room)
    # print(night)
    # print(new_total)

    edit1 = Reservation.objects.filter(user=data['upcSelected']['user'], name=data['upcSelected']['name'], check_in=data['upcSelected']['check_in']).update(travelers=data['edittravelers'], num_of_rooms=data['editrooms'], total=new_total)
    
    pcr = Reservation.objects.filter(user=current_user)
    serializer = reserveSerializer(pcr,many=True)
    
    # print()
    # print(data)
    # return Response(serializer.data)
    return Response(serializer.data)


def display_acc(request):
    user1 = User.objects.filter(username=current_user)
        
    serializer = userSerializer(user1,many=True)
    # print(user1)
    return Response(serializer.data)