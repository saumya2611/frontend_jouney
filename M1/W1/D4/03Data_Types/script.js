// String - Sequence of characters. Must be in quotes or backticks
// string can represent  3 way

// Number - integers as well as floating-point numbers

// Boolean - Logical entity / true or false

// Null - intentional absence of any object value

// Undefined - A variable that has not yet been defined / assigned

// Symbol - Built-in object whose constructor returns a unique symbol

// BigInt - Numbers thar are greater than the 'Number' type can handle


// Reference Types (Objects)

// objects are non-primitive value and when assigned to a variable, the variable, the is given a reference to that value.

// object literals, arrays and functions are all reference types


// String
const fName = 'Sara';
console.log('name of ',fName,' type of data', typeof fName);

// Number
const age = 22;
const temp = 22.10;
console.log(age, typeof age);
console.log(temp, typeof temp);

// Boolean
const hasKids = true;

const output = hasKids;

console.log(output, typeof output);
 
// Null 
const aptNumber = null;

const output1 = aptNumber

console.log(output1, typeof output1);

// undefined
let score;

console.log(score, typeof score);

// Symbol
const id = Symbol('id');

console.log(id , typeof id);

// BigInt
 const n = 234567876543245678n;
  console.log(n, typeof n);


// Reference Types non-primitive datatype
const numbers = [1,2,3,4];

console.log(numbers , typeof numbers);

const person = {name: 'saumya'};




