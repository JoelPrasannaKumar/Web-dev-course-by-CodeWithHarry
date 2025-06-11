let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="Yes You got double clicked"
})
button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right clicking")
})
document.addEventListener("keydown",(e)=>{
    console.log(e,e.key)
})
