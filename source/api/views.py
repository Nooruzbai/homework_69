import json

from django.http import JsonResponse, HttpResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def get_csrf_token(request):
    if request.method == "GET":
        return JsonResponse({'success': 'success'})
    return HttpResponseNotAllowed(['GET'])


def add(request, *args, **kwargs):
    response_data = {
        'method': request.method
    }
    request_body_data = json.loads(request.body)
    if request_body_data['num1'].isdigit() and request_body_data['num2'].isdigit():
        result = int(request_body_data['num1']) + int(request_body_data['num2'])
        response_data['answer'] = result
        return JsonResponse(response_data)
    else:
        response = JsonResponse({"error": "Bad Request !!!"})
        response.status_code = 400
        return response


def subtract(request,  *args, **kwargs):
    response_data = {
        'method': request.method
    }
    request_body_data = json.loads(request.body)
    if request_body_data['num1'].isdigit() and request_body_data['num2'].isdigit():
        result = int(request_body_data['num1']) - int(request_body_data['num2'])
        response_data['answer'] = result
        return JsonResponse(response_data)
    else:
        response = JsonResponse({"error": "Bad Request"})
        response.status_code = 400
        return response


def multiply(request,  *args, **kwargs):
    response_data = {
        'method': request.method
    }
    request_body_data = json.loads(request.body)
    if request_body_data['num1'].isdigit() and request_body_data['num2'].isdigit():
        result = int(request_body_data['num1']) * int(request_body_data['num2'])
        response_data['answer'] = result
        return JsonResponse(response_data)
    else:
        response = JsonResponse({"error": "Bad Request"})
        response.status_code = 400
        return response


def divide(request,  *args, **kwargs):
    response_data = {
        'method': request.method
    }
    request_body_data = json.loads(request.body)
    if request_body_data['num1'].isdigit() and request_body_data['num2'].isdigit():
        if int(request_body_data['num1']) != 0 and int(request_body_data['num2']) != 0:
            result = int(request_body_data['num1']) / int(request_body_data['num2'])
            response_data['answer'] = result
            return JsonResponse(response_data)
        else:
            response = JsonResponse({"error": "No Division By Zero"})
            response.status_code = 400
            return response
    else:
        response = JsonResponse({"error": "Bad Request"})
        response.status_code = 400
        return response
