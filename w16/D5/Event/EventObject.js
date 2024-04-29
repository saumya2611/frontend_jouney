// Event Object
// const firstButton = document.querySelector('#one');
// firstButton.addEventListener('click',function() {
//     console.log(this);
// });

// jab bhi  kisi bhi element pe event listener add hoga
// js Engine ---- line by line execute karta hai
// browser ----- js Engine + extra features
// browser ----- js Engine + WebApi

// jab browser kp pta chla ki user ne event perform kia jo hm listen kar rhe hai
// browser ---- 2
// 1.) callback function hai vo js Engine ko dega....
// 2.) callback function ke saath vo jo event huva hai uski information bhi degaa

// const allButton = document.querySelectorAll('.my-buttons button');

// for(let button of allButton) {
//     button.addEventListener('click',(e) => {
//         // console.log(this.textContent);  
//         console.log(e.currentTarget);  
//     })
// }


// NOTE: jab kisi element pe event listen krte hai to browser kya karta hai ??
// BEHIND THE SCENCE

/*console.log('SCRIPT START !!!!')

const allButton = document.querySelectorAll('.my-buttons button');
// console.log(allButton);
allButton.forEach((button) => {
    button.addEventListener('click', function(e) {
        let num = 0;
        for(let i = 0; i <= 1000000000; i++) {
           num += i;
        }
        console.log(e.currentTarget.textContent,num);
    })
})
let outerVar = 0;
for(let i = 0; i <= 100000000; i++) {
    outerVar += i;
 }
 console.log('VALUE OF OUTERVARIABLE IS', outerVar);
console.log('SCRIPT END !!!!') */

/*let count = 0;
console.log('1 step',count)
let bgcolor = ['red','gree','blue','cyan','black'];
const allButton = document.querySelectorAll('.my-buttons button');
allButton.forEach((button) => {
button.addEventListener('click',function() {
    const body = document.querySelector('body');
    console.log('2 step',count == bgcolor.length)
    if(count == bgcolor.length) {
        count = 0;
        console.log('3 step',count)

    }
    body.style.background = bgcolor[count];
    console.log('4 step',bgcolor[count])

    count = count + 1;
    console.log('5 step',count)
})
})*/
