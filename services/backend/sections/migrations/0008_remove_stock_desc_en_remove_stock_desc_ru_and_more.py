# Generated by Django 4.1.7 on 2023-05-31 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0007_alter_stock_link'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stock',
            name='desc_en',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='desc_ru',
        ),
        migrations.RemoveField(
            model_name='stock',
            name='desc_tr',
        ),
        migrations.AddField(
            model_name='stock',
            name='image',
            field=models.FileField(default=1, upload_to='stock/', verbose_name='Изображение'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='stock',
            name='image_mobile',
            field=models.FileField(default=1, upload_to='stock/', verbose_name='Мобильное изображение RU'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='stock',
            name='img_en',
            field=models.FileField(null=True, upload_to='stock/'),
        ),
        migrations.AddField(
            model_name='stock',
            name='img_ru',
            field=models.FileField(null=True, upload_to='stock/'),
        ),
        migrations.AddField(
            model_name='stock',
            name='img_tr',
            field=models.FileField(null=True, upload_to='stock/'),
        ),
    ]
