import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import Text from "../../../Elementes/Text/Text";

const DetailCard = ({cost, isMonth, phone, currency, createDialog, ChatExist}) => {
    const cur = useCurrency()
    const {query: {category, advertId}, pathname} = useRouter()
    


    const isMounthed = (category === 'work') || (category === 'realty' && isMonth)

    return (
        <>
            <div className="detail-card">
                <div className="detail-card__wrapper">
                    <p className="detail-card__cost">
                        {cur.currency}{cur.countCurrencyPrice(cost, currency)}
                        {' '}
                        {
                            !!isMounthed && <span className="detail-tag-text"><Text content="per month" /></span>
                        }
                    </p>

                    <Link href={!!phone ? `https://api.whatsapp.com/send/?phone=${phone.replace(/[\(\)\s-\+]/g, '')}` : {pathname, query: {category, advertId}}} className="contact-btn contact-btn--green">
                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.6303 4.36C22.8093 1.55 19.0588 0.00125 15.0634 0C6.83023 0 0.12937 6.6675 0.125602 14.865C0.124346 17.485 0.812644 20.0425 2.12016 22.2975L0 30L7.91794 27.9325C10.0996 29.1175 12.5564 29.7413 15.0559 29.7425H15.0622C23.2941 29.7425 29.9962 23.0737 30 14.8763C30.0025 10.905 28.4501 7.16875 25.6303 4.36ZM15.0634 27.2313H15.0584C12.8302 27.2313 10.646 26.635 8.73938 25.5087L8.28595 25.2413L3.58719 26.4675L4.84195 21.9075L4.54679 21.44C3.30333 19.4725 2.64769 17.1987 2.64894 14.865C2.65145 8.0525 8.2219 2.51 15.0697 2.51C18.3856 2.51 21.503 3.7975 23.8468 6.1325C26.1905 8.46875 27.4804 11.5725 27.4792 14.8738C27.4754 21.6888 21.9062 27.2313 15.0634 27.2313ZM21.8736 17.9775C21.5005 17.7913 19.6655 16.8925 19.3226 16.7687C18.9809 16.645 18.7323 16.5825 18.4823 16.9538C18.2324 17.325 17.5189 18.1625 17.3004 18.4113C17.0831 18.6588 16.8646 18.69 16.4915 18.5037C16.1185 18.3175 14.9152 17.9263 13.4896 16.66C12.3806 15.675 11.6307 14.4587 11.4134 14.0863C11.1961 13.7137 11.3908 13.5138 11.5767 13.3288C11.745 13.1625 11.9498 12.895 12.1369 12.6775C12.3253 12.4625 12.3869 12.3075 12.5125 12.0588C12.6368 11.8113 12.5753 11.5938 12.4811 11.4075C12.3869 11.2225 11.6408 9.39375 11.3305 8.65C11.0278 7.925 10.7201 8.02375 10.4903 8.0125C10.273 8.00125 10.0243 8 9.77433 8C9.52564 8 9.1212 8.0925 8.77957 8.465C8.43793 8.8375 7.47331 9.73625 7.47331 11.5638C7.47331 13.3925 8.81097 15.1587 8.99686 15.4062C9.18275 15.6537 11.6282 19.4062 15.3724 21.015C16.2629 21.3975 16.9588 21.6262 17.5001 21.7975C18.3944 22.08 19.2083 22.04 19.8514 21.945C20.5686 21.8387 22.0595 21.0462 22.3709 20.1787C22.6824 19.3112 22.6824 18.5662 22.5882 18.4125C22.4953 18.2562 22.2466 18.1637 21.8736 17.9775Z" fill="white"/>
                        </svg>

                        <Text content="Write to WhatsApp" />
                    </Link>
                    
                    {
                        ChatExist.chatHref ? <>
                            <Link className="contact-btn contact-btn--blue" href={ChatExist.chatHref} >
                                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_646_8201)">
                                        <path d="M30 20.0008V26.2508C30 27.2453 29.6049 28.1992 28.9017 28.9024C28.1984 29.6057 27.2446 30.0008 26.25 30.0008H20C18.2464 29.999 16.524 29.5361 15.0058 28.6585C13.4876 27.7809 12.2268 26.5195 11.35 25.0008C12.2923 24.994 13.2315 24.8902 14.1525 24.6908C14.8539 25.5678 15.7437 26.2758 16.756 26.7622C17.7682 27.2487 18.8769 27.5011 20 27.5008H26.25C26.5815 27.5008 26.8995 27.3691 27.1339 27.1347C27.3683 26.9002 27.5 26.5823 27.5 26.2508V20.0008C27.4997 18.8773 27.2465 17.7683 26.7592 16.7561C26.2719 15.7438 25.563 14.8542 24.685 14.1533C24.8861 13.2324 24.9916 12.2933 25 11.3508C26.5187 12.2276 27.7801 13.4884 28.6577 15.0066C29.5353 16.5248 29.9982 18.2472 30 20.0008ZM22.4712 12.0645C22.5882 10.4541 22.357 8.83733 21.7936 7.32415C21.2301 5.81097 20.3475 4.43681 19.2057 3.29505C18.064 2.15329 16.6898 1.27069 15.1766 0.707223C13.6634 0.143754 12.0467 -0.0873805 10.4362 0.0295267C7.58239 0.355442 4.94616 1.7135 3.02397 3.84796C1.10178 5.98241 0.0262839 8.74599 0 11.6183L0 17.9183C0 21.0833 1.88375 22.5008 3.75 22.5008H10.875C13.7485 22.476 16.5138 21.4013 18.6497 19.479C20.7857 17.5567 22.1449 14.9196 22.4712 12.0645ZM17.4375 5.06453C18.3249 5.95391 19.0109 7.02353 19.4492 8.20101C19.8874 9.3785 20.0676 10.6364 19.9775 11.8895C19.7107 14.1191 18.6381 16.1743 16.9617 17.6682C15.2852 19.1621 13.1205 19.9917 10.875 20.0008H3.75C2.59 20.0008 2.5 18.407 2.5 17.9183V11.6183C2.51042 9.37375 3.34081 7.21041 4.8349 5.53538C6.32898 3.86034 8.38374 2.78911 10.6125 2.52328C10.82 2.50828 11.0275 2.50078 11.235 2.50078C12.3866 2.4997 13.5271 2.72557 14.5914 3.16547C15.6556 3.60538 16.6227 4.25069 17.4375 5.06453Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_646_8201">
                                            <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>


                                <Text content="Write in chat" />
                            </Link>
                        </> : <>
                            <button onClick={createDialog.mutate} className="contact-btn contact-btn--blue" disabled={ChatExist.isDisabled} >
                                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_646_8201)">
                                        <path d="M30 20.0008V26.2508C30 27.2453 29.6049 28.1992 28.9017 28.9024C28.1984 29.6057 27.2446 30.0008 26.25 30.0008H20C18.2464 29.999 16.524 29.5361 15.0058 28.6585C13.4876 27.7809 12.2268 26.5195 11.35 25.0008C12.2923 24.994 13.2315 24.8902 14.1525 24.6908C14.8539 25.5678 15.7437 26.2758 16.756 26.7622C17.7682 27.2487 18.8769 27.5011 20 27.5008H26.25C26.5815 27.5008 26.8995 27.3691 27.1339 27.1347C27.3683 26.9002 27.5 26.5823 27.5 26.2508V20.0008C27.4997 18.8773 27.2465 17.7683 26.7592 16.7561C26.2719 15.7438 25.563 14.8542 24.685 14.1533C24.8861 13.2324 24.9916 12.2933 25 11.3508C26.5187 12.2276 27.7801 13.4884 28.6577 15.0066C29.5353 16.5248 29.9982 18.2472 30 20.0008ZM22.4712 12.0645C22.5882 10.4541 22.357 8.83733 21.7936 7.32415C21.2301 5.81097 20.3475 4.43681 19.2057 3.29505C18.064 2.15329 16.6898 1.27069 15.1766 0.707223C13.6634 0.143754 12.0467 -0.0873805 10.4362 0.0295267C7.58239 0.355442 4.94616 1.7135 3.02397 3.84796C1.10178 5.98241 0.0262839 8.74599 0 11.6183L0 17.9183C0 21.0833 1.88375 22.5008 3.75 22.5008H10.875C13.7485 22.476 16.5138 21.4013 18.6497 19.479C20.7857 17.5567 22.1449 14.9196 22.4712 12.0645ZM17.4375 5.06453C18.3249 5.95391 19.0109 7.02353 19.4492 8.20101C19.8874 9.3785 20.0676 10.6364 19.9775 11.8895C19.7107 14.1191 18.6381 16.1743 16.9617 17.6682C15.2852 19.1621 13.1205 19.9917 10.875 20.0008H3.75C2.59 20.0008 2.5 18.407 2.5 17.9183V11.6183C2.51042 9.37375 3.34081 7.21041 4.8349 5.53538C6.32898 3.86034 8.38374 2.78911 10.6125 2.52328C10.82 2.50828 11.0275 2.50078 11.235 2.50078C12.3866 2.4997 13.5271 2.72557 14.5914 3.16547C15.6556 3.60538 16.6227 4.25069 17.4375 5.06453Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_646_8201">
                                            <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>


                                <Text content="Write in chat" />
                            </button>
                        </>
                    }
                    
                </div>
            </div>
        </>
    );
}

export default DetailCard;