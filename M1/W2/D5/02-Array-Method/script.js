let x;

const arr = [10,20,30,40,50];

// arr.push(100);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse(); // this function will be use of character

// console.log(arr);

// x = arr.includes(500); // it's will search data of an array if data is an array so return True  , not found = False

// ar = [10,20,30]
// x = ar.indexOf(20); // if element not found it's will return -1

// slice() ===> which element do u want extract of an array then we will use slice function
// slice can do negative // slice do end excluded
/* x = arr.slice(0,2);
x = arr.slice(-3,-1);
x = arr.slice(1); */

// SPLICE()=======> splice()
// const arr = [10,20,30,40,50];
console.log('array is =>',arr);
// x = arr.splice(1,4); // can't do negative indexing it's do not exclude

// x = arr.splice(3,2);
 // where do u want start of an array and how many element do u want to get

// At position 2, add 2 elements, remove 1:
 let str = ['s','b','y','d','e'] 
 str.splice(2,1,'f');

console.log('after using splice =>',str);