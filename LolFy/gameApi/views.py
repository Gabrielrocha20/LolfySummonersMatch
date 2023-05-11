from django.db.models import Q
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ChampsLol
from .serializer import ChampsLolSerializer, QuestionsSerializer


class ChampsLolAPIView(generics.ListAPIView):
    queryset = ChampsLol.objects.all()
    serializer_class = ChampsLolSerializer

class QuestionsListView(generics.ListAPIView):
    
    serializer_class = ChampsLolSerializer
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        queryset = ChampsLol.objects.all()
        rota = self.request.query_params.get('rota')
        tipo = self.request.query_params.get('tipo')
        subtipo = self.request.query_params.get('subtipo')
        preferencia_1 = self.request.query_params.get('preferencia_1')
        preferencia_2 = self.request.query_params.get('preferencia_2')
        preferencia_3 = self.request.query_params.get('preferencia_3')

        # Serializa os dados filtrados
        serializer = QuestionsSerializer(queryset, many=True)

        # Retorna os dados filtrados como resposta
        if rota:
            queryset = queryset.filter(rotas__nome__icontains=rota)
        if (tipo) and (subtipo):
            queryset = queryset.filter(Q(tipo=tipo, subtipo=subtipo) | Q(tipo=subtipo, subtipo=tipo))
        if preferencia_1:
            queryset = queryset.filter(preferencia_1=preferencia_1)
        if preferencia_2:
            queryset = queryset.filter(preferencia_2=preferencia_2)
        if preferencia_3:
            queryset = queryset.filter(preferencia_3=preferencia_3)

        return queryset