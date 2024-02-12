// ||-
let x;
x = 10 || 20;
console.log(x)

// ||= assigns the right side value only if the left is a falsy value.
let a = false;

if (!a) {
    a = 10
}
// a = a || 10;
a = a ||= 10;

console.log(a)

// &&-
let y;
y = 10 && 20;
console.log(y)

// &&= assigns the right side value only if the left is a truthy value.
let b = 10;
if(b) {
    b = 20;
}
b = b && 20;
console.log(b)


// ??- returns the right side operand when the left either the null or undefined
let z;
// null - is left side
// 20 - is right side value
z = null ?? 20;
console.log(z)
// ??= assigns the right side value only if the left is null or undefined.

let c = null;
 if (c) {
    c = 10;
 }
 c ??= 10
 console.log(c);