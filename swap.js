var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');


var temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);