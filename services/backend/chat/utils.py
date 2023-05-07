import datetime
import time
from urllib.parse import parse_qs

from channels.db import database_sync_to_async
from django.contrib.auth.models import User, AnonymousUser
from django.contrib.sessions.models import Session
from django.utils import timezone
from django.db.models import QuerySet

from accounts.models import CustomUser
from settings import settings
from .models import Group
import jwt


def get_involved_users(user_id):
    involved_groups = Group.objects.filter(members=user_id).all().prefetch_related('members')
    involved_users = []

    for group in involved_groups:
        for member in group.members.values():
            member_id = int(member['id'])
            user = int(user_id)

            if (member_id != user) and (member_id not in involved_users):
                involved_users.append(member_id)

    return involved_users


def get_online_user(group:Group) -> QuerySet:
    '''An Helper function to get a list of logged in users from non expired session'''
    sessions = Session.objects.filter(expire_date__gte = timezone.now())
    uid_list = []

    for session in sessions:
        data = session.get_decoded()
        uid_list.append(data.get("_auth_user_id", None))

    return group.members.filter(id__in = uid_list)


@database_sync_to_async
def get_user(user_id):
    try:
        return CustomUser.objects.get(id=user_id)
    except User.DoesNotExist:
        return 'denied'


class AuthJwtMiddleware:
    def __init__(self, app):
        # Store the ASGI application we were passed
        self.app = app

    async def __call__(self, scope, receive, send):
        # Look up user from query string (you should also do things like
        # checking if it is a valid user ID, or if scope["user"] is already
        # populated).

        # try:
            try:
                token = parse_qs(scope["query_string"].decode("utf8"))["token"][0]
                token_data = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])

                print('шаг 3')
                scope['user'] = await get_user(int(token_data['user_id']))
            except:
                scope['user'] = 'denied'
        # except:
        #     print('Ошибка')
        #     scope['user'] = 'denied'


            return await self.app(scope, receive, send)



