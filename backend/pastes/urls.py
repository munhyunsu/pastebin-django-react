from django.urls import path
from pastes import views

urlpatterns = [
    path('pastes/', views.paste_list),
    path('pastes/<int:pk>/', views.paste_detail),
]
