from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(["GET"])

# Create your views here
def getRoutes(request):
    return Response("Hello")

@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def getProduct(request,pk):
    for product in products:
        if product['_id'] ==pk:
            return Response(product)
