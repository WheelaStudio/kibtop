import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import VerifiedAccFlag from "../../ChatComponents/ChatStatuses/VerifiedAccFlag";
import CurrentDialogContainer from "../Dialogs/CurrentDialogContainer";
import AdvertisementComponent from "./AdvertisementComponent";
import HeaderButton from "./_HeaderComponents/HeaderButton";
import LogoComponent from "./_HeaderComponents/LogoComponent";
import UsernameComponent from "./_HeaderComponents/UsernameComponent";

function ChatHeader({talk, connectedUsers }) {

    const seller = talk || {}
    console.log(seller);
    return (
            <div className="dialog-header">
                <LogoComponent photo={seller.avatar}/>

                <UsernameComponent username={seller.name} isVerified={seller.isVerified} online={connectedUsers?.includes(seller.userId)}/>
            
                <HeaderButton condition={true} sellerId={seller.userId} isVerified={seller.isVerified} />


                <CurrentDialogContainer>
                    <AdvertisementComponent />
                </CurrentDialogContainer>
            </div>
            );

}

export default ChatHeader;