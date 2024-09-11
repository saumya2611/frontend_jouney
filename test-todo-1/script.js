const body = document.body;
const inputText = document.querySelector('#input-text');
const submitBtn = document.querySelector('#submit-btn')
const todoList = document.querySelector('.todoList')
const addRemoveButton = document.querySelector('.button')
let todoArr = []

console.log('submitBtn is => ',submitBtn);

submitBtn.addEventListener('click',() => {
    let inputValue = inputText.value
    
    if(!inputValue.trim()) {
        alert('plzzz field input value')
        return
    }

    todoArr.push(inputValue)
    todoListItem(inputValue)
    localStorage.setItem('data',JSON.stringify(todoArr))

    inputText.value = '';
    // console.log(inputValue);
    
})

function todoListItem(item) {
    const li = document.createElement('li')
    li.innerHTML = `
        <div>
          <span id="text">${item}</span>
        </div>
        <div class="button">
          <button class="addBtn" title="Mark To Done">&#10003;</button>
          <button class="removeBtn" title="Remove Item">&#10007;</button>
        </div>`
        li.children[1].addEventListener('click',addRemoveItem)
        todoList.append(li)
}

window.addEventListener('load',() => {
    let data = JSON.parse(localStorage.getItem('data')) || []
    console.log('data is =>',data);
    data.map((item) => {
        console.log('item is =>',item);
        
        todoListItem(item)
    })
    
})

function addRemoveItem(event) {
    if(event.target.classList.contains('addBtn')) {
        let strikeItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild;
        console.log(strikeItem);
        strikeItem.style.textDecoration = 'line-through';
    }

    if(event.target.classList.contains('removeBtn')) {
        let removeItem = event.target.parentNode.parentNode;
        console.log(removeItem);
        let clickItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML;
        console.log('clickItem ===>',clickItem);
        let dataArr = JSON.parse(localStorage.getItem('data'))
        let filterData = dataArr.filter((item) => {
            return item != clickItem
        })
        
        localStorage.setItem('data',JSON.stringify(filterData))

        // console.log('dataArr ====>',dataArr);
        
        removeItem.remove()
    }
}

addRemoveButton.addEventListener('click',addRemoveItem)