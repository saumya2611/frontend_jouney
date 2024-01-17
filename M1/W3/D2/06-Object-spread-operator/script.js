let x;

const todo = new Object();

todo.id = 1
todo.name = 'saumya'; 
todo.completed = false;
todo.id1 = 1
todo.name1 = 'sumya'; 
todo.completed1 = false;
todo.address = 'Delhi'

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9384, lng: -71.3232
        }
    }
}
x = person.address.coords.lat;

const obj1 = { a: 1 , b: 2,}
const obj2 = {c: 3 , d: 4};
const obj3 = {...obj1,...obj2};
x = obj3;

const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

const todos = [{ id: 1, name: 'sanaya'},
                {id: 2, name: 'saumya'},
                {id: 3, name: 'viraj'},
];
console.log('todo is =>',todos)

x = Object.keys(todo).length;


x = Object.values(todo);
console.log('value is =>',x)

x = Object.entries(todo);
console.log('==============',x);


x = todo.hasOwnProperty('address'); // it will check given key present of an object yes or not if key is present return true , false
console.log('==============',x); 

// console.log(x);


// const ar = new Array();
// ar[0] = 1;
// ar[1] = 2;
// ar[2] = 3;
// console.log(ar);