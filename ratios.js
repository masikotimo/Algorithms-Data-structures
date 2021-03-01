const arr=[1,2,-2,-3,-4,0]
let positives=0,negatives=0,zeros=0

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        positives+=1
    }
    else if(arr[i]<0){
        negatives+=1
    }
    else zeros+=1
    
}

const positiveRatio =positives/arr.length
const negativeRatio =negatives/arr.length
const zeroRatio =zeros/arr.length
console.log(positiveRatio.toFixed(6))
console.log(negativeRatio.toFixed(6))
console.log(zeroRatio.toFixed(6))