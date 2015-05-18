// Basic String Operations
var str1 = 'Hello';
var str2 = ' World!';
var str3 = str1 + str2;

console.log(str3); // 'Hello World!'
console.log(str1.length); // 5

var str4 = 'Summer of Tech!';
console.log(str3.substring(0, str3.indexOf('World!')) + str4); // 'Hello Summer of Tech!'