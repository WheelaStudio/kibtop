from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models import BaseModelFull
from .for_fashion import *


class FashionFull(BaseModelFull):
    sub_category_en = models.CharField(choices=FASHION_CATEGORY_EN, max_length=255, blank=True, null=True)
    sub_category_ru = models.CharField(choices=FASHION_CATEGORY_RU, max_length=255, blank=True, null=True)
    sub_category_tr = models.CharField(choices=FASHION_CATEGORY_TR, max_length=255, blank=True, null=True)

class FashionFullViewsUser(models.Model):
    fashion_full = models.ForeignKey(FashionFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class FashionFullFavouritesUser(models.Model):
    fashion_full = models.ForeignKey(FashionFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)

class FashionFullUpload(models.Model):
    fashion_full_upload = models.ForeignKey(FashionFull, default=None, on_delete=models.CASCADE, related_name='fashion_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
