import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { ChatApi } from "../../../services/ChatApi";

const SubTitle = () => {
    const {t} = useLanguage();
    const supportTitle = useRef();
    const {push} = useRouter()
    
    const {mutate, isLoading, isSuccess} = useMutation({
        mutationFn: () => ChatApi.getSupportChat(push)
    })

    return (
        <div className="container subtitle font">
            <div className="subtitle-text__main">{t('Chats')}</div>
            <div className="subtitle-go-back">
                <Link href="/" className="chat-desktop-elem">
                        <svg className="subtitle-vector__go-back" width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.25199C9.9997 1.58377 9.86606 1.90186 9.62844 2.13633L3.14972 8.53693C2.95362 8.73061 2.79806 8.96056 2.69193 9.21365C2.5858 9.46673 2.53118 9.73799 2.53118 10.0119C2.53118 10.2859 2.5858 10.5571 2.69193 10.8102C2.79806 11.0633 2.95362 11.2933 3.14972 11.4869L9.61999 17.8792C9.85073 18.1152 9.97841 18.4313 9.97552 18.7595C9.97264 19.0876 9.83942 19.4014 9.60456 19.6335C9.36971 19.8655 9.052 19.9971 8.71988 20C8.38776 20.0028 8.06779 19.8767 7.82889 19.6487L1.35861 13.2615C0.488615 12.4003 0 11.2332 0 10.0165C0 8.7998 0.488615 7.63279 1.35861 6.77159L7.83733 0.366817C8.01448 0.191688 8.24024 0.0724106 8.48603 0.0240773C8.73182 -0.024256 8.9866 0.000527255 9.21813 0.0952911C9.44966 0.190055 9.64753 0.35054 9.78671 0.55644C9.92589 0.762339 10.0001 1.0044 10 1.25199Z" fill="#7AB1FF"/>
                        </svg> 
                        <span className="subtitle-go-back__text">{t('Go back to the main page')}</span>
                        
                </Link>
                <button onClick={mutate} disabled={isLoading} className="chat-mobile-elem">
                        <span className="subtitle-go-back__text" style={{paddingRight: 8}}>{t('Support')}</span>
                        <svg className="subtitle-vector__go-back" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.19924 21C5.75247 21 6.28303 20.7787 6.67422 20.3849C7.06541 19.9911 7.28517 19.457 7.28517 18.9V12.6C7.28517 12.043 7.06541 11.5089 6.67422 11.1151C6.28303 10.7212 5.75247 10.5 5.19924 10.5V9.45C5.19924 7.50066 5.96843 5.63116 7.33758 4.25276C8.70674 2.87437 10.5637 2.1 12.5 2.1C14.4363 2.1 16.2933 2.87437 17.6624 4.25276C19.0316 5.63116 19.8008 7.50066 19.8008 9.45V10.5C19.2475 10.5 18.717 10.7212 18.3258 11.1151C17.9346 11.5089 17.7148 12.043 17.7148 12.6V18.9H14.5859C14.3093 18.9 14.044 19.0106 13.8484 19.2075C13.6528 19.4044 13.543 19.6715 13.543 19.95C13.543 20.2285 13.6528 20.4955 13.8484 20.6925C14.044 20.8894 14.3093 21 14.5859 21H19.8008C20.996 20.9964 22.1538 20.5795 23.0802 19.8192C24.0066 19.0589 24.6455 18.0013 24.8898 16.8234C25.1342 15.6455 24.9692 14.4188 24.4225 13.3487C23.8758 12.2786 22.9806 11.4301 21.8867 10.9452V9.45C21.8867 6.9437 20.8977 4.54006 19.1374 2.76784C17.377 0.995622 14.9895 0 12.5 0C10.0105 0 7.62295 0.995622 5.86261 2.76784C4.10226 4.54006 3.11331 6.9437 3.11331 9.45V10.9452C2.01941 11.4301 1.12417 12.2786 0.577469 13.3487C0.0307682 14.4188 -0.13421 15.6455 0.110153 16.8234C0.354517 18.0013 0.993388 19.0589 1.91982 19.8192C2.84624 20.5795 4.00399 20.9964 5.19924 21Z" fill="#7AB1FF"/>
                        </svg>

    
                </button>
            </div>
        </div>
    );
}

export default SubTitle;