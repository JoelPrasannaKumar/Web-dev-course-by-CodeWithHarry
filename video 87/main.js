const fs=require("fs")
console.log("starting")
// fs.writeFileSync("harry.txt","hellow world")
fs.writeFile("harry2.txt","Hellow world",()=>{
    console.log("done")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("harry2.txt","hello",(e,d)=>{
    console.log(d)
})
console.log("ending")