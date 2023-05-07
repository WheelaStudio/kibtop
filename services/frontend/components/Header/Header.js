import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../services/Instance';
import { getUserData } from '../../services/tools/crypto';
import { googleLoginThunk, setAuthThunk } from '../../store/slices/AuthSlice';
import { setUserFavoritesThunk } from '../../store/slices/FavoritesSlice';
import { getCitiesThunk } from '../../store/slices/LocationSlice';
import { setProfileData, setProfileDataThunk } from '../../store/slices/ProfileSlice';
import HeaderSettings from './HeaderSettings/HeaderSettings';

const Header = () => {
    const {locale} = useRouter()
    const {data} = useSession()
    const {userId, isAuthed} = useSelector(state => state.auth)
    const prifile = useSelector(state => state.prifile)
    const {favorites} = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!isAuthed) dispatch(setAuthThunk())
        const refreshAuth = setInterval(() => {
            dispatch(setAuthThunk())
        }, 1080000)
        return () => clearInterval(refreshAuth)
    }, [])
    
    useEffect(() => {
        

        if(!!data && !isAuthed) dispatch(googleLoginThunk(data.auth_token))
        if(isAuthed) dispatch(setUserFavoritesThunk(userId))
        if(isAuthed && !prifile) dispatch((setProfileDataThunk()))
    }, [locale, isAuthed, data])

    return (
        <>
            <header className="header">
                <HeaderSettings />
            </header>
        </>
    );
}

export default Header;