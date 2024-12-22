from django.urls import reverse
from django.test import Client
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'matelandia.settings')


def test_homepage_status_code():
    client = Client()
    response = client.get(reverse('home'))  # 'home' será el nombre de la URL que configuraremos.
    assert response.status_code == 200
