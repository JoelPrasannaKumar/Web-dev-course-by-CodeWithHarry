let array=[1,13,5,3,7]
let newarr=[]
// for(let index=0;index<array.length;index++){
//     let element=array[index];
//     newarr.push(element**2)
// }
// console.log(newarr)
newarr=array.map((e,index,array)=>{
    return e**2;
})
console.log(newarr)
const greaterthanseven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(array.filter(greaterthanseven))
let array2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a+b;
}
console.log(array2.reduce(red))