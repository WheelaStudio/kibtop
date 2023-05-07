import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
}


const CurrentDialogSlice = createSlice({
    name: 'currentDialog',
    initialState,
    reducers: {
        append: (state, {payload}) => {
            state.messages.push(payload);
        },

        set: (state, {payload}) => {
            state.messages=payload;
        },
    }
});

export const CurrentDialogReducer = CurrentDialogSlice.reducer
export const { append, set } = CurrentDialogSlice.actions