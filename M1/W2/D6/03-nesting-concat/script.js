const fruits = ['apple','pear','orange'];
const berries = ['strawberry','blueberry','rasberry'];

// fruits.push(berries);
// console.log(fruits);

// x = fruits[3][1];

// const allFruits = [fruits, berries];
//  x = allFruits[1][0];

// concat() it's add of two and multiple array
 x = fruits.concat(berries);

// Spread Operator(...)
x = [...fruits,...berries];
// console.log(x);

// Flatten Arrays
const arr = [1,2,[3,4],5,[6,7],8];
// flat() = it will merge in one array
x = arr.flat();

// Static Methods on Array Object Array.isArray() => this function will check array or not
x = Array.isArray(arr);

x = Array.isArray('Hello');

x = Array.from('saumya');

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a,b,c);

console.log(x);




