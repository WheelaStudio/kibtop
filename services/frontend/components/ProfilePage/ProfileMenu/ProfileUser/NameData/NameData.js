import Link from "next/link";
import Image from "next/image"


const NameData = ({avatar, name, phone}) => {
    return (
        <>
            <div className="user__wrapper name-data">
                {
                    !!avatar ? <img width={100} height={100} alt={''} src={avatar} className="user__ava" /> 
                             : <Link href="/profile/edit" >
                                    <svg className="user__ava" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 36.4511 49.1441 44.768 41.7911 49.5918C40.5524 41.8893 33.9556 36.0089 26 36C18.4805 36.0085 12.1748 41.2625 10.4602 48.3426C4.09585 43.4032 0 35.6799 0 27ZM25.5 33C31.299 33 36 28.0751 36 22C36 15.9249 31.299 11 25.5 11C19.701 11 15 15.9249 15 22C15 28.0751 19.701 33 25.5 33Z" fill="white" fillOpacity="0.6"/>
                                    </svg>
                                </Link>
                }
                

                <div className="user__data">
                    <p className="user__name">{name}</p>
                    {!!phone && <p className="user__phone">{phone}</p>}
                </div>
            </div>

        </>
    );
}

export default NameData;