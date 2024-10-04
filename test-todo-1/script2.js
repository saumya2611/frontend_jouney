const inputText = document.querySelector('#input-text');
const addItemBtn = document.querySelector('#submit-btn');
const todoList = document.querySelector('.todoList');

let todoArr = [];
let dynamicId = 1;

addItemBtn.addEventListener('click',function() {
    const inputValue = inputText.value;
    if(!inputValue.trim()) {
        alert('plzz field input vale');
        return
    }

    const obj = {
        id: dynamicId,
        title: inputValue,
        isCompleted: false,
        isDeleted: false,
    }

    todoArr.push(obj);
    dynamicId++;
    localStorage.setItem('id',dynamicId);
    localStorage.setItem('data',JSON.stringify(todoArr))
    todoListItem(obj)

    inputText.value = '';
})

function todoListItem(obj) {
    const li = document.createElement('li');
    li.innerHTML =  `<div>
    <span id="text">${obj.title}</span>
  </div>
  <div class="button">
    <button class="addBtn" title="Mark To Done">&#10003;</button>
    <button class="removeBtn" title="Remove Item">&#10007;</button>
  </div>`                               

  todoList.append(li)
   
}

window.addEventListener('load',function() {
    let id = JSON.parse(localStorage.getItem('id')) || 1;
    dynamicId = id;
    let data = JSON.parse(localStorage.getItem('data')) || []
    todoArr = data

    showListOnUI()
    console.log('data  ===>',data);
    
})

function showListOnUI() {
    todoList.innerHTML = '';
    todoArr.map((item) => {
        todoListItem(item)
    })
}