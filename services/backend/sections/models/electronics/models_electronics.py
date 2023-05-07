from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models import BaseModelFull
from .for_electronics import *


class ElectronicsFull(BaseModelFull):
    sub_category_en = models.CharField(choices=ELECTRONICS_CATEGORY_EN, max_length=255, blank=True, null=True)
    sub_category_ru = models.CharField(choices=ELECTRONICS_CATEGORY_RU, max_length=255, blank=True, null=True)
    sub_category_tr = models.CharField(choices=ELECTRONICS_CATEGORY_TR, max_length=255, blank=True, null=True)


class ElectronicsFullViewsUser(models.Model):
    electronics_full = models.ForeignKey(ElectronicsFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class ElectronicsFullFavouritesUser(models.Model):
    electronics_full = models.ForeignKey(ElectronicsFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class ElectronicsFullUpload(models.Model):
    electronics_full_upload = models.ForeignKey(ElectronicsFull, default=None, on_delete=models.CASCADE, related_name='electronics_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
