import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { getSubCategoryOptions } from "./getSubCategoryOptions";
import SubCategorySelector from "./SubCategorySelector";

const SubCategorySelectorContainer = ({zIndex}) => {
    const category = useWatch({name: 'category'})
    const {setValue} = useFormContext()

    useEffect(() => {
        setValue('subCategory', null)
    }, [category])

    return (
        <>
            {
                category !== 'free' && <SubCategorySelector    name={'subCategory'} 
                                                                holder={category === 'work' ? 'Profession' : 'Subcategory'} 
                                                                items={getSubCategoryOptions(category)} 
                                                                disabled={!category} 
                                                                zIndex={zIndex} />
            }
            
        </>
    );
}

export default SubCategorySelectorContainer;