import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";

import SubTitle from './PageParts/Subtitle'
import DialogPlace from "./PageParts/DialogPlace";

import { useEffect, useState } from "react";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { useRouter } from "next/router";
import { BASE_URL } from "../../services/Instance";
import { Cookies } from "../../services/tools/CookieController";
import ChatNavBar from "./NavBar/ChatNavBar";
import ActiveDialog from "./ActiveDialog/ActiveDialog";
import VoidDialog from "./ActiveDialog/Dialogs/VoidDialog";
import ModileChatsNav from "./ModileChatsNav/ModileChatsNav";
import ChatNavBarContainer from "./NavBar/ChatNavBarContainer";


const Chat = ({categoryAdverts, pages}) => {
    const {t} = useLanguage();
    const router = useRouter();    


    try {
        // const socket = new WebSocket(`ws://127.0.0.1:8000/?token=${Cookies.getCookies('access')}`)
        // socket.onopen = (e) => console.log('прив');
        // socket.onmessage = (e) => console.log(e);
    } catch(e) {
        console.log(e);
    }




    return (
        <>
            <div className="chat-desktop-elem">
                <Header />
                <HeaderService />
                <div className="main">
                    <SubTitle />
                
                    <div className="container chat-place center-void">
                        <ChatNavBarContainer>
                            <ChatNavBar />
                        </ChatNavBarContainer>

                        <div className="place-chat void">
                            <VoidDialog />
                        </div>
                        
                    </div>
                </div>
            </div>
            <ChatNavBarContainer>
                <ModileChatsNav />
            </ChatNavBarContainer>
            
        </> 
            
        
    );
}

export default Chat;