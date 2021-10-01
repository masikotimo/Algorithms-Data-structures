// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel

const rex = /^([aeiou]).*\1$/i
const myString = 'anadweqaexxa';

console.log(myString.match(rex))

console.log(rex.test(myString));