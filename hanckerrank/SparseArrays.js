const strings=['ab','ab','abc']
const queries=['ab','abc','bc']
const finalArray=[]
// let count=0

// console.log(strings.map(x=>x+'1'))

// for (let i = 0; i < queries.length; i++) {
//     //  array[i];
//     strings.forEach(element => {
//         if(element==queries[i]){
//           finalArray.push({
//              query:element,
//              count: count+=1
//           })  
//         }
//     });
    
// }
// console.log(finalArray)
// strings.indexOf()

  console.log(queries.map(x=>strings.filter(y=>y===x).length))