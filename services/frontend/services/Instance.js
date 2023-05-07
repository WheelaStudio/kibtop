import axios from "axios";
import { AuthApi } from "./AuthApi";
import { Cookies } from "./tools/CookieController";
import { getServerSideUser } from "./tools/getServerSideUser/getServerSideUser";

export const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN

const isDeploy = !!+process.env.NEXT_PUBLIC_IS_DEPLOY

export const BASE_URL = `${isDeploy ? 'https' : 'http'}://${API_DOMAIN}`


export const createHeaders = async (accessToken) => {
    const access = accessToken || Cookies.getCookies('access')
    if(!access) {
        try {
            const {refresh} = Cookies.getCookies()
            const access_token = await AuthApi.getAccess(refresh).catch((err) => null)
            return {
                Authorization: `Bearer ${access_token}`
            }
        } catch(err) {
            return {}
        }
    }


    return {
        Authorization: `Bearer ${access}`
    }
}


export const instance = axios.create({
    baseURL: `${BASE_URL}/v1/`,

    withCredentials: false,
    headers: isDeploy ? {
        "Accept-Encoding": "*"
    } : {}
})

