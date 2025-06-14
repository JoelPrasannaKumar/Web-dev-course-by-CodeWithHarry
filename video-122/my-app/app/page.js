// "use client"
// import { useState } from "react";
import Navbar from '@/components/Navbar'
import fs from 'fs/promises'

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("hey hi")
  let a=fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <>
    <Navbar></Navbar>
    {/* <div>I am a component {count}</div> */}
    {/* <button onClick={()=>setCount(count+1)}>click me</button> */}
    </>
  );
}
