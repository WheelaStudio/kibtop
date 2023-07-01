import { createHeaders, instance } from "./Instance";
import FormDataCreator from "./tools/FormDataCreator";
import { serializeEditAdvertDatails } from "./tools/serializers/AdvertsSerializers";
import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers";

export const EditAdvertApi = {
  async editAdvert(data, category, adId, lang, subCategoryName) {
    let url = `${category}/create/`;
    if (
      (data["subCategory"] == "Land" || data["subCategory"] == "Other") &&
      category == "realty"
    ) {
      url = `realty_land/${adId}/`;
    }
    const body = serializeCreateAdvertData(
      data,
      category,
      lang,
      subCategoryName
    );

    try {
      const res = await instance.post(url, body, {
        headers: await createHeaders(),
      });

      if (category == "realty_land") category = "realty";
      const { advertId } = serializeEditAdvertDatails(res.data, lang, category);
      const { photos } = data;

      for await (const photo of photos) {
        const formData = FormDataCreator({
          [`${category}_full_upload`]: advertId,
          uploads: photo,
        });

        await instance.put(`${category}/full_uploads/${adId}/`, formData, {
          headers: await createHeaders(),
        });
      }

      if (res.data.url != null) {
        console.log("Why am I here?");
        window.location.replace(res.data.url);
      }

      await this.deleteLastAdvert(category, adId, lang);

      return { id: advertId, category };
    } catch (err) {
      console.log(err);
    }
  },

  async deleteLastAdvert(category, adId, lang) {
    try {
      const response = await instance.delete(`${category}/${adId}/`, {
        headers: await createHeaders(),
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  },
};
