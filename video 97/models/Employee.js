const mongoose=require('mongoose')
const employeeSchema=mongoose.Schema({
    name:String,
    salary:Number,
    languages:String,
    ismanager:Boolean
})
const Employee=mongoose.model("Employee",employeeSchema)
module.exports=Employee