import { useEffect, useRef } from "react";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import DealClaims from "../../ChatComponents/DealClaims";
import MediaModal from "../../ChatComponents/MediaModal/MediaModal";
import VoidDialog from "../Dialogs/VoidDialog";
import MessageComponent from "./MessageComponent";
import style from "./message.module.scss"
import AdvertisementComponent from "./AdvertisementComponent";
import CurrentDialogContainer from "../Dialogs/CurrentDialogContainer";
import { chunkMessagesByDate } from "../../../../services/tools/serializers/ChatSerializers";
import Relative from "../../../Elementes/Relative/Relative";
import LoadingMessages from "./LoadingMessages";
import { ChatApi } from "../../../../services/ChatApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_DIALOGS } from "../../../../services/QueryClient/ChatQueries";
import { useLoadingMessages } from "../../LoadingMessagesContext/useLoadingMessages";


function MessagePlace({messages, me}) {
    const {t} = useLanguage();
    const messagesLent = useRef(null)

    const {loadingMessages} = useLoadingMessages()

    useEffect(() => {
        if(messagesLent.current) messagesLent.current.scrollTop = messagesLent.current.scrollHeight
    }, [messagesLent.current, messages, loadingMessages])

    const queryClient = useQueryClient()

    const updateMessageReaded = useMutation({
        mutationFn: (messages) => ChatApi.updateMessagesAsReaded(messages),
        onSuccess: () => queryClient.invalidateQueries(QUERY_DIALOGS)
    })

    useEffect(() => {
        if(!messages) return 

        const onlyUnreadIds = messages.filter(msg => !msg.isRead && msg.authorId !== me.userId).map(msg => msg.messageId)
        if(onlyUnreadIds?.length > 0) updateMessageReaded.mutate(onlyUnreadIds)

    }, [messages])

    return (
        // <div className="dialog-container">
        //     <div className="chat-main"> 
                
        //         {/* <DealClaims /> */}
        //         <div style={{height: 50}}></div>
        //     </div>
        // </div>

        <div className={style.dialog} ref={messagesLent}>
            <div className={style.messages} >
                {
                    !messages?.length
                        ?
                        <VoidDialog />  
                        :
                        <>
                            {
                                chunkMessagesByDate(messages).map((msgChunk, index) =>
                                    <Relative key={index}>
                                        <p className="dialog-day">{msgChunk[0]}</p>
                                        {msgChunk[1].map((message, index) => <MessageComponent key={index} {...{message, me}}/>)}
                                    </Relative>
                                )
                            }
                            <LoadingMessages />
                        </>
                }

                
            </div>
        </div>
    );
}

export default MessagePlace;