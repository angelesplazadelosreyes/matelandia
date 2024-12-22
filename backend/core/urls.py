from django.urls import path
from .views import test_view

urlpatterns = [
    path('test/', test_view, name='test'),  # Esta URL conecta con la vista test_view
]
