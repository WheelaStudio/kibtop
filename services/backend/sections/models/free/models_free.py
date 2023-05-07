from django.db import models

from accounts.models import CustomUser
from ..base_models_full import BaseModelFull
from django.utils import timezone


class FreeFull(BaseModelFull):
    ...


class FreeFullViewsUser(models.Model):
    free_full = models.ForeignKey(FreeFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class FreeFullFavouritesUser(models.Model):
    free_full = models.ForeignKey(FreeFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)


class FreeFullUpload(models.Model):
    free_full_upload = models.ForeignKey(FreeFull, default=None, on_delete=models.CASCADE,
                                         related_name='free_full_upload')
    uploads = models.FileField(upload_to='')
    sort_order = models.IntegerField(default=1000)
