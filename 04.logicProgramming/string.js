// Methods to extract part of string
// slice, substring, substr

// slice & substring
const myName = "Lucas";
console.log(myName.slice(1, 4)); // uca

const fruits = "Apple, Banana, Kiwi";
const kiwi = fruits.slice(15, 99);
const kiwi2 = fruits.substring(15);
console.log(kiwi); // Kiwi
console.log(kiwi2); // Kiwi

// substr
const banana = fruits.substr(7, 6);
console.log(banana); // Banana

// Methods to modify string content
// replace
let text = "Please visit Microsoft!";
const newText = text.replace("Microsoft", "my site");
console.log(newText); // Please visit my site!
text = "Please visit MICROSOFT!";
const newText2 = text.replace("Microsoft", "my site");
console.log(newText2); // Please visit MICROSOFT!

text = "Please visit MICROSOFT microsoft!";
const newTextRegex = text.replace(/Microsoft/gi, "my site"); // i for case insensitive, g for all occurrences
console.log(newTextRegex); // Please visit my site my site!

// padStart
let textToPad = "5";
const paddedStart = textToPad.padStart(4, 0);
const paddedEnd = textToPad.padEnd(4, 0);
console.log(paddedStart); // "0005"
console.log(paddedEnd); // "5000"
