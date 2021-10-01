// function firstDuplicate(arr) {
//     let elementSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (elementSet.has(arr[i])) console.log(arr[i]) ;
//         elementSet.add(arr[i]);
//     }

//     return "No duplicates here!";
// }

// const a = [4,3,6,3,4,3]
// firstDuplicate(a)

const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElementa = toFindDuplicates(arry);
console.log(duplicateElementa);