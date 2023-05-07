import CurrentDialog from "../ChatPage/ActiveDialog/Dialogs/CurrentDialog";
import CurrentDialogContainer from "../ChatPage/ActiveDialog/Dialogs/CurrentDialogContainer";
import ChatNavBar from "../ChatPage/NavBar/ChatNavBar";
import ChatNavBarContainer from "../ChatPage/NavBar/ChatNavBarContainer";
import DialogPlace from "../ChatPage/PageParts/DialogPlace";
import SubTitle from "../ChatPage/PageParts/Subtitle";
import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import MobileCurrentChat from "./MobileCurrentChat/MobileCurrentChat";

const CurrentChatPage = () => {
    return (
        <>
            <div className="chat-desktop-elem">
                <Header />
                <HeaderService />
                <div className="main main-chat">
                    <SubTitle />
                    <div className="container chat-place">  
                        <ChatNavBarContainer>
                            <ChatNavBar extraClass={'chat-desktop-elem'} />
                        </ChatNavBarContainer>

                    
                            <CurrentDialog /> 
                        
                    </div>
                </div>
            </div>
            <CurrentDialogContainer>
                <MobileCurrentChat />

            </CurrentDialogContainer>

            
           
        </>
    );
}

export default CurrentChatPage;