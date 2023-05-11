# Generated by Django 4.2.1 on 2023-05-06 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Rota',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='ChampsLol',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
                ('tipo', models.CharField(choices=[('MAGO', 'Mago'), ('ASS', 'Assassino'), ('LUT', 'Lutador'), ('ADC', 'Atirador'), ('SUP', 'Suporte'), ('TANQ', 'Tanque')], max_length=20, null=True)),
                ('subtipo', models.CharField(choices=[('MAGO', 'Mago'), ('ASS', 'Assassino'), ('LUT', 'Lutador'), ('ADC', 'Atirador'), ('SUP', 'Suporte'), ('TANQ', 'Tanque')], max_length=20, null=True)),
                ('preferencia_1', models.CharField(choices=[('SB', 'SnowBall'), ('TF', 'TeamFight'), ('SP', 'SplitPush')], max_length=20, null=True)),
                ('preferencia_2', models.CharField(choices=[('Agr', 'Agressivo'), ('Pas', 'Passivo'), ('Tat', 'Tatico')], max_length=20, null=True)),
                ('preferencia_3', models.CharField(choices=[('EARLY', 'Early Game'), ('MID', 'Mid Game'), ('END', 'End Game')], max_length=20, null=True)),
                ('passiva', models.TextField()),
                ('habilidade_1', models.TextField()),
                ('habilidade_2', models.TextField()),
                ('habilidade_3', models.TextField()),
                ('habilidade_4', models.TextField()),
                ('dificuldade', models.IntegerField(choices=[(1, 'Facil'), (2, 'Normal'), (3, 'Dificil')])),
                ('imagem', models.CharField(max_length=1000)),
                ('descricao', models.TextField(max_length=10000, null=True)),
                ('rotas', models.ManyToManyField(to='gameApi.rota')),
            ],
        ),
    ]
