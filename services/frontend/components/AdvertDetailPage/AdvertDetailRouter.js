import { useEffect } from "react";
import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import AdvertDataContainer from "./AdvertDataContainer";
import AvtoDetail from "./AvtoDetail/AvtoDetail";
import FreeDetail from "./FreeDetail/FreeDetail";
import OtherDetail from "./OtherDetail/OtherDetail";
import RealEstateDetail from "./RealEstateDetail/RealEstateDetail";
import WorkDetail from "./WorkDetail/WorkDetail";

const AdvertDetailRouter = ({category, serverAdvert}) => {
    const other = ['children', 'electronics', 'fashion', 'house_garden', 'services']

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <AdvertDataContainer>
                    {
                        other.some(categoryPath => categoryPath === category) 
                            ? <OtherDetail {...{serverAdvert}} /> :
                            category === 'avto' ? <AvtoDetail {...{serverAdvert}} /> :
                            category === 'realty' ? <RealEstateDetail {...{serverAdvert}} /> :
                            category === 'free' ? <FreeDetail {...{serverAdvert}} /> :
                            category === 'work' ? <WorkDetail {...{serverAdvert}} /> :
                            <></>
                    }
                </AdvertDataContainer>
            </main>
        </>
    );
}

export default AdvertDetailRouter;