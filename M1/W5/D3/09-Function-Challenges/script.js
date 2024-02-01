// Fahrenheit to Celsius (F-32) * 5 / 9
// Challenge 1:
// Fahrenheit to celcius
/* let c;
let getCelsius = (F) => c = (F-32) * 5/ 9;
console.log(`The temperature is ${getCelsius(32)} \xB0C`); */

function Celsius(f) {
    const celsius = ((f-32) * 5) / 9;
    return `The temperature is ${ celsius} \xB0C`;
}
console.log(Celsius(32));


// Challnege 2: min and max value

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min,
        max,
    };
}
console.log(minMax([1,2,3,4,5,6]));


// Challenge 3: IIFE area of rectangle
(function (length , width) {
    const rectangle = length * width;
    console.log(rectangle);
})(10 , 5);