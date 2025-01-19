from django.urls import path
from .views import get_times_table

urlpatterns = [
    path('times-table/', get_times_table, name='get_times_table'),
]
