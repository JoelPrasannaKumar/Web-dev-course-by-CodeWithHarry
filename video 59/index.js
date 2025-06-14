/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
random=Math.floor( Math.random() * 10 );
if(random==1){
    console.log("Faulty calculator mode on")
var add=(a,b)=>{
    return a-b;
}
var subtract=(a,b)=>{
    return a/b;
}
var multiply=(a,b)=>{
    return a+b;
}
var divide=(a,b)=>{
    return a**b;
}
}
else{
    var add=(a,b)=>{
        return a+b;
    }
    var subtract=(a,b)=>{
        return a-b;
    }
    var multiply=(a,b)=>{
        return a*b;
    }
    var divide=(a,b)=>{
        return a/b;
    }
}
console.log(random)
console.log(add(5,3));
console.log(subtract(5,3));
console.log(multiply(5,3));
console.log(divide(5,3));