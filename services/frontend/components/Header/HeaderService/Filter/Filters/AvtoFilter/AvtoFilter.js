import BrandSelect from "../Selectors/BrandSelector/BrandSelect";
import PriceSelect from "../Selectors/PriceSelect/PriceSelect";
import {avtoFilter, reverse, mobileRowReverseAvto, mobileRowReverse} from "./avto_filter.module.scss"

const AvtoFilter = () => {
    return (
        <>
            <div className={avtoFilter}>
                <div className={reverse}>
                    <PriceSelect name={'mileage'} holder={'Mileage'} />
                    <BrandSelect />
                </div>
                <div className={mobileRowReverse}>
                    <PriceSelect name={'cost'} holder={'Price'}  />
                    <PriceSelect name={'year'} holder={'Year'} style={{marginBottom: 12}} />
                </div>
            </div>
        </>
    );
}

export default AvtoFilter;