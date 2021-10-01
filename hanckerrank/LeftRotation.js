const arr=[1,2,3,4,5]
let n=2
const newArr=[]

for (let i = 0; i < n; i++) {
    // const element = array[i];
    
    arr.push(arr.shift())

}

console.log(arr)
