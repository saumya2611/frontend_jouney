const form = document.querySelector('#item-form');
const item = document.querySelector('#item-input');
const priority = document.querySelector('#priority-input')
console.log('priority  ==>',priority);

/* function onSubmit(event) {
    event.preventDefault()
    // console.log('Submit');

    const item = document.getElementById('item-input').value
    const priority = document.getElementById('priority-input').value

    if(item === '' || priority === '0') {
        alert('plzz filed input field')

        return
    }
    console.log(item,priority);
    
} */

// form.addEventListener('submit',onSubmit)

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const entries = formData.entries()

    // console.log('entries ==>',entries);
    
    // for (let entry of entries) {
    //     console.log(entry);
        
    // }

    const item = formData.get('item');
    const priority = formData.get('priority');

    console.log(item,priority);
    
}

form.addEventListener('submit',onSubmit2)