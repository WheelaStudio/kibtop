import Link from "next/link";
import { useCurrency } from "../../../locales/hooks/useCurrency";
import LikeButtonContainer from "../../HomePage/LikeButton/LikeButtonContainer";
import Image from "next/image"


const Advert = ({advertId, category, title, cost, currency, address, img, date, VIPadverts}) => {
    const cur = useCurrency()
    return (
        <>
            <div className="advert advert--table">
                <Link href={`/advert/${category}/${advertId}`}>
                    <img width={100} height={100} alt={''} src={img} className={`advert__img ${VIPadverts ? "advert--table_vip" : ""}`} />
                </Link>

                <div className="advert__desc">
                    <div className="advert__column">
                        <Link href={`/advert/${category}/${advertId}`}>

                            <h5 className="advert-title advert-title--profile">
                                {title}
                            </h5>

                            <p className="advert-cost advert-cost--desk advert-cost--profile">
                                <span style={{fontWeight: 600}}>{cur.currency}</span>{cur.countCurrencyPrice(cost, currency)}
                            </p>
                    
                        </Link>
                    </div>

                    <div className="advert__column advert__column--right">
                        <LikeButtonContainer {...{id: advertId, category}} />

                        <p className="advert-cost advert-cost--mob advert-cost--profile">
                            <Link href={`/advert/${category}/${advertId}`}>
                                <span style={{fontWeight: 600}}>{cur.currency}</span>{cur.countCurrencyPrice(cost, currency)}
                            </Link>
                        </p>

                        <div className="advert__info advert__info--desk">
                            <Link href={`/advert/${category}/${advertId}`}>
                                <p className="info-text">{address}</p>
                            </Link>
                            <Link href={`/advert/${category}/${advertId}`}>
                                <p className="info-text">{date}</p>
                            </Link>
                        </div>
                    </div>

                    <div className="advert__info advert__info--mob">
                            <Link href={`/advert/${category}/${advertId}`}>
                                <p className="info-text">{address}</p>
                            </Link>
                            <Link href={`/advert/${category}/${advertId}`}>
                                <p className="info-text">{date}</p>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Advert;