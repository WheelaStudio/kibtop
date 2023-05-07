# FASHION_CATEGORY_EN = [
#     ("Women's clothing", "Women's clothing"),
#     ("Women's shoes", "Women's shoes"),
#     ("Children's clothes", "Children's clothes"),
#     ("Footwear", "Footwear"),
#     ("Men's clothing", "Men's clothing"),
#     ("Accessories", "Accessories"),
# ]
# FASHION_CATEGORY_RU = [
#     ('Женская одежда', 'Женская одежда'),
#     ('Женская обувь', 'Женская обувь'),
#     ('Детская одежда', 'Детская одежда'),
#     ('Обувь', 'Обувь'),
#     ('Мужская одежда', 'Мужская одежда'),
#     ('Аксессуары', 'Аксессуары')
# ]
# FASHION_CATEGORY_TR = [
#     ('Bayan giyimi', 'Bayan giyimi'),
#     ('Kadın ayakkabıları', 'Kadın ayakkabıları'),
#     ('Çocuk giysileri', 'Çocuk giysileri'),
#     ('Ayakkabı', 'Ayakkabı'),
#     ('Erkek giyim', 'Erkek giyim'),
#     ('Aksesuarlar', 'Aksesuarlar')
# ]

from sections.view_dicts.category_dicts import get_sub_category_choices

FASHION_CATEGORY_EN = get_sub_category_choices('fashion', 'en')
FASHION_CATEGORY_RU = get_sub_category_choices('fashion', 'ru')
FASHION_CATEGORY_TR = get_sub_category_choices('fashion', 'tr')
