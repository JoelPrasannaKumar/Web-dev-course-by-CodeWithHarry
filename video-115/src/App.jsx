import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import User from "./Components/User"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    element:<><Navbar></Navbar><Home></Home></>
    },
    {
    path:"/about",
    element:<><Navbar></Navbar><About></About></>
    },
    {
    path:"/login",
    element:<><Navbar></Navbar><Login></Login></>
    },
    {
    path:"/user/:username",
    element:<><Navbar></Navbar><User></User></>
    }

])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
