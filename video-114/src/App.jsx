import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const finishedtoggle = (params) => {
    setShowFinished(!showFinished)
  }

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo('');
    saveToLS(newTodos);

  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }


  return (
    <>
      <Navbar></Navbar>
      <div className="cont">
        <div className="box  bg-blue-300 w-2/5  h-[80vh] rounded-3xl mx-auto my-4">
          <div className=' font-bold text-xl  pt-2 flex justify-center mx-auto my-2 text-white'>TaskFlow - Manage your tasks at one place</div>
          <div className=' font-bold text-xl mx-4 text-white '>Add a Todo</div>
          <div className="input-save flex ">
            <div className="input">
              <input onChange={handleChange} value={todo} type="text" className='h-8 w-[480px] bg-white border-none mx-5 my-4 rounded-2xl focus:outline-none px-3 flex items-center' />
            </div>
            <div className="save flex items-center" >
              <button onClick={handleAdd} className='bg-blue-800 text-white px-4 py-1 rounded-xl cursor-pointer font-bold'>Save</button>
            </div>
          </div>
          <div className="show text-white flex gap-x-2 mx-2">
            <input checked={showFinished} onChange={finishedtoggle} type="checkbox" className='mt-0.5 cursor-pointer' />
            <label htmlFor="" className=''>Show finished</label>
          </div>
          <div className='h-[1px] w-4/5 mx-auto my-3 bg-white'></div>
          <div className='text-white font-bold mx-3 text-xl'>Your Todos</div>
          <div className="todos flex justify-between flex-wrap">

            {todos.length === 0 && <div htmlFor="" className='text-gray-700 px-3 py-2'>No todos to display</div>}
            {todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className={"todo flex  justify-between w-[600px]"}>
                <div className="flex gap-5">
                  <input className='mx-3' type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted} id="" />
                  <div className={`flex items-center pb-1 ${item.isCompleted ? "line-through" : ""}`}>
                    {item.todo}
                  </div>

                </div>

                <div className='buttons flex gap-x-3 items-center mx-4 my-3 '>
                  <button onClick={(e) => handleEdit(e, item.id)} className="edit bg-blue-800 w-8 flex justify-center rounded-xl px-2 py-1 cursor-pointer"><FaRegEdit color='white' className='h-5 w-5' /></button>
                  <button onClick={(e) => handleDelete(e, item.id)} className="edit bg-blue-800 w-8 flex justify-center rounded-xl px-2 py-1 cursor-pointer"><AiOutlineDelete color='white' className='h-5 w-5' /></button>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
