from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='Projects')
    github_link = models.URLField(blank=True)
    demo_link = models.URLField(blank=True)
    technologies = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('DE', 'Data Engineering'),
        ('DA', 'Data Analysis'),
        ('TOOLS', 'Tools & Technologies'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    proficiency = models.IntegerField()

    def __str__(self):
        return f"{self.name} - {self.get_category_display()}"

class Certificate(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=100)
    date_earned = models.DateField()
    image = models.ImageField(upload_to='')
    certificate_link = models.URLField(blank=True)

    def __str__(self):
        return f"{self.title} - {self.issuer}"

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"