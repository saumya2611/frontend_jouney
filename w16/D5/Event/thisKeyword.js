// this keyword
const btn = document.querySelector('.btn-headline');

btn.addEventListener('click',function() {
    console.log('you clicked me !!!!!');
    console.log('value of this');
    console.log(this);
});


// NOTE: arrow function ke case me this keyword ki value object hogi
// NOTE: normal function ke case me this keyword ki value vhi hogi jispe listener use kiya gya hai
