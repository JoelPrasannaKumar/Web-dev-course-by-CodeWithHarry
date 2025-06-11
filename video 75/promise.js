let promise=new Promise((resolve,reject) => {
  let a=Math.random();
  if(a<0.5){
    reject("No number is not supporting you")
  }
  else{
    setTimeout(()=>{
        console.log('yes I am done')
        resolve("Harry")
    },3000)
  }
}
)
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})
let p3=new Promise.race([promise],[prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})