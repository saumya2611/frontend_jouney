// Default parameter
/* function registerUser(user = 'Bot') {
    return user + ' is registered';
}
console.log(registerUser());


// Rest Parameter we present (... and variable) and we can add multiple of numbers using rest parament
function sum(...numbers) {
    let total = 0;
    for(let num of numbers) {
        total += num; // we wre using assignment operator total = total + num
    }
    return total;
}
console.log(sum(1,2,3,4,5));

// Object as parameters we can make one function and if we want some work multiple time so it will do , and we can reuse function
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Saumya',
};

console.log(loginUser(user));
console.log(loginUser({
    id: 2,
    name: 'Sara',
}));
console.log(loginUser({
    id: 3,
    name: 'Suyash',
}));

// Arrays as Parameters

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1,2,3,4,5,6]) */

/* 2 . function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
}
getRandom([1,2,3,4,5,6,7,8,9,10]); */ 


let num1 = Number(prompt('Enter first number'));
let num2 = Number(prompt('Enter second number'));
let op = prompt('Enter operator +,-,*,/,%');

function calculator(num1, num2, op) {
    let res;
    if(op == "+") {
        res = num1 + num2;
    }
    else if(op == "-") {
        res = num1 - num2;
    }
    else if(op == "*") {
        res = num1 * num2;
    }
    else if(op == "/") {
        res = num1 / num2;
    }
    else if(op == "%") {
        res = num1 * num2;
    }

    return res;

}
console.log(calculator(num1, num2 , op));
