import Head from "next/head";
import { useEffect } from "react";
import VoidDialog from "../../components/ChatPage/ActiveDialog/Dialogs/VoidDialog";
import Chat from "../../components/ChatPage/Chat";
import LoadingMessagesProvider from "../../components/ChatPage/LoadingMessagesContext/LoadingMessagesContext";
import CurrentChatPage from "../../components/CurrentChatPage/CurrentChatPage";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import { useLanguage } from "../../locales/hooks/useLanguage";




const Chats = () => {
    const {t} = useLanguage()

    const title = `Kibtop - ${t('Profile')}`
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kibtop.com" />
                <meta property="og:image" content="https://kibtop.com/img/kibtop.png" />
            </Head>
            <LoadingMessagesProvider>
                <CurrentChatPage />
            </LoadingMessagesProvider>
        </>
    );
}

export default Chats;