import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";


// store ke andr reducer ka object bana hota h jisse aap reducer ko access karte h
export const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getDefaultMiddleware)=>
         getDefaultMiddleware().concat(apiSlice.middleware)
})