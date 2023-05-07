from .stock.views_stock import StockAPIList, StockAPIUpdateDestroy
from .category.views_category import CategoryFullAPIList
from .new.new_views import NewAPIList
from .recommend.views_recommend import RecommendFullAPIList
from .my_ads.my_ads_views import MyAdsAPIList
from .user_archive.user_archive_views import UserArchiveAPIList

from .realty.views_realty import (
    RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy, RealtyFullViewsUserAPIList,
    RealtyFullFavouritesUserAPIList, RealtyFullFavouritesUserAPIUpdateDestroy, RealtyFullArchiveUserAPIDestroy,
    RealtyFullUploadsAPIUpdateList, RealtyFullUploadsAPIList,
)
from .free.views_house_free import (
    FreeFullAPIUpdateDestroy, FreeFullAPIListCreate, FreeFullAPIList,
    FreeFullViewsUserAPIList, FreeFullFavouritesUserAPIList,
    FreeFullFavouritesUserAPIUpdateDestroy, FreeFullArchiveUserAPIDestroy,
    FreeFullUploadsAPIList, FreeFullUploadsAPIUpdateList
)
from .views_base import (
    CityAPIList, MoneyAPIList, MoneyAPIUpdateDestroy
)
from .avto.views_avto import (
    AvtoFullAPIList, AvtoFullAPIListCreate, AvtoFullAPIUpdateDestroy, AvtoFullViewsUserAPIList,
    AvtoFullFavouritesUserAPIList, AvtoFullFavouritesUserAPIUpdateDestroy, AvtoFullArchiveUserAPIDestroy,
    AvtoFullUploadsAPIList, AvtoFullUploadsAPIUpdateList
)
from .work.views_work import (
    WorkFullAPIList, WorkFullAPIListCreate, WorkFullAPIUpdateDestroy, WorkFullViewsUserAPIList,
    WorkFullFavouritesUserAPIList, WorkFullFavouritesUserAPIUpdateDestroy, WorkFullArchiveUserAPIDestroy,
    WorkFullUploadsAPIUpdateList, WorkFullUploadsAPIList
)
from .services.views_services import (
    ServicesFullAPIList, ServicesFullAPIListCreate, ServicesFullAPIUpdateDestroy, ServicesFullViewsUserAPIList,
    ServicesFullFavouritesUserAPIList, ServicesFullFavouritesUserAPIUpdateDestroy, ServicesFullArchiveUserAPIDestroy,
    ServicesFullUploadsAPIUpdateList, ServicesFullUploadsAPIList,
)
from .children.views_children import (
    ChildrenFullAPIList, ChildrenFullAPIListCreate, ChildrenFullAPIUpdateDestroy,
    ChildrenFullViewsUserAPIList, ChildrenFullFavouritesUserAPIList, ChildrenFullFavouritesUserAPIUpdateDestroy,
    ChildrenFullArchiveUserAPIDestroy, ChildrenFullUploadsAPIUpdateList, ChildrenFullUploadsAPIList,
)
from .fashion.views_fashion import (
    FashionFullAPIList, FashionFullAPIListCreate, FashionFullAPIUpdateDestroy, FashionFullViewsUserAPIList,
    FashionFullFavouritesUserAPIList, FashionFullFavouritesUserAPIUpdateDestroy, FashionFullArchiveUserAPIDestroy,
    FashionFullUploadsAPIUpdateList, FashionFullUploadsAPIList,
)
from .electronics.views_electronics import (
    ElectronicsFullAPIList, ElectronicsFullAPIListCreate,
    ElectronicsFullAPIUpdateDestroy, ElectronicsFullViewsUserAPIList, ElectronicsFullFavouritesUserAPIList,
    ElectronicsFullFavouritesUserAPIUpdateDestroy, ElectronicsFullArchiveUserAPIDestroy,
    ElectronicsFullUploadsAPIUpdateList, ElectronicsFullUploadsAPIList,
)
from .house_garden.views_house_garden import (
    HouseGardenFullAPIUpdateDestroy, HouseGardenFullAPIList,
    HouseGardenFullAPIListCreate, HouseGardenFullViewsUserAPIList, HouseGardenFullFavouritesUserAPIList,
    HouseGardenFullFavouritesUserAPIUpdateDestroy, HouseGardenFullArchiveUserAPIDestroy,
    HouseGardenFullUploadsAPIUpdateList, HouseGardenFullUploadsAPIList,
)

from .favourites.views_favourites import FullFavouritesUser

__all__ = [
    'RealtyFullAPIList',
    'RealtyFullAPIListCreate',
    'RealtyFullAPIUpdateDestroy',
    'RealtyFullViewsUserAPIList',
    'RealtyFullFavouritesUserAPIList',
    'RealtyFullFavouritesUserAPIUpdateDestroy',
    'RealtyFullArchiveUserAPIDestroy',
    'RealtyFullUploadsAPIList',
    'RealtyFullUploadsAPIUpdateList',

    'FreeFullAPIUpdateDestroy',
    'FreeFullAPIListCreate',
    'FreeFullAPIList',
    'FreeFullViewsUserAPIList',
    'FreeFullFavouritesUserAPIList',
    'FreeFullFavouritesUserAPIUpdateDestroy',
    'FreeFullArchiveUserAPIDestroy',
    'FreeFullUploadsAPIList',
    'FreeFullUploadsAPIUpdateList',

    'StockAPIList',
    'StockAPIUpdateDestroy',

    'FullFavouritesUser',

    'CategoryFullAPIList',

    'NewAPIList',

    'CityAPIList',

    'MoneyAPIList',
    'MoneyAPIUpdateDestroy',

    'RecommendFullAPIList',
    'MyAdsAPIList',
    'UserArchiveAPIList',
    'AvtoFullViewsUserAPIList',

    'AvtoFullAPIList',
    'AvtoFullAPIListCreate',
    'AvtoFullAPIUpdateDestroy',
    'AvtoFullFavouritesUserAPIList',
    'AvtoFullFavouritesUserAPIUpdateDestroy',
    'AvtoFullArchiveUserAPIDestroy',
    'AvtoFullUploadsAPIList',
    'AvtoFullUploadsAPIUpdateList',

    'WorkFullAPIList',
    'WorkFullAPIListCreate',
    'WorkFullAPIUpdateDestroy',
    'WorkFullViewsUserAPIList',
    'WorkFullFavouritesUserAPIList',
    'WorkFullFavouritesUserAPIUpdateDestroy',
    'WorkFullArchiveUserAPIDestroy',
    'WorkFullUploadsAPIList',
    'WorkFullUploadsAPIUpdateList',

    'ServicesFullAPIList',
    'ServicesFullAPIListCreate',
    'ServicesFullAPIUpdateDestroy',
    'ServicesFullViewsUserAPIList',
    'ServicesFullFavouritesUserAPIList',
    'ServicesFullFavouritesUserAPIUpdateDestroy',
    'ServicesFullArchiveUserAPIDestroy',
    'ServicesFullUploadsAPIList',
    'ServicesFullUploadsAPIUpdateList',

    'ChildrenFullAPIList',
    'ChildrenFullAPIListCreate',
    'ChildrenFullAPIUpdateDestroy',
    'ChildrenFullViewsUserAPIList',
    'ChildrenFullFavouritesUserAPIList',
    'ChildrenFullFavouritesUserAPIUpdateDestroy',
    'ChildrenFullArchiveUserAPIDestroy',
    'ChildrenFullUploadsAPIList',
    'ChildrenFullUploadsAPIUpdateList',

    'ElectronicsFullAPIList',
    'ElectronicsFullAPIListCreate',
    'ElectronicsFullAPIUpdateDestroy',
    'ElectronicsFullViewsUserAPIList',
    'ElectronicsFullFavouritesUserAPIList',
    'ElectronicsFullFavouritesUserAPIUpdateDestroy',
    'ElectronicsFullArchiveUserAPIDestroy',
    'ElectronicsFullUploadsAPIList',
    'ElectronicsFullUploadsAPIUpdateList',

    'FashionFullAPIList',
    'FashionFullAPIListCreate',
    'FashionFullAPIUpdateDestroy',
    'FashionFullViewsUserAPIList',
    'FashionFullFavouritesUserAPIList',
    'FashionFullFavouritesUserAPIUpdateDestroy',
    'FashionFullArchiveUserAPIDestroy',
    'FashionFullUploadsAPIList',
    'FashionFullUploadsAPIUpdateList',

    'HouseGardenFullAPIUpdateDestroy',
    'HouseGardenFullAPIList',
    'HouseGardenFullAPIListCreate',
    'HouseGardenFullViewsUserAPIList',
    'HouseGardenFullFavouritesUserAPIList',
    'HouseGardenFullFavouritesUserAPIUpdateDestroy',
    'HouseGardenFullArchiveUserAPIDestroy',
    'HouseGardenFullUploadsAPIList',
    'HouseGardenFullUploadsAPIUpdateList'
]
