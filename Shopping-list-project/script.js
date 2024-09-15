const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');

const itemList = document.getElementById('item-list');

const clearBtn = document.querySelector('#clear')
// console.log('itemBtn ==>',itemBtn);

const itemFilter= document.querySelector('#filter')

// const itemArr = [];

function displayItems() {
    const itemsFromStorage = getItemToStorage(); 
    itemsFromStorage.forEach((item) =>  createItem(item));
    
    checkUI();
  }

function addItem(event) {
    event.preventDefault();

    // Validate Input
    const newItem = itemInput.value;
    if(!newItem.trim()) {
        alert('Plzz add an item');
        return;
    }

    createItem(newItem)

    // add item to localstroage
    addItemToStorage(newItem)

    itemInput.value = '';
}

// Create Item 
function createItem(item) {
    const li = document.createElement('li');
    li.innerHTML = `
          ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
            `;
    itemList.append(li)
    checkUI()

    // console.log('itemList is => ',itemList.children[4]);
}


function addItemToStorage(item) {

    
    let itemFromStorage = getItemToStorage();

    // const itemArr = [];
    // itemArr.push(item)
    // localStorage.setItem('data',JSON.stringify(itemArr))
    // console.log('itemArr ==>',itemArr);

    // if (localStorage.getItem('items') === null) {
    //     itemFromStorage = [];
    // } else {
    //     itemFromStorage = JSON.parse(localStorage.getItem('items'));
    // }

    // Add new item to array
    itemFromStorage.push(item);

    // Convert to JSON string and set to local storage 
    localStorage.setItem('items',JSON.stringify(itemFromStorage));
}

function getItemToStorage(item) {
    let itemFromStorage;

       if (localStorage.getItem('items') === null) {
        itemFromStorage = [];
    } else {
        itemFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemFromStorage;
}

function removeItem(event) {
// console.log(event.target.parentElement);
// event.target.remove();

    if(event.target.parentElement.classList.contains('remove-item')) {
        if(confirm('Are you sure?')) {
            event.target.parentElement.parentElement.remove();
            checkUI();
        }
    }
}

function clearItem() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}


function filterItem(e) {
    const items = itemList.querySelectorAll('li')
    const text = e.target.value.toLowerCase();

    // console.log('text is ==>',text);
    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
            // console.log(true);
            
        } else {
            item.style.display = 'none';

            // console.log(false);
            
        }
        // console.log('itemName is =>',itemName);
        
    })
    
}



function checkUI() {

    const items = itemList.querySelectorAll('li')
    // console.log('items ==>',items);

    if(items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}



// Event Listeners
// Initialize App

function init() {
    itemForm.addEventListener('submit', addItem)
    itemList.addEventListener('click', removeItem)
    clearBtn.addEventListener('click', clearItem)
    itemFilter.addEventListener('input', filterItem)
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();
}
init();
