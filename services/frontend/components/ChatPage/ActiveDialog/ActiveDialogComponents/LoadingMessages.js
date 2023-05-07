import { useSelector } from "react-redux";
import { useLoadingMessages } from "../../LoadingMessagesContext/useLoadingMessages";
import MessageComponent from "./MessageComponent";

const LoadingMessages = () => {
    const {loadingMessages} = useLoadingMessages()
    const {userId} = useSelector(state => state.auth)
    return (
        <>
            {
                loadingMessages.map((message, index) => <MessageComponent key={index} {...{message, me: {userId}}}/>)
            }
        </>
    );
}

export default LoadingMessages;