# Generated by Django 3.1.4 on 2022-06-02 10:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('git_real', '0006_auto_20210817_1247'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pullrequestreview',
            name='pull_request',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='git_real.pullrequest'),
        ),
    ]