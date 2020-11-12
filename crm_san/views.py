from django.shortcuts import render

def index(request):
    return render(request, 'dashboard.html', {

    })

def donantes(request):
    return render(request, 'donantes.html', {

    })

def donaciones(request):
    return render(request, 'donaciones.html', {

    })

def circulos(request):
    return render(request, 'circulos.html', {

    })

def administracion(request):
    return render(request, 'administracion.html', {

    })

def alianzas(request):
    return render(request, 'alianzas.html', {

    })