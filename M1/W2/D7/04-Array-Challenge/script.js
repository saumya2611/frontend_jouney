// Challenge 1
 let x;

const arr = [1,2,3,4,5];

// Result: [6,5,4,3,1,0]

x = arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Solution 2:
arr.splice(0,0,6);
arr.push(0);

// console.log(x);
// Challenge 2
let arr3;
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
arr3 = arr1.concat(arr2);

// Solution 2:

arr3 = [...arr1,...arr2];

// Solution 3:
arr3 = arr1.slice(0).concat(arr2);

console.log(arr3);