import {configureStore} from "@reduxjs/toolkit";
import firstReducer from "./reducer/first"

const store = configureStore({
    reducer:{
        first: firstReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;