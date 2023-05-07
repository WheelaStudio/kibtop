import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Text from "../../components/Elementes/Text/Text";
import Header from "../../components/Header/Header";
import AddAdvertMobileButton from "../../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import SellerHead from "../../components/Heads/SellerHead";
import ProfileMenu from "../../components/ProfilePage/ProfileMenu/ProfileMenu";
import NameData from "../../components/ProfilePage/ProfileMenu/ProfileUser/NameData/NameData";
import UserLocale from "../../components/ProfilePage/ProfileMenu/ProfileUser/UserLocale/UserLocale";
import UserStatistic from "../../components/ProfilePage/ProfileMenu/ProfileUser/UserStatistic/UserStatistic";
import UserAdevrtsContainer from "../../components/ProfilePage/UserAdevrts/UserAdevrtsContainer";
import SellerPage from "../../components/SellerPage/SellerPage";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { AdvertApi } from "../../services/AdvertApi";
import { GoodsApi } from "../../services/IndexApi";
import { ProfileApi } from "../../services/ProfileApi";

const Seller = ({newGoods, user}) => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Seller page')}`
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
            <main className="main main--profile">
                <SellerPage {...{newGoods, user}} />
            </main>
            <AddAdvertMobileButton />

        </>
    );
}


export async function getServerSideProps(context) {
    const {locale, params: {userId}} = context
    
    const user = await AdvertApi.getAdvertSeller(userId)

    if(!user) {
        return {
            redirect: {
                destination: '/auth/login/',
                permanent: false,
              },
        }
    }
    
    const newGoods = await ProfileApi.getUserAdverts(userId, locale) || null

    return {
        props: {newGoods, user}
    }
}

export default Seller;