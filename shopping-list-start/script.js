const clearBtn = document.querySelector('#clear');
// console.log(clearBtn);
function onClear() {
   const itemList = document.querySelector('ul')
   const items = itemList.querySelectorAll('li')
//    items.innerHTML = '';
//    itemList.innerHTML = '';

// items.forEach((item) => item.remove())
while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
    }
}    

clearBtn.addEventListener('click',onClear)


/* function onClear() {
    alert('clear items') 
} */

// Javascript Event Listener
// Second Way
// Named Function
/* clearBtn.onclick = function () {
    alert('clear items');
} */

// Arrow Function anonyms function
/* clearBtn.addEventListener('click', () => 
    alert('clear Items')) */

// Third Way
/* clearBtn.addEventListener('click', function() {
    alert('clear Items');
}) */



// setTimeout(() => clearBtn.removeEventListener('click',onClear), 1000);
  
// console.log('1');

// function onClear() {
//     alert('clear items');
// }   

// setTimeout(() => {clearBtn.addEventListener('click',onClear)},2000);

// console.log('2');

// setTimeout(() => clearBtn.removeEventListener('click',onClear), 1000);
