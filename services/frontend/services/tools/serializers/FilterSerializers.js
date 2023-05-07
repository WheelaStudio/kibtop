import {currencyNames} from "./dictionary/CurrencyDict"

export const serializeFilter = filter => {
    if (!filter) return {}

    const cur = filter.currency || '$'

    const serializedFilter = {
        ['sub_category_en']: filter.subCategory,
        ['all_old_new_en']: filter.condition,
        brand: filter.brand,
        mileage__gt: Number(filter.mileage_from) - 1,
        mileage__lt: Number(filter.mileage_to) + 1,

        year__gt: Number(filter.year_from) - 1,
        year__lt: Number(filter.year_to) + 1,

        ['number_rooms_en']: filter.rooms,
        ['employment_en']: filter.employment,
        ['for_work_type_en']: filter.workType,
        city: filter.city,

        [`price_${currencyNames[cur]}__gt`]: Number(filter.cost_from) - 1,
        [`price_${currencyNames[cur]}__lt`]: Number(filter.cost_to) + 1,

        square: filter.square,
        type_sell: filter.isMonth,

        sorting: filter.sorting
    }

    return removeEmptyFields(serializedFilter)
}

export const removeEmptyFields = data => {
    const fillData = {}

    for (const key in data) {
        const value = data[key]


        if (!!value) fillData[`${key}`] = value
    }

    return fillData
}

export const createQueryParams = data => {
    let query = ''
    if (data['sub_category_en'] == 'Land' || data['sub_category_en'] == 'Other') {
        delete data['number_rooms_en'];
        delete data['all_old_new_en'];
    }
    for (const key in data) {
        const value = data[key]

        if(!!value) query += `${key}=${encodeURIComponent(value)}&`
    }
    return query
}

export const serializeFormFilter = (query, ignoreCategory=false) => {
    const filterFields = ['city', 'sorting', 'category', 'subCategory', 'condition', 'isMonth', 'rooms', 'cost_from', 'cost_to', 'brand', 'mileage_from', 'mileage_to', 
                            'year_from', 'year_to', 'employment', 'workType']
    if(ignoreCategory) filterFields.pop('category')

    let filterForm = {}

    for (const key in query) {
        const value = query[key]

        if(filterFields.includes(key)) filterForm[key] = serializeArrayQuery(key, value)
    }


    return filterForm
}

const serializeArrayQuery = (key, value) => {
    const ignoreFields = ['condition']

    if(value.includes(',') && !ignoreFields.includes(key)) return value.split(',')
    return value
}