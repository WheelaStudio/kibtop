category_lang_dict = {
    'en': {
        'Real estate': 'Real estate',
        'Auto': 'Auto',
        'Job': 'Job',
        'Services': 'Services',
        'For kids': 'For kids',
        'Electronics': 'Electronics',
        'House and garden': 'House and garden',
        'Fashion and style': 'Fashion and style',
        'Free': 'Free'
    },
    'ru': {
        'Real estate': 'Недвижимость',
        'Auto': 'Авто',
        'Job': 'Работа',
        'Services': 'Услуги',
        'For kids': 'Для детей',
        'Electronics': 'Электроника',
        'House and garden': 'Дом и сад',
        'Fashion and style': 'Мода и стиль',
        'Free': 'Бесплатный'
    },
    'tr': {
        'Real estate': 'Emlak',
        'Auto': 'Oto',
        'Job': 'İş',
        'Services': 'Hizmetler',
        'For kids': 'Çocuklar için',
        'Electronics': 'Elektronik',
        'House and garden': 'Ev ve bahçe',
        'Fashion and style': 'Moda ve stil',
        'Free': 'ücretsiz'
    }
}


def get_one_nesting_choices(lang_dict, lang):
    values_dict = lang_dict[lang]
    values = values_dict.values()
    choices = [tuple([value, value]) for value in values]
    return choices


