import Head from "next/head";
import Header from "../../../components/Header/Header";
import RecoveryPage from "../../../components/RecoveryPage/RecoveryPage";
import { useLanguage } from "../../../locales/hooks/useLanguage";

const Recovery = () => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Recovery')}`

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
            <RecoveryPage />
        </>
    );
}

export default Recovery;