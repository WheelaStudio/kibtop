from sections.view_dicts.category_dicts import get_sub_category_choices, get_one_nesting_choices
from sections.view_dicts.work.work_dict import for_work_type_dict, employment_dict

WORK_CATEGORY_EN = get_sub_category_choices('work', 'en')
WORK_CATEGORY_TR = get_sub_category_choices('work', 'tr')
WORK_CATEGORY_RU = get_sub_category_choices('work', 'ru')

# WORK_CATEGORY_EN = [
#     ('Retail | Sales | Procurement', 'Retail | Sales | Procurement'),
#     ('Logistics | Warehouse | Delivery', 'Logistics | Warehouse | Delivery'),
#     ('Construction | finishing works', 'Construction | finishing works'),
#     ('Construction | finishing works', 'Construction | finishing works'),
#     ('Administrative staff | HR | Secretariat', 'Administrative staff | HR | Secretariat'),
#     ('Security | security', 'Security | security'),
#     ('Cleaning | Home staff', 'Cleaning | Home staff'),
#     ('Beauty | Fitness | Sports', 'Beauty | Fitness | Sports'),
#     ('Education | translation', 'Education | translation'),
#     ('Culture | Arts | Entertainment', 'Culture | Arts | Entertainment'),
#     ('Medicine | Pharmacy', 'Medicine | Pharmacy'),
#     ('IT | computers', 'IT | computers'),
#     ('Banking | Finance | Insurance | Jurisprudence', 'Banking | Finance | Insurance | Jurisprudence'),
#     ('Real estate', 'Real estate'),
#     ('Advertising | Design | PR', 'Advertising | Design | PR'),
#     ('Production | Working specialties', 'Production | Working specialties'),
#     ('Work abroad', 'Work abroad'),
#     ('Accounting', 'Accounting'),
#     ('Hotel and restaurant business | Tourism', 'Hotel and restaurant business | Tourism'),
#     ('Service stations | Car washes', 'Service stations | Car washes'),
#     ('Part - time employment', 'Part - time employment'),
#     ('Other occupations', 'Other occupations')
# ]
# WORK_CATEGORY_RU = [
#     ('Розничная торговля |Продажи |Приобретение', 'Розничная торговля |Продажи |Приобретение'),
#     ('Логистика |Склад |Доставка', 'Логистика |Склад |Доставка'),
#     ('Строительство |отделка работает', 'Строительство |отделка работает'),
#     ('Строительство |отделка работает', 'Строительство |отделка работает'),
#     ('Административный персонал |HR |Секретариат', 'Административный персонал |HR |Секретариат'),
#     ('Безопасность |безопасность', 'Безопасность |безопасность'),
#     ('Уборка |Домашний персонал', 'Уборка |Домашний персонал'),
#     ('Красота |Фитнес |Спортивный', 'Красота |Фитнес |Спортивный'),
#     ('Образование |перевод', 'Образование |перевод'),
#     ('Культура |Искусство |Развлечения', 'Культура |Искусство |Развлечения'),
#     ('Медицина |Аптека', 'Медицина |Аптека'), ('Это |компьютеры', 'Это |компьютеры'), (
#         'Банковское дело |Финансы |Страхование |Юриспруденция',
#         'Банковское дело |Финансы |Страхование |Юриспруденция'), ('Недвижимость', 'Недвижимость'),
#     ('Реклама |Дизайн |Премьер -министр', 'Реклама |Дизайн |Премьер -министр'),
#     ('Производство |Рабочие специальности', 'Производство |Рабочие специальности'),
#     ('Работать за границей', 'Работать за границей'), ('Бухгалтерский учет', 'Бухгалтерский учет'),
#     ('Отель и ресторанный бизнес |Туризм', 'Отель и ресторанный бизнес |Туризм'),
#     ('Справочные станции |Автомобильные стирки', 'Справочные станции |Автомобильные стирки'),
#     ('Неполная занятость', 'Неполная занятость'), ('Другие профессии', 'Другие профессии')
# ]
# WORK_CATEGORY_TR = [
#     ('Perakende |Satışlar |Satın alma', 'Perakende |Satışlar |Satın alma'),
#     ('Lojistik |Depo |Teslimat', 'Lojistik |Depo |Teslimat'), ('İnşaat |İşleri bitirmek', 'İnşaat |İşleri bitirmek'),
#     ('İnşaat |İşleri bitirmek', 'İnşaat |İşleri bitirmek'),
#     ('İdari Personel |HR |Sekreterlik', 'İdari Personel |HR |Sekreterlik'),
#     ('Güvenlik |güvenlik', 'Güvenlik |güvenlik'), ('Temizlik |Ev personeli', 'Temizlik |Ev personeli'),
#     ('Güzellik |Fitness |Spor Dalları', 'Güzellik |Fitness |Spor Dalları'), ('Eğitim |tercüme', 'Eğitim |tercüme'),
#     ('Kültür |Sanat |Eğlence', 'Kültür |Sanat |Eğlence'), ('Tıp |Eczane', 'Tıp |Eczane'),
#     ('IT |bilgisayar', 'IT |bilgisayar'),
#     ('Bankacılık |Finans |Sigorta |İçtihat', 'Bankacılık |Finans |Sigorta |İçtihat'), ('Emlak', 'Emlak'),
#     ('Reklam |Tasarım |PR', 'Reklam |Tasarım |PR'), ('Üretim |Çalışma Uzmanlıkları', 'Üretim |Çalışma Uzmanlıkları'),
#     ('Yurt dışında çalışmak', 'Yurt dışında çalışmak'), ('Muhasebe', 'Muhasebe'),
#     ('Otel ve Restoran İşletme |Turizm', 'Otel ve Restoran İşletme |Turizm'),
#     ('Servis İstasyonları |Araba Yıkamaları', 'Servis İstasyonları |Araba Yıkamaları'),
#     ('Yarı-zamanlı istihdam', 'Yarı-zamanlı istihdam'), ('Diğer Meslekler', 'Diğer Meslekler')
# ]


FOR_WORK_EN = get_one_nesting_choices(for_work_type_dict, 'en')
FOR_WORK_RU = get_one_nesting_choices(for_work_type_dict, 'ru')
FOR_WORK_TR = get_one_nesting_choices(for_work_type_dict, 'tr')

# FOR_WORK_EN = [
#     ('For work', 'For work'),
#     ('For an employee', 'For an employee'),
# ]
# FOR_WORK_RU = [
#     ('Для работы', 'Для работы'),
#     ('Для сотрудника', 'Для сотрудника')
# ]
# FOR_WORK_TR = [
#     ('İş için', 'İş için'),
#     ('bir çalışan için', 'bir çalışan için')
# ]

EMPLOYMENT_EN = get_one_nesting_choices(employment_dict, 'en')
EMPLOYMENT_RU = get_one_nesting_choices(employment_dict, 'ru')
EMPLOYMENT_TR = get_one_nesting_choices(employment_dict, 'tr')

# EMPLOYMENT_EN = [
#     ('Full time', 'Full time'),
#     ('Partial', 'Partial'),
#     ('Remote', 'Remote'),
# ]
# EMPLOYMENT_RU = [
#     ('На постоянной основе', 'На постоянной основе'),
#     ('Частичный', 'Частичный'),
#     ('Дистанционный пульт', 'Дистанционный пульт')
# ]
# EMPLOYMENT_TR = [
#     ('Tam zamanlı', 'Tam zamanlı'),
#     ('Kısmi', 'Kısmi'),
#     ('Uzak', 'Uzak')
# ]
