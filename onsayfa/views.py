from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def ornek1(request):
	return render (request, 'onsayfa/ornek1.html') 

def bim5mad(request):
	return render (request, 'onsayfa/bim5mad.html')

def darisureler(request):
	return render (request, 'onsayfa/darisureler.html')

