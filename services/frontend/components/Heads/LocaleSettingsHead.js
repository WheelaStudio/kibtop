import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const LocaleSettingsHead = () => {
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
        </>
    );
}

export default LocaleSettingsHead;