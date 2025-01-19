from django.shortcuts import render
from django.http import JsonResponse
from .exercises.preparation import generate_times_table_question

def get_times_table(request):
    question = generate_times_table_question()
    return JsonResponse(question)

