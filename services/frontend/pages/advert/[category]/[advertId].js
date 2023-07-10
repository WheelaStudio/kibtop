import Head from "next/head";
import { useRouter } from "next/router";
import AdvertDetailPage from "../../../components/AdvertDetailPage/AdvertDetailPage";
import { AdvertApi } from "../../../services/AdvertApi";

const AdvertId = ({ serverAdvert }) => {
  const title = `Kibtop - ${serverAdvert.title}`;
  const {
    query: { advertId, category },
  } = useRouter();
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
          href={`https://kibtop.com/ru/advert/${category}/${advertId}/`}
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`https://kibtop.com/advert/${category}/${advertId}/`}
        />
        <link
          rel="alternate"
          hreflang="tr"
          href={`https://kibtop.com/tr/advert/${category}/${advertId}/`}
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href={`https://kibtop.com/advert/${category}/${advertId}/`}
        />
      </Head>
      <AdvertDetailPage {...{ serverAdvert }} />
    </>
  );
};

export async function getServerSideProps({
  req,
  res,
  locale,
  query: { advertId, category },
}) {
  const serverAdvert = await AdvertApi.getAdvertDatails(
    advertId,
    category,
    locale
  );
  // console.log(serverAdvert);
  if (!serverAdvert) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { serverAdvert },
  };
}

export default AdvertId;
