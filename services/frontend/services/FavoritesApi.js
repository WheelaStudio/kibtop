import { createHeaders, instance } from "./Instance"
import { serializeFavorites, serializeFullAdvertData } from "./tools/serializers/AdvertsSerializers"

export const FavoritesApi = {
    async addFavoriteAdvert(id, category, userId) {
        return await instance.post(`${category}/favourites/`, {
            [`${category}_full`]: id,
            user: userId
        }, {
            headers: await createHeaders()
        }).catch(() => null)
    },

    async deleteFavoriteAdvert(favoriteId, category) {
        return await instance.delete(`${category}/favourites/${favoriteId}/`, {
            headers: await createHeaders()
        }).catch(() => null)
    },


    async getUserFavoritesAdverts(userId, lang) {
    
        const favorites = await instance.get(`favourites/all/?user=${userId}`)
            .then(({data}) => {
                return serializeFavorites(data)
            })


        let favoriteAdverts = []
        
        for (let i = 0; i < favorites.length; i++) {
            const {id, category, advertId, userId} = favorites[i];

            await instance.get(`${category}/${advertId}/`)
                .then(({data}) => {
                    favoriteAdverts = [...favoriteAdverts, serializeFullAdvertData(data, lang, category)]
                }).catch(() => null)
        }
        
        return favoriteAdverts
    },

    async getUserFavorites(userId) {
        
        const favorites  = await instance.get(`favourites/all/?user=${userId}`)
            .then(({data}) => {
                return serializeFavorites(data)
            }).catch(err => null)



        return favorites
    }
}