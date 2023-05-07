import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../../services/ChatApi";
import { QUERY_DETAIL_DIALOG } from "../../../../services/QueryClient/ChatQueries";
import { queryClient } from "../../../../services/QueryClient/QueryClient";
import { getHumanDate, serializeMessageForm } from "../../../../services/tools/serializers/ChatSerializers";
import { sleep } from "../../../../store/slices/SearchSlice";
import { useLoadingMessages } from "../../LoadingMessagesContext/useLoadingMessages";

const useCreateMessage = () => {
    const {userId} = useSelector(state => state.auth)
    const {query: {chatId}, locale} = useRouter()

    const queryClient = useQueryClient()
    const {addToLoading} = useLoadingMessages()

    const createMessageMutation = useMutation(
        {
            mutationFn: (data) => ChatApi.createMessage({...data, userId, chatId}),
            onMutate: async message => {

                const [dateDay, time, datetime] = getHumanDate(+new Date(), locale)
                const serializedMessage = serializeMessageForm(message)
                
                const loadingMessage = {
                    messageId: (+new Date()).toString(16),
                    type: serializedMessage.get('type'),
                    ...message,
                    text: message.text || null,
                    authorId: userId,
                    chatId,
                    dateDay, time, datetime,
                    isLoading: true,
                    isRead: true,
                    file: !!serializedMessage.get('file') ? window.URL.createObjectURL(serializedMessage.get('file')) : null
                }


                addToLoading(loadingMessage)

                // queryClient.setQueryData(
                //     [QUERY_DETAIL_DIALOG, {locale, chatId, userId}], 
                //     old => ({...old, messages: [...old.messages, loadingMessage]}),
                    
                // )

                return {loadingMessage}
            },

            onSuccess: async (data, variables, context) => { 
                queryClient.invalidateQueries(QUERY_DETAIL_DIALOG)
            }
        }
    )

    return createMessageMutation.mutate
}

export default useCreateMessage;