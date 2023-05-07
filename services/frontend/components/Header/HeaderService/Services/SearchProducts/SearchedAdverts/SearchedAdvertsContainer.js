import { useSelector } from "react-redux";
import SearchedAdverts from "./SearchedAdverts"

const SearchedAdvertsContainer = () => {
    const {isSearchOpen, searchAdverts} = useSelector(state => state.search)


    return <SearchedAdverts {...{isOpen: isSearchOpen, adverts: searchAdverts.slice(0, 3)}} />;
}

export default SearchedAdvertsContainer;