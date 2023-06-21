// Match a range of character

let quoteSample = "A man's ambition should never exceed is worth";
let alphabetRegex = /[a-z]/gi;

let result = quoteSample.match(alphabetRegex);

console.log(result);

let numberSample = "I generated 0.7187242129607785 with 'Math.random'";
let numberRegex = /[2-6]/;

let numberResult = numberSample.match(numberRegex);
console.log(numberResult);

let alphabetNumeric = "Blueberry 3.141592653s are delicious.";
let alphabetNumericRegex = /[2-6h-s]/gi;

let alphabetNumericResult = alphabetNumeric.match(alphabetNumericRegex);

console.log(alphabetNumericResult);
