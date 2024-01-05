// Values are stored on the stack
const name = 'john';

const name1 = 'john';
console.log(name == name1);

// name2  typeof object 

const name2 = new String('john')
console.log(name === name2);

const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Brad',
    age:  40
}

let newName = name;
newName = 'johnathan';

let newPerson = person;
newPerson.name = 'Bradley';
console.log(name, newName);

console.log(person , newPerson);