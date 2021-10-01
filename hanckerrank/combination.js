let array = [1,2,3,4,5];
let k=2
let results = [];
let values=[]

//combination
// Since you only want pairs, there's no reason
// to iterate over the last element directly
for (let i = 0; i < array.length - 1; i++) {
  // This is where you'll capture that last value
  for (let j = i + 1; j < array.length; j++) {
    results.push([array[i],array[j]]);
  }
}

for (const key in results) {
    checkBitwise(results[key])
}

function checkBitwise(a) {
 let temp= a.reduce((a,b)=>{return a & b}) 
 if(temp<k){
     values.push(temp)
 }
}

console.log(Math.max(...values))