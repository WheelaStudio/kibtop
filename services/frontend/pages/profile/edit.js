import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EditProfilePage from "../../components/EditProfilePage/EditProfilePage";
import EditProfileHead from "../../components/Heads/EditProfileHead";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { AuthApi } from "../../services/AuthApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Edit = ({ user }) => {
  const {
    query: { advertId },
  } = useRouter();
  const { t } = useLanguage();
  const title = `Kibtop - ${t("Edit profile")}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kibtop.com" />
        <meta property="og:image" content="https://kibtop.com/img/kibtop.png" />
        <link
          rel="alternate"
          hreflang="ru"
          href="https://kibtop.com/ru/profile/edit/"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://kibtop.com/profile/edit/"
        />
        <link
          rel="alternate"
          hreflang="tr"
          href="https://kibtop.com/tr/profile/edit/"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://kibtop.com/profile/edit/"
        />
      </Head>
      <EditProfilePage {...{ user }} />
    </>
  );
};

// export async function getServerSideProps({ req, res }) {
//   const { access } = req.cookies;

//   let user = await ProfileApi.getUserData(access).catch(err => null);

//   if (!user) user = await getServerSideUser(req.cookies);

//   if (!user) {
//     return {
//       redirect: {
//         destination: "/auth/login/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user },
//   };
// }
export default Edit;
