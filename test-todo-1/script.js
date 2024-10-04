const body = document.body;
const inputText = document.querySelector('#input-text');
const submitBtn = document.querySelector('#submit-btn')
const todoList = document.querySelector('.todoList')
let todoArr = []
let dynamicId = 1;

// console.log('submitBtn is => ',submitBtn);

submitBtn.addEventListener('click',() => {

    let inputValue = inputText.value
    
    if(!inputValue.trim()) {
        alert('plzzz field input value')
        return
    }

    const obj = {
        id: dynamicId,
        title: inputValue,
        isCompleted: false,
        isDeleted: false
    }

    console.log('obj ===========>',obj);
    

    todoArr.push(obj)
    dynamicId++
    localStorage.setItem('dynamicId',dynamicId);
    console.log('todoArr =>',todoArr);
    
    todoListItem(obj)
    localStorage.setItem('data',JSON.stringify(todoArr))


    inputText.value = '';
    // console.log(inputValue);
    
})

function todoListItem(obj) {
    console.log("obj==::>>", obj)
    const li = document.createElement('li')
    li.innerHTML = `
        <div>
          <span id="text" class="${obj.isCompleted == true ? 'complete' : ''}" >${obj.title}</span>
        </div>
        <div class="button">
          <button value='${obj.id}' class="addBtn" title="Mark To Done">&#10003;</button>
          <button value='${obj.id}' class="removeBtn" title="Remove Item">&#10007;</button>
        </div>`
        li.children[1].children[0].addEventListener('click', completeTask)
        li.children[1].children[1].addEventListener('click', removeTask)
        todoList.append(li)
}

window.addEventListener('load',() => {
    let id = localStorage.getItem('dynamicId') || 1;
    dynamicId = id;
    let data = JSON.parse(localStorage.getItem('data')) || []
    todoArr = data;
    showListOnUI()
})

function showListOnUI() {
    todoList.innerHTML = ""
    todoArr.map((item) => {
        todoListItem(item)
    })
}

function completeTask(event) {
    const itemId = event.target.value
    console.log('itemId is =>',itemId);
    
    const newTodoArr = todoArr.map((item) => {
        if(item.id == itemId) {
            return {
                ...item,
                isCompleted: true,
            }
        }
        return item
    })
    todoArr = newTodoArr
    localStorage.setItem('data',JSON.stringify(todoArr))
    showListOnUI()
    console.log("newTodoArr:", newTodoArr)
}

function removeTask(event) {
    const itemId = event.target.value
    const newTodoArr = todoArr.filter(item => item.id != itemId)
    console.log("itemId", itemId)
    console.log("newTodoArr", newTodoArr)
    todoArr = newTodoArr
    localStorage.setItem('data',JSON.stringify(todoArr))
    showListOnUI()
}



// let data1 = ['saumya','s','sona','aadu','shavli']
// let clickItem = 's'
// console.log('data1 is =>',data1);
// let filterdata = data1.filter((item) => {
//     return item != clickItem;
// })

// console.log('filterdata ===>',filterdata);