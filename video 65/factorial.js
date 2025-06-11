let fact=[];
let reduce=(a,b)=>{
    return a*b;
}
let n=prompt("Enter n value: ")
for(let i=1;i<=n;i++){
    fact.push(i)
}
console.log("Factorial of "+n+" is "+fact.reduce(reduce))