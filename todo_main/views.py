from django.shortcuts import render
from todo.models import Task


def home(request):
    tasks = Task.objects.filter(is_complete=False)
    completed_tasks = Task.objects.filter(is_complete=True)
    context = {
        'tasks': tasks,
        'completed_tasks': completed_tasks,
    }
    return render(request, 'home.html',context)
