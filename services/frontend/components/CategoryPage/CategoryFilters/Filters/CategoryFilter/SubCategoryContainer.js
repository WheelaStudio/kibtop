import { useRouter } from "next/router"
import { getSubCategoryOptions } from "../../../../Header/HeaderService/Filter/Filters/Selectors/SubCategorySelector/getSubCategoryOptions";
import SubCategorySelector from "../../../../Header/HeaderService/Filter/Filters/Selectors/SubCategorySelector/SubCategorySelector";

const SubCategoryContainer = () => {
    const {query: {category}} = useRouter()

    return (
        <>
            {
                category !== 'free' && <SubCategorySelector    name={'subCategory'} 
                                                                holder={category === 'work' ? 'Profession' : 'Subcategory'} 
                                                                items={getSubCategoryOptions(category)} 
                                                                disabled={!category} 
                                                                zIndex={5} />
            }
            
        </>
    );
}

export default SubCategoryContainer;