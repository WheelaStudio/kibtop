import Head from "next/head";
import AddAdvertMobileButton from "../../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import ProfileHead from "../../components/Heads/ProfileHead";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { AuthApi } from "../../services/AuthApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Profile = ({user, adverts}) => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Profile')}`
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
            <ProfilePage {...{user, adverts}} />
            <AddAdvertMobileButton />

        </>
    );
}

export async function getServerSideProps({req, res, locale}) {

    const user = await getServerSideUser(req.cookies)
    if(!user) {
        return {
            redirect: {
              destination: '/auth/login/',
              permanent: false,
            },
        }
    }

    const adverts = await ProfileApi.getUserAdverts(user?.userId, locale)

    return {
      props: {user, adverts},
    }
}

export default Profile;