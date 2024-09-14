const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    // console.log(e.target.value);
    heading.textContent = e.target.value;
}

function onCheckbox(e) {
    let isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';

}

function onFocus(e) {
    itemInput.style.border = '1px solid green'

    console.log('Input is focused');
    
}

function onBlur(e) {
    itemInput.style.border = 'none'
    console.log('Input is not focused');

}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheckbox);
itemInput.addEventListener('focus',onFocus)

itemInput.addEventListener('blur',onBlur)