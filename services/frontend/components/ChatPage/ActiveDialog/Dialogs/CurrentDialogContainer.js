import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../../services/ChatApi";
import { QUERY_CONNECTED_USERS, QUERY_DETAIL_DIALOG, QUERY_DIALOGS } from "../../../../services/QueryClient/ChatQueries";
import { addPropsToReactElement } from "../../../Utils/Utils";
import { useLoadingMessages } from "../../LoadingMessagesContext/useLoadingMessages";

const CurrentDialogContainer = ({children}) => {
    const {locale, query: {chatId}} = useRouter()
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {removeFromLoading} = useLoadingMessages()
    const queryClient = useQueryClient()

    const connectedUsers = useQuery(
        [QUERY_CONNECTED_USERS], 
        () => ChatApi.getConnectedUsers(),
        {
            enabled: isAuthed
        }
    )

    const {data} = useQuery(
        [QUERY_DETAIL_DIALOG, {locale, chatId, userId}],
        () => ChatApi.getUserDialogDetail(chatId, userId, locale),
        {
            enabled: !!userId && isAuthed,
            onSuccess: data => {
                const userMessages = data.messages.filter(msg => msg.authorId === userId)
                removeFromLoading(userMessages[userMessages.length - 1])
            }
        }
    )

    

    return (
        <>
            {addPropsToReactElement(children, {...data, connectedUsers: connectedUsers.data})}
        </>
    );
}

export default CurrentDialogContainer;