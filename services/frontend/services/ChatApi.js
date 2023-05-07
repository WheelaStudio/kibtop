import { sleep } from "../store/slices/SearchSlice"
import { createHeaders, instance } from "./Instance"
import {serializeChatData, serializeChatDialogDetail, serializeChatMessage, serializeChats, serializeMessageForm, serializeMessages, serializeSearchMessages} from "./tools/serializers/ChatSerializers"

export const ChatApi = {
    async checkExistingChat({userId, category, advertId}) {
        return await instance.get(`chat/group/?members=${userId}&category_key=${category}&advert_id=${advertId}`)
            .then(({data}) => {
                return data instanceof Array && data.length > 0 && serializeChatData(data[0])
            }).catch(e => console.log(e))
    },

    async getUserDialogs(userId, lang) {
        return await instance.get(`chat/group/?members=${userId}`)
            .then((res) => {
                    return serializeChats(res.data, userId, lang)
            }).catch(e => console.log(e))
            
    },

    async getConnectedUsers() {
        return await instance.get(`chat/connected/`, {
            headers: await createHeaders()
        }).then(({data}) => {
            return data.map(con => con.user_id)
        }).catch(e => console.log(e))
    },

    async getUserDialogDetail(chatId, userId, lang) {
        return await instance.get(`chat/group/${chatId}/`)
            .then(res => {
                return serializeChatDialogDetail(res.data, userId, lang)
            }).catch(e => console.log(e))
    },

    async createMessage(message) {
        return await instance.post('chat/messages/', serializeMessageForm(message))
            .then(({data}) => {
                return serializeChatMessage(data)
            }).catch(e => console.log(e))
    },


    async updateMessagesAsReaded(messages) {
        return await instance.patch(`chat/messages/read_update/`, {
            is_read: true,
            messages: messages
        }, {
            headers: await createHeaders()
        }).catch(e => console.log(e))
    },

    async getSupportChat(redirect) {
        return await instance.get('chat/get_support/', {
            headers: await createHeaders()
        }).then(res => {
            const chat = serializeChatData(res.data)
            redirect(`/chat/${chat.chatId}`)
            return chat
        }).catch(err => console.log(err))
    },

    async searchMessages(userId, search) {
        return await instance.get(`/chat/messages/search/?search=${search}&members=${userId}`)
            .then(res => {
                console.log(res.data);
                return serializeSearchMessages(res.data)
            })
    }
}