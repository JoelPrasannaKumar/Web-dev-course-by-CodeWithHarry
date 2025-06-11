const express=require("express")
const blog=require("./routes/blog")
const shop=require("./routes/shop")
const app =express()
const port =3000
app.use(express.static("public"))
app.use("/blog",blog)
app.use("/shop",shop)
app.get('/',(req,res)=>{
    console.log("hey hi this is a get request")
    res.send("Hellow world")
})
app.post('/',(req,res)=>{
    console.log("Hey its a post request")
    res.send("Hellow World post")
})
app.put('/',(req,res)=>{
    console.log("Hey its a put request")
    res.send("Hellow World put")
})
app.get('/index',(req,res)=>{
    console.log("Hey its index")
    res.sendFile("templates/index.html",{root:__dirname})
})
app.get('/api',(req,res)=>{
    console.log("Hey its api")
    res.json({a:1,b:2,c:3,name:["joel","harry"]})
})
app.listen(port,()=>{
    console.log(`Example app listening on ${port}`)
}) 