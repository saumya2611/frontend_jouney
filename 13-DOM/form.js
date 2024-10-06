const formTodo = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');
// console.log(todoInput);

formTodo.addEventListener('submit', (eve) => {
    eve.preventDefault();

    let inputValue = todoInput.value;
    const newLi = document.createElement('li');
    const newLiInnerHtml = `
    <span class="text">${inputValue}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `;
   
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi)
  todoInput.value = ''
//   console.log(newLi);
})

todoList.addEventListener('click', function(eve) {
    // console.log(eve.target);
    // check if user clicked on done button
    if(eve.target.classList.contains('done')) {
        // console.log('ypu want to add something ? ');
        const liSpan = eve.target.parentNode.parentNode.firstElementChild;
        liSpan.style.textDecoration = 'line-through';
        // console.log(liSpan);
    }

    if(eve.target.classList.contains('remove')) {
        const removeLi = eve.target.parentNode.parentNode;
        removeLi.remove();
        console.log(removeLi);
        
        // console.log('ypu want to remove something ? ');
    }

})