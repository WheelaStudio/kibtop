import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { removeEmptyFields, serializeFormFilter } from "../../../../services/tools/serializers/FilterSerializers";
import { setFilterOpen } from "../../../../store/slices/FilterSlice";
import { dataWithNormalQuery } from "../../../CategoryPage/CategoryFilters/CategoryFilterContainer";
import Filter from "./Filter";

const FilterContainer = () => {
    const {query, push} = useRouter()

    const filterForm = useForm({mode: 'onChange', defaultValues: {...serializeFormFilter(query)}})
    const {handleSubmit} = filterForm


    const dispatch = useDispatch()
    const closeFilter = () => dispatch(setFilterOpen(false))

    const {currency} = useCurrency()

    const onFilterSubmit = data => {
        const pathname = !!data.category ? '/adverts/[category]' : '/adverts'

        const filter = dataWithNormalQuery(removeEmptyFields(data))

        push({pathname, query: {...filter, currency}})
        closeFilter()
    }
    
    return (
        <>
            <FormProvider {...{...filterForm, submit: handleSubmit(onFilterSubmit)}}>
                <Filter {...{closeFilter}} />
            </FormProvider>
            
        </>
    );
}

export default FilterContainer;