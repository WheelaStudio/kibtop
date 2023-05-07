import { createSlice } from "@reduxjs/toolkit";
import { setScrollDisable } from "../tools/setScrollDisable";

const initialState = {
    isFilterOpen: false
}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterOpen(state, {payload}) {
            setScrollDisable(payload)
            state.isFilterOpen = payload
        }
    }
})

export const {setFilterOpen} = FilterSlice.actions


export const FilterReducer = FilterSlice.reducer