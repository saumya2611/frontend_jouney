// One key difference between function expressions and function Declarations is that function expressions can be anonymous.,
// While function Declarations must have a name . Another difference is that function declarations are hoisted to the top of their scope 
// meaning that they can be called before they are difined , While function expressions are not hoisted and must be defined before they are called



// Function Declaration

// function addDollarSign(value) {
//     return '$' + value;
// }
// console.log(addDollarSign(100));



// Function Expression


var res = function (num1, num2) { // function expression                                                                                                                                                     
    return num1 + num2;
}
console.log(res(10, 10));