import React from 'react'
import {useSelector} from 'react-redux'

const CounterDisplay = () => {
    const count = useSelector(state => state.counter.count)
  return (
    <div>CounterDisplay : {count}</div>
  )
}

export default CounterDisplay