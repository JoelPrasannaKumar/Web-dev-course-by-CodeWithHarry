import React from "react";
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-[34px] bg-black text-white">
        <NavLink className={(e)=>{return e.isActive?"bg-red-400 text-white":""}} to="/"><li className="list-none p-[20px] text-white">Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-red-400 text-white":""}} to="/about"><li className="list-none p-[20px] text-white">About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-red-400 text-white":""}} to="/login"><li className="list-none p-[20px] text-white">Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
