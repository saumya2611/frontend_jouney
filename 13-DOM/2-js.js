// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName('nav-item-content');
const navItems = document.getElementsByTagName('a');

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll('.nav-item-content');
// console.log(navItems);


// LOOP
// We can't use forEach method to iterate through HTMLCollection

/* for(let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i]
    navItem.style.backgroundColor = '#fff';
    navItem.style.color = 'green';
    navItem.style.fontWeight = 'bold';

} */

/* Array.from(navItems).forEach((navItems)=>{
    let nav = navItems
    nav.style.backgroundColor = '#fff';
    nav.style.color = 'green';
    nav.style.fontWeight = 'bold';
      
}) */ 

    