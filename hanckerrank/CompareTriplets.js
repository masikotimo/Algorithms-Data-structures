
const compareTriplets=()=>{
    const a=[19,20,45]
    const b=[45,20,89]
    
    let asum=0,bsum=0
    for (let i = 0; i < a.length; i++) {
        if (a[i]>b[i]){
            asum+=1
        }
        else if (a[i]===b[i]){
            asum+=0
            bsum+=0
        }
        else {
            bsum+=1
        }
        
    }
    return [asum,bsum]
}

console.log(compareTriplets())