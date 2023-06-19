import { instance } from "./Instance";
import {
  serializeAdvertDatails,
  serializeCategory,
} from "./tools/serializers/AdvertsSerializers";
import { serializeChatData } from "./tools/serializers/ChatSerializers";
import { serializeUserData } from "./tools/serializers/UserSerializers";

export const AdvertApi = {
  async getAdvertDatails(advertId, category, lang) {
    return await instance
      .get(`${category}/${advertId}/`)
      .then(({ data }) => {
        return serializeAdvertDatails(data, lang, category);
      })
      .catch(err => null);
  },
  async editUserData(email, name, city, avatar, phone) {
    const formData = !!avatar
      ? FormDataCreator({
          first_name: name,
          email: email,
          addres: city || "",
          upload_user: avatar || "",
          phone: phone,
        })
      : {
          first_name: name,
          email: email,
          addres: city || "",
          upload_user: undefined,
          phone: phone,
        };

    return await instance.put("auth/users/me/", formData, {
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
