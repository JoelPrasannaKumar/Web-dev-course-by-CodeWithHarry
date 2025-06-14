import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>{
      setPosts(data)
    })
  },[]);

  const Post=({post})=>{
    return (
      <>
      <div className="post-container mb-5  ">
        <div className="userid">
         <span className="text-green-800">"userId": </span>{post.userId}
        </div>
        <div className="id">
          <span className="text-green-800">"id":</span> {post.id}
        </div>
        <div className="title">
          "title": {post.title}
        </div>
        <div className="body">
          "body": {post.body}
        </div>
      </div>
      </>
    )
  }

  return (
    <>
      <div className='flex'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        {
          posts.map(post=>{
            return <Post key={post.id} post={post}></Post>
          })
        }
    </>
  )
}

export default App
