import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../services/ChatApi";
import Text from "../../Elementes/Text/Text";
import Header from "../../Header/Header";
import HeaderService from "../../Header/HeaderService/HeaderService";
import ChatSearch from "../ChatComponents/ChatInputs/ChatSearch";
import ChatNavBar from "../NavBar/ChatNavBar";
import NavBarDialogComponent from "../NavBar/NavBarDialogComponent";
import SearchMessage from "../NavBar/SearchMessage/SearchMessage";
import SubTitle from "../PageParts/Subtitle";
import style from "./chat_nav.module.scss"

const ModileChatsNav = ({data, connectedUsers}) => {
    const queryClient = useQueryClient()
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
        <>  
                <Header />

            <div className={`${style.navBody} chat-mobile-elem`}>
                <HeaderService />
                    <SubTitle />

                    <ChatSearch control={{onChange, value: search}} isSerching={!!search && !!searchMessages.data} cancel={() => {
                        setSearch('')
                    }} />

                
                    <div className={`container ${style.navWrapper}`}>
                            <div className={style.chatsLent}>
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
            </div>
        </>
    );
}

export default ModileChatsNav;