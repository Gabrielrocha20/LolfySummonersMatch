import os

from django.conf import settings
from django.db import models
from django.utils.text import slugify
from PIL import Image


class Rota(models.Model):
    nome = models.CharField(max_length=20)

    def __str__(self):
        return self.nome

class ChampsLol(models.Model):
    nome = models.CharField(max_length=255)
    rotas = models.ManyToManyField(Rota)
    TIPO_CHOICE = [
        ('MAGO', 'Mago'),
        ('ASS', 'Assassino'),
        ('LUT', 'Lutador'),
        ('ADC', 'Atirador'),
        ('SUP', 'Suporte'),
        ('TANQ', 'Tanque'),
    ]
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICE, null=True)
    SUBTIPO_CHOICE = [
        ('MAGO', 'Mago'),
        ('ASS', 'Assassino'),
        ('LUT', 'Lutador'),
        ('ADC', 'Atirador'),
        ('SUP', 'Suporte'),
        ('TANQ', 'Tanque'),
    ]
    subtipo = models.CharField(max_length=20, choices=SUBTIPO_CHOICE, null=True)
    PREFERENCIA_1_CHOICE = [
        ('SB', 'SnowBall'),
        ('TF', 'TeamFight'),
        ('SP', 'SplitPush'),
    ]
    preferencia_1 = models.CharField(max_length=20, choices=PREFERENCIA_1_CHOICE, null=True)

    PREFERENCIA_2_CHOICE = [
        ('Agr', 'Agressivo'),
        ('Pas', 'Passivo'),
        ('Tat', 'Tatico'),
    ]
    preferencia_2 = models.CharField(max_length=20, choices=PREFERENCIA_2_CHOICE, null=True)

    PREFERENCIA_3_CHOICE = [
        ('EARLY', 'Early Game'),
        ('MID', 'Mid Game'),
        ('END', 'End Game'),
    ]
    preferencia_3 = models.CharField(max_length=20, choices=PREFERENCIA_3_CHOICE, null=True)

    passiva = models.TextField()
    habilidade_1 = models.TextField()
    habilidade_2 = models.TextField()
    habilidade_3 = models.TextField()
    habilidade_4 = models.TextField()
    DIF_CHOICES = (
        (1, 'Facil'),
        (2, 'Normal'),
        (3, 'Dificil'),
    )
    dificuldade = models.IntegerField(choices=DIF_CHOICES)

    imagem = models.CharField(max_length=1000)
    descricao = models.TextField(max_length=10000, null=True)

    def __str__(self):
        return self.nome