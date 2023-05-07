
from sections.view_dicts.category_dicts import get_sub_category_choices, get_one_nesting_choices
from sections.view_dicts.realty.realty_dict import all_old_new_dict, number_rooms_dict

REALTY_CATEGORY_EN = get_sub_category_choices('realty', 'en')
REALTY_CATEGORY_RU = get_sub_category_choices('realty', 'ru')
REALTY_CATEGORY_TR = get_sub_category_choices('realty', 'tr')



# REALTY_CATEGORY_TYPE_EN = [
#     ('Rent', 'Rent'),
#     ('Buy', 'Buy'),
# ]
# REALTY_CATEGORY_TYPE_RU = [
#     ('Арендная плата', 'Арендная плата'),
#     ('Купить', 'Купить')
# ]
# REALTY_CATEGORY_TYPE_TR = [
#     ('Kira', 'Kira'),
#     ('Satın almak', 'Satın almak')
# ]


ALL_OLD_NEW_EN = get_one_nesting_choices(all_old_new_dict, 'en')
ALL_OLD_NEW_RU = get_one_nesting_choices(all_old_new_dict, 'ru')
ALL_OLD_NEW_TR = get_one_nesting_choices(all_old_new_dict, 'tr')


# ALL_OLD_NEW_EN = [
#     ('All', 'All'),
#     ('Old', 'Old'),
#     ('New', 'New'),
# ]
# ALL_OLD_NEW_RU = [
#     ('Все', 'Все'),
#     ('Старый', 'Старый'),
#     ('Новый', 'Новый')
# ]
# ALL_OLD_NEW_TR = [
#     ('Herşey', 'Herşey'),
#     ('Eskimiş', 'Eskimiş'),
#     ('Yeni', 'Yeni')
# ]

# NUMBER_ROOMS_FOR = ((str(i) + '+1', str(i) + '+1') for i in range(1, 4))

NUMBER_ROOMS_EN = get_one_nesting_choices(number_rooms_dict, 'en')
NUMBER_ROOMS_RU = get_one_nesting_choices(number_rooms_dict, 'ru')
NUMBER_ROOMS_TR = get_one_nesting_choices(number_rooms_dict, 'tr')

# NUMBER_ROOMS_EN = [
#     ('Studio', 'Studio'),
#     ('1+1', '1+1'),
#     ('2+1', '2+1'),
#     ('3+1', '3+1'),
#     ('4+1 and more', '4+1 and more')
# ]
#
# NUMBER_ROOMS_RU = [
#     ('Студия', 'Студия'),
#     ('1+1', '1+1'),
#     ('2+1', '2+1'),
#     ('3+1', '3+1'),
#     ('4+1 и более', '4+1 и более')
# ]
# NUMBER_ROOMS_TR = [
#     ('Stüdyo', 'Stüdyo'),
#     ('1+1', '1+1'),
#     ('2+1', '2+1'),
#     ('3+1', '3+1'),
#     ('4+1 ve üzeri', '4+1 ve üzeri')
# ]

