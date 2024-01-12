const numbers = [10,20,30,40,50,60];
const mixed = [10,'saumya',true,null]

// console.log(numbers);

// Creating Array another way 

// Array Constructor

const fruits = new Array('apple','grape','orange');
console.log(fruits);

let x;
x = numbers[0];
x = numbers[0] + numbers[1];
console.log('====>',x)
// 1. length => it will check length of an array
y = numbers.length;
// console.log('len is' ,y)



x = `My fav fruits is an ${fruits[0]}`
// console.log(x)

// if we want change of value of an array
fruits[2] = 'pear';
x = fruits;
x = fruits.length;
fruits[3] = 'strawberry'
fruits[fruits.length] ='blue';
x = fruits
console.log(fruits)