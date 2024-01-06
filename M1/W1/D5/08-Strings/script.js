let x;

const name = 'john';
const age = 20;


x = 'Hello, my name is ' + name + 'and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// Strings Properties and Methods
const s = new String('Hello World');

x = typeof s;

// 1. x = s.length;

// Access value by key

x = s[1];

x = s.__proto__;


// 3. toUpperCase() toLowerCase();
x = s.toUpperCase();
x = s.toLowerCase();

// 4. charAt(0) ==> we will check what is tha character in that position.
x = s.charAt(0)

// 5. indexOf(e) ==> it will check where is the character in string and check index
x = s.indexOf('e');

// 6. substring() 
x = s.substring(0,4);

// 7. slice() ==> can do negative indexing
x = s.slice(0,8);
x = s.slice(-11, -6);


// 8. trim () ==> removes white space
x = '       World Hello World';

// 9. replace() ,  replaceAll()
x = s.replace('world','john');
x = s.replaceAll('World','john');
// i => insensitive flag to replace case sensitive
x = s.replace(/World/i,'john');
//  g =>  flag to replace all matches global matches 
x = s.replace(/World/g,'john');

// 10 . includes()
x = s.includes('Hello');

// 11. valueOf()
x = s.valueOf();

// 12. split()
x = s.split(' ');

// 13. startsWith(), endsWith()
x = s.startsWith('H');
x = s.endsWith('H');

console.log(x);