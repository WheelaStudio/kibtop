import FullAdvertsPage from "../../components/FullAdvertsPage/FullAdvertsPage"
import AddAdvertMobileButton from "../../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import { useLanguage } from "../../locales/hooks/useLanguage";
import Head from "next/head";


const FullAdvertrs = () => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t("Adverts")}`
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
            <FullAdvertsPage />
            <AddAdvertMobileButton />
        </>
    );
}

export default FullAdvertrs;