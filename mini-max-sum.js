const arr =[1,2,3,4,5]
const sortedArr=arr.sort((a, b) => a - b)
let max=0,min=0

for (let i = 0,j=sortedArr.length-1; i < sortedArr.length-1; i++,j--) {
    max+=sortedArr[j]
    min+=sortedArr[i]
    
}
console.log(min,max)
