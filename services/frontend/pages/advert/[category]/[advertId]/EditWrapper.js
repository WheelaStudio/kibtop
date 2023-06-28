import { useEffect, useState } from "react";
import { AdvertApi } from "../../../../services/AdvertApi";
import Edit from "./editAd";

const EditWrapper = ({ advertId, category, lang }) => {
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    const fetchAdvertData = async () => {
      try {
        const advert = await AdvertApi.getAdvertDatails(
          advertId,
          category
          lang
        );
        setAdvert(advert);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdvertData();
  }, [advertId, category, lang]);

  return advert ? <Edit advert={advert} /> : <div>Loading...</div>;
};

export default EditWrapper;
