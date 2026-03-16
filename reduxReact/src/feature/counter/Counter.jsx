import {  useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'





function Counter() {
  
  // state uthane ke liye state---> dot--> slice ka naam--> dot state ka naam
  const count = useSelector(state => state.counter.count)  // normal read
  const dispatch = useDispatch()

  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>Add</button> {" "}
      <button onClick={()=>dispatch(decrement())}>Sub</button> {" "}
      <button onClick={()=>dispatch(reset())}>reset</button> {" "}
    </>
  )
}

export default Counter