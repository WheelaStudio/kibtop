import { useLanguage } from "../../../locales/hooks/useLanguage";

function DealClaims() {
    const {t} = useLanguage();

    return (
        <div className="chat-dealClaims">
            <div>
                <svg width="60" height="52" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.1413 22.8049L50.2396 39.4415L36.004 50.0182C32.4489 52.6606 27.5586 52.6606 24.0035 50.0182L8.67036 38.6267C7.37281 37.6634 5.79274 37.1409 4.17017 37.1409H2.5026C1.12005 37.1409 0 36.0314 0 34.6644V7.2678C0 6.00978 0.94754 4.96225 2.21009 4.8211C5.60273 4.44716 8.65786 3.09751 11.783 1.29467C16.2782 -0.996014 22.1759 -0.178796 25.8236 3.20647L27.3661 4.67499L17.3482 14.3603C14.6656 17.015 14.2381 21.2125 16.3532 24.1124C17.6532 25.9029 20.0058 27.2302 22.4634 27.2302C24.446 27.2302 26.3486 26.4576 27.7237 25.0931L30.1413 22.8024V22.8049ZM49.8871 1.29467C45.6619 -0.797901 40.3917 -0.253089 36.6165 2.65175L20.8584 17.8867C19.9308 18.8079 19.7208 20.2814 20.4058 21.2224C20.8559 21.8415 21.5084 22.213 22.2534 22.2749C22.991 22.3368 23.706 22.0718 24.2235 21.5567L33.2689 13.0651C35.6415 10.8338 39.0791 14.3949 36.7265 16.6435L33.7739 19.3602L55.2573 37.1433H57.4999C58.88 37.1433 60 36.0339 60 34.6669V7.1836C60 5.97016 59.105 4.96721 57.8974 4.75176C53.6622 3.99397 49.8846 1.29715 49.8846 1.29715L49.8871 1.29467Z" fill="#7AB1FF"/>
                </svg>
            </div>

            <div className="dealClaims-text">{
                t("The seller claims to have sold the product to you")
            }</div>
            <div className="dealClaims-buttonContainer">
                <button className="dealClaims-button dealClaims-button__accept">{ t("Accept") }</button>
                <button className="dealClaims-button dealClaims-button__reject">{ t("Reject") }</button>
            </div>
        </div>
    );
}

export default DealClaims;