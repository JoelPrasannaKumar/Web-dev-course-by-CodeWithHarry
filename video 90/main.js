const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
const blog=require("./routes/blog")
// app.use(express.static("public"))
app.use("/blog",blog)
app.use((req,res,next)=>{
    console.log(req.headers)
    req.harry="I am not harry"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}\n`)
    res.send("Middleware 1")
    next()
})
app.use((req,res,next)=>{
    console.log("m2")
    req.harry="I am Joel";
    next()
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