sub_category_lang_dict = {
    'realty': {
        'en': {
            'Apartments': 'Apartments',
            'House': 'House',
            'Land': 'Land',
            'Commercial': 'Commercial',
            'Other': 'Other',
        },
        'ru': {
            'Apartments': 'Апартаменты',
            'House': 'Дом',
            'Land': 'Земля',
            'Commercial': 'Коммерческая недвижимость',
            'Other': 'Другое',
        },
        'tr': {
            'Apartments': 'Daireler',
            'House': 'Ev',
            'Land': 'Kara',
            'Commercial': 'Ticari gayrimenkul',
            'Other': 'Diğer',
        },
    },
    'avto': {
        'en': {
            'Car': 'Car',
            'Other equipment': 'Other equipment',
        },
        'ru': {
            'Car': 'Машина',
            'Other equipment': 'Другое оборудование',
        },
        'tr': {
            'Car': 'Araba',
            'Other equipment': 'Diğer ekipman',
        }
    },
    'work': {
        'en': {
            'Retail | Sales | Procurement': 'Retail | Sales | Procurement',
            'Logistics | Warehouse | Delivery': 'Logistics | Warehouse | Delivery',
            'Construction | finishing works': 'Construction | Finishing works',
            'Administrative staff | HR | Secretariat': 'Administrative staff | HR | Secretariat',
            'Security | security': 'Security',
            'Cleaning | Home staff': 'Cleaning | Home staff',

            'Beauty | Fitness | Sports': 'Beauty | Fitness | Sports',
            'Education | translation': 'Education | Translation',
            'Culture | Arts | Entertainment': 'Culture | Arts | Entertainment',
            'Medicine | Pharmacy': 'Medicine | Pharmacy',
            'IT | computers': 'IT | Computers',
            'Banking | Finance | Insurance | Jurisprudence': 'Banking | Finance | Insurance | Jurisprudence',
            'Real estate': 'Real estate',
            'Advertising | Design | PR': 'Advertising | Design | PR',
            'Production | Working specialties': 'Production | Working specialties',
            'Work abroad': 'Work abroad',
            'Accounting': 'Accounting',
            'Hotel and restaurant business | Tourism': 'Hotel and restaurant business | Tourism',
            'Service stations | Car washes': 'Service stations | Car washes',
            'Part-time employment': 'Part-time employment',
            'Other occupations': 'Other occupations'

        },
        'ru': {
            'Retail | Sales | Procurement': 'Розничная торговля | Продажи | Приобретение',
            'Logistics | Warehouse | Delivery': 'Логистика | Склад | Доставка',
            'Construction | finishing works': 'Строительство | Отделочные работы',
            'Administrative staff | HR | Secretariat': 'Административный персонал | HR | Секретариат',
            'Security | security': 'Безопасность',
            'Cleaning | Home staff': 'Уборка | Домашний персонал',

            'Beauty | Fitness | Sports': 'Красота | Фитнес | Спорт',
            'Education | translation': 'Образование | Перевод',
            'Culture | Arts | Entertainment': 'Культура | Искусство | Развлечения',
            'Medicine | Pharmacy': 'Медицина | Аптека',
            'IT | computers': 'IT | Компьютеры',
            'Banking | Finance | Insurance | Jurisprudence': 'Банковское дело | Финансы | Страхование | Юриспруденция',
            'Real estate': 'Недвижимость',
            'Advertising | Design | PR': 'Реклама | Дизайн | Пиар',
            'Production | Working specialties': 'Производство | Рабочие специальности',
            'Work abroad': 'Работа за границей',
            'Accounting': 'Бухгалтерский учет',
            'Hotel and restaurant business | Tourism': 'Отель и ресторанный бизнес | Туризм',
            'Service stations | Car washes': 'Справочные станции | Автомобильные стирки',
            'Part - time employment': 'Неполная занятость',
            'Other occupations': 'Другие профессии'
        },
        'tr': {
            'Retail | Sales | Procurement': 'Perakende | Satış | Tedarik',
            'Logistics | Warehouse | Delivery': 'Lojistik | Depo | Teslimat',
            'Construction | finishing works': 'İnşaat | İşleri bitirmek',
            'Administrative staff | HR | Secretariat': 'İdari Personel | HR | Sekreterlik',
            'Security | security': 'Güvenlik',
            'Cleaning | Home staff': 'Temizlik | Ev personeli',

            'Beauty | Fitness | Sports': 'Güzellik | Fitness | Spor Dalları',
            'Education | translation': 'Eğitim | Tercüme',
            'Culture | Arts | Entertainment': 'Kültür | Sanat | Eğlence',
            'Medicine | Pharmacy': 'Tıp | Eczane',
            'IT | computers': 'IT | Bilgisayar',
            'Banking | Finance | Insurance | Jurisprudence': 'Bankacılık | Finans | Sigorta | İçtihat',
            'Real estate': 'Emlak',
            'Advertising | Design | PR': 'Reklam | Tasarım | PR',
            'Production | Working specialties': 'Üretim | Çalışma Uzmanlıkları',
            'Work abroad': 'Yurt dışında çalışmak',
            'Accounting': 'Muhasebe',
            'Hotel and restaurant business | Tourism': 'Otel ve Restoran İşletme | Turizm',
            'Service stations | Car washes': 'Servis İstasyonları | Araba Yıkamaları',
            'Part - time employment': 'Yarı-zamanlı istihdam',
            'Other occupations': 'Diğer Meslekler'
        }
    },
    'fashion': {
        'en': {
            "Women's clothing": "Women's clothing",
            "Women's shoes": "Women's shoes",
            "Children's clothes": "Children's clothes",
            "Footwear": "Footwear",
            "Men's clothing": "Men's clothing",
            "Accessories": "Accessories",
        },
        'ru': {
            "Women's clothing": "Женская одежда",
            "Women's shoes": "Женская обувь",
            "Children's clothes": "Детская одежда",
            "Footwear": "Обувь",
            "Men's clothing": "Мужская одежда",
            "Accessories": "Аксессуары",
        },
        'tr': {
            "Women's clothing": "Bayan giyimi",
            "Women's shoes": "Kadın ayakkabıları",
            "Children's clothes": "Çocuk giysileri",
            "Footwear": "Ayakkabı",
            "Men's clothing": "Erkek giyim",
            "Accessories": "Aksesuarlar",
        }
    },
    'children': {
        'en': {
            "Baby clothing": "Baby clothing",
            "Baby shoes": "Baby shoes",
            "Baby stroller": "Baby stroller",
            "Baby toys | Furniture": "Baby toys | Furniture",
            "Other baby products": "Other baby products",
        },
        'ru': {
            "Baby clothing": "Детская одежда",
            "Baby shoes": "Детская обувь",
            "Baby stroller": "Детская коляска",
            "Baby toys | Furniture": "Детские игрушки | Мебель",
            "Other baby products": "Другие детские товары",
        },
        'tr': {
            "Baby clothing": "Bebek kıyafeti",
            "Baby shoes": "Bebek ayakkabıları",
            "Baby stroller": "Bebek arabası",
            "Baby toys | Furniture": "Bebek oyuncakları | Mobilya",
            "Other baby products": "Diğer bebek ürünleri",
        }
    },
    'electronics': {
        'en': {
            'Phones | Accessories': 'Phones | Accessories',
            'Computers | Games': 'Computers | Games',
            'Video | Audio | TV | Photo': 'Video | Audio | TV | Photo',
            'Other equipment': 'Other equipment',
        },
        'ru': {
            'Phones | Accessories': 'Телефоны | Аксессуары',
            'Computers | Games': 'Компьютеры | Игры',
            'Video | Audio | TV | Photo': 'Видео | Аудио | ТВ | Фото',
            'Other equipment': 'Другое оборудование',
        },
        'tr': {
            'Phones | Accessories': 'Telefonlar | Aksesuarlar',
            'Computers | Games': 'Bilgisayarlar | Oyunlar',
            'Video | Audio | TV | Photo': 'Video | Ses | Televizyon | Fotoğraf',
            'Other equipment': 'Diğer ekipman',
        }
    },
    'house_garden': {
        'en': {
            'Furniture': 'Furniture',
            'Food | Drinks': 'Food | Drinks',
            'Garden': 'Garden',
            'Interior items': 'Interior items',
            'Construction | Renovation': 'Construction | Renovation',
            'Other household goods': 'Other household goods',
        },
        'ru': {
            'Furniture': 'Мебель',
            'Food | Drinks': 'Еда | Напитки',
            'Garden': 'Сад',
            'Interior items': 'Предметы интерьера',
            'Construction | Renovation': 'Строительство | Ремонт',
            'Other household goods': 'Другие товары для дома',
        },
        'tr': {
            'Furniture': 'Mobilya',
            'Food | Drinks': 'Yiyecek | İçecekler',
            'Garden': 'Bahçe',
            'Interior items': 'İç öğeler',
            'Construction | Renovation': 'İnşaat | Yenileme',
            'Other household goods': 'Diğer ev eşyaları',
        }
    },
    'services': {
        'en': {
            'Cleaning': 'Cleaning',
            'Business': 'Business',
            'Domestic services': 'Domestic services',
            'Beauty | Health': 'Beauty | Health',
            'Education': 'Education',
            'Transport': 'Transport',
            'Construction | Repair': 'Construction | Repair',
            'Other': 'Other',
        },
        'ru': {
            'Cleaning': 'Уборка',
            'Business': 'Бизнес',
            'Domestic services': 'Бытовые услуги',
            'Beauty | Health': 'Красота | Здоровье',
            'Education': 'Образование',
            'Transport': 'Транспорт',
            'Construction | Repair': 'Строительство | Ремонт',
            'Other': 'Другой',
        },
        'tr': {
            'Cleaning': 'Temizlik',
            'Business': 'İşletme',
            'Domestic services': 'Ev hizmetleri',
            'Beauty | Health': 'Güzellik | Sağlık',
            'Education': 'Eğitim',
            'Transport': 'Ulaşım',
            'Construction | Repair': 'İnşaat | Tamirat',
            'Other': 'Diğer',
        }
    },
    'free': {
        'en': {
            'Free': 'Free',
            'free': 'Free'
        },
        'ru': {
            'Free': 'Free',
            'free': 'Free'
        },
        'tr': {
            'Free': 'Free',
            'free': 'Free'
        },
    }

}


def get_sub_category_choices(category_key, lang):
    return get_one_nesting_choices(sub_category_lang_dict[category_key], lang)


languages = ['en', 'ru', 'tr']
category_keys = ['realty', 'work', 'services', 'free', 'avto', 'house_garden', 'electronics', 'children', 'fashion' ]


def get_category_key_choices():
    return (*[(category_key.replace('realty_land','realty'), category_key.replace('realty_land','realty')) for category_key in category_keys], ('kibtop', 'kibtop'))
