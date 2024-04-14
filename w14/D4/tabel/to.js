const inputText = document.querySelector('#input-text')
const addItemButton = document.querySelector('.btn')

const todoList = document.querySelector('.todo-list')
// console.log(todoList)
let todoArr = [];
function onloadPage() {
    const dataArr = JSON.parse(localStorage.getItem('data'))
    console.log('======>',dataArr)
    if(dataArr != null) {
        todoArr = dataArr
        todoArr.map((ele)=>{
            addToList(ele)
        })
    }

}
window.addEventListener('load',onloadPage)

function addToList(value) {

    const li = document.createElement('li')
    li.innerHTML = `<span id="text">${value}</span>
    <div class="button">
      <button class="add">Done</button>
      <button class="remove">remove</button>
    </div>`
    todoList.append(li) 
    
}

addItemButton.addEventListener('click',()=>{
    let inputValue = inputText.value
    if(inputValue == '') {
        alert('please fill input field')
        return
    }
    todoArr.push(inputValue)
    localStorage.setItem('data',JSON.stringify(todoArr))
    // console.log(inputValue)

    addToList(inputValue)
    inputText.value = '';
})

todoList.addEventListener('click',function(event) {
    if(event.target.classList.contains('add')) {
        const liSpan = event.target.parentNode.previousElementSibling
        console.log('========>',liSpan)
        liSpan.style.textDecoration = 'line-through'
    }

    if(event.target.classList.contains('remove')) {
        const liSpan = event.target.parentNode.parentNode
        const clickItemValue = event.target.parentNode.parentNode.firstChild.innerHTML
        console.log('clickItemVAlue=========>',clickItemValue)
        const dataArr = JSON.parse(localStorage.getItem('data'))
        console.log('dataArr=======>',dataArr)

        const currentData = dataArr.filter((ele)=> ele != clickItemValue)

        console.log('currentData===>',currentData)
        localStorage.setItem('data',JSON.stringify(currentData))
        
        
        liSpan.remove();
    }

})

