// const email = 'test@test.com';

// if (email) {
//     // console.log('You passed in an email');
// }
//     console.log(Boolean(email));

// Falsy Values:
// - false
// - 0
// - true
// - 1
// - '' or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// Everything else that is not falsy
// true
// '0' (0 in a string)
// ' ' (space in a string)
// 'false' (false in a string)
// [] (empty array)
// {} (empty object) 
// function () {} (empty function)



const x = null;
if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(x))

// Truthy and falsy caveats
const Children = 2;

if(!isNaN(Children)) {
    console.log(`You have ${Children} children`);
} else {
    console.log(`PLease eneter number of children`);
}

// Cheking for empty arrays
const posts = ['Post One', 'Post Two'];

if (posts) {
    console.log('List Posts');
} else {
    console.log('No Posts');
}

// Checking for empty objects
const user = {
   name: 'saumya'
};

if (Object.keys(user).length > 0) {
    console.log('List user')
} else {
    console.log('No user')
}

// Loose Equality (==)
console.log(false == 0)