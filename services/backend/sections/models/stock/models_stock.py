from django.db import models


class Stock(models.Model):
    isDark = models.BooleanField()
    img = models.FileField(upload_to='stock/')
    title = models.CharField(max_length=255)
    desc = models.TextField()
    background = models.FileField(upload_to='stock/')

    def __str__(self):
        return self.title
