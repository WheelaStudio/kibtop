import Link from "next/link";
import style from "../nav_bar.module.scss"
import VerifiedAccFlag from "../../ChatComponents/ChatStatuses/VerifiedAccFlag";
import Relative from "../../../Elementes/Relative/Relative";


const SearchMessage = ({author, chatId, text, time, messageId, search}) => {
    return (
        <>
            <Link href={`/chat/${chatId}/?search=${messageId}`} className={style.dialogWarpper}>
                <div className={style.dialog}>
                        {
                            !!author?.avatar ? <>
                                <img className={style.avatar} src={ author.avatar }></img>
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
                                    { author?.name }
                                    { author?.isVerified && <VerifiedAccFlag /> }
                                </h5>
                                
                                <span className={style.time}>
                                    {/* {(!!last && author?.authorId === me.userId) &&  <ReadUserMessage isReadMessage={last.isRead} /> } */}
                                    <span>
                                        { time }
                                    </span>
                                </span>
                            </div>

                            {/* This part contains the part of the last message and their unread status */}
                            <div className={style.content}>
                                <p className={style.text}>
                                     {
                                        text.split(search).map((words, index) => {
                                            return <Relative key={index}>
                                                {index > 0 && <span style={{color: '#7AB1FF', fontWeight: 700}}>{search}</span>}
                                                {words}
                                            </Relative>
                                        })
                                     }
                                </p>
                                
                                {/* { (!!last && !last.isRead && last.authorId !== me.userId) && <div className={style.number}>{unread}</div> } */}
                                
                            </div>
                        </div>
                </div>
            </Link>
        </>
    );
}

export default SearchMessage;