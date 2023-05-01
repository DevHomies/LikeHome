from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView, TemplateView

urlpatterns = [
    path("catalog/", include('catalog.urls')),
    path("admin/", admin.site.urls),
    # path('', RedirectView.as_view(url='catalog/')),
    path('', TemplateView.as_view(template_name='index.html')),
    # path('login/', TemplateView.as_view(template_name='index.html')),
    # path('register/', TemplateView.as_view(template_name='index.html')),
]
