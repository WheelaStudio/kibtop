import { useSelector } from "react-redux";
import DetailParameter from "./DetailParameter";

const DetailParameterContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <DetailParameter {...advert} />;
}

export default DetailParameterContainer;