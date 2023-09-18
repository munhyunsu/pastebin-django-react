from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from pastes.models import Paste
from pastes.serializers import PasteSerializer

# Create your views here.
@csrf_exempt
def paste_list(request):
    if request.method == 'GET':
        pastes = Paste.objects.all()
        serializer = PasteSerializer(pastes, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PasteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def paste_detail(request, pk):
    try:
        paste = Paste.objects.get(pk=pk)
    except Paste.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PasteSerializer(paste)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PasteSerializer(paste, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        paste.delete()
        return HttpResponse(status=204)

