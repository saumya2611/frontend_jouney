/* const firstName = 'John';
const lastName = 'Deo';
const age = 30; */

/* const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
} */

/* const person = {
    firstName,
    lastName,
    age,
}  */
// console.log(person);

// Destructuring 

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'saumya',
        age:20,
    }
};

todo.user.name = 'sanya'
todo.id = 2


const {id: todoId,
    title,user: {name}} = todo;
console.log(todoId , name);


// Destructure arrays
const numbers = [10,20,30,40,50,60,70,80,90,100];

const [first, second,...c] = numbers;
console.log(first,second,c);






















