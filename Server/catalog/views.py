from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout
from catalog import models

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

