from translatepy import Translator


def get_field_translate(request_data, field_name):
    if not ('lang' in request_data):
        return print('Не указан язык (поле lang) данных')

    lang = request_data['lang']

    if not (field_name in request_data):
        return print(f'Не указано поле {field_name}')

    field = request_data[field_name]

    return {
        f'{field_name}_en': get_lang_translate(field, lang, 'en'),
        f'{field_name}_ru': get_lang_translate(field, lang, 'ru'),
        f'{field_name}_tr': get_lang_translate(field, lang, 'tr'),
    }


def get_lang_translate(field, lang_from, lang_to):
    if lang_from == lang_to:
        return field

    return Translator().translate(field, lang_to, lang_from)


def translate_all_flexible_fields(request_data):

    title_list = get_field_translate(request_data, 'title')
    description_list = get_field_translate(request_data, 'description')

    return {**title_list, **description_list}
