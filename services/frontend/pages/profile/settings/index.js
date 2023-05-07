
import Head from "next/head";
import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import Settings from "../../../components/SettingsPage/Settings";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { getServerSideUser } from "../../../services/tools/getServerSideUser/getServerSideUser";

const SettingsPage = ({user}) => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Settings')}`
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
            <Settings />
        </>
    );
}

export async function getServerSideProps({req, res}) {

    const user = await getServerSideUser(req.cookies)

    

    if(!user) {
        return {
            redirect: {
              destination: '/auth/login/',
              permanent: false,
            },
        }
    }

    return {
      props: {user},
    }
}

export default SettingsPage;