import LoginPage from "../../components/LoginPage/LoginPage";
import Header from "../../components/Header/Header";
import { useLanguage } from "../../locales/hooks/useLanguage";
import Head from "next/head";


const Login = () => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Login')}`


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
            <LoginPage />
        </>
    );
}

export default Login;