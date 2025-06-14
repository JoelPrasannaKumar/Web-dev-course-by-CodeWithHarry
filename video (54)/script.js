// alert("Hellow World")
console.log("code is running");
var a=prompt("Enter a number")
console.log("your number is "+a);
var isTrue=confirm("Are you sure you want leave this page")
if(isTrue){
    console.log("leaving the page ");
    document.body.style.backgroundColor="red";
}
else{
    console.log("not leaving the page");
}
document.title="hey hi"