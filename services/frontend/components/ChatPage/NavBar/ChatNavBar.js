import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChatApi } from '../../../services/ChatApi';
import Text from '../../Elementes/Text/Text';

import ChatSearch from "../ChatComponents/ChatInputs/ChatSearch";
import NavBarDialogComponent from "./NavBarDialogComponent";
import SearchMessage from './SearchMessage/SearchMessage';

const ChatNavBar = ({extraClass, data, connectedUsers}) => {
    const {userId} = useSelector(state => state.auth)
    const [search, setSearch] = useState('')

    const searchMessages = useMutation({
        mutationFn: search => ChatApi.searchMessages(userId, search)
    })

    const onChange = e => {
        const input = e.target.value
        setSearch(input)
        
        if(!searchMessages.isLoading) searchMessages.mutate(input)
    }


    return (
        <div className={`chat-navbar ${extraClass}`}>
            <ChatSearch control={{onChange, value: search}} />
                <div className="chat-container">
                    {
                        (!!searchMessages.data && !!search) ? <>
                            <p className='search_msg-results'><Text content={"Searching results"} /></p>
                            {
                                searchMessages.data.map((message, index) => <SearchMessage key={index} {...message} search={search} />)
                            }
                        </> : <>
                            {data?.map((chat, index) => (<NavBarDialogComponent key={index} connectedUsers={connectedUsers.data} {...chat} />))}
                        </>
                    }
                </div>

        </div>
);
}

export default ChatNavBar;