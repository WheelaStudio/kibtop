import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOpen } from "../../../../../../store/slices/FilterSlice";
import { setSearchOpen } from "../../../../../../store/slices/SearchSlice";
import { setScrollDisable } from "../../../../../../store/tools/setScrollDisable";
import FilterButton from "./FilterButton";

const FilterButtonContainer = () => {
    const {isFilterOpen} = useSelector(state => state.filter)
    const {isSearchOpen} = useSelector(state => state.search)
    const dispatch = useDispatch()

    const switchFilterOpen = () => {
        dispatch(setSearchOpen(false))
        dispatch(setFilterOpen(!isFilterOpen))
    }

    useEffect(() => {
        if(!isSearchOpen && isFilterOpen) setScrollDisable(true)
    }, [isFilterOpen, isSearchOpen])

    return <FilterButton {...{switchFilterOpen, isFilterOpen}} />
}

export default FilterButtonContainer;