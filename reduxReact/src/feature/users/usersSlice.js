import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// pending, fullfilled, rejected
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', // take two param
    async () =>{
        // 
        
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
      throw new Error(" Failed to fetch users ")
    }

        return await res.json()
    }
)

export const usersSlice = createSlice({
    name : 'users',
    initialState : {
        users : [],
        loading : false,
        error : null
    },
    extraReducers : (builder) =>{  // builder have 3 action hote
        builder
        .addCase(fetchUsers.pending, (state)=>{   
            state.loading = true;
        })
         .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload
        })
          .addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default usersSlice.reducer;