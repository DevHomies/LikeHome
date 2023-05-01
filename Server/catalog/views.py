from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout
from catalog import models
from catalog.utils import getInfolist, getLoginInfo,getRegister, logout_user,getSearch,hotel_info

from catalog.serializers import catalogSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from django.http import HttpResponse, JsonResponse


from catalog import serializers

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/catalog/',
            'method': 'GET',
            'body': None,
            'description': ''
        },
        {
            'Endpoint': '/catalog/login/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'log in user'
        },
        {
            'Endpoint': '/catalog/register/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'log in user'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getInfo(request):
    if request.method == 'GET':
        return getInfolist(request)

@api_view(['POST', 'GET'])
def loginview(request):
    if request.method == 'POST':
        return getLoginInfo(request)
    
@api_view(['POST'])
def registerview(request):
    if request.method == 'POST':
        return getRegister(request)

@api_view(['GET'])
def logout_view(request):
    if request.method == 'GET':
        return logout_user(request)
#12   
@api_view(['GET', 'POST'])
def searchview(request):
    if request.method == 'POST':
        return getSearch(request)
    elif request.method == 'GET':
        return hotel_info(request)
    
    
@api_view(['GET', 'POST'])
def hotel_view(request):
    if request.method == 'GET':
        return hotel_info(request)
    
# ------------------------------------------------------------------------HTML------------------------------------
"""
# Create your views here.
def home(request):
    # testing
    user = request.user
    reservation = models.Reservation.objects.filter(user=user)
    context = {
        'my_data': reservation
    }
    return render(request, "catalog/home.html", context=context)


def login(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")
        user1 = authenticate(username=username, password=password)
        if user1:
            auth_login(request, user1)
            return redirect('home')
        else:
            msg = "can't find account"
            return render(request, 'catalog/login.html', locals())
    return render(request, 'catalog/login.html')


def logout_view(request):
    logout(request)
    return redirect('login')


def register(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")
        password2 = request.POST.get("password2")
        email = request.POST.get("email")
        if password != password2:
            msg = "password not match"
            return render(request, "catalog/register.html", locals())
        elif username == '':
            msg = "can't be empty"
            return render(request, "catalog/register.html", locals())

        user1 = User.objects.create_user(username=username, password=password, email=email)
        user1.save()

        return redirect('home')
    return render(request, "catalog/register.html")

"""