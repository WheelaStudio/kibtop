# Generated by Django 4.1.7 on 2023-05-04 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0004_avtofullupload_sort_order_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='childrenfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='electronicsfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='fashionfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='freefullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='housegardenfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='realtyfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='servicesfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
        migrations.AddField(
            model_name='workfullupload',
            name='sort_order',
            field=models.IntegerField(default=1000),
        ),
    ]
