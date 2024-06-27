const inputText = document.querySelector('#input-text')
// console.log(inputText)
const btn = document.querySelector('.btn')
// console.log(btn)
const todoList = document.querySelector('.todo-list')
const addRemoveButton = document.querySelector('.button')
let id = 1;
// console.log('addRemoveButton====>',addRemoveButton)

let todoArr = []


btn.addEventListener('click',function(){
    const inputValue = inputText.value
    if(!inputValue.trim()) {
        alert('plzz fill input field')
        return
    }
// console.log(inputValue)
const obj = {id: id, value: inputValue}
console.log('object is ====',obj)
todoListItem(obj)
todoArr.push(obj)
id++
localStorage.setItem('data',JSON.stringify(todoArr))
inputText.value = ''
})

function todoListItem(item) {
  console.log('item =======',item)
    const li = document.createElement('li')
    li.innerHTML = `<div>
    <span id="text">${item.value}</span>
  </div>
  <div class="button">
    <button class="add" title="Mark To Done">&#10003;</button>
    <button class="remove" title="Remove Item">&#10007;</button>
  </div>`
  li.children[1].addEventListener('click',(env) => addRemoveItem(env, item.id))
  console.log('saumya===',li.children[1])
  todoList.append(li)
}

window.addEventListener('load',function(){
   const data = JSON.parse(localStorage.getItem('data')) || []
   todoArr = data
   data.map((item)=>{
    console.log('item is =>',item)
    todoListItem(item)
   })

})


  function addRemoveItem(event, itemId) {
    console.log('itemId======>',itemId)
   
  if(event.target.classList.contains('add')) {
    const addItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild
    console.log('addItem=========>',addItem)
    addItem.style.textDecoration = 'line-through'
  }

  if(event.target.classList.contains('remove')) { 
    console.log('itemId======', itemId);
    const removeItem = event.target.parentNode.parentNode
    console.log("removeItem====",removeItem)
    const clickItem = event.target.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML
    console.log('clickItem=========>',clickItem)
    let dataArr = JSON.parse(localStorage.getItem('data'))
    console.log('dataArr===',dataArr)
    let selectItem = dataArr.filter((item)=>{
      console.log('item=========',item)
      
      return item.id != itemId
    })
   console.log('selectItem===',selectItem)
   localStorage.setItem('data',JSON.stringify(selectItem))

   removeItem.remove()
  }
} 

addRemoveButton.addEventListener('click',addRemoveItem)
