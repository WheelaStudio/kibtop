# Generated by Django 4.1.7 on 2023-05-13 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0006_stock_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='link',
            field=models.URLField(max_length=255),
        ),
    ]
