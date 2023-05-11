from django.urls import path

from .views import ChampsLolAPIView, QuestionsListView

urlpatterns = [
     path('champs/', ChampsLolAPIView.as_view(), name='champs_list'),
     path('questions/', QuestionsListView.as_view(), name='questions'),
]