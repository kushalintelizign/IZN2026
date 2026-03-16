import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

export const addUser = createAsyncThunk(
    "user/addUser",
    async (userData)=>{      // post api parameter wapas dega
        const  response = await axios.post('http://localhost:3001/users',userData)
        return response.data
    }
)


const userSlice = createSlice({
    name : 'user',
    initialState:{
        name: "",
        email:"",
        status: "idle",
        error: null
    },
    reducers:{
        updateName : (state,action)=>{
            state.name = action.payload
        },
        updateEmail: (state,action)=>{
            state.email = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(addUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addUser.fulfilled, (state)=>{
            state.status = "succeeded";
            state.name = "";
            state.email = "";
        })
        .addCase(addUser.rejected, (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const {updateEmail,updateName} = userSlice.actions;
export default userSlice.reducer;