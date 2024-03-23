// const Color = ['red','blue','pink'];
const submit = document.querySelector('#btn');
const body = document.querySelector('body')
console.log(submit)


let colorIndex = 0;
console.log('First Step color index is', colorIndex)
const color = ['red','blue','pink','black'];
submit.addEventListener('click',function() {
    const heading = document.querySelector('#theme');
        console.log('Second Step colorIndex', colorIndex == color.length,'color.length' )
    if(colorIndex == color.length) {
        console.log('Third Step color=====>',colorIndex == color.length)
        console.log('Four Step color index is', colorIndex)
    console.log('Five Stepcolor length is',color.length)
        colorIndex = 0;
     console.log('6 Step color index is', colorIndex)
   
    }
   
    body.style.background = color[colorIndex];
    console.log('7 Step is color[colorIndex]',color[colorIndex])
    colorIndex = colorIndex + 1;
    console.log('8 Step is ',colorIndex)
})