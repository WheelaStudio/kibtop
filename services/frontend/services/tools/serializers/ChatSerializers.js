import FormDataCreator from "../FormDataCreator"
import { serializeFullAdvertData } from "./AdvertsSerializers"
import { removeEmptyFields } from "./FilterSerializers"
import {serializeUserData} from "./UserSerializers"


const MounthDateDict = {
    'en': {
        'Jan': 'January',
        'Feb': 'February',
        'Mar': 'March',
        'Apr': 'April',
        'May': 'May',
        'Jun': 'June',
        'Jul': 'July',
        'Aug': 'August',
        'Sep': 'September',
        'Oct': 'Octember',
        'Nov': 'November',
        'Dec': 'December',
    },
    'ru': {
        'Jan': 'Январь',
        'Feb': 'Февраль',
        'Mar': 'Март',
        'Apr': 'Апрель',
        'May': 'Май',
        'Jun': 'Июнь',
        'Jul': 'Июль',
        'Aug': 'Август',
        'Sep': 'Сентябрь',
        'Oct': 'Октябрь',
        'Nov': 'Ноябрь',
        'Dec': 'Декабрь',
    },
    'tr': {
        'Jan': 'Ocak',
        'Feb': 'Şubat',
        'Mar': 'Mart',
        'Apr': 'Nisan',
        'May': 'Mayıs',
        'Jun': 'Haziran',
        'Jul': 'Temmuz',
        'Aug': 'Ağustos',
        'Sep': 'Eylül',
        'Oct': 'Ekim',
        'Nov': 'Kasım',
        'Dec': 'Aralık',
    }
}

export const getHumanDate = (dateVal, lang='en') => {
    const date = new Date(dateVal)
    const datetime = date.getTime()
    const [weekday, mounthCode, day, year, timeWithSeconds] = String(date).split(' ')

    const time = timeWithSeconds.split(':').slice(0, 2).join(':')
    return [ `${MounthDateDict[lang][mounthCode]} ${day}`, time, datetime]
}


export const serializeChatMessage = (message, lang) => {
    
    const [dateDay, time, datetime] = getHumanDate(message.timestamp, lang)

    const type = !!message.type ? message.type : ( !!message.file ? 'img' : 'text' )
    return {
        dateDay, time, type,
        chatId: message.group,
        messageId: message.id, 
        authorId: message.author,
        text: message.content,
        isRead: message.is_read,
        file: message.file,
        datetime
    }
}

const sortMessagesByNewInTheEnd = serializedMessages => serializedMessages.sort((msg_new, msg_old) => msg_new.datetime - msg_old.datetime)

export const serializeMessages = (messages, lang) => {
    const serializedMessages = messages.map(message => serializeChatMessage(message, lang))
    const NewInTheEndMessages = sortMessagesByNewInTheEnd(serializedMessages)

    return NewInTheEndMessages
}

export const serializeSearchMessages = (messages) => {
    return sortMessagesByNewInTheEnd(
            messages.map(msg => {
                const [dateDay, time, datetime] = getHumanDate(msg.timestamp)
                return {
                    messageId: msg.id,
                    time, datetime,
                    text: msg.content,
                    chatId: msg.group.id,
                    author: serializeUserData(msg.author),
                    isRead: msg.is_read
                }

            })
    ).reverse()
}

export const chunkMessagesByDate = serializedMessages => {
    const existedDates = Array.from(new Set(serializedMessages.map(msg => msg.dateDay)))

    const chunkedMessagesByDate = existedDates.map(existedDate => {
        const messagesUpToExistedDate = serializedMessages.filter(msg => msg.dateDay === existedDate)

        return [existedDate, sortMessagesByNewInTheEnd(messagesUpToExistedDate)]
    })

    return chunkedMessagesByDate
}


export const serializeChatData = data => {
    return {
        advertId: data.advert_id,
        category: data.category_key,
        chatId: data.id
    }
}



export const serializeChatFullData = (data, userId, lang) => {
    const members = data.members

    const me = serializeUserData(members.find(member => member?.id === userId))
    const talk = serializeUserData(members.find(member => member?.id !== userId))

    const messages = serializeMessages(data.messages, lang)

    return {
        ...serializeChatData(data),
        me, talk,
        unread: data.unread,
        messages,
        last: messages[messages.length-1] || null
    }
}

export const serializeChatDialogDetail = (data, userId, lang='en') => {
    const chat = serializeChatFullData(data, userId, lang)
    return {
        ...chat,
        advert: data.advert && serializeFullAdvertData(data.advert, lang, chat.category)
    }
}

export const serializeChats = (chats, userId, lang='en') => {
    return chats.map(chat => serializeChatFullData(chat, userId, lang))
}

export const serializeMessageForm = (message) => {
    const img = message.img?.[0]
    const video = message.video?.[0]
    const file = img || video
    
    const type = !!file ? ( !!img ? 'img' : 'video'  ) : 'text'
    console.log(type);

    const data = {
        content: message.text,
        author: message.userId,
        group: message.chatId,
        type, file
    }

    return FormDataCreator(removeEmptyFields(data))
}