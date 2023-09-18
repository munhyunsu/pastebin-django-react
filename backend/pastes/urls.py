from django.urls import path
from pastes import views

urlpatterns = [
    path('pastebin/api/v1/pastes/', views.paste_list),
    path('pastebin/api/v1/pastes/<int:pk>/', views.paste_detail),
]
