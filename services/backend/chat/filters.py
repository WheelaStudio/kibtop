import django_filters

from chat.models import Message, Group, User


class FilterMessageAPIList(django_filters.FilterSet):
    group = django_filters.NumberFilter()
    author = django_filters.NumberFilter()
    members = django_filters.CharFilter(field_name="group__members")
    search = django_filters.CharFilter(method='search_by_content')

    def search_by_content(self, queryset, name, value):
        return queryset.filter(content__icontains=value)
    class Meta:
        model = Message
        fields = ['group', 'author']


class FilterGroup(django_filters.FilterSet):
    user = django_filters.Filter(field_name='members', lookup_expr='in')

    class Meta:
        model = Group
        fields = ('user', 'members', 'advert_id', 'category_key')