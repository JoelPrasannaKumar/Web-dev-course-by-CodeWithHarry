const express=require("express")
const mongoose=require("mongoose")
const Employee=require("./models/Employee.js")
const app=express()
const port=3000
conn=mongoose.connect("mongodb://localhost:27017/company")
app.set("view engine","ejs")
const getRandom=(arr)=>{  
    let rno=Math.floor(Math.random()*(arr.length-1))
    return arr[rno]
}
app.get('/',(req,res)=>{
    res.render('index',{foo:'FOO'})
})
app.get('/generate',async(req,res)=>{
    await Employee.deleteMany({})
    let names=["alice","bob","charlie","james"]
    let salaries=[100000,200000,300000,400000]
    let languages=["java","python","c","javascript"]
    for (let i = 0; i < 10; i++) {
        let e=await Employee.create({
            name:getRandom(names),
            salary:getRandom(salaries),
            languages:getRandom(languages),
            ismanager:((Math.random())>0.5?true:false)
        }) 
        console.log(e)
    }
    res.json({ message: "Employees generated successfully" }); // ✅ Correct for fetch

})
 
app.listen(port,()=>{
    console.log(`App is listening on port:${port}`)
})