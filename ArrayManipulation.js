const n=5
let addBy=3
let begin=0,end=1
const queries=[
    [1,2,100],
    [2,5,100],
    [3,4,100]
]

//creating the indexed array
let arr = '0'.repeat(n).split('').map((e) => parseInt(e));


queries.forEach((e,i) => {
    addBy=e[e.length-1]
    begin=e[0]
    end=e[1]
    console.log(arr)
    arr.map((x,i)=>{
        if(i>=begin && i<=end)arr[i-1]+=addBy
    })
    
});

console.log(arr)
return Math.max(...arr)
