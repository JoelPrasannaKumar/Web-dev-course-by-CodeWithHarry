let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr.forEach((value,index,arr) => {
    console.log(value,index,arr)
});
let obj={
    a:1,
    b:2,
    c:3
}
for(const key in obj ){
    if(Object.hasOwnProperty.call(obj, key)){
        const element=obj[key]
        console.log(key,element)
    }
}
for (const element of arr) {
    console.log(element)
}