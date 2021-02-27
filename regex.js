// Find a substring of length greater than  that starts and ends with same character.

const re = /(.).*\1/;

const str1 = 'wxyz';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re)[0]);
console.log('substring:', str3.match(re)[0]);
console.log('substring:', str4.match(re)[0]);


// In this example, we replace any occurrence of the substring 'RegExp' with 'Regular Expression'

const re = /RegExp/;
const myString = 'We\'re learning about RegExps.';
const replacementString = 'Regular Expression';

console.log(myString);
console.log(myString.replace(re, replacementString));


// Check whether or not a string contains the word 'learn'.
const re = /learn/;
const str1 = 'Today, we\'ll learn about regular expressions.';
const str2 = 'Tomorrow, we\'ll write regular expressions '
            + 'and learn some complex expressions.';
const str3 = 'We\'re all done now!';

console.log(str1);
console.log('A search for', re, 'returns', str1.search(re), '\n');
console.log(str2);
console.log('A search for', re, 'returns', str2.search(re), '\n');
console.log(str3);
console.log('A search for', re, 'returns', str3.search(re));


// Find 'Chapter', followed by `$1$` or more numeric characters, followed by a decimal point, followed by a zero or more numeric characters, and use a flag to specify that the results are *case-insensitive*.

var re = /see (chapter \d+(\.\d)*)/i;
var str = 'For more information on regular expressions, see Chapter 3.4.5.1 and CHAPTER 2.3';

console.log(str.match(re));

// Match 'quick brown' followed by 'jumps', ignoring characters in between
// Remember 'brown' and 'jumps'
// Ignore case

var re = /quick\s(brown).+?(jumps)/ig;
var str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
var res = re.exec(str);

console.log(res);
console.log();

// The result object contains following information:
// 1. [0] is the full string of characters matched
// 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited.
// 3. index is the 0-based index of the match in the string.
// 4. input is the original string.

console.log('string of characters matched = ' + res[0]);
console.log('first parenthesized substring match = ' + res[1]);
console.log('second parenthesized substring match = ' + res[2]);
console.log('index of the match = ' + res.index);
console.log('original string = ' + res.input);
