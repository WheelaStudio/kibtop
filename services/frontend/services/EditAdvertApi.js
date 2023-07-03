import { createHeaders, instance } from "./Instance";
import FormDataCreator from "./tools/FormDataCreator";
import { serializeAdvertDatails } from "./tools/serializers/AdvertsSerializers";
import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers";

const order = (() => {
  let number = 1001;
  return () => {
    if (number <= 2000) {
      return number++;
    }
  };
})();

export const EditAdvertApi = {
  async editAdvert(data, category, advertId, lang, uploadsId) {
    let url = `${category}/${advertId}/`;
    if (
      (data["subCategory"] == "Land" || data["subCategory"] == "Other") &&
      category == "realty"
    ) {
      url = "realty_land/create/";
    }
    const body = serializeCreateAdvertData(data, category, lang);
    let sortOrder = order();

    return await instance
      .put(url, body, {
        headers: await createHeaders(),
      })
      .then(async res => {
        if (category == "realty_land") category = "realty";
        const { advertId } = serializeAdvertDatails(
          res.data,
          lang,
          category,
          sortOrder
        );
        const { photos } = data;
        for (let i = 0; i < photos.length; i++) {
          const photo = photos[i];
          const uploadId = uploadsId[i];

          const formData = FormDataCreator({
            [`${category}_full_upload`]: advertId,
            uploads: photo,
          });

          if (uploadId) {
            await instance.put(
              `${category}/full_uploads/${uploadId}/`,
              formData,
              {
                headers: await createHeaders(),
              }
            );
          } else {
            await instance.post(`${category}/full_uploads/`, formData, {
              headers: await createHeaders(),
            });
          }
        }

        if (res.data.url != null) {
          console.log("Why am I here?");
          window.location.replace(res.data.url);
        }

        return { id: advertId, category };
      })
      .then(advert => advert);
  },
};
