import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/slices/AuthSlice";
import { setProfileData } from "../../store/slices/ProfileSlice";

const useAuthProvider = (authData) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const authValues = Object.values(authData)
        if(authValues.some(value => !value)) return

        const {isAuthed, userId, user, favorites} = authData

        dispatch(setAuth({isAuthed, userId}))
        dispatch(setProfileData(user))
        dispatch(setUserFavorites(favorites))
    }, [])

    return authData
}

export default useAuthProvider;