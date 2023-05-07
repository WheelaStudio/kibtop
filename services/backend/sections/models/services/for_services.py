# SERVICES_CATEGORY_EN = [
#     ('Cleaning', 'Cleaning'),
#     ('Business', 'Business'),
#     ('Domestic services', 'Domestic services'),
#     ('Beauty | Health', 'Beauty | Health'),
#     ('Education', 'Education'),
#     ('Transport', 'Transport'),
#     ('Construction | Repair', 'Construction | Repair'),
#     ('Other', 'Other'),
# ]
# SERVICES_CATEGORY_RU = [
#     ('Уборка', 'Уборка'),
#     ('Бизнес', 'Бизнес'),
#     ('Бытовые услуги', 'Бытовые услуги'),
#     ('Красота | Здоровье', 'Красота | Здоровье'),
#     ('Образование', 'Образование'),
#     ('Транспорт', 'Транспорт'),
#     ('Строительство | Ремонт', 'Строительство | Ремонт'),
#     ('Другой', 'Другой')
# ]
# SERVICES_CATEGORY_TR = [
#     ('Temizlik', 'Temizlik'),
#     ('İşletme', 'İşletme'),
#     ('Ev hizmetleri', 'Ev hizmetleri'),
#     ('Güzellik | Sağlık', 'Güzellik | Sağlık'),
#     ('Eğitim', 'Eğitim'),
#     ('Ulaşım', 'Ulaşım'),
#     ('İnşaat | Tamirat', 'İnşaat | Tamirat'),
#     ('Diğer', 'Diğer')
# ]
from sections.view_dicts.category_dicts import get_sub_category_choices

SERVICES_CATEGORY_EN = get_sub_category_choices('services', 'en')
SERVICES_CATEGORY_RU = get_sub_category_choices('services', 'ru')
SERVICES_CATEGORY_TR = get_sub_category_choices('services', 'tr')
