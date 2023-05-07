# AVTO_CATEGORY_EN = [
#     ('Car', 'Car'),
#     ('Other equipment', 'Other equipment'),
# ]
# AVTO_CATEGORY_RU = [
#     ('Машина', 'Машина'),
#     ('Другое оборудование', 'Другое оборудование')
# ]
# AVTO_CATEGORY_TR = [
#     ('Araba', 'Araba'),
#     ('Diğer ekipman', 'Diğer ekipman')
# ]

from sections.view_dicts.category_dicts import get_sub_category_choices

AVTO_CATEGORY_EN = get_sub_category_choices('avto', 'en')
AVTO_CATEGORY_RU = get_sub_category_choices('avto', 'ru')
AVTO_CATEGORY_TR = get_sub_category_choices('avto', 'tr')
