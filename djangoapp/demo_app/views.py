from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def render(request):
    return HttpResponse(request,"demo_site.html")