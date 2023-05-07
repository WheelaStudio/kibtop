from django.db import models

from accounts.models import CustomUser
from ..base_models_full import BaseModelFull
from .for_avto import *
from django.utils import timezone


class AvtoFull(BaseModelFull):
    sub_category_en = models.CharField(choices=AVTO_CATEGORY_EN, max_length=255, blank=True, null=True, default=None)
    sub_category_ru = models.CharField(choices=AVTO_CATEGORY_RU, max_length=255, blank=True, null=True, default=None)
    sub_category_tr = models.CharField(choices=AVTO_CATEGORY_TR, max_length=255, blank=True, null=True, default=None)
    brand = models.CharField(max_length=255)
    mileage = models.IntegerField()
    year = models.IntegerField()


class AvtoFullViewsUser(models.Model):
    avto_full = models.ForeignKey(AvtoFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class AvtoFullFavouritesUser(models.Model):
    avto_full = models.ForeignKey(AvtoFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class AvtoFullUpload(models.Model):
    avto_full_upload = models.ForeignKey(AvtoFull, default=None, on_delete=models.CASCADE, related_name='avto_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
