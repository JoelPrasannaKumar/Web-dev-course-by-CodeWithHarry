import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment , decrement, multiply} from './redux/counter/counterSlice'
function App() {
  const count= useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
      <Navbar></Navbar>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        Current count is {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
