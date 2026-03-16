import React from 'react'
import {useDispatch} from "react-redux"
import { increment,decrement,reset } from '../feature/counter/counterSlice'

const CounterControl = () => {
    const dispatch = useDispatch()
  return (<>
   <br/>
   <button onClick={()=>dispatch(increment())}>Add</button> {" "}
   <button onClick={()=>dispatch(decrement())}>Sub</button> {" "}
   <button onClick={()=>dispatch(reset())}>Reset</button> {" "}
   </>
  )
}

export default CounterControl