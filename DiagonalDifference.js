const arr=[
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9] 
]
let sumLeftoRight=0,sumRightoLeft=0;

for (let row = 0; row < arr.length; row++) {
    // const element = arr[row];
    
    for (let col = 0; col < arr.length; col++) {
        if(row==col){
            sumLeftoRight+=arr[row][col]
        }
        if(row==arr.length-col-1){
            sumRightoLeft+=arr[row][col]
        }
    }

    
}

console.log(sumLeftoRight,sumRightoLeft)

let difference =Math.abs(sumLeftoRight-sumRightoLeft)
console.log(difference)
