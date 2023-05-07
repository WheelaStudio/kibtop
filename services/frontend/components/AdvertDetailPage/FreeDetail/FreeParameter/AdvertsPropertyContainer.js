import React from "react"
import { useSelector } from "react-redux"
import { addPropsToReactElement } from "../../../Utils/Utils"



const AdvertsPropertyContainer = ({children, serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert
    
    return <>{addPropsToReactElement(children, {...advert})}</> 
}

export default AdvertsPropertyContainer;