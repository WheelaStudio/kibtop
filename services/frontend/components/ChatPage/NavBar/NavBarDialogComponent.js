import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';

import VerifiedAccFlag from "../ChatComponents/ChatStatuses/VerifiedAccFlag";
import UnreadMessages from "../ChatComponents/ChatStatuses/UnreadMessages";
import ReadUserMessage from '../ChatComponents/ChatStatuses/ReadUserMessage';
import { applingActive } from "../../../store/slices/MessagesSlice";
import { useState } from "react";
import { useRouter } from "next/router";
import style from "./nav_bar.module.scss"
import Text from "../../Elementes/Text/Text";
import { QUERY_CONNECTED_USERS } from "../../../services/QueryClient/ChatQueries";

const NavBarDialogComponent = ({chatId, talk, messages, me, unread, last, connectedUsers}) => {
    const {query} = useRouter()
    const isActiveChat = chatId === +query.chatId

    return (
        <Link href={`/chat/${chatId}`} className={style.dialogWarpper} style={isActiveChat ? {backgroundColor: 'rgba(122, 177, 255, 0.2)'} : {}}>
            <div className={style.dialog}>
                    {
                        !!talk?.avatar ? <>
                            <img className={style.avatar} src={ talk.avatar }></img>
                        </> : <>
                            <svg className={style.avatar} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 36.4511 49.1441 44.768 41.7911 49.5918C40.5524 41.8893 33.9556 36.0089 26 36C18.4805 36.0085 12.1748 41.2625 10.4602 48.3426C4.09585 43.4032 0 35.6799 0 27ZM25.5 33C31.299 33 36 28.0751 36 22C36 15.9249 31.299 11 25.5 11C19.701 11 15 15.9249 15 22C15 28.0751 19.701 33 25.5 33Z" fill="white" fillOpacity="0.6"/>
                            </svg>
                        </>
                    }

                    {/* It is part with another payload (like username, last message date and another) */}
                    <div className={style.dialogDatail}>

                        {/* This part contains username, verify star and date of last message */}
                        <div className={style.dialogHead}>
                            <h5 className={style.title}>
                                { talk.name }
                                { talk.isVerified && <VerifiedAccFlag /> }
                                {
                                    connectedUsers?.includes(talk.userId) && <>
                                            <svg className={style.online} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="10" height="10" rx="5" fill="#71CD96"/>
                                            </svg>
                                        </>
                                }
                            </h5>
                            
                            <span className={style.time}>
                                {(!!last && last.authorId === me.userId) &&  <ReadUserMessage isReadMessage={last.isRead} /> }
                                <span>
                                    { last?.time }
                                </span>
                            </span>
                        </div>

                        {/* This part contains the part of the last message and their unread status */}
                        <div className={style.content}>
                            <p className={style.text}>
                                {
                                    !!last && <>
                                        {
                                            last.type === 'text' ? last.text :
                                            last.type === 'img' ? <Text content="Photo" /> : <Text content="Video" />
                                        }
                                    </>
                                }
                            </p>
                            
                            { (!!last && !last.isRead && last.authorId !== me.userId) && <div className={style.number}>{unread}</div> }
                            
                        </div>
                    </div>
            </div>
        </Link>
    );
} 

export default NavBarDialogComponent;