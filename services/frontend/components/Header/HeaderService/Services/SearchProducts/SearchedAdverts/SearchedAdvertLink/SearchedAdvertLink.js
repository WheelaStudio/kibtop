import Link from "next/link";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "../../../../../../../store/slices/FilterSlice";
import { setSearchOpen } from "../../../../../../../store/slices/SearchSlice";
import CategoryIcon from "./CategoryIcon";

const SearchedAdvertLink = ({title, categoryName, category}) => {

    const dispatch = useDispatch()

    const closeFilterMenu = () => {
        dispatch(setFilterOpen(false))
        dispatch(setSearchOpen(false))
    }

    return (
        <>
            <Link href={`/adverts/?search=${title}&category=${category}`} onClick={closeFilterMenu} className="search__value">
                <div className="search__head">
                    <CategoryIcon {...{category}} />
                    <p className="search__category">{categoryName}</p>
                </div>
                <p className="search__text">{title}</p>
            </Link>
        </>
    );
}

export default SearchedAdvertLink;