function hellow(name){
    console.log("Hellow "+name);
}
hellow("Joel");
hellow("Rouel");
function sum(a,b,c=4){
    return a+b+c;
}
result=sum(3,4);
console.log(result);
result=sum(3,4,1);
console.log(result);

let func=(x)=>{
    console.log(x);
}
func(8);