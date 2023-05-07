import { instance } from "./Instance"
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers"
import { createQueryParams } from "./tools/serializers/FilterSerializers"

export const SearchApi = {
    async getSearchAdverts(value, lang) {
        return await instance.get(`category/?page=0&limit=14&search=${value}&fuzz=50&unique=1`)
            .then(({data}) => {
                return serializeAdverts(data.results, lang)
            }).catch(() => null)
    },

    async getFindAdverts(search='', page=0, lang, category, city, sorting) {
        const limit = 8
        const params = `?${category ? `cat=${category}&` : ''}page=${page}&limit=${limit}${search ? `&search=${search}&fuzz=70` : ''}&${createQueryParams({city, sorting})}`
        return await instance.get(`category/${params}`)
            .then(({data}) => {
                const adverts = serializeAdverts(data.results, lang, true, category)

                
                const count = Math.ceil(data.total / limit) 
                let pages = []
                for (let i = 0; i < count; i++) {
                    pages.push({page: i, number: i+1})
                }

                return { adverts, pages }
            }).catch(() => null)
    }
}