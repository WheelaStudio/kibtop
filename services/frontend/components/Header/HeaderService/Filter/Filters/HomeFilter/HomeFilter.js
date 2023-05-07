import FormSelector from "../Selectors/FormSelector/FormSelector";
import {baseFilters} from "../../filter.module.scss"
import {reverse, desktop, adaptiveColumn, stableColumn} from "../RealtyFilter/realty_filter.module.scss"

import SubCategorySelectorContainer from "../Selectors/SubCategorySelector/SubCategorySelectorContainer";
import CategorySelector from "../Selectors/CategorySelect/CategorySelector";
import LocationSelect from "../Selectors/LocationSelect/LocationSelect";

const HomeFilter = () => {

    return (
        <>
            <div className={baseFilters}>
                <div className={`${stableColumn} ${desktop}`} >
                    <FormSelector name={'sorting'}  holder={'Sorting'} items={[
                        {value: 'default', text: 'Default'},
                        {value: 'cheap', text: 'Cheaper'},
                        {value: 'expensive', text: 'Expensive'},
                    ]} />
                    <LocationSelect />
                </div>
                <div className={adaptiveColumn}>
                    <SubCategorySelectorContainer zIndex={2} />
                    <CategorySelector name={'category'} holder={'Category'} zIndex={3} />
                </div>
            </div>
        </>
    );
}

export default HomeFilter;