console.log(a1);
// const sleep =async ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve (45)
//         }, 1000);
//     })
// }
(async function main(){
    // let a=await sleep()
    // console.log(a)
    // let b=await sleep()
    // console.log(b)
    let [x,y,...rest]=[1,2,3,4,5]
    console.log(x,y,rest)
    let object={
        a:1,
        b:2,
        c:3
    }
    let {a,b}=object
    console.log(a,b)
    let arr=[1,4,6]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
})()
var a1=6;
async function sum(a,b,c) {
    return a+b+c
}
