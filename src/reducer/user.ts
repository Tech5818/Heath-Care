import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    sex: "",
    age: 0,
    height: 0,
    weight: 0,
}

export const userSlice = createSlice({
    name:"user",
    initialState: {value: initialStateValue},
    reducers: {
        setInfo: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setInfo} = userSlice.actions;
export default userSlice.reducer;