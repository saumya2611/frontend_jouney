const inputText = document.querySelector('#input-text')
// console.log(inputText)
const submitBtn = document.querySelector('.btn')
// console.log(btn)
const todoList = document.querySelector('.todo-list')
const addRemoveButton = document.querySelector('.button')
// console.log('addRemoveButton====>',addRemoveButton)
const body = document.body

let todoArr = []


submitBtn.addEventListener('click', function () {
  const inputValue = inputText.value
  if (!inputValue.trim()) {
    alert('plzz fill input field')
    return
  }
  // console.log(inputValue)

  todoListItem(inputValue)
  todoArr.push(inputValue)
  localStorage.setItem('data', JSON.stringify(todoArr))
  inputText.value = ''
})

function todoListItem(item) {
  const li = document.createElement('li')
  li.innerHTML = `<div>
    <span id="text">${item}</span>
  </div>
  <div class="button">
    <button class="add" title="Mark To Done">&#10003;</button>
    <button class="remove" title="Remove Item">&#10007;</button>
  </div>`
  li.children[1].addEventListener('click', addRemoveItem)
  console.log('saumya===', li.children[1])
  todoList.append(li)
}

window.addEventListener('load', function () {
  const data = JSON.parse(localStorage.getItem('data')) || []
  todoArr = data
  data.map((item) => {
    console.log('item is =>', item)
    todoListItem(item)
  })

})


function addRemoveItem(event) {
  if (event.target.classList.contains('add')) {
    const strikeItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild;
    console.log('addItem=========>', strikeItem)
    strikeItem.style.textDecoration = 'underline';

  }

  if (event.target.classList.contains('remove')) {

    const removeItem = event.target.parentNode.parentNode
    console.log("removeItem====", removeItem)
    const clickItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML
    console.log('clickItem=========>', clickItem)
    let dataArr = JSON.parse(localStorage.getItem('data'))
    console.log('dataArr===', dataArr)
    let selectItem = dataArr.filter((item) => {
      return item != clickItem
    })
    console.log('selectItem===', selectItem)
    localStorage.setItem('data', JSON.stringify(selectItem))

    removeItem.remove()
  }
}

addRemoveButton.addEventListener('click', addRemoveItem)
