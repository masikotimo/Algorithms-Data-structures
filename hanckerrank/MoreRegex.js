let str=`6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com`

let inputArray=str.split('\n')
inputArray.shift()
let regex=/([^\s]+).*\@gmail.com$/i
let names=[]

for (const key in inputArray) {
    inputArray[key].match(regex)? names.push(inputArray[key].match(regex)[1]):null
}
console.log(names.sort())
