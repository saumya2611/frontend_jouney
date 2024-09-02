const body = document.body;
// console.log(body);

const id = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green =  Math.floor(Math.random() * 126);
    const blue =  Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = `${rgb}`;
    // console.log(rgb);
    
}, 2000)

// clearInterval(id)