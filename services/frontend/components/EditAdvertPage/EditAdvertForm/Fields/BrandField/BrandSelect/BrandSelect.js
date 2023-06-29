import { useDeferredValue } from "react";
import BrandOption from "./BrandOption";

const BrandSelect = ({brands, onBrandClick, isSearching}) => {

    const values = useDeferredValue(brands)
    return (
        <>
            {
                isSearching ? values.map(((brand, index) => <BrandOption key={index} {...{brand, onBrandClick}} />)) : ''
            }
        </>
    );
}

export default BrandSelect;