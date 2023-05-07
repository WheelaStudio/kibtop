from djoser.serializers import UserSerializer, UserCreateSerializer, UserCreatePasswordRetypeSerializer
from rest_framework import serializers


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = (
            'username', 'email', 'first_name', 'addres', 'upload_user', 'password',
        )


class UserAPISerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = (
            'id', 'email', 'phone', 'first_name', 'addres', 'upload_user', 'deals', 'is_superuser'
        )
        read_only_fields = ('is_superuser',)

class UserAPICreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        fields = (
            'username', 'email', 'first_name', 'addres', 'upload_user', 'password',
        )

