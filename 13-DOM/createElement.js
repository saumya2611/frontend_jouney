// Add new HTML elements to page


// innerHTML to add html element

// const todoList = document.querySelector('.todo-list');
// todoList.innerHTML = '<li>New Todo</li>'
// todoList.innerHTML += '<li>New Todo</li>'
// console.log(todoList);

// when you should use it, when you should not 

// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement('li');
// newTodoItem.textContent = 'Todo2'
// todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)
// console.log(todoList);

/* const todoList = document.querySelector('.todo-list').firstElementChild;
todoList.remove();
console.log(todoList); */


// before
// after

// const newTodoItem = document.createElement('li');
// newTodoItem.textContent = 'Todo2'
// const todoList = document.querySelector('.todo-list');
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);


// clone nodes
// const ul = document.querySelector('.todo-list');
/* const li = document.createElement('li');
li.textContent = 'new todo';
const li2 = li.cloneNode(true)
ul.append(li)
ul.prepend(li2) */



// Some old method to support poor IE

// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

// new element
// const li = document.createElement('li');
// li.textContent = 'new todo';

// const firstTodo = document.querySelector('.first-todo');
// ul.insertBefore(li, firstTodo); // it will take two argument
// ul.replaceChild(li, firstTodo) // it will take two argument
// ul.remove(firstTodo) 



// Static list vs live list
// querySelectorAll gives static list
// getElementsBySomething gives live list but sometime it takes extra space
const ul = document.querySelector('.todo-list');
const listItem = ul.getElementsByTagName('li');

// const listItems = document.querySelectorAll('.todo-list li');
const sixli = document.createElement('li');
sixli.textContent = 'item 6';
ul.append(sixli);
console.log(listItem);