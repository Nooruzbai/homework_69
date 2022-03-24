from django.urls import path

from api.views import add, get_csrf_token, subtract, multiply, divide

app_name = 'api'

urlpatterns = [
    path("add/", add, name="add_view"),
    path("subtract/", subtract, name="subtract_view"),
    path("multiply/", multiply, name="multiply_view"),
    path("divide/", divide, name="divide_view"),
    path("get-csrf-token/", get_csrf_token, name="get_csrf_token"),
]
