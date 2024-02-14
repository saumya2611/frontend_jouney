// for(initialization; condition; increment/decrement) {
// statement;
// }

/* for (let i = 0; i <= 10; i++) {
    console.log('Number ' + i);
}

// Nest Loop
for (let i = 1; i <= 10; i++) {
   console.log('Number', i);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


let tabel = 1;
let num =2
for (let i = 1; i <= 10; i++) {
    tabel = i * num;
    console.log('tabel',tabel)

} */

// Loop through an array
const names = ['saumya','suyash','suryanshi','viraj','sara'];
for (let i = 0; i < names.length; i++) {
   if (names[i] === 'suyash') {
    console.log(names[i] + ' is the best');
   } else {
    console.log(names[i]);
   }
   
}