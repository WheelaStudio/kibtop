import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { ChatApi } from "../../../../services/ChatApi";
import RenderReadingCheckmarks from "./RenderReadingCheckmarks";


function MessageComponent({ message, me}) {
    const messagePlace = useRef();

    const {query: {search}} = useRouter()

    useEffect(()=>{
        if( !!search && message.messageId === +search) {
            console.log('perform');
            
            setTimeout(() => {
                messagePlace.current?.scrollIntoView({
                    block: 'center'
                })
                console.dir(messagePlace.current);
                messagePlace.current.classList.add('message_active')
                setTimeout(() => messagePlace.current.classList.remove('message_active'), 700)
            })
        }
        
    }, [messagePlace, search]);
    

    return (
        <div className={"message " + (message.authorId === me.userId ? 'message__user' : 'message__seller')} ref={messagePlace}>

            {
                message.type === 'text' ? <>
                    <div className={'message-style ' + (message.authorId === me.userId ? 'message-style__user' : 'message-style__seller')}>
                        <p>{message.text}</p>
                    </div>
                </> : <>
                        <div className={"media-message " + (message.authorId === me.userId ? 'message-img__user' : 'message-img__seller')} 
                                >
                                {
                                    message.type === 'img' ? <>                                    
                                        <img src={message.file} className={"message-img "} alt="" />
                                    </>  : <>
                                        <video className={"message-img "} controls={true}>
                                            <source src={message.file} />
                                        </video>
                                    </>
                                }
                                
                                {!!message.text && <p className="message-text-content">{message.text}</p>}
                        </div>
                        
                    
                </>
            }
            <div className="message__time" style={message.authorId === me.userId?{textAlign:'right'}:{textAlign:'left'}}>
                {
                    message.authorId === me.userId && <RenderReadingCheckmarks isLoading={message.isLoading} isRead={message.isRead} />
                }
                { message.time }
            </div>
        </div>
    );
}

export default MessageComponent;