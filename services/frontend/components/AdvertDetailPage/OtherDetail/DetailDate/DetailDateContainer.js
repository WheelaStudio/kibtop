import { useSelector } from "react-redux";
import DetailDate from "./DetailDate";

const DetailDateContainer = ({className, serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <DetailDate className={className} {...advert} />;
}

export default DetailDateContainer;