# CHILDREN_CATEGORY_EN = [
#     ("Baby clothing", "Baby clothing"),
#     ("Baby shoes", "Baby shoes"),
#     ("Baby stroller", "Baby stroller"),
#     ("Baby toys | Furniture", "Baby toys | Furniture"),
#     ("Other baby products", "Other baby products"),
# ]
# CHILDREN_CATEGORY_RU = [
#     ('Детская одежда', 'Детская одежда'),
#     ('Детская обувь', 'Детская обувь'),
#     ('Детская коляска', 'Детская коляска'),
#     ('Детские игрушки | Мебель', 'Детские игрушки | Мебель'),
#     ('Другие детские товары', 'Другие детские товары')]
# CHILDREN_CATEGORY_TR = [
#     ('Bebek kıyafeti', 'Bebek kıyafeti'),
#     ('Bebek ayakkabıları', 'Bebek ayakkabıları'),
#     ('Bebek arabası', 'Bebek arabası'),
#     ('Bebek oyuncakları | Mobilya', 'Bebek oyuncakları | Mobilya'),
#     ('Diğer bebek ürünleri', 'Diğer bebek ürünleri')
# ]

from sections.view_dicts.category_dicts import get_sub_category_choices

CHILDREN_CATEGORY_EN = get_sub_category_choices('children', 'en')
CHILDREN_CATEGORY_RU = get_sub_category_choices('children', 'ru')
CHILDREN_CATEGORY_TR = get_sub_category_choices('children', 'tr')
