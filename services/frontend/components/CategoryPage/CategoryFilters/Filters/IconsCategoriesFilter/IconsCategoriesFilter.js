import { useRouter } from "next/router";
import { useState } from "react";
import Text from "../../../../Elementes/Text/Text";
import ResetBtn from "../../../../Header/HeaderService/Filter/Filters/Selectors/ResetBtn/ResetBtn";
import CategoryFilters from "../../CategoryFilters";
import CategoryFiltersRouter from "../../CategoryFiltersRouter";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SubIconSelect from "../Selectors/SubIconSelect";
import IconsRouter from "./IconsRouter";
import {wrapper, subIcon, filterRow, filter} from "./icon_filter.module.scss"
import {btns} from "../../category_filter.module.scss"
import SubCategoryContainer from "../CategoryFilter/SubCategoryContainer";
import PriceSelect from "../../../../Header/HeaderService/Filter/Filters/Selectors/PriceSelect/PriceSelect";
import { useFormContext } from "react-hook-form";


const IconsCategoriesFilter = () => {
    const [step, setStep] = useState(1)

    const {query: {category}} = useRouter()

    const {submit} = useFormContext()

    return (
        <>
            <div className="container">
                {
                    step === 1 ? <IconsRouter nextStep={() => setStep(2)} /> : <>
                        <div className={filter}>
                            <div className={filterRow}>
                                <SubCategoryContainer />

                                <PriceSelect name={'cost'} holder={'Price'} />
                            </div>
                            
                            <div className={btns}>
                                <button className="reg-btn" onClick={submit}>
                                    <Text content="Apply" />
                                </button>
                                <ResetBtn />
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default IconsCategoriesFilter;