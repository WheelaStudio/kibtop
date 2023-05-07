import { authOptions } from "../../../pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth/next"
import { getServerSideUser } from "../getServerSideUser/getServerSideUser"
import { AuthApi } from "../../AuthApi"
import { FavoritesApi } from "../../FavoritesApi"


const notAuthData = {
    isAuthed: false,
    userId: null,
    user: null,
    favorites: null
}

export const getAuthData = async context => {
    if(!context || !context.req?.cookies) return {}
    const {req: cookies} = context

    let user = await getServerSideUser(cookies)

    if(!user) {
        const nextauth = await unstable_getServerSession(context.req, context.res, authOptions)
        const data = nextauth?.data
        if(!data?.auth_token) return notAuthData

        const credentionals = await AuthApi.getGoogleCredentials(data.auth_token)

        if(!credentionals) return notAuthData

        user =  await getServerSideUser(cookies)
    }

    if(!!user) {
        const {userId} = user

        const favorites = await FavoritesApi.getUserFavorites(userId)


        return {
            isAuthed: true,
            userId,
            user,
            favorites
        }
    }

    return notAuthData

}