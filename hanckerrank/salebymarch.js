const ar = [10,20,20,10,10,30,50,10,20]

function sumOfduplicates(ar){
 let counts = {},sum=0
 

 for(let i =0; i < ar.length; i++){ 
     if (counts[ar[i]]){
     counts[ar[i]] += 1
     } else {
     counts[ar[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] > 1 && counts[prop]%2 !== 0){
            counts[prop]-=1
        }
    }
    for (let x in counts){
        if (counts[x] > 1 ){
            sum+=counts[x]
        }
    }
    
    console.log(counts)
    console.log(sum/2)
    return sum/2
}

sumOfduplicates(ar)