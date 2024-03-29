# Generated by Django 4.1.7 on 2023-04-08 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0002_avtofull_lifts_avtofull_top_avtofull_vip_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='avtofull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='childrenfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='electronicsfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='fashionfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='freefull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='housegardenfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='realtyfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='servicesfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
        migrations.AddField(
            model_name='workfull',
            name='pay_day',
            field=models.DateTimeField(default=None, null=True, verbose_name='Дата оплаты'),
        ),
    ]
