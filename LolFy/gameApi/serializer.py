from rest_framework import serializers

from .models import ChampsLol


class ChampsLolSerializer(serializers.ModelSerializer):
    rota = serializers.SerializerMethodField('get_rotas')
    tipo = serializers.SerializerMethodField('get_tipo')
    subtipo = serializers.SerializerMethodField('get_subtipo')

    def get_rotas(self, obj):
        query = ChampsLol.objects.filter(id=obj.id).first()

        rotas = query.rotas.all()  # Obtém os objetos Rota associados

        rotas_nomes = [rota.nome for rota in rotas]

        return rotas_nomes
    def get_tipo(self, obj):
        query = ChampsLol.objects.filter(id=obj.id).first()
        tipo_completo = query.get_tipo_display()  # Obtém o nome completo do tipo

        return tipo_completo
    
    def get_subtipo(self, obj):
        query = ChampsLol.objects.filter(id=obj.id).first()
        subtipo_completo = query.get_subtipo_display()  # Obtém o nome completo do tipo

        return subtipo_completo

    class Meta:
        model = ChampsLol
        fields = '__all__'

class QuestionsSerializer(serializers.ModelSerializer):
    rota = serializers.SerializerMethodField('get_rotas')

    def get_rotas(self, obj):
        query = ChampsLol.objects.filter(id=obj.id).first()

        rotas = query.rotas.all()  # Obtém os objetos Rota associados

        rotas_nomes = [rota.nome for rota in rotas]

        return rotas_nomes
        

    class Meta:
        model = ChampsLol
        fields = [
            "rota",
            "tipo",
            "subtipo",
            "preferencia_1",
            "preferencia_2",
            "preferencia_3"
        ]

