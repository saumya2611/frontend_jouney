// understand callback

/* function myFuncOne(callback) {
    console.log('task 1');
    callback()
}

myFuncOne(myFuncTwo)

function myFuncTwo() {
    console.log('task 2');
} */

// function getTwoNumbers(number1, number2, addition, subtraction) {


//   console.log(number1, number2);
//   const add = addition(number1 , number2);
//   const sub =  subtraction(number1 , number2);
//   console.log(sub);

//   return {
//     add: add,
//     sub: sub,
//   }
  

//     // console.log('addition of two number => ', callback);
    
// }    

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
//     return num1 + num2
// }

// function subTwoNumber(num1, num2) {
//     // console.log(num1 - num2);
//     return num1 - num2
// }

// // const add = addTwoNumber(3,3)
// const {add, sub} = getTwoNumbers(10,5,addTwoNumber,subTwoNumber)
// console.log("res==>", add, sub)


// short way
/* function calTwoNums(a, b, type) {

    switch(type) {
        case 'add':
            return a + b
        case 'sub':
            return a - b
        case 'mul':
            return a * b
        case 'div':
            return a / b
        default:
            return null
    }
}

let type = "mul"

const res = calTwoNums(10,5, type)
console.log('Res==>', res) */ 