import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../feature/user/userSlice";

// store ke andr reducer ka object bana hota h jisse aap reducer ko access karte h
export const store = configureStore({
    reducer : {
        user : userReducer
    }
})