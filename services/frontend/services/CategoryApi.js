import { instance } from "./Instance"
import { serializeCategory } from "./tools/serializers/AdvertsSerializers"
import { createQueryParams, serializeFilter } from "./tools/serializers/FilterSerializers"

const limit = 8

export const CategoryApi = {
    async getCategoryAdverts(category, lang, page=0, filter) {

        const backendFilter = serializeFilter(filter)

        return await instance.get(`${category}/?limit=${limit}&offset=${Number(page)*8}&${createQueryParams(backendFilter)}`)
            .then(({data}) => {
                const adverts = serializeCategory(data.results, lang, category)
                const count = Math.ceil((data.overall_total/3) / limit)
                let pages = []
                for (let i = 0; i < count; i++) {
                    pages.push({page: i, number: i+1})
                }

                return {adverts, pages}
            }).catch(err => ({adverts: null, pages: []}))
    }
}
