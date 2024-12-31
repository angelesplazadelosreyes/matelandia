from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse

def home_view(request):
    return HttpResponse('Welcome to Matelandia!')


def test_view(request):
    return JsonResponse({"message": "Hello from Matelandia Backend!\nÁngeles"})

# Este es un comentario de prueba para verificar la recarga automática 2
