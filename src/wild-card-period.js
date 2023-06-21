// Match anything with wild card Period

let testStr = "I'll hum a song";
let testString = "Bear hug";

let testRegex = /hu./;

console.log(testStr.match(testRegex));
console.log(testString.match(testRegex));

let string = "let's have fun with regular expressions";

let stringRegex = /.un/;

let result = stringRegex.test(string);

console.log(result);
