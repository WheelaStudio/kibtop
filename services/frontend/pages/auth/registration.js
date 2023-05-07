import Head from "next/head";
import Header from "../../components/Header/Header";
import RegistrationPage from "../../components/RegistrationPage/RegistrationPage";
import { useLanguage } from "../../locales/hooks/useLanguage";

const Registration = () => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Registration')}`

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
            <RegistrationPage />
        </>
    );
}

export default Registration;