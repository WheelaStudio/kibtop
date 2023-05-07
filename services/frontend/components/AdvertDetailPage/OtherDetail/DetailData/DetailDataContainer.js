import { useSelector } from "react-redux";
import DetailData from "./DetailData";

const DetailDataContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <DetailData {...advert} />
}

export default DetailDataContainer;