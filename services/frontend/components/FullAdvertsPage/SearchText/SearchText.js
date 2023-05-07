import { useRouter } from "next/router";
import Text from "../../Elementes/Text/Text";
import {searchText} from "../adverts.module.scss"


const SearchText = () => {
    const {query: {search}} = useRouter()
    return (
        <>
            <p className={`title ${searchText}`}>
                {!!search && <><Text content="Search results for" /> «{search}»</>}
            </p>
        </>
    );
}

export default SearchText;