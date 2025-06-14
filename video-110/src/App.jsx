import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn]=useState(false)
  const [todos, setTodos]=useState([
    {
      title:"hey",
      desc:"hellow how are you"
    },
    {
      title:"hey hi",
      desc:"hellow how are you"
    },
    {
      title:"hey hi bro",
      desc:"hellow how are you"
    }
  ])

  // const Todo=({todo})=>{
  //   return(
  //     <>
  //     <div className="m-4 border-1 border-purple-400">
  //       <div className="todo">
  //         {todo.title}
  //       </div>
  //       <div className="todo">
  //         {todo.desc}
  //       </div>
  //     </div>
  //     </>
  //   )
  // }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
       {/* {showbtn?<button>Show button is true</button>:<button>Show button is false</button>} 
        */
        showbtn&&<button>Show button is true</button>}

        {
          todos.map(todo=>{
            // return <Todo key={todo.title} todo={todo}/>
            return (<>
      <div className="m-4 border-1 border-purple-400">
        <div className="todo">
          {todo.title}
        </div>
        <div className="todo">
          {todo.desc}
        </div>
      </div>
      </>
    )
          })
        }
       
       
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn) }>
          Toggle showbtn
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

