const arr =['1','20','40','40']
let avg
let sum=arr.reduce((a,b)=>parseInt(a) +parseInt(b))
console.log(sum/arr.length)