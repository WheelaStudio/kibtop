from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models import BaseModelFull
from .for_children import *


class ChildrenFull(BaseModelFull):
    sub_category_en = models.CharField(choices=CHILDREN_CATEGORY_EN, max_length=255, blank=True, null=True)
    sub_category_ru = models.CharField(choices=CHILDREN_CATEGORY_RU, max_length=255, blank=True, null=True)
    sub_category_tr = models.CharField(choices=CHILDREN_CATEGORY_TR, max_length=255, blank=True, null=True)


class ChildrenFullViewsUser(models.Model):
    children_full = models.ForeignKey(ChildrenFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class ChildrenFullFavouritesUser(models.Model):
    children_full = models.ForeignKey(ChildrenFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class ChildrenFullUpload(models.Model):
    children_full_upload = models.ForeignKey(ChildrenFull, default=None, on_delete=models.CASCADE, related_name='children_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
