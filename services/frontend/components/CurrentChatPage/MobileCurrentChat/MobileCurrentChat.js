import { useState } from "react";
import ChatHeader from "../../ChatPage/ActiveDialog/ActiveDialogComponents/ChatHeader";
import ChatInput from "../../ChatPage/ChatComponents/ChatInputs/ChatInput";
import SubTitle from "../../ChatPage/PageParts/Subtitle";
import Header from "../../Header/Header";
import HeaderService from "../../Header/HeaderService/HeaderService";
import MobileMessages from "./MobileMessages/MobileMessages";
import MobileChatHeader from "./MobileChatHeader/MobileChatHeader";
import style from "./mobile_chat.module.scss"
import AdvertisementComponent from "../../ChatPage/ActiveDialog/ActiveDialogComponents/AdvertisementComponent";
import ChatNavBarContainer from "../../ChatPage/NavBar/ChatNavBarContainer";
import CurrentDialogContainer from "../../ChatPage/ActiveDialog/Dialogs/CurrentDialogContainer";
import { useRef } from "react";
import { useLoadingMessages } from "../../ChatPage/LoadingMessagesContext/useLoadingMessages";
import { useEffect } from "react";

const MobileCurrentChat = ({messages, me, talk, connectedUsers, advert}) => {
    const messagesLent = useRef(null)
    const {loadingMessages} = useLoadingMessages()
    useEffect(() => {
        if(messagesLent.current) messagesLent.current.scrollTop = messagesLent.current.scrollHeight
    }, [messagesLent.current, messages, loadingMessages])

    return (
        <>
            <div className={`${style.chatBody} chat-mobile-elem`}>
                    <MobileChatHeader {...{talk, connectedUsers}} />
                
                
                
                <div className={`container ${style.dialogMain}`} ref={messagesLent}>
                        <AdvertisementComponent {...{talk, advert, me}} />
                    
                        <MobileMessages {...{messages, me}} />
                </div>

                <ChatInput  />
            </div>
        </>
    );
}

export default MobileCurrentChat;