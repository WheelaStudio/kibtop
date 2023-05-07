import asyncio
import json
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from asgiref.sync import async_to_sync, sync_to_async
from django.contrib.auth.models import User
from django.db.models import Q
from djoser.serializers import UserSerializer

from accounts.models import CustomUser
from .models import Event, Message, Group, ConnectedUsers
from channels.layers import channel_layers
from channels.db import database_sync_to_async

from .serializer import ConnectedUsersSerializer, GroupSerializer
from .utils import get_involved_users

'''
class JoinAndLeave(WebsocketConsumer):
    def connect(self):
        print("server says connected")
        self.accept()
        

    def receive(self, text_data=None, bytes_data=None):
        print("server says client message received: ", text_data)
        self.send("Server sends Welcome")

    def disconnect(self, code):
        print("server says disconnected")
'''




class GroupConsumer(WebsocketConsumer):
    def connect(self):
        # Проверка валидности юзера
        if isinstance(self.scope['user'], str) and self.scope['user'] == 'denied':
            return self.close()

        # Получение юзера и его id
        user = UserSerializer(self.scope['user']).data
        self.user_id = str(user['id'])

        # Внесение юзера в список "подключенных"
        connected_user = ConnectedUsers.objects.get_or_create(user=self.scope['user'])

        # Добавление группы юзера
        async_to_sync(self.channel_layer.group_add)(
            self.user_id, self.channel_name
        )

        # Получение всех юзеров, которые состоят в группе с подключившемся и рассылка уведомления
        involved_users = get_involved_users(self.user_id)
        for involved_user_id in involved_users:
            async_to_sync(self.channel_layer.group_send)(str(involved_user_id), {
                "type": "connected_changes",
                "message": self.user_id
            })


        self.accept()

    def disconnect(self, code):
        try:
            ConnectedUsers.objects.get(user=self.scope['user']).delete()
        except:
            pass

        try:
            # Получение всех юзеров, которые состоят в группе с вышедшим и рассылка уведомления
            involved_users = get_involved_users(self.user_id)
            for involved_user_id in involved_users:
                async_to_sync(self.channel_layer.group_send)(str(involved_user_id), {
                    "type": "connected_changes",
                    "message": self.user_id
                })

            self.channel_layer.group_discard(self.user_id, self.channel_name)
        except:
            pass

    def new_message(self, event):
        message = event["message"]

        returned_data = {
            "type": "new_message",
            "group_id": message,

        }
        self.send(json.dumps(
            returned_data
        ))

    def connected_changes(self, event):
        message = event["message"]

        returned_data = {
            "type": "connected_changes",
            "user": message,

        }
        self.send(json.dumps(
            returned_data
        ))



