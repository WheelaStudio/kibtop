
import { useDispatch, useSelector } from "react-redux";
import { setFilterOpen } from "../../../store/slices/FilterSlice";
import { setSearchOpen } from "../../../store/slices/SearchSlice";
import BurgerLocaleMenuContainer from "./BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "./BurgerUserMenu/BurgerUserMenuContainer";
import FilterContainer from "./Filter/FilterContainer";
import Logo from "./Logo/Logo";
import MobileFilterButtonContainer from "./Services/SearchProducts/MobileFilterButton/MobileFilterButtonContainer";
import Services from "./Services/Services";
import useHideMobilePages from "./useHideMobilePages";

const HeaderService = () => {
    const {isSearchOpen} = useSelector(state => state.search)
    const {isFilterOpen} = useSelector(state => state.filter)

    const dispatch = useDispatch()

    const closeFilterMenu = () => {
        dispatch(setFilterOpen(false))
        dispatch(setSearchOpen(false))
    }
    


    const ExceptionStyle = useHideMobilePages()
    return (
        <>
            <div className={"header__service" + ExceptionStyle}>
                <div className="container container--header">
                    <Logo />
                    <Services />
                    
                </div>

                {
                    isFilterOpen && <FilterContainer />
                }
            </div>
            
            {(isSearchOpen || isFilterOpen) && <div onClick={closeFilterMenu} className="screen-dimmer screen-dimmer--full" style={{zIndex: '2'}} />}
        </>
        
    );
}

export default HeaderService;