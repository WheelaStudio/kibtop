from itertools import chain

from rest_framework import generics, pagination
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
import requests
import ast
from sections.serializer import FullFavouritesUserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from settings.settings import BASE_URL

from sections.models import (
    FreeFullFavouritesUser,
    AvtoFullFavouritesUser,
    ChildrenFullFavouritesUser,
    ElectronicsFullFavouritesUser,
    FashionFullFavouritesUser,
    HouseGardenFullFavouritesUser,
    RealtyFullFavouritesUser,
    ServicesFullFavouritesUser,
    WorkFullFavouritesUser
)

class FullFavouritesUser(generics.ListAPIView):
    serializer_class = FullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = AvtoFullFavouritesUser



    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        try:
            user = int(query['user'])
        except:
            user = False


        res = {
            'avto': list(chain(AvtoFullFavouritesUser.objects.filter(user=user).values())),
            'children': list(chain(ChildrenFullFavouritesUser.objects.filter(user=user).values())),
            'electronics': list(chain(ElectronicsFullFavouritesUser.objects.filter(user=user).values())),
            'fashion': list(chain(FashionFullFavouritesUser.objects.filter(user=user).values())),
            'house_garden': list(chain(HouseGardenFullFavouritesUser.objects.filter(user=user).values())),
            'realty': list(chain(RealtyFullFavouritesUser.objects.filter(user=user).values())),
            'services': list(chain(ServicesFullFavouritesUser.objects.filter(user=user).values())),
            'work': list(chain(WorkFullFavouritesUser.objects.filter(user=user).values())),
            'free': list(chain(FreeFullFavouritesUser.objects.filter(user=user).values())),
        }

        # res = [
        #     *list(chain(AvtoFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(ChildrenFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(ElectronicsFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(FashionFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(HouseGardenFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(RealtyFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(ServicesFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(WorkFullFavouritesUser.objects.filter(user=user).values())),
        #     *list(chain(FreeFullFavouritesUser.objects.filter(user=user).values())),
        # ]
        return Response(res, status=HTTP_200_OK)