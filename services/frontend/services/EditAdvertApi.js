import { createHeaders, instance } from "./Instance";
import FormDataCreator from "./tools/FormDataCreator";
import { serializeEditAdvertDatails } from "./tools/serializers/AdvertsSerializers";
import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers";

export const EditAdvertApi = {
  async editAdvert(data, category, advertId, lang) {
    console.log("in api: ", data);
    let url = `${category}/create/`;
    if (
      (data["subCategory"] == "Land" || data["subCategory"] == "Other") &&
      category == "realty"
    ) {
      url = `realty_land/${advertId}/`;
    }
    const body = serializeCreateAdvertData(data, category, lang);

    // console.log("body: ", body.photos);
    return await instance
      .post(url, body, {
        headers: await createHeaders(),
      })
      .then(async res => {
        if (category == "realty_land") category = "realty";
        const { advertId } = serializeEditAdvertDatails(
          res.data,
          lang,
          category
        );
        const { photos } = data;

        for await (const photo of photos) {
          const formData = FormDataCreator({
            [`${category}_full_upload`]: advertId,
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
      .then(advert => advert)
      .catch(err => console.log(err));
  },
};
