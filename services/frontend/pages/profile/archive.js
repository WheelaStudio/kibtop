import Head from "next/head";
import { useRouter } from "next/router";
import ArchiveContainer from "../../components/ArchivePage/ArchiveContainer";
import Header from "../../components/Header/Header";
import AddAdvertMobileButton from "../../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import HeaderSettings from "../../components/Header/HeaderSettings/HeaderSettings";
import ArchiveHead from "../../components/Heads/ArchiveHead";
import SettingsNav from "../../components/SettingsPage/SettingsNav";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { ArchiveApi } from "../../services/ArchiveApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Archive = ({archiveAdverts}) => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Archive')}`
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
            <main className="main main--archive">
                <SettingsNav title="Archive" />
                
                <ArchiveContainer {...{archiveAdverts}} />
            </main>
            <AddAdvertMobileButton />

        </>
    );
}

export async function getServerSideProps({req, res, locale}) {
    

    const {access} = req.cookies

    let user = await ProfileApi.getUserData(access)
                    .catch( err => null)

    if(!user) user = await getServerSideUser(req.cookies)

    if(!user) {
      return {
          redirect: {
            destination: '/auth/login/',
            permanent: false,
          },
      }
    }

    const archiveAdverts = await ArchiveApi.getUserArchive(user.userId, locale)
    
    return {
      props: {user, archiveAdverts},
    }
  }

export default Archive;