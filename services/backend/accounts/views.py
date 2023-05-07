import environ
import requests
from rest_framework import serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

env = environ.Env()
environ.Env.read_env('.env')


class ActivateSerializerUser(serializers.Serializer):
    uid = serializers.CharField()
    token = serializers.CharField()


class ActivateUser(GenericAPIView):
    serializer_class = ActivateSerializerUser

    def get(self, request, uid, token, format=None):
        payload = {'uid': uid, 'token': token}
        url = f"{env('URL')}/api/v1/auth/users/activation/"
        response = requests.post(url, data=payload)
        if response.status_code == 204:
            return Response({}, response.status_code)
        else:
            return Response(response.json())
