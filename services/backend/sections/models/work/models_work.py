from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models import BaseModelFull
from .for_work import *


class WorkFull(BaseModelFull):
    sub_category_en = models.CharField(choices=WORK_CATEGORY_EN, max_length=255, blank=True, null=True)
    sub_category_ru = models.CharField(choices=WORK_CATEGORY_RU, max_length=255, blank=True, null=True)
    sub_category_tr = models.CharField(choices=WORK_CATEGORY_TR, max_length=255, blank=True, null=True)
    for_work_type_en = models.CharField(choices=FOR_WORK_EN, max_length=255, blank=True, null=True)
    for_work_type_ru = models.CharField(choices=FOR_WORK_RU, max_length=255, blank=True, null=True)
    for_work_type_tr = models.CharField(choices=FOR_WORK_TR, max_length=255, blank=True, null=True)
    employment_en = models.CharField(choices=EMPLOYMENT_EN, max_length=255, blank=True, null=True)
    employment_ru = models.CharField(choices=EMPLOYMENT_RU, max_length=255, blank=True, null=True)
    employment_tr = models.CharField(choices=EMPLOYMENT_TR, max_length=255, blank=True, null=True)


class WorkFullViewsUser(models.Model):
    work_full = models.ForeignKey(WorkFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class WorkFullFavouritesUser(models.Model):
    work_full = models.ForeignKey(WorkFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class WorkFullUpload(models.Model):
    work_full_upload = models.ForeignKey(WorkFull, default=None, on_delete=models.CASCADE, related_name='work_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
