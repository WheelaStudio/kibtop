import CheckSelector from "../Selectors/CheckSelector/CheckSelector";
import PriceSelect from "../Selectors/PriceSelect/PriceSelect";
import RowSelector from "../Selectors/RowSelector/RowSelector";
import {realtyFilter, reverseWithRooms} from "./realty_filter.module.scss"

const RealtyLandFilter = () => {
    return (
        <>
            <div className={realtyFilter}>
                <div>
                    <RowSelector name={'isMonth'} items={[
                            {value: 'false', text: 'Buy'},
                            {value: 'true', text: 'Rent'},
                        ]} defaultValueIndex={0} style={{marginBottom: 5}} />


                </div>
                <div className={reverseWithRooms}>

                    <PriceSelect name={'cost'} holder={'Price'} />

                </div>
            </div>
        </>
    );
}

export default RealtyLandFilter;