// let i = 0;
// When you don't know number of iterations ahead oftime.
/* while (i <= 10) {
    console.log(i);
    i++;
} */

// Loops over arrays
/* const arr = [10,20,30,40];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
} */

// Nesting While loop 
// let i = 0;
/* while (i <= 5) {
    console.log('Number',i);
    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
} */

/* do {
    console.log('Number', i);
    i++;
} while(i <= 10); */

//  for (let i = 1; i <= 100; i++) {
//     console.log(`Number ${i}`);
// }

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(`FizzBuzz`);
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
    } else {
        console.log(i);
    }
} 





    
