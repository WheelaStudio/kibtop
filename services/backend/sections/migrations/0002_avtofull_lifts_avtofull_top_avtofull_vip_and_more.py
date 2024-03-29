# Generated by Django 4.1.7 on 2023-04-07 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='avtofull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='avtofull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='avtofull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='childrenfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='childrenfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='childrenfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='electronicsfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='electronicsfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='electronicsfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='fashionfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='fashionfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='fashionfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='freefull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='freefull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='freefull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='housegardenfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='housegardenfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='housegardenfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='realtyfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='realtyfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='realtyfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='servicesfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='servicesfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='servicesfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='workfull',
            name='lifts',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='workfull',
            name='top',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='workfull',
            name='vip',
            field=models.IntegerField(default=0),
        ),
    ]
