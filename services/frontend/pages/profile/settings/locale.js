import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import LocaleSettingsHead from "../../../components/Heads/LocaleSettingsHead";
import MobileSettingsSelect from "../../../components/ProfilePage/ProfileMenu/ProfileUser/UserLocale/MobileSettingsSelect/MobileSettingsSelect";
import { backPath } from "../../../components/SettingsPage/backPath";
import SettingsNav from "../../../components/SettingsPage/SettingsNav";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { getServerSideUser } from "../../../services/tools/getServerSideUser/getServerSideUser";

const Locale = ({user}) => {
    const {pathname, push} = useRouter()
    const back = backPath(pathname)

    const onBack = () => push(back)

    const {t} = useLanguage()
    const title = `Kibtop - ${t('Locale settings')}`
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
            <main className="main">
                <SettingsNav title="Settings" />
                <MobileSettingsSelect {...{onBack}} />
            </main>
            
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

export default Locale;