import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    man:null,
    age: 0,
    height: 0,
    weight: 0,
}

const userSlice = createSlice({
    name:"user",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {

        }
    }
})