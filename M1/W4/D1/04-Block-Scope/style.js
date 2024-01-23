// var is not block level scope
//  it's means global variable
const x = 100;

if (true) {
    const y = 200;
    console.log(x + y);
}
// console.log(x + y); // that's can't work outside because it's block scope

for(var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log(i); // it given error means not gives correct output

if (true) {
    const a = 500; // it's block scope
    let b = 500;   // it's block scope
    var c = 600;   // it's not block scope
}
console.log(c);

function run() {
    var d = 100; // it's function scope  it  will not  work outside
    console.log(d);
}
run();
// console.log(d)// it's function scope  it  will not  work outside