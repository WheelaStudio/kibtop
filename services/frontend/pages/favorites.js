import Head from "next/head";
import FavoritesPage from "../components/FavoritesPage/FavoritesPage";
import Header from "../components/Header/Header";
import AddAdvertMobileButton from "../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import HeaderService from "../components/Header/HeaderService/HeaderService";
import FavoritesHead from "../components/Heads/FavoritesHead";
import { useLanguage } from "../locales/hooks/useLanguage";
import { FavoritesApi } from "../services/FavoritesApi";
import { getServerSideUser } from "../services/tools/getServerSideUser/getServerSideUser";

const Favorites = ({user, favoriteAdverts}) => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Favorites')}`

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kibtop.com" />
                <meta property="og:image" content="https://kibtop.com/img/kibtop.png" />
            </Head>
            <Header />
            <HeaderService />
            <FavoritesPage {...{user, favoriteAdverts}} />
            <AddAdvertMobileButton />

        </>
    );
}


export async function getServerSideProps({req, res, locale}) {

    
    const user = await getServerSideUser(req.cookies)


    if(!user) {
        return {
            props: {user, favoriteAdverts: []},
        }
    }

    const favoriteAdverts = await FavoritesApi.getUserFavoritesAdverts(user.userId, locale)
            .catch((err) => null)
    
    return {
      props: {user, favoriteAdverts},
    }
}

export default Favorites;