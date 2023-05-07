import { useSelector } from "react-redux";
import WorkData from "./WorkData";

const WorkDataContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <WorkData {...advert} />;
}

export default WorkDataContainer;