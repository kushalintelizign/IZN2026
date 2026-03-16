import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../feature/counter/counterSlice"
import userReducer from "../feature/userdata/UserSlice"
import usersReducer from "../feature/users/usersSlice"
import authReducer from "../feature/auth/authSlice"

const loggerMiddleWare = storeAPI => next => action => {
    console.log("Dispatching actions", action);
    const result = next(action);
    console.log("Next state:", storeAPI.getState());
    return result
}

const store = configureStore({
    reducer :{
        counter : counterReducer,
        user : userReducer,
        users: usersReducer,
        auth: authReducer,
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleWare)
,
devTools: true,   // enable and disable devtools by default its true
})


export default store;