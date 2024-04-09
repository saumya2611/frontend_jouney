console.log('Hello saumya');

const formTodo = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector('.todo-list');

formTodo.addEventListener('submit',function(event) {
    event.preventDefault();
    // console.log('submit event')
    // console.log(todoInput.value);
   
    const newTodoText = todoInput.value;
    const newLi = document.createElement('li');
   const newLiInnerHtml =  `
   <span class="text">${newTodoText}</span>
   <div class="todo-buttons">
     <button class="todo-btn done">Done</button>
     <button class="todo-btn remove">Remove</button>
   </div>
 `;
 
  newLi.innerHTML = newLiInnerHtml;
//   console.log(newLi);
  todoList.append(newLi);
  todoInput.value = '';

});

todoList.addEventListener('click',function(event) {
// console.log(event.target);
// if user check click on done button
if(event.target.classList.contains('remove')) {
    // console.log('you want to remove something ? ');
    const targetLi = event.target.parentNode.parentNode;
    targetLi.remove();
    // console.log(targetLi);
}
if(event.target.classList.contains('done')) {
    // console.log('great !!!!!');
    const liSpan = event.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = 'line-through';
    // console.log(liSpan);
}

})
