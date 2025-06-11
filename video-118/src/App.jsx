import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")
  // const getAdjective=() => {
  //   return "another"+count
  // }

  
  const getAdjective=useCallback(()=> {
    return "another"+count
  },[])


  // const getAdjective=useCallback(()=> {
  //   return "another"+count
  // },[count])
  return (
    <>
    <Navbar adjective={"nice"} getAdjective={getAdjective}></Navbar>
   
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
