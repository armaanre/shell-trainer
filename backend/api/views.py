from django.shortcuts import render

import json
from django.forms.models import model_to_dict
from django.http import JsonResponse



from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(["GET"])
def api_home(request, *args, **kwargs):
    """
    DRF API View
    """
    
    data = {"message":"healthy"}    
    return JsonResponse(data)