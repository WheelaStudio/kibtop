import { categoryTrans, subCategoryTrans } from "./dictionary/CategoryLangDict";
import { conditionTrans, roomsTrans } from "./dictionary/RealtyLangDict";
import { employmentTrans, workTypeTrans } from "./dictionary/WorkLangDict";

export const serializeEditAdvertData = (data, category, lang) => {
  let condition = null;
  if (lang === "ru") {
    if (data.condition == "Old") {
      condition = "Вторичное";
    } else if (data.condition == "New") {
      condition == "Новое";
    }
  } else {
    condition = data.condition;
  }
  let rooms = null;
  if (data.rooms == "Studio") {
    rooms = "Студия";
  }

  const editAdvertData = {
    [`title_${lang}`]: data.title,
    [`description_${lang}`]: data.description,
    [`category_${lang}`]: data.categoryName,
    // [`sub_category_${lang}`]: data.subCategory,
    [`all_old_new_${lang}`]: condition,
    brand: data.brand,
    mileage: data.mileage,
    year: data.year,
    [`number_rooms_${lang}`]: rooms ? rooms : data.rooms,
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
  console.log(editAdvertData);
  const formData = new FormData();

  for (const key in editAdvertData) {
    if (!!editAdvertData[key]) formData.append(key, editAdvertData[key]);
  }
  return formData;
};
