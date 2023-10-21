import {configureStore} from "@reduxjs/toolkit";
import firstReducer from "./reducer/first"
import userReducer from "./reducer/user"

const store = configureStore({
    reducer:{
        first: firstReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;