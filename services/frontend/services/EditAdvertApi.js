// import { createHeaders, instance } from "./Instance";
// import FormDataCreator from "./tools/FormDataCreator";
// import { serializeEditAdvertDatails } from "./tools/serializers/AdvertsSerializers";
// import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers";

// export const EditAdvertApi = {
//   async editAdvert(data, category, adId, lang, subCategoryName) {
//     let url = `${category}/create/`;
//     if (
//       (data["subCategory"] == "Land" || data["subCategory"] == "Other") &&
//       category == "realty"
//     ) {
//       url = `realty_land/${adId}/`;
//     }
//     const body = serializeCreateAdvertData(
//       data,
//       category,
//       lang,
//       subCategoryName
//     );

//     try {
//       const res = await instance.post(url, body, {
//         headers: await createHeaders(),
//       });

//       if (category == "realty_land") category = "realty";
//       const { advertId } = serializeEditAdvertDatails(res.data, lang, category);
//       const { photos } = data;

//       for await (const photo of photos) {
//         const formData = FormDataCreator({
//           [`${category}_full_upload`]: advertId,
//           uploads: photo,
//         });

//         await instance.post(`${category}/full_uploads/`, formData, {
//           headers: await createHeaders(),
//         });
//       }

//       if (res.data.url != null) {
//         console.log("Why am I here?");
//         window.location.replace(res.data.url);
//       }

//       return { id: advertId, category };
//     } catch (err) {
//       console.log(err);
//     }
//   },

//   async deleteLastAdvert(category, adId) {
//     try {
//       const response = await instance.delete(`${category}/${adId}/`, {
//         headers: await createHeaders(),
//       });

//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };

import { createHeaders, instance } from "./Instance";
import FormDataCreator from "./tools/FormDataCreator";
import { serializeAdvertDatails } from "./tools/serializers/AdvertsSerializers";
import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers";

export const EditAdvertApi = {
  async editAdvert(data, category, lang, advertId) {
    let url = `${category}/${advertId}/`;
    if (
      (data["subCategory"] == "Land" || data["subCategory"] == "Other") &&
      category == "realty"
    ) {
      url = "realty_land/create/";
    }
    const body = serializeCreateAdvertData(data, category, lang);

    return await instance
      .put(url, body, {
        headers: await createHeaders(),
      })
      .then(async res => {
        if (category == "realty_land") category = "realty";
        const { advertId } = serializeAdvertDatails(res.data, lang, category);
        const { photos } = data;

        for await (const photo of photos) {
          console.log(photo);
          const formData = FormDataCreator({
            [`${category}_full_upload`]: advertId,
            sort_order: 1001,
            uploads: photo,
          });
          await instance.post(`${category}/full_uploads/`, formData, {
            headers: await createHeaders(),
          });
        }
        if (res.data.url != null) {
          console.log("Why am i here?");
          window.location.replace(res.data.url);
        }

        return { id: advertId, category };
      })
      .then(advert => advert);
  },
};
