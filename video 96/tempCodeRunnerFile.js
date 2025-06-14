import express from "express"
import mongoose from "mongoose" 
import {Todo} from "./models/todo.js"
const app = express()
const port = 3000
let conn=await mongoose.connect("mongodb://localhost:27017/todo")
app.get('/',async (req, res) => {
    const todo=new Todo({title:"chinnu",desc:"description of todo",isDone:false,days:21})
    await todo.save()
  res.send(todo)
})
app.get('/about',async (req,res)=>{
  let todo=await Todo.findOne({})
  console.log(todo)
  res.json({title:todo.title,desc:todo.desc})

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
