// function ReverseString(input) {
//     let str=input.split("").reverse().join("")
//     let newStr=str.split("")
//     for (let i = 1; i < newStr.length; i++) {
//         if(i%3 ==0){
//            newStr.splice(i,1, '1')
//         }
        
//     }
//     console.log(newStr.join(""))
// }
// ReverseString('architecture')


// function movezeros(input) {
//     for (let i = 0; i < input.length; i++) {
//                 if(input[i] ===0){
//                     input.push(input.splice(i,1)[0])
//                 }
                
//             }
//     console.log(input)
// }
// movezeros([1,2,0,1,0,1,0,3,0,1])

var palindromeChainLength = function (n) {
    var count = 0;
    var palindrome = parseInt((n + '').split('').reverse().join(''));
    while (palindrome !== n) {
      n = parseInt(n) + parseInt(palindrome);
      palindrome = parseInt((n + '').split('').reverse().join(''));
      ++count;
    }

    return count;
  };