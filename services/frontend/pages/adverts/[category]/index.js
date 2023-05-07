import Head from "next/head";
import { useRouter } from "next/router";
import CategorySection from "../../../components/CategoryPage/Category";
import AddAdvertMobileButton from "../../../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { CategoryApi } from "../../../services/CategoryApi";

function Category({categoryAdverts, pages}) {
    const {query: {category}} = useRouter()
    const {t} = useLanguage()
    const title = `Kibtop - ${
        category === 'realty' ? t('Real estate') :
        category === 'avto' ? t('Auto')  :
        category === 'work' ? t('Job')  :
        category === 'services' ? t('Services')  :
        category === 'children' ? t('For kids')  :
        category === 'electronics' ? t('Electronics')  :
        category === 'house_garden' ? t('House and garden')  :
        category === 'fashion' ? t('Fashion and style') :
        category === 'free' ? t('Free') : 'Category' 
    }`

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
            <CategorySection {...{categoryAdverts, pages}} />
            <AddAdvertMobileButton />

        </>
    );
}

export async function getServerSideProps({req, res, locale, query}) {

    const {category, page} = query

    const {adverts, pages} = await CategoryApi.getCategoryAdverts(category, locale, page, query)

    return {
        props: {
            categoryAdverts: adverts, pages
        }
    }
}

export default Category;