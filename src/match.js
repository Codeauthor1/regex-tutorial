// Match String Character with Multiple possibilities

let quoteSample = "A man's ambition should never exceed is worth";
let vowelRegex = /[aeiou]/gi;

let result = quoteSample.match(vowelRegex);

console.log(result);
