import Head from "next/head";
import AddAdvertPage from "../../components/AddAdvertPage/AddAdvertPage";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const AddAdvert = () => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Add advert')}`
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
            <AddAdvertPage />
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


    return {
      props: {user},
    }
}

export default AddAdvert;