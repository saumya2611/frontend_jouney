const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const ondbClick = () => {
    // console.log('Double click event')
    if(document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'purple';
    }
}

const onRightClick = () => {
    console.log('Right click event');
}

const onMouseDown = () => {
    console.log('MouseDown event');
    
}

const onMouseUp = () => {
    console.log('MouseUp event');
    
}

const onMouseWheel = () => {
    console.log('MouseWheel event');
    
}

const onMouseOver = () => {
    console.log('MouseOver event');
    
}

const onMouseOut = () => {
    console.log('onMouseOut event');
    
}

const onDragStart = () => {
    console.log('Mouse Drag Start event');
    
}

const onDrag = () => {
    console.log('Mouse Drag');
    
}

const onDragEnd = () => {
    console.log('Mouse Drag End');
    
}

// logo.addEventListener('click',onClick);
logo.addEventListener('dblclick',ondbClick);
logo.addEventListener('contextmenu',onRightClick);
logo.addEventListener('mousedown',onMouseDown);
logo.addEventListener('mouseup',onMouseUp);
logo.addEventListener('wheel',onMouseWheel);
logo.addEventListener('mouseover',onMouseOver);
logo.addEventListener('mouseout',onMouseOut);
logo.addEventListener('dragstart',onDragStart);
logo.addEventListener('drag',onDrag);
logo.addEventListener('dragend',onDragEnd);