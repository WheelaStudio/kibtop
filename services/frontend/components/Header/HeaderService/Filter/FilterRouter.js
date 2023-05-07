import { useRouter } from "next/router";
import { useWatch } from "react-hook-form";
import AvtoFilter from "./Filters/AvtoFilter/AvtoFilter";
import OtherFilter from "./Filters/OtherFilter/OtherFilter";
import RealtyFilter from "./Filters/RealtyFilter/RealtyFilter";
import WorkFilter from "./Filters/WorkFilter/WorkFilter";
import RealtyLandFilter from "./Filters/RealtyFilter/RealtyLandFilter";


const FilterRouter = () => {
    const category = useWatch({name: 'category'});
    const subCategory = useWatch({name: 'subCategory'});
    return (
        <>
            {
                subCategory === 'Land' && category === 'realty' ? <RealtyLandFilter /> :
                subCategory === 'Other' && category === 'realty'  ? <RealtyLandFilter /> :
                category === 'realty' ? <RealtyFilter /> :
                category === 'avto' ? <AvtoFilter /> :
                category === 'work' ? <WorkFilter /> :
                category === 'services' ? <OtherFilter /> :
                category === 'children' ? <OtherFilter /> :
                category === 'electronics' ? <OtherFilter /> :
                category === 'house_garden' ? <OtherFilter />  :
                category === 'fashion' ? <OtherFilter /> : ''
            }
        </>
    );
}

export default FilterRouter;