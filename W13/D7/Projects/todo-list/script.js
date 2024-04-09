const formtodo = document.querySelector('.form-todo');
const inputText = document.querySelector('#input-text');

const btn = document.querySelector('.btn');
const todolist = document.querySelector('.todo-list');

btn.addEventListener('click',function() {

    console.log('hello')
    const inputValue  = inputText.value;
    const li = document.createElement('li');
   
    // li.innerHTML = inputValue;
    console.log(li);

    li.innerHTML = `
   <span id="text">${inputText.value}</span>
    <div class="button">
      <button class="add">Add</button>
      <button class="remove">remove</button>
    </div>`
    
    todolist.appendChild(li)

    inputText.value = '';
})

todolist.addEventListener('click',function(event) {

    if(event.target.classList.contains('add')) {
        const liSpan = event.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = 'line-through';
    }

    if(event.target.classList.contains('remove')) {
        const liSpan = event.target.parentNode.parentNode;
        liSpan.remove();
    }
})