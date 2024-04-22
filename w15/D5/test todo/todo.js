const inputText = document.querySelector('#input-text')
const addItem = document.querySelector('.btn')  
const todoList = document.querySelector('.todo-list')
const button = document.querySelector('.button')
console.log(button)

// sconsole.log(addItem)
let todoArr = []

window.addEventListener('load',function(){
  const data = JSON.parse(localStorage.getItem('data'))
  console.log('data is ==========>',data)
  todoArr = data
  console.log('todoArr is ==========>',todoArr)
  console.log(data)
  data.map((item)=>{
    console.log(item)
    addItemToList(item)
  })
})

function addItemToList(item) {
  const li = document.createElement('li')
    li.innerHTML = `
    <div>
      <span id="text">${item}</span>
    </div>
    <div class="button">
      <button class="add"  title="Mark To Done">&#10003;</button>
      <button class="remove"  title="Remove Item">&#10007;</button>
    </div>
  `

  li.children[1].addEventListener('click', addRemoveItem)
  console.log('children======',li.children[1])

  todoList.appendChild(li)

}

addItem.addEventListener('click',function(){
    const inputValue = inputText.value
    if(!inputValue.trim()) {
        alert('Please enter the todo')
        return 
    }
    console.log(inputValue)
    addItemToList(inputValue)
    todoArr.push(inputValue)
    localStorage.setItem('data',JSON.stringify(todoArr))
    
    inputText.value = ''
})

function addRemoveItem(event) {
    if(event.target.classList.contains('add')){
        const addElement = event.target.parentNode.parentNode.firstElementChild.firstElementChild
        // console.log(a)
        addElement.style.textDecoration = 'line-through'
        console.log(addElement)

    }

    if(event.target.classList.contains('remove')){
        const removeElement = event.target.parentNode.parentNode
        const dataArr = JSON.parse(localStorage.getItem('data'))
        console.log('dataArr is==',dataArr)
        removeElement.remove()
        // console.log(remove)
    }
}

button.addEventListener('click', addRemoveItem)

// if(event.target.classList.contains('remove')) {
//   const liSpan = event.target.parentNode.parentNode;
//   const clickItemValue = event.target.parentNode.parentNode.firstChild.nextSibling.innerHTML
//   console.log('==============>',clickItemValue)
//   const dataArr = JSON.parse(localStorage.getItem('data'))
//   console.log('dataArr', dataArr)
//   const currData = dataArr.filter((ele) => ele != clickItemValue)
//   console.log(clickItemValue)
//   console.log('currData', currData)
//   localStorage.setItem('data', JSON.stringify(currData))
//   liSpan.remove();
// }