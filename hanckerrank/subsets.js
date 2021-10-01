

var set = [1,3,3,9,0];
var n = set.length;
 
var allSubsets = [];
 
//split into subsets
for (var i=0; i<(Math.pow(2,n)); i++) {
 var subset = [];
 for(var j=0; j<n; j++) {
   if( (i & (1<<j)) > 0 )
     subset.push(set[j]);
 }
 allSubsets.push(subset);
}
 
allSubsets.splice(0,1)

let sum=0
for (let i = 0; i < allSubsets.length; i++) {
    if(allSubsets[i].length===1){
        sum+=allSubsets[i][0]
    }
    else{
       sum+=allSubsets[i].reduce((a,b)=>a^b)
        
    }
    
}

console.log(sum)
console.log(sum %(Math.pow(10,9)))

 