// Arrow Function Syntax
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 2));

// Implicit Return
const sub = ((a,b) => a - b);
console.log(sub(4, 2));

// Can leave off () with a single parameter
// const a = (a) => a * 2;
// console.log(a(2));


// Returning  an Object
const createObj = () => ({
    name: 'Saumya',
});
console.log(createObj());

const numbers = [1,2,3,4,5];

numbers.forEach(function(n){
    console.log(n);
})

// Arrow function in a callback
/* let arr = [];
numbers.forEach((n) => console.log(n));

numbers.forEach((n) => arr.push(n));
console.log(arr); */

function array(ar) {
    return ar;
}
console.log(array([1,2,3,4]))



