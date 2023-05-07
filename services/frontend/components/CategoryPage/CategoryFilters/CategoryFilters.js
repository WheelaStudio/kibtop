import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { defaultFilterValues } from "../../../services/tools/serializers/dictionary/DefaultFilterValues";
import Text from "../../Elementes/Text/Text";
import ResetBtn from "../../Header/HeaderService/Filter/Filters/Selectors/ResetBtn/ResetBtn";
import CategoryFiltersRouter from "./CategoryFiltersRouter";
import {Catfilter, filterRow, btns} from "./category_filter.module.scss"
import CategoryFilter from "./Filters/CategoryFilter/CategoryFilter";
import IconsCategoriesFilter from "./Filters/IconsCategoriesFilter/IconsCategoriesFilter";

const CategoryFilters = () => {
    const standartCategories = ['realty', 'avto', 'work']
    const {query: {category}} = useRouter()

    const {submit} = useFormContext()

    return (
        <>
            {
                standartCategories.includes(category) ? (
                    <div className={Catfilter}>
                        <div className={filterRow}>
                            <CategoryFilter />
                            <CategoryFiltersRouter />
                        </div>

                        <div className={btns}>
                            <button className="reg-btn" onClick={submit}>
                                <Text content="Apply" />
                            </button>
                            <ResetBtn defaultValues={defaultFilterValues[category]} />
                        </div>
                    </div>
                ) : <IconsCategoriesFilter />
            }
            
        </>
    );
}

export default CategoryFilters;