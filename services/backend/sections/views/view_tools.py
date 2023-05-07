from cloudipsp import Api, Checkout
from sections.view_dicts.category_dicts import languages, category_lang_dict, sub_category_lang_dict
from sections.view_dicts.realty.realty_dict import all_old_new_dict, number_rooms_dict
from sections.view_dicts.work.work_dict import for_work_type_dict, employment_dict

# Служебная функция поиска с проверками
from sections.views.translators.translate_fields import translate_all_flexible_fields
from sections.views.views_base import get_price_list

import environ

env = environ.Env()
environ.Env.read_env('.env')


def translate_one_dict_field(request_data, field_name, field_lang_dict):
    if not (field_name in request_data):
        return print(f'Нет поля {field_name}')

    field = request_data[field_name]

    # Проверка существует ли перевод введенного category на всех языках
    if not all([(field in field_lang_dict[lang]) for lang in languages]):
        return print(f'Не валидное поле {field_name}')

    return {
        f'{field_name}_en': field_lang_dict['en'][field],
        f'{field_name}_ru': field_lang_dict['ru'][field],
        f'{field_name}_tr': field_lang_dict['tr'][field]
    }


# category
def get_category_trans(request_data):
    return translate_one_dict_field(request_data, 'category', category_lang_dict)


# sub_category
def get_sub_category_trans(request_data, category_key):
    if not (category_key in sub_category_lang_dict):
        return print('Не валидное поле category_key')

    return translate_one_dict_field(request_data, 'sub_category', sub_category_lang_dict[category_key])


# work
def get_for_work_type_trans(request_data):
    return translate_one_dict_field(request_data, 'for_work_type', for_work_type_dict)


def get_employment_trans(request_data):
    return translate_one_dict_field(request_data, 'employment', employment_dict)


# realty
def get_all_old_new_trans(request_data):
    return translate_one_dict_field(request_data, 'all_old_new', all_old_new_dict)


def get_number_rooms_trans(request_data):
    return translate_one_dict_field(request_data, 'number_rooms', number_rooms_dict)


# base
def get_base_fields_trans(request_data, category_key):
    price_list = get_price_list(request_data)
    category_list = get_category_trans(request_data)
    sub_category_list = get_sub_category_trans(request_data, category_key)
    flexible_fields_list = translate_all_flexible_fields(request_data)

    return {
        **price_list,
        **category_list,
        **sub_category_list,
        **flexible_fields_list,
    }


def send_to_pay(category, id, service):
    order_id = category + '_' + str(id)
    price = str(service['price'])
    if ('.' in price):
        price = price.split('.')[0] + str(price.split('.')[1] + '0')[0:2]
    else:
        price = price + '00'
    if (int(price) > 0):
        currency_dict = {'€': 'EUR', '$': 'USD', '₤': 'LIR'}
        api = Api(merchant_id=env("MERCHANT_ID"), secret_key=env("FONDY_SECRET_KEY"))
        checkout = Checkout(api=api)
        data = {
            'order_id': order_id,
            "currency": currency_dict[service['currency']],
            "amount": price,
            'server_callback_url': 'https://api.kibtop.com/v1/ad_vert/',
            'response_url': 'https://kibtop.com/profile',
        }
        check = checkout.url(data)
        url = check.get('checkout_url')
        return url
    return None
