// const Pizzas=[{
//     name:'Pizza0',
//     index:1,
//     ingredients:['onion', 'pepper', 'olive']
// },{
//     name:'Pizza1',
//     index:4,
//     ingredients:['onion', 'pepper', 'olive']
// }]


// submissionfile= 2 1 4

// pick [1,4]

// getIngredients=(picked)=>{
//     //mapp through 

//     generalArray=[combination]
    
// }

// uniquearray=()=>{

//     return Array.length
// }

// calculateScores=()=>{
    
// }

function isPrime(input) {
  var inputArray = input.split('\n').map(Number);
  inputArray.shift();
  inputArray.forEach(element => {
    if (calcPrime(element)) {
      console.log('Prime');
   } else {
      console.log('Not prime');
   }
  });
    
  }

function calcPrime(x){
  for(var i = 2; i < x; i++)
      if(x % i === 0) return false;
    return x > 1;
}

console.log(isPrime(`3
12
5
7`))