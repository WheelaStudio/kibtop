import json
import environ
import requests
from django.http import JsonResponse
from rest_framework.response import Response

from accounts.models import CustomUser
import random
from rest_framework.exceptions import AuthenticationFailed

env = environ.Env()
environ.Env.read_env('.env')


def generate_username(name):
    username = "".join(name.split(' ')).lower()
    if not CustomUser.objects.filter(username=username).exists():
        return username
    else:
        random_username = username + str(random.randint(0, 1000))
        return generate_username(random_username)


def register_social_user(provider, user_id, email, name, last_name):
    filtered_user_by_email = CustomUser.objects.filter(email=email)

    if filtered_user_by_email.exists():

        if provider == filtered_user_by_email[0].auth_provider:
            payload = {'username': name, 'password': env('SOCIAL_SECRET')}

            response = requests.post(f'{env("URL")}/v1/auth/jwt/create/', data=payload).json()


            return {"refresh": response['refresh'], "access": response['access']}
        else:
            raise AuthenticationFailed(
                detail='Please continue your login using ' + filtered_user_by_email[0].auth_provider)

    else:
        user = {
            'username': generate_username(name),
            'email': email,
            'first_name': last_name,
            'password': env('SOCIAL_SECRET'),
            'auth_provider': provider,
        }
        user = CustomUser.objects.create_user_activate(**user)
        user.save()
        payload = {'username': name, 'password': env('SOCIAL_SECRET')}
        response = requests.post(f'{env("URL")}/v1/auth/jwt/create/', data=payload).json()

        return {"refresh": response['refresh'], "access": response['access']}
