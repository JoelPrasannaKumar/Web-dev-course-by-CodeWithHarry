const express = require('express')
const router=express.Router()
router.use((req,res,next)=>{
    console.log("Time:",Date.now())
    res.send("Middleware from routes")
    next()
})
router.get('/',(req,res)=>{
    res.send("blog home page")
})
router.get('/about',(req,res)=>{
    res.send("blog about page")
})
module.exports=router