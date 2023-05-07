import { useState } from "react";
import { useSelector } from "react-redux";
import DetailBanner from "./DetailBanner";
import DetailBannerState from "./DetailBannerState";

const DetailBannerContainer = ({serverAdvert}) => {
    const [offset, setOffset] = useState(0);
    const storeAdvert = useSelector(state => state.advert)

    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    const {uploads} = advert
    const items = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
    ]

    return <DetailBannerState {...{offset, setOffset, items: uploads || items}} />;
}

export default DetailBannerContainer;