//  Intro to Events
// click
// we can add event for three types

const btnHeading = document.querySelector('.btn-heading');
// console.log(btnHeading);


// console.dir(btnHeadline);
/* btnHeadline.onclick = function() {
    console.log('Hello');
} */

// method --- addEventListener
/* function clickMe() {
    console.log('Click Me !!!!');
    
} */

/* btnHeadline.addEventListener('click', function() {
    console.log('You Clicked Me !!!');

}); */

/* btnHeadline.addEventListener('click', () => {
    console.log('Arrow Function');

}); */


// this keyword
// Arrow func ke case me this ki value window object hoga
// normal func ke case me jis btn pe click krenge vhi hoga
btnHeading.addEventListener('click', function() {
    console.log('You Clicked Me !!!');
    console.log('value of this');
    // console.log(this);

});