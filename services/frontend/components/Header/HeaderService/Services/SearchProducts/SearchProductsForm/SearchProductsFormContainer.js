import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchAdvertsThunk, setSearchOpen } from "../../../../../../store/slices/SearchSlice";
import SearchProductsForm from "./SearchProductsForm";

const SearchProductsFormContainer = () => {
    const [isDisabled, setDisabled] = useState(false)
    const {searchAdverts} = useSelector(state => state.search)
    const searchInput = useRef()
    const {locale, push} = useRouter()
    const dispatch = useDispatch()

    const onSearchProductSubmit = product => {
        setDisabled(true)
        setTimeout(() => {
            dispatch(setSearchAdvertsThunk(searchInput.current.value, locale, () => setDisabled(false)))
        })
        
    }

    const onChange = e => {
        const value = e.currentTarget.value
        
        if(!value) {
            dispatch(setSearchOpen(false))
            
        } else {
            dispatch(setSearchOpen(true))
        }

        if(!isDisabled) onSearchProductSubmit()
    }

    const onSubmit = e => {
        e.preventDefault()
        if(!!searchAdverts[0]) {
            const {title, category} = searchAdverts[0]
            if(!!title && !!category) {
                push(`/adverts/?search=${title}&category=${category}`)
                dispatch(setSearchOpen(false))
            } 
        }
    }
    
    return <SearchProductsForm {...{onSearchProductSubmit, searchInput, onChange, onSubmit}} />;
}

export default SearchProductsFormContainer;