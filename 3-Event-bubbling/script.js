// 1. event bubbling / event propogation
// 2. event capturing
// 3. event delegation
// const body = document.body
const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');


// top to lowest event capturing child to parent
/* child.addEventListener('click', () => {
    console.log('capture !!! child');
},true)
parent.addEventListener('click', () => {
    console.log('capture !!! parent');
},true)
grandparent.addEventListener('click', () => {
    console.log('capture !!! grandparent');
},true)
body.addEventListener('click', () => {
    console.log('capture !!! body');
},true)  */



/* Event bubbling lowest to top
child.addEventListener('click', () => {
    console.log('bubble child');
})
parent.addEventListener('click', () => {
    console.log('bubble parent');
    })
grandparent.addEventListener('click', () => {
    console.log('bubble grandparent');
})
body.addEventListener('click', () => {
    console.log('bubble body');
}) */    
 

// Event Delegation 
grandparent.addEventListener('click', (e) => {
    console.log(e.target);
})
    

