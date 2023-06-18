import { instance } from "./Instance";
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers";

export const serializeGoods = (res, lang) =>
  res.map(product => ({
    id: product.id,
    img: product.upload,
    name: product[`title_${lang}`],
    cost: product.price,
    adress: product.address,
    date: convertDate(product.updated_at || product.created_at),
  }));

export const serializeSlider = (res, lang) =>
  res.map(product => {
    console.log("Product:", product);
    const desktopImage = product[`image_${lang}`];
    const mobileImage = product[`image_mobile_${lang}`];
    return {
      id: product.id,
      // isDark: product.isDark,
      img: desktopImage,
      title: product[`title_${lang}`],
      // desc: product[`desc_${lang}`],
      // background: product.background,
      link: product.link,
      ...(mobileImage && { img_mobile: mobileImage }), // Add img_mobile property if mobileImage is available
    };
  });

export const GoodsApi = {
  async getRecommends(lang) {
    return await instance
      .get(`recommend/?limit=8&offset=1&lang=${lang}`)
      .then(({ data }) => {
        const language = lang === "default" ? "en" : lang;
        const goods = serializeAdverts(data, language);

        return goods.splice(0, 8);
      })
      .catch(err => null);
  },

  async getNews(lang) {
    return await instance
      .get(`new/?limit=8&offset=1&lang=${lang}`)
      .then(({ data }) => {
        const goods = serializeAdverts(data, lang);

        return goods.splice(0, 8);
      })
      .catch(err => null);
  },

  async getSlider(lang) {
    return await instance
      .get(`stock/?lang=${lang}`)
      .then(({ data }) => {
        const res = data.results[lang];

        const slides = serializeSlider(res, lang);
        console.log("Serialized Sliders:", slides);
        return slides;
      })
      .catch(err => null);
  },
};
