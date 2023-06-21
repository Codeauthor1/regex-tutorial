let testStr = "Repeat, Repeat, Repeat";
let testRegex = /Repeat/g; //Search through the string and retrieve every occurrence of Repeat

testStr.match(testRegex);

let twinkleStar = "Twinkle twinkle little star";

let starRegex = /twinkle/gi;

let result = twinkleStar.match(starRegex);

console.log(result);
