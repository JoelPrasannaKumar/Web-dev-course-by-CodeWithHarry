"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const handleClick=async () => {
    let data={
      name:'Joel',
      role:'coder'
    }
    let a=await fetch("/api/add",{method:"POST",headers:{"Content-Type":"application/json",},body:JSON.stringify(data),})
    let res=await a.json()
    console.log(res)
  }
  return (
    <div>
      <h1>Next.js Api routes demo</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
