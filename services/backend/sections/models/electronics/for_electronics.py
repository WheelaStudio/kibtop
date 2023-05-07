# ELECTRONICS_CATEGORY_EN = [
#     ('Phones | Accessories', 'Phones | Accessories'),
#     ('Computers | Games', 'Computers | Games'),
#     ('Video | Audio | TV | Photo', 'Video | Audio | TV | Photo'),
#     ('Other equipment', 'Other equipment'),
# ]
# ELECTRONICS_CATEGORY_RU = [
#     ('Телефоны | Аксессуары', 'Телефоны | Аксессуары'),
#     ('Компьютеры | Игры', 'Компьютеры | Игры'),
#     ('Видео | Аудио | ТВ | Фото', 'Видео | Аудио | ТВ | Фото'),
#     ('Другое оборудование', 'Другое оборудование')
# ]
# ELECTRONICS_CATEGORY_TR = [
#     ('Telefonlar | Aksesuarlar', 'Telefonlar | Aksesuarlar'),
#     ('Bilgisayarlar | Oyunlar', 'Bilgisayarlar | Oyunlar'),
#     ('Video | Ses | televizyon | Fotoğraf', 'Video | Ses | televizyon | Fotoğraf'),
#     ('Diğer ekipman', 'Diğer ekipman')
# ]


from sections.view_dicts.category_dicts import get_sub_category_choices

ELECTRONICS_CATEGORY_EN = get_sub_category_choices('electronics', 'en')
ELECTRONICS_CATEGORY_RU = get_sub_category_choices('electronics', 'ru')
ELECTRONICS_CATEGORY_TR = get_sub_category_choices('electronics', 'tr')
