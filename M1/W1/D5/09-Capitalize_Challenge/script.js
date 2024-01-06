const myString = 'developer';
// output : Developer

// Solution 1:
let myNewString = myString.slice(0,1).toUpperCase() + myString.slice(1);
// console.log(myNewString);

// Solution 2:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// console.log(myNewString);

// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(myNewString);
