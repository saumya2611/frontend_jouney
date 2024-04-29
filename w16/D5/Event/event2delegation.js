// event bubling / event propogation
// event capturing
// event delegation

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const body = document.body;

// EVENT BUBLING it's Lowest to top
// body.addEventListener('click',function() {
//     console.log('You clicked on body');
// })
// grandparent.addEventListener('click',function() {
//     console.log('You clicked on grandparent');
// })
// parent.addEventListener('click',function() {
//     console.log('You clicked on parent');
// })

// child.addEventListener('click',function() {
//     console.log('You clicked on child');
// }) 

// EVENT CAPTURING  top to Lowest 
/* body.addEventListener('click',function() {
    console.log('capturing !!!!! on body');
},true)
grandparent.addEventListener('click',function() {
    console.log('capturing !!!!! on grandparent');
},true)
parent.addEventListener('click',function() {
    console.log('capturing !!!!! on parent');
},true)

child.addEventListener('click',function() {
    console.log('capturing !!!!! on child');

},true) */

// EVENT DELEGATION

grandparent.addEventListener('click',function(event) {
        // console.log(event.target.textContent);
        const id = event.target.className;
        switch(id) {
            case id : console.log('you select',id)
            break;
        }
    })

