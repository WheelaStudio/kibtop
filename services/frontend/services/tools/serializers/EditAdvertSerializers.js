import { categoryTrans, subCategoryTrans } from "./dictionary/CategoryLangDict";
import { conditionTrans, roomsTrans } from "./dictionary/RealtyLangDict";
import { employmentTrans, workTypeTrans } from "./dictionary/WorkLangDict";

export const serializeEditAdvertData = (data, category, lang) => {
  const editAdvertData = {
    // [`title`]: data.title,
    // [`description`]: data.description,
    // [`category`]: data.categoryName,
    // [`sub_category`]: subCategoryName,
    // [`all_old_new`]: data.condition,
    // brand: data.brand,
    // mileage: data.mileage,
    // year: data.year,
    // [`number_rooms`]: data.rooms,
    // [`employment`]: data.employment,
    // [`for_work_type`]: data.workType,
    // address: data.address,
    // city: data.city,
    // geocode: data.geocode,
    // upload: data.photos[0],
    // [`${category}_full_upload`]: [],
    // user: data.userId,
    // price: data.cost,
    // currency: data.currency,
    // square: data.square,
    // type_sell: data.isMonth,
    // lang,
    // recommend: true,
    // publisher: true,
    // lifts: data.lifts,
    // top: data.top,
    // vip: data.vip,
    // servicePrice: data.servicePrice,

    [`title_${lang}`]: data.title,
    [`description_${lang}`]: data.description,
    [`category_${lang}`]: data.categoryName,
    [`sub_category_${lang}`]: data.subCategory,
    [`all_old_new_${lang}`]: data.condition,
    brand: data.brand,
    mileage: data.mileage,
    year: data.year,
    [`number_rooms_${lang}`]: data.rooms,
    [`employment_${lang}`]: data.employment,
    [`for_work_type_${lang}`]: data.workType,
    address: data.address,
    city: data.city,
    geocode: data.geocode,
    upload: data.photos[0],
    [`${category}_full_upload`]: [],
    user: data.userId,
    price: data.cost,
    currency: data.currency,
    square: data.square,
    type_sell: data.isMonth,
    lang,
    recommend: true,
    publisher: true,
    lifts: data.lifts,
    top: data.top,
    vip: data.vip,
    servicePrice: data.servicePrice,
  };

  const formData = new FormData();

  for (const key in editAdvertData) {
    if (!!editAdvertData[key]) formData.append(key, editAdvertData[key]);
  }
  return formData;
};
