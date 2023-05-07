import FormSelector from "../Selectors/FormSelector/FormSelector";
import LocationSelect from "../Selectors/LocationSelect/LocationSelect";
import {reverse, mobile, orderFilter} from "../RealtyFilter/realty_filter.module.scss"

const OrderFilter = () => {
    return (
        <>
            <div className={`${reverse} ${mobile} ${orderFilter}`} >
                <FormSelector name={'sorting'}  holder={'Sorting'} items={[
                    {value: 'default', text: 'Default'},
                    {value: 'cheap', text: 'Cheaper'},
                    {value: 'expensive', text: 'Expensive'},
                ]} />
                <LocationSelect />
            </div>
        </>
    );
}

export default OrderFilter;