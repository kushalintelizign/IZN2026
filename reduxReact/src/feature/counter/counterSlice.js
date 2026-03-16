import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    count : 2
}

// counter slice keandar hum logic likhte h apne reducer ka, jiske andar reducer bhi hota h aur inbult action bhi hota h jo auto generate hota h
const counterSlice = createSlice({
    name : "Counter",
    initialState,
    reducers : {
        increment : (state) => {state.count += 1},
        decrement :( state) => {state.count -= 1},
        reset : (state) => {state.count = 0},

        
    }
})

export const {increment, decrement,reset} = counterSlice.actions
export default counterSlice.reducer