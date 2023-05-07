import { useSelector } from "react-redux";
import WorkParameter from "./WorkParameter";

const WorkParameterContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <WorkParameter {...advert} />;
}

export default WorkParameterContainer;