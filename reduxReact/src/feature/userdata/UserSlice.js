import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn : false,
    user : null,
    msg: ""
}


const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        login : (state,action) =>{
            state.loggedIn = true;
            state.user = action.payload;
            state.msg = "Welcome back"
        },
        logout : (state) => {
            state.loggedIn = false;
            state.user = null;
            state.msg = "Please login first!"
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer;

// Component ==> dispatch ==> middleware ==> state Update
