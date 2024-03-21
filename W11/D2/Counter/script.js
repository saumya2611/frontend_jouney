const decreaseButton = document.getElementById('dec');
const increaseButton = document.getElementById('inc');
const resetButton = document.getElementById('res');


let count = 0;

increaseButton.addEventListener('click',function(eve) {
   
    count = count + 1;
    console.log(count)
    const inputBox = document.getElementById('input-box');
    inputBox.value = count;

    console.log('increaseButton',increaseButton)

})

decreaseButton.addEventListener('click',function() {

    if(count > 0) {
    count = count - 1;
    const inputBox = document.getElementById('input-box');
    inputBox.value = count; 
}

})

resetButton.addEventListener('click',function() {
    const inputBox = document.getElementById('input-box');
    count = 0;
    inputBox.value = count;
    console.log(inputBox.value)

})

