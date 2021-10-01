const arr =[3,2,1,3]

const max=Math.max(...arr);
let count=0

arr.forEach(element => {
    if(element===max){
        count+=1
    }
    
});

console.log(count)