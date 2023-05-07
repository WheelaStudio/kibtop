import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../services/ChatApi";
import { QUERY_CONNECTED_USERS, QUERY_DIALOGS } from "../../../services/QueryClient/ChatQueries";
import { addPropsToReactElement } from "../../Utils/Utils";

const ChatNavBarContainer = ({children}) => {
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {locale} = useRouter()
    const {data} = useQuery(
                            [QUERY_DIALOGS, userId, locale], 
                            () => ChatApi.getUserDialogs(userId, locale),
                            {
                                enabled: !!userId
                            }
                        )

const connectedUsers = useQuery(
                            [QUERY_CONNECTED_USERS], 
                            () => ChatApi.getConnectedUsers(),
                            {
                                enabled: isAuthed
                            }
                        )
    
    return (
        <>
            {addPropsToReactElement(children, {data, connectedUsers})}
        </>
    );
}

export default ChatNavBarContainer;