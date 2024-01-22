// alert('Hello');
// console.log(innerHeight);

const x = 100;

console.log(x, 'in global'); // it's global variable we can access anywhere

function run() {
    console.log(window.innerWidth);
    console.log(x, 'in function');
}
run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const x = 1;
    const y = 50;
    console.log(x + y);
}
add()
console.log(y);  // it's local, variable we can't access anywhere because it is inside of function