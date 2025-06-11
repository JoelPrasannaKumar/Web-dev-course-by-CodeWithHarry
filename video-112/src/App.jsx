import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("joel")
  const [form, setForm] = useState({})

const handleClick=()=>{
  alert("hey i got clicked")
}
const handleMouseOver=()=>{
  alert("hey i am mouse over")
}
const handleChange=(e)=>{
  // setName(e.target.value)
    setForm({...form,[e.target.name]:[e.target.value]})
}
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="mouseover" onMouseOver={handleMouseOver}>
           Hover on me
      </div>
      <div className="inputs">
        {/* <input type="text" name='name' value={name} onChange={handleChange}/> */}
        <input type="text" name='email' value={form.email?form.email:"yourmailid@gmail.com"} onChange={handleChange} />
        <input type="text" name='password' value={form.password?form.password:""} onChange={handleChange} placeholder='enter password' />
      </div>
    </>
  )
}

export default App
