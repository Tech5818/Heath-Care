import {createSlice} from "@reduxjs/toolkit";

export const firstSlice = createSlice({
    name : "first",
    initialState: {value:{isFirst: false}},
    reducers: {
        setFirst: (state, active)  => {
            state.value = active.payload;
        }
    }
})

export const {setFirst} = firstSlice.actions
export default firstSlice.reducer