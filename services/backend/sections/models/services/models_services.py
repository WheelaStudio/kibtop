from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models import BaseModelFull
from .for_services import *


class ServicesFull(BaseModelFull):
    sub_category_en = models.CharField(choices=SERVICES_CATEGORY_EN, max_length=255, blank=True, null=True)
    sub_category_ru = models.CharField(choices=SERVICES_CATEGORY_RU, max_length=255, blank=True, null=True)
    sub_category_tr = models.CharField(choices=SERVICES_CATEGORY_TR, max_length=255, blank=True, null=True)


class ServicesFullViewsUser(models.Model):
    services_full = models.ForeignKey(ServicesFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class ServicesFullFavouritesUser(models.Model):
    services_full = models.ForeignKey(ServicesFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class ServicesFullUpload(models.Model):
    services_full_upload = models.ForeignKey(ServicesFull, default=None, on_delete=models.CASCADE, related_name='services_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
