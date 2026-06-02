const { capitalize, reverse, contains } = require("./stringUtils");

console.log(capitalize("hello"));
console.log(capitalize("kate"));
console.log(capitalize("steven"));
console.log(capitalize(""));
console.log(capitalize(null));
console.log(capitalize(undefined));
console.log(capitalize(false));

console.log(reverse("hello"));
console.log(reverse("Kate"));
console.log(reverse("Steven"));
console.log(reverse(""));
console.log(reverse(undefined));

console.log(contains("hello", "llo"));
console.log(contains("Steven", "even"));
console.log(contains("hello", "Llo"));
console.log(contains("hello", "hl"));
console.log(contains("", "hl"));
console.log(contains("Kate", ""));
console.log(contains("Kate", undefined));
console.log(contains(undefined, "Kate"));
