import { createSlice } from "@reduxjs/toolkit"
import { setScrollDisable } from "../tools/setScrollDisable"

const initialState = {
    isOpen: false
}

const CurrencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setOpenCurrencySelect(state, {payload}) {
            setScrollDisable(!state.isOpen)

            state.isOpen = !state.isOpen
        }
    }
})

export const CurrencyReducer = CurrencySlice.reducer;

export const {setOpenCurrencySelect} = CurrencySlice.actions;