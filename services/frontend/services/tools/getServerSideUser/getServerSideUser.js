import { AuthApi } from "../../AuthApi"
import { ProfileApi } from "../../ProfileApi"

export const getServerSideUser = async cookies => {
    const {refresh} = cookies
    if(!refresh) return null

    const access_token = await AuthApi.getAccess(refresh).catch((err) => null)
    const user = await ProfileApi.getUserData(access_token).catch((err) => null)

    return user
}