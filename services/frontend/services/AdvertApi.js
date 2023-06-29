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
    advertId,
    category,
    title,
    description,
    cost,
    square,
    address,
    city,
    geocode,
    isMonth,
    rooms,
    condition,
    currency,
    // uploads,
    userId
  ) {
    const formData = FormDataCreator({
      title_en: title,
      user: userId,
      address: address,
      city: city,
      geocode: geocode,
      full_price: cost,
      price: cost,
      // uploads: uploads,
      square: square,
      description_en: description,
      recommend: true,
      publisher: true,
      all_old_new_en: condition,
      number_rooms_en: rooms,
      type_sell: isMonth,
      price: cost,
      currency: currency,
    });

    // console.log("file:", uploads);
    return await instance
      .patch(`${category}/${advertId}/`, formData, {
        headers: await createHeaders(),
      })
      .catch(err => console.log(err));
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
