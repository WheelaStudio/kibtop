import { useRouter } from "next/router";
import AvtoFilter from "../../Header/HeaderService/Filter/Filters/AvtoFilter/AvtoFilter";
import RealtyFilter from "../../Header/HeaderService/Filter/Filters/RealtyFilter/RealtyFilter";
import WorkFilter from "../../Header/HeaderService/Filter/Filters/WorkFilter/WorkFilter";
import {Catfilter, filterRow, routeFilterWrapper, realtyFilterWrapper} from "./category_filter.module.scss"
import {useWatch} from "react-hook-form";
import RealtyLandFilter from "../../Header/HeaderService/Filter/Filters/RealtyFilter/RealtyLandFilter";


const CategoryFiltersRouter = () => {
    const {query: {category}} = useRouter()
    const subCategory = useWatch({name: 'subCategory'});
    console.log(subCategory);
    return (
        <>
            {   subCategory === 'Land' && category === 'realty' ? <>
                <div className={realtyFilterWrapper}>
                        <RealtyLandFilter />
                    </div>
                </> :
                subCategory === 'Other' && category === 'realty' ? <>
                <div className={realtyFilterWrapper}>
                        <RealtyLandFilter />
                    </div>
                </> :
                category === 'realty' ? <>
                    <div className={realtyFilterWrapper}>
                        <RealtyFilter />
                    </div>
                </> :
                category === 'avto' ? <>
                    <div className={routeFilterWrapper}>
                        <AvtoFilter />
                    </div>
                </> :
                category === 'work' ?<>
                    <div className={routeFilterWrapper}>
                        <WorkFilter />
                    </div>
                </> : ''
            }
        </>
    );
}

export default CategoryFiltersRouter;