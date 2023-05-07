import MobileFilterButton from "./MobileFilterButton";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOpen } from "../../../../../../store/slices/FilterSlice";
import { setSearchOpen } from "../../../../../../store/slices/SearchSlice";

const MobileFilterButtonContainer = () => {
    const {isFilterOpen} = useSelector(state => state.filter)
    const {isSearchOpen} = useSelector(state => state.search)
    const dispatch = useDispatch()

    const switchFilterOpen = () => {
        dispatch(setFilterOpen(!isFilterOpen))
        dispatch(setSearchOpen(false))
    }

    const closeSearch = () => dispatch(setSearchOpen(false))

    return <MobileFilterButton {...{switchFilterOpen, closeSearch, isFilterOpen, isSearchOpen}} />;
}

export default MobileFilterButtonContainer;