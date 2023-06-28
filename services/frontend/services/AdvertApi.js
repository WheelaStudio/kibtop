import { instance, createHeaders } from "./Instance";
import {
  serializeAdvertDatails,
  serializeCategory,
} from "./tools/serializers/AdvertsSerializers";
import FormDataCreator from "./tools/FormDataCreator";
import { serializeChatData } from "./tools/serializers/ChatSerializers";
import { serializeUserData } from "./tools/serializers/UserSerializers";

export const AdvertApi = {
  async getAdvertDatails(advertId, category, lang) {
    try {
      const response = await instance.get(`${category}/${advertId}/`);
      return serializeAdvertDatails(response.data, lang, category);
    } catch (error) {
      console.log("error", error);
      return null;
    }
  },
  async editAdvertData(
    userId,
    advertId,
    category,
    title,
    description,
    cost,
    city
  ) {
    const formData = FormDataCreator({
      title_en: title,
      address: city,
      price: cost,
      description_en: description,
      recommend: true,
      publisher: true,
      user: userId,
    });
    console.log(
      "adid",
      advertId,
      category,
      title,
      description,
      cost,
      city,
      "userid",
      userId
    );
    return await instance.patch(`${category}/${advertId}/`, formData, {
      headers: await createHeaders(),
    });
  },

  async getAdvertSeller(userId) {
    return await instance
      .get(`auth/users/${userId}/`)
      .then(({ data }) => {
        return serializeUserData(data);
      })
      .catch(err => null);
  },

  async getSimilarAdverts(category, lang) {
    return await instance
      .get(`${category}/`)
      .then(({ data }) => {
        return serializeCategory(data.results, lang, category).slice(0, 8);
      })
      .catch(err => null);
  },

  async createNewDialogByAdvert({
    advertId,
    category,
    userId,
    sellerId,
    redirect,
  }) {
    return await instance
      .post("chat/group/create/", {
        members: [userId, sellerId],
        category_key: category,
        advert_id: advertId,
      })
      .then(({ data }) => {
        const chat = serializeChatData(data);

        redirect(chat.chatId);
        return chat;
      })
      .catch(e => console.log(e));
  },
};
