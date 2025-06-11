import fs from "fs/promises"
let a=await fs.readFile("harry2.txt")
let b=await fs.appendFile("harry2.txt","   This is an amazing promise")
console.log(a.toString(),b)