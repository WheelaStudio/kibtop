import { instance } from "./Instance"
import { createQueryParams } from "./tools/serializers/FilterSerializers"

export const FilterApi = {
    async getFilterLocations(category) {
        return await instance.get(`category/cities/?${createQueryParams({category})}`)
            .then(({data}) => {
                return data
            }).catch(err => null)
    }
}