from django.db import models

# Create your models here.
class Paste(models.Model):
    user = models.CharField(max_length=20, blank=True)
    utime = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

