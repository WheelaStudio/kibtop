def query_list_lang(model_full, serializer, lang: str):
    querylist = [{
        'queryset': model_full,
        'serializer_class': serializer,
        'label': lang,
    }]
    return querylist
