import { useContext } from "react"
import { LoadingMessagesContext } from "./LoadingMessagesContext"

export const useLoadingMessages = () => {
    const {loadingMessages, setLoadingMessages} = useContext(LoadingMessagesContext)

    const removeFromLoading = (message) => {
        setLoadingMessages(oldLoadingMessages => {
            let removingIndex
            for (let i = 0; i < oldLoadingMessages.length; i++) {
                const loadingMessage = oldLoadingMessages[i];
                if(loadingMessage?.text === message?.text) {
                    removingIndex = i
                    break
                }
            }
            return oldLoadingMessages.filter((msg, index) => index !== removingIndex)
        })
    }

    const addToLoading = (message) => {
        setLoadingMessages(oldLoadingMessages => [...oldLoadingMessages, message])
    }

    return {loadingMessages, removeFromLoading, addToLoading}
}
