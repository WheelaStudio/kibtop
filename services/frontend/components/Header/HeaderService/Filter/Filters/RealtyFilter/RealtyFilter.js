import CheckSelector from "../Selectors/CheckSelector/CheckSelector";
import PriceSelect from "../Selectors/PriceSelect/PriceSelect";
import RowSelector from "../Selectors/RowSelector/RowSelector";
import {realtyFilter, reverseWithRooms} from "./realty_filter.module.scss"

const RealtyFilter = () => {
    return (
        <>
            <div className={realtyFilter}>
                <div>
                    <RowSelector name={'isMonth'} items={[
                            {value: 'false', text: 'Buy'},
                            {value: 'true', text: 'Rent'},
                        ]} defaultValueIndex={0} style={{marginBottom: 5}} />

                    <RowSelector name={'condition'} items={[
                            {value: 'Old,New', text: 'All'},
                            {value: 'Old', text: 'Old'},
                            {value: 'New', text: 'New'},
                        ]} defaultValueIndex={2} />
                </div>
                <div className={reverseWithRooms}>
                    <PriceSelect name={'cost'} holder={'Price'} />
                    <CheckSelector name={'rooms'} holder={'Rooms'} items={[
                            {value: 'Studio', text: 'Studio'},
                            {value: '1+1', text: '1+1'},
                            {value: '2+1', text: '2+1'},
                            {value: '2+2', text: '2+2'},
                            {value: '3+1', text: '3+1'},
                            {value: '4+1 and more', text: '4+1 and more'},

                        ]}  />
                    
                </div>
            </div>
        </>
    );
}

export default RealtyFilter;