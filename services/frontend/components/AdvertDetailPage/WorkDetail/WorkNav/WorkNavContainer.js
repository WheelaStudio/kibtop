import { useSelector } from "react-redux";
import WorkNav from "./WorkNav";

const WorkNavContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert
    
    return <WorkNav {...advert} />;
}

export default WorkNavContainer;