const logo = document.querySelector('img');

// function onClick (event) {
//     console.log(event.target);
//     event.target.style.backgroundColor = 'black';

// }

// logo.addEventListener('click',onClick)

document.querySelector('a').addEventListener('click',function(event) {
    event.preventDefault()
    console.log('Link Was Linked');
})