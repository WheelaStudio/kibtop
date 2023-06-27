import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EditAdvertPage from "../../../../components/EditAdPage/EditAdPage";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { AdvertApi } from "../../../../services/AdvertApi";

const Edit = ({ advert }) => {
  const { t } = useLanguage();
  const title = `Kibtop - ${t("Edit ad")}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kibtop.com" />
        <meta property="og:image" content="https://kibtop.com/img/kibtop.png" />
      </Head>
      <EditAdvertPage advert={advert} />
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const { access } = req.cookies;

  let advert = await AdvertApi.getAdvertDatails(access).catch(err => null);
  console.log(advert);
  return {
    props: { advert },
  };
}

export default Edit;
