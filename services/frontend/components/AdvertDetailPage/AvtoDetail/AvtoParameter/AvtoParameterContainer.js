import { useSelector } from "react-redux";
import AvtoParameter from "./AvtoParameter";

const AvtoParameterContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <AvtoParameter {...advert} />;
}

export default AvtoParameterContainer;