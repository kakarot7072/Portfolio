from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('Projects', views.projects, name='projects'),
    path('Skills', views.skills, name='skills'),
    path('Certificates', views.certificates, name='certificates'),
    path('Contact', views.contact, name='contact'),
    path('Experience', views.experience, name='experience'),
]