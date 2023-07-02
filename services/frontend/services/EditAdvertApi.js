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
  async editAdvert(data, category, lang, advertId) {
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

        for await (const photo of photos) {
          console.log("alee", sortOrder);
          const formData = FormDataCreator({
            [`${category}_full_upload`]: advertId,
            sort_order: sortOrder,
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
