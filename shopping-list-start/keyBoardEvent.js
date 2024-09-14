const itemInput = document.getElementById('item-input');
console.log('itemInput =>',itemInput);

const onkeyPress = () => {
    console.log('keypress');
}

const onkeyUp = () => {
    console.log('keyUp');
}

const onkeyDown = (e) => {
    // console.log('KeyDown');

    // key
    console.log(e.key);
    
}

// itemInput.addEventListener('keypress', onkeyPress);
// itemInput.addEventListener('keyup', onkeyUp);
itemInput.addEventListener('keydown', onkeyDown);
