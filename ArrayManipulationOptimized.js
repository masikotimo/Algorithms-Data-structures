const n=5

function arrayManipulation(n, queries) {

const arr = Array(n + 1);
// console.log(arr)
let maxValue = 0,
currentNumber = 0;
queries.forEach(([startRange, endRange, value]) => {
    // console.log(startRange,endRange,value)
     arr[startRange] = arr[startRange] || { start: 0, end: 0 };
     arr[endRange] = arr[endRange] || { start: 0, end: 0 };
     arr[startRange].start += value;
     arr[endRange].end += value;
 });
arr.forEach((cell) => {
    console.log(cell)
   if (cell) {
     currentNumber += cell.start;
     if (currentNumber > maxValue) {
        maxValue = currentNumber;
     }
     currentNumber -= cell.end;
 }
});
return maxValue;

}

const queries=[
    [1,2,100],
    [2,5,100],
    [3,4,100]
]

console.log(arrayManipulation(n, queries))