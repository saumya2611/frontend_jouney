console.log('=============>');



const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit-btn');
const todoList = document.querySelector('.todoList');
const addRemoveButton = document.querySelector('.button');

let todoArr = []

submitBtn.addEventListener('click', () => {
    console.log('script ======>');
    
    let inputValue = inputText.value;
    if(!inputValue.trim()) {
        alert('plz fill input value');
        return
    }

    todoArr.push(inputValue)
    console.log('todoArr ==>',todoArr);
    todoListItem(inputValue)
    localStorage.setItem('data',JSON.stringify(todoArr))
    inputText.value = '';
})

window.addEventListener('load', () => {
    let data = JSON.parse(localStorage.getItem('data')) || [];
    todoArr = data;
    data.map((item) => {
        todoListItem(item)
    })
})

function todoListItem(item) {
    const li = document.createElement('li');
    li.innerHTML = `<div>
          <span id="text">${item}</span>
        </div>
        <div class="button">
          <button class="addBtn" title="Mark To Done">&#10003;</button>
          <button class="removeBtn" title="Remove Item">&#10007;</button>
        </div>`
        li.children[1].addEventListener('click',addRemoveItem)
        todoList.append(li);
}

function addRemoveItem(event) {
    // console.log(event.target);
    
    if(event.target.classList.contains('addBtn')) {
        const doneItem = event.target.parentElement.parentElement.firstElementChild.firstElementChild
        doneItem.style.textDecoration = 'line-through';
        console.log('doneItem ==>',doneItem);
        
    }

    if(event.target.classList.contains('removeBtn')) {
        const removeItem = event.target.parentElement.parentElement
        // console.log('removeItem ==>',removeItem);
        const clickItem = event.target.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML;
        const dataArr = JSON.parse(localStorage.getItem('data'))
        // console.log('dataArr ==> ',dataArr);
        const filterItem = dataArr.filter((item) => {
            return item != clickItem
        })
        

        localStorage.setItem('data',JSON.stringify(filterItem))
        // console.log('dataArr ==>',dataArr);
        
        // console.log('filterItem ==>',filterItem);
        
        removeItem.remove()
        
    }
}

addRemoveButton.addEventListener('click',addRemoveItem)