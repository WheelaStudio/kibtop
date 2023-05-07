import ChatNavBar from "../NavBar/ChatNavBar";

import ActiveDialog from "../ActiveDialog/ActiveDialog";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const DialogPlace = () => {
    const {t} = useLanguage();
    const router = useRouter();

    return (
        <div className="container chat-place">  
            <ChatNavBar />

        
            {/* <div className="place-chat chat__active" style={{display: "grid"}}>
                <CurrentDialog mediaModalActivity={mediaModalActivity} setMediaModalActivity={setMediaModalActivity} /> 
            </div> */}
            
        </div>
    );
}

export default DialogPlace;