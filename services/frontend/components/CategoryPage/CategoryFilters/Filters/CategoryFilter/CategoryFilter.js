import {homeFilter} from "../../category_filter.module.scss"
import SubCategoryContainer from "./SubCategoryContainer";

const CategoryFilter = () => {
    return (
        <div className={homeFilter}>
            <SubCategoryContainer />
        </div>
    );
}

export default CategoryFilter;