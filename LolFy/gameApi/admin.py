from django.contrib import admin

from .models import ChampsLol, Rota


class RotaAdmin(admin.ModelAdmin):
    list_display = ["nome"]
    
admin.site.register(Rota, RotaAdmin)

class ChampsLolAdmin(admin.ModelAdmin):
    list_display = ["nome", "get_rotas", "tipo", "subtipo","dificuldade", "preferencia_1", "preferencia_2", "preferencia_3"]
    
    def get_rotas(self, obj):
        return ", ".join([rota.nome for rota in obj.rotas.all()])
    get_rotas.short_description = 'Rotas'
admin.site.register(ChampsLol, ChampsLolAdmin)

# Register your models here.
