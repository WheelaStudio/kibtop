import { useSelector } from "react-redux";
import RealtyParameter from "./RealtyParameter";
import RealtyLandParameter from "./RealtyLandParameter";

const RealtyParameterContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert
    if (advert.subCategoryName=='Land' || advert.subCategoryName=='Other'
    || advert.subCategoryName=='Земля' || advert.subCategoryName=='Другое' ||
    advert.subCategoryName=='Kara' || advert.subCategoryName=='Diğer')
        return <RealtyLandParameter {...advert} />;
    return <RealtyParameter {...advert} />;
}

export default RealtyParameterContainer;