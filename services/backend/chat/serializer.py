from djoser.serializers import UserSerializer
from rest_framework import serializers

from accounts.serializer import UserAPISerializer
from chat.models import Group, Message, Event, ConnectedUsers
from sections.models import (
    AvtoFull,
    ChildrenFull,
    ElectronicsFull,
    FashionFull,
    HouseGardenFull,
    RealtyFull,
    ServicesFull,
    WorkFull,
    FreeFull
)
from settings.settings import env

AdvertModels = {
            'avto': AvtoFull,
            'children': ChildrenFull,
            'electronics': ElectronicsFull,
            'fashion': FashionFull,
            'house_garden': HouseGardenFull,
            'realty': RealtyFull,
            'services': ServicesFull,
            'work': WorkFull,
            'free': FreeFull
        }


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'uuid', 'members', 'category_key', 'advert_id')


class GroupListSerializer(GroupSerializer):
    members = UserAPISerializer(many=True, )
    messages = MessageSerializer(read_only=True, many=True)

    class Meta(GroupSerializer.Meta):
        model = Group
        fields = ('id', 'uuid', 'members', 'category_key', 'advert_id', 'messages')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        messages = representation['messages']

        unread_messages = [msg for msg in messages if not msg['is_read']]
        unread = len(unread_messages)
        representation['unread'] = unread


        representation['messages'] = sorted(messages, key=lambda msg: msg['timestamp'], reverse=True)[:3]

        return representation


class GroupDetailSerializer(serializers.ModelSerializer):
    members = UserAPISerializer(read_only=True, many=True, )
    messages = MessageSerializer(read_only=True, many=True)

    class Meta:
        model = Group
        fields = ('id', 'uuid', 'members', 'category_key', 'advert_id', 'messages')

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        category_key = representation['category_key']
        advert_id = representation['advert_id']

        try:
             advert = AdvertModels[category_key].objects.filter(id=advert_id).values()[0]
             advert['upload'] = f"{env('URL')}/media/{advert['upload']}"
             representation['advert'] = advert
        except:
            representation['advert'] = None

        unread_messages = [msg for msg in representation['messages'] if not msg['is_read']]
        unread = len(unread_messages)
        representation['unread'] = unread

        return representation




class GroupUsersSerializer(GroupSerializer):

    class Meta(GroupSerializer.Meta):
        fields = ('id', 'uuid', 'members', 'category_key', 'advert_id')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class ConnectedUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectedUsers
        field = '__all__'



class MessageSearchSerializer(serializers.ModelSerializer):
    author = UserAPISerializer(read_only=True)
    group = GroupSerializer(read_only=True)

    class Meta:
        model = Message
        fields = ('id', 'timestamp', 'content', 'is_read', 'author', 'group')
