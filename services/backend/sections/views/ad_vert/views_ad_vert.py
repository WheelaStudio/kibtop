import json

from cloudipsp.helpers import is_approved
from django.http import HttpResponseRedirect, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, status, permissions
from rest_framework.views import APIView

from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from cloudipsp import Api, Checkout

from sections.models import AvtoFull, ChildrenFull, ElectronicsFull, FashionFull, HouseGardenFull, RealtyFull, ServicesFull, WorkFull, FreeFull

import environ

env = environ.Env()
environ.Env.read_env('.env')


class AdVertApiVIew(APIView):
    """
        Api to save payment data.
    """
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]

    @csrf_exempt
    def post(self, request, format=None):
        """
        Check if payment approved and save pay_date
        """

        AdvertModels = {
            'avto': AvtoFull,
            'children': ChildrenFull,
            'electronics': ElectronicsFull,
            'fashion': FashionFull,
            'housegarden': HouseGardenFull,
            'realty': RealtyFull,
            'services': ServicesFull,
            'work': WorkFull,
            'free': FreeFull
        }
        json_data = json.loads(request.body)

        try:
            if (json_data):
                if (is_approved(json_data, env("FONDY_SECRET_KEY"), '')):
                    if ('order_id' in json_data):
                        order_id = json_data['order_id'].split('_')
                        model_name = order_id[0]
                        model_id = order_id[1]
                        advert = AdvertModels[model_name].objects.filter(id=model_id)[0]
                        advert.set_pay_day()
                        return Response(status=status.HTTP_200_OK)
        except Exception as ex:
            with open(file='advert_error.txt', mode='a') as file:
                file.write("Error" + str(ex))
                file.write('\n')
        return Response(status=status.HTTP_400_BAD_REQUEST)
