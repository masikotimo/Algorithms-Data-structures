const arr = [1, 2, 3, 4, 5]

const n = 2
for (let i = 0; i < n; i++) arr.unshift(arr.pop())
console.log(arr)