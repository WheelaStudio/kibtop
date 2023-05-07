import ChatHeader from "../ActiveDialogComponents/ChatHeader";
import ChatInput from "../../ChatComponents/ChatInputs/ChatInput";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import VoidDialog from "./VoidDialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageComponent from "../ActiveDialogComponents/MessageComponent";
import AdvertisementComponent from "../ActiveDialogComponents/AdvertisementComponent";
import { append, set } from '../../../../store/slices/CurrentDialogSlice';
import MessagePlace from "../ActiveDialogComponents/MessagePlace";
import { useRouter } from "next/router";
import MediaModal from "../../ChatComponents/MediaModal/MediaModal";
import CurrentDialogContainer from "./CurrentDialogContainer";

const CurrentDialog = () => {
 

  
    return (
        <>
            <CurrentDialogContainer>
                <ChatHeader />
            </CurrentDialogContainer>
        
            <CurrentDialogContainer>
                <MessagePlace />
            </CurrentDialogContainer>
            
            <ChatInput  />
        </>
    );
}


export default CurrentDialog;


function fetchDialogByChatId(chatId) {
    // hard fetching with grapthQl

    const re = new RegExp(/[,\n ]/g);
        
    let a = `fgd sdfg dfg qwer gkmwe fgl;kdfg hwle hrgljw hedfg hjwefl khgjdflkghj hsdlkf`.replace(re, ' ').split(' ').filter((value, index, arr)=>{return value !== ''})

    let messages = [];
    const date = new Date();

    for (let i in a) {
        messages.push({
            id: i,
            text: a[i],
            owner: i%2==0 ? 'you' : 'seller',  
            time: date.toISOString(),
        }) 
    }

    messages[7] = {
        newDate: 'January 1000'
    }

    return messages;
}