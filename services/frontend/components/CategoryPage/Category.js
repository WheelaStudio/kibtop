import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import LocationContainer from "../HomePage/Recommend/Location/LocationContainer";
import CategoryFilterContainer from "./CategoryFilters/CategoryFilterContainer";
import CategoryFilters from "./CategoryFilters/CategoryFilters";
import CategoryNav from "./CategoryNav/CategoryNav";
import LocationForm from "./CategoryNav/LocationForm/LocationForm";
import SortingSelect from "./CategoryNav/SortingSelect/SortingSelect";
import CategoryRouter from "./CategoryRouter/CategoryRouter";
import PageNavContainer from "./PageNav/PageNavContainer";

const CategorySection = ({categoryAdverts, pages}) => {
    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <CategoryNav />

                <CategoryFilterContainer />

                <div className="container container--end category-settings">
                    <SortingSelect className={'desktop'} />

                    <LocationForm />
                </div>
                <CategoryRouter {...{categoryAdverts}} />
                <PageNavContainer {...{serverPages: pages}} />
            </main>
        </>
    );
}

export default CategorySection;