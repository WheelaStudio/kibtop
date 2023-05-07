import { BASE_URL } from "../../Instance"

const convertDate = (dateVal) => {
    const date = String(new Date(dateVal).toLocaleString())
    const dateString = date.split(', ')[0]
    
    return dateString
}

const serializeAdvertUploads = uploads => uploads.map(({uploads}) => uploads)

const serializeAdvertsUploadsNull = (categoryUploads, AdvertUpload) => {
    const uploads = serializeAdvertUploads(categoryUploads)

    return (
        !!(categoryUploads?.length) && !uploads?.some(upload => !upload)
         ? uploads 
         : !!AdvertUpload ? [AdvertUpload, AdvertUpload] : null
    )
}


export const serializeAdverts = (adverts, lang, isSearching=false, category) => {
    let advertsFull = []
    for (const category in adverts) {
        advertsFull = [...advertsFull, 
            ...adverts[category].map(advert => ({...advert, category: category})
            )]
    }

    if(!!category && category in adverts) advertsFull = [...adverts[category].map(advert => ({...advert, category: category}))]


    advertsFull = advertsFull.map(advert => {
        const date = new Date(advert.created_at).getTime()

        return {...advert,
            created_at: new Date(advert.created_at).getTime()
        }
    })

    advertsFull = advertsFull.sort((advert_new, advert_old) => advert_old.created_at - advert_new.created_at)

    if(isSearching) {
        advertsFull = advertsFull.map(advert => ({
            advertId: advert.id,
            title: advert[`title_${lang}`],
            cost: advert.price,
            address: advert.city,
            img: BASE_URL+advert.upload,
            date: convertDate(advert.created_at),
            category: advert.category,
            categoryName: advert[`category_${lang}`],
            currency: advert.currency,
            fuzz: advert.fuzz || 1,
            vip: advert.vip,
            lifts: advert.lifts,
            top: advert.top
        })).sort((advert_1, advert_2) => advert_1.fuzz - advert_2.fuzz)

        return [...advertsFull]
    }


    
    advertsFull = advertsFull.map(advert => ({
        advertId: advert.id,
        title: advert[`title_${lang}`],
        cost: advert.price,
        address: advert.city,
        img: BASE_URL+advert.upload,
        date: convertDate(advert.created_at),
        category: advert.category,
        categoryName: advert[`category_${lang}`],
        currency: advert.currency,
        vip: advert.vip,
        lifts: advert.lifts,
        top: advert.top
    }))


   return [...advertsFull]
}

export const serializeFullAdvertData = (advert, lang, category) => ({
    category,
    id: advert.id,
    title: advert[`title_${lang}`],
    address: advert.city,
    cost: advert.price,
    img: advert.upload,
    date: convertDate(advert.created_at),
    currency: advert.currency
})


export const serializeFavorites = (categories) => {
    

    let fullFavorites = []
    for (const category in categories) {
        fullFavorites = [...fullFavorites, ...categories[category].map(favorite => ({
                favouriteId: favorite.id, 
                advertId: favorite[`${category}_full_id`],
                userId: favorite.user_id,
                category,
            }))
        ]
    }
    return fullFavorites
}
export const serializeAdvertDatails = (advert, lang, category) => {
    
    return {
        title: advert[`title_${lang}`] || null,
        description: advert[`description_${lang}`] || null,
        categoryName: advert[`category_${lang}`] || null,
        subCategoryName: advert[`sub_category_${lang}`] || null,
        condition: advert[`all_old_new_${lang}`] || null,
        brand: advert.brand || null,
        mileage: advert.mileage || null,
        year: advert.year || null,
        rooms: advert[`number_rooms_${lang}`] || null,
        employment: advert[`employment_${lang}`] || null,
        workType: advert[`for_work_type_en`] || null,
        date: convertDate(advert.created_at) || null,
        address: advert.city || null,
        city: advert.city || null,
        geocode: advert.geocode || null,
        img: advert.upload || null,
        uploads: serializeAdvertsUploadsNull(advert[`${category}_full_upload`], advert.upload),
        userId: advert.user || null,
        advertId: advert.id || null,
        cost: advert.price || null,
        square: advert.square || null,
        isMonth: advert.type_sell || null,
        currency: advert.currency || null,
        category
    }
}

export const serializeCategory = (adverts, lang, category) => {
    if(!adverts) return
    return adverts[lang].map(advert => serializeAdvertDatails(advert, lang, category))
}