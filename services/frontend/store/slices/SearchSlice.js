import { createSlice } from "@reduxjs/toolkit"
import { SearchApi } from "../../services/SearchApi"
import { setScrollDisable } from "../tools/setScrollDisable"

const initialState = {
    searchAdverts: [],
    findAdverts: [],
    isSearchOpen: false
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchAdverts(state, {payload}) {
            state.searchAdverts = [...payload]
        },
        setFindAdverts(state, {payload}) {
            state.findAdverts = [...payload]
        },
        setSearchOpen(state, {payload}) {
            setScrollDisable(payload)
            state.isSearchOpen = payload
        }
    }
})

export const {setSearchAdverts, setSearchOpen, setFindAdverts} = SearchSlice.actions

export function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export const setSearchAdvertsThunk = (value, lang, undisable) => async dispatch => {
    const searchAdverts = await SearchApi.getSearchAdverts(value, lang)

    if(!!searchAdverts) dispatch(setSearchAdverts(searchAdverts))
    undisable()
}

export const setFindAdvertsThunk = (search, page=0, lang) => async dispatch => {
    const findAdverts = await SearchApi.getFindAdverts(search, page, lang)

    if(!!findAdverts) dispatch(setFindAdverts(findAdverts))
    
}

export const SearchReducer = SearchSlice.reducer

