# HOUSE_GARDEN_CATEGORY_EN = [
#     ('Furniture', 'Furniture'),
#     ('Food | Drinks', 'Food | Drinks'),
#     ('Garden', 'Garden'),
#     ('Interior items', 'Interior items'),
#     ('Construction | Renovation', 'Construction | Renovation'),
#     ('Other household goods', 'Other household goods'),
# ]
# HOUSE_GARDEN_CATEGORY_RU = [
#     ('Мебель', 'Мебель'),
#     ('Еда | Напитки', 'Еда | Напитки'),
#     ('Сад', 'Сад'),
#     ('Предметы интерьера', 'Предметы интерьера'),
#     ('Строительство | Ремонт', 'Строительство | Ремонт'),
#     ('Другие товары для дома', 'Другие товары для дома')
# ]
# HOUSE_GARDEN_CATEGORY_TR = [
#     ('Mobilya', 'Mobilya'),
#     ('Yiyecek | İçecekler', 'Yiyecek | İçecekler'),
#     ('Bahçe', 'Bahçe'),
#     ('İç öğeler', 'İç öğeler'),
#     ('İnşaat | Yenileme', 'İnşaat | Yenileme'),
#     ('Diğer ev eşyaları', 'Diğer ev eşyaları')
# ]

from sections.view_dicts.category_dicts import get_sub_category_choices

HOUSE_GARDEN_CATEGORY_EN = get_sub_category_choices('house_garden', 'en')
HOUSE_GARDEN_CATEGORY_RU = get_sub_category_choices('house_garden', 'ru')
HOUSE_GARDEN_CATEGORY_TR = get_sub_category_choices('house_garden', 'tr')
