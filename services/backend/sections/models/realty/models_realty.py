from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models.realty.for_realty import (
    REALTY_CATEGORY_EN, REALTY_CATEGORY_RU, REALTY_CATEGORY_TR, ALL_OLD_NEW_EN,
    ALL_OLD_NEW_RU, ALL_OLD_NEW_TR, NUMBER_ROOMS_EN, NUMBER_ROOMS_RU, NUMBER_ROOMS_TR
)

from sections.models.base_models_full import BaseModelFull


class RealtyFull(BaseModelFull):
    sub_category_en = models.CharField(choices=REALTY_CATEGORY_EN, max_length=255, blank=True, null=True, default=None)
    sub_category_ru = models.CharField(choices=REALTY_CATEGORY_RU, max_length=255, blank=True, null=True, default=None)
    sub_category_tr = models.CharField(choices=REALTY_CATEGORY_TR, max_length=255, blank=True, null=True, default=None)
    all_old_new_en = models.CharField(choices=ALL_OLD_NEW_EN, max_length=255, blank=True, null=True, default=None)
    all_old_new_ru = models.CharField(choices=ALL_OLD_NEW_RU, max_length=255, blank=True, null=True, default=None)
    all_old_new_tr = models.CharField(choices=ALL_OLD_NEW_TR, max_length=255, blank=True, null=True, default=None)
    number_rooms_en = models.CharField(choices=NUMBER_ROOMS_EN, max_length=255, blank=True, null=True, default=None)
    number_rooms_ru = models.CharField(choices=NUMBER_ROOMS_RU, max_length=255, blank=True, null=True, default=None)
    number_rooms_tr = models.CharField(choices=NUMBER_ROOMS_TR, max_length=255, blank=True, null=True, default=None)
    type_sell = models.BooleanField(blank=True, null=True, default=None)
    square = models.FloatField(blank=True, null=True, default=None)


class RealtyFullViewsUser(models.Model):
    realty_full = models.ForeignKey(RealtyFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class RealtyFullFavouritesUser(models.Model):
    realty_full = models.ForeignKey(RealtyFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class RealtyFullUpload(models.Model):
    realty_full_upload = models.ForeignKey(RealtyFull, default=None, on_delete=models.CASCADE, related_name='realty_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
