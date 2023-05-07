from pyexpat import model
from tokenize import group
from django.db import models
from django.contrib.auth import get_user_model
from uuid import uuid4

from django.urls import reverse

# Create your models here.
from sections.view_dicts.category_dicts import get_category_key_choices

User = get_user_model()


class Group(models.Model):
    '''
    The group model where multiple users can share and discuss ideas.
    '''
    uuid = models.UUIDField(default=uuid4, editable=False)
    members = models.ManyToManyField(User)
    category_key = models.CharField(max_length=100, choices=get_category_key_choices())
    advert_id = models.IntegerField()

    def __str__(self) -> str:
        return f"Group -{self.uuid}"

    def get_absolute_url(self):
        return reverse("group", args=[str(self.uuid)])

    def add_user_to_group(self, user: User):
        '''A helper function to add a user to a group and create and event object'''
        self.members.add(user)
        self.event_set.create(type="Join", user=user)
        self.save()

    def remove_user_from_group(self, user: User):
        '''An helper function to remove user from group members when they leave the group
         and create an event for the timestamp the user left the group'''
        self.members.remove(user)
        self.event_set.create(type="Left", user=user)
        self.save()

MESSAGES_TYPES = (
    ('text', 'text'),
    ('img', 'img'),
    ('video', 'video'),
)

class Message(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField(null=True, blank=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name="messages", null=True)
    file = models.FileField(upload_to='', null=True, blank=True)
    is_read = models.BooleanField(default=False)
    type = models.CharField(null=True, blank=False, choices=MESSAGES_TYPES, max_length=5)

    def __str__(self) -> str:
        date = self.timestamp.date()
        time = self.timestamp.time()
        return f"{self.author}:- {self.content} @{date} {time.hour}:{time.minute}"


class Event(models.Model):
    '''
    An event model that holds all event related to a group like when a user join the group or left.
    '''
    CHOICES = [
        ("Join", "join"),
        ("Left", "left")
    ]
    type = models.CharField(choices=CHOICES, max_length=10)
    description = models.CharField(help_text="A description of the event that occured", max_length=50, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)

    def save(self, *args, **kwargs):
        self.description = f"{self.user} {self.type} the {self.group.name} group"
        super().save(*args, kwargs)

    def __str__(self) -> str:
        return f"{self.description}"


class ConnectedUsers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)



