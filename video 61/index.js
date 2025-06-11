let a=prompt("Enter the first number: ")
let o=prompt("Enter the operation: ")
let b=prompt("Enter the second number: ")
let object={
    '+':'-',
    '-':'/',
    '*':'+',
    '/':'**'
}

random=Math.floor( Math.random() * 10 );
console.log(random)
if(random==1){
    console.log("Faulty calculator mode on")
    o=object[o]
    alert(`${eval(`${a} ${o} ${b}`)}`);


}
else{
    alert(`${eval(`${a} ${o} ${b}`)}`);
}