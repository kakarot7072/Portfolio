from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Project, Skill, Certificate
from .forms import ContactForm

def home(request):
    return render(request, 'home.html')

def projects(request):
    projects = Project.objects.all().order_by('-created_at')
    return render(request, 'projects.html', {'projects': projects})

def skills(request):
    skills_by_category = {
        'Data Engineering': Skill.objects.filter(category='DE'),
        'Data Analysis': Skill.objects.filter(category='DA'),
        'Tools & Technologies': Skill.objects.filter(category='TOOLS'),
    }
    return render(request, 'skills.html', {'skills_by_category': skills_by_category})

def certificates(request):
    certificates = Certificate.objects.all().order_by('-date_earned')
    return render(request, 'certificates.html', {'certificates': certificates})

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})

def experience(request):
    return render(request, 'experience.html')