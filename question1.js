
    



function solution(arr, N, target){
    
    
    return 1;
}


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
let currentLine = 0;

process.stdin.on("data", function (input) {
    stdin_input += input;                              
});

process.stdin.on("end", function () {
   stdin_input = stdin_input.trim().split('\n');
   main();
});

function readLine() {
    return stdin_input[currentLine++];
}


function main() {
    let N = parseInt(readLine());
    let arr = [];
    for(let i=0;i<N;i++)
    arr.push(readLine());
    let target = parseInt(readLine());
    console.log(solution(arr, N, target));
}
   