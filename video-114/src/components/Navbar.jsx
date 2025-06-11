import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-blue-500 text-white h-14 items-center'>
        <div className="logo">
            <span className='font-bold'>TaskFlow</span>
            </div>
            <div >
                <ul className='flex gap-x-6 '>
                    <li className='cursor-pointer hover:underline'>Home</li>
                    <li className='cursor-pointer hover:underline'>Your Tasks</li>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar
