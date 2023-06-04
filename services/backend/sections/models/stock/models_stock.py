from django.db import models


class Stock(models.Model):
    #isDark = models.BooleanField()
    #img = models.FileField(upload_to='stock/')
    image = models.FileField(verbose_name='Изображение', upload_to='stock/')
    image_mobile = models.FileField(verbose_name='Мобильное изображение', upload_to='stock/')
    title = models.CharField(max_length=255)
    #desc = models.TextField()
    #background = models.FileField(upload_to='stock/')
    link = models.URLField(max_length=255)

    def __str__(self):
        return self.title
