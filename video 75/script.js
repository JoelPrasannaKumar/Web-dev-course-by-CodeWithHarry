console.log("You just got hacked! @#$%^&*!")
setTimeout (() => {
  console.log("Hi I am setTimeout 1")
},2000)
setTimeout(() => {
  console.log("Hi I am setTimeout 2")
}
,3000)
console.log('The end');

const callback=(arg) => {
  console.log(arg);
}
const loadScript=(src,callback) => {
  let sc=document.createElement("script");
  sc.src=src;
  sc.onload=callback("Joel")
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )