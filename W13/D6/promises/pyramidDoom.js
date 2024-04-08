const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');

function changeText(element,text,color,time) {
   return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        if(element) {
            element.innerHTML = text;
            element.style.color = color;
            resolve('now see it');
        }
        else {
          reject('reject');
        }
    },time)
   })
}
const returnedPromise = changeText(heading1,'one','green',1000);
 returnedPromise.then(()=>{
   return changeText(heading2,'two','purple',1000)
}).then(()=>{
    return changeText(heading3,'three','red',1000)
})
.then(()=>{
    return changeText(heading4,'four','cyan',1000)
})
.then(()=>{
    return changeText(heading5,'five','yellow',1000)
})

