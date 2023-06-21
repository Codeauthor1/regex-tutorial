// Match a Literal String With Different Possible

let petString = "James has a pet cat";

let petRegex = /dog|cat|bird|fish/;

let result = petRegex.test(petRegex);

console.log(result);
