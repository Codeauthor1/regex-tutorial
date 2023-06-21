// MAtch Single Character Not Specified

let quoteSample = "3 blind mice";

let regex = /[^0-9aeiou]/gi;

let result = quoteSample.match(regex);

console.log(result);
