const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
const heading6 = document.querySelector('.heading6')
const heading7 = document.querySelector('.heading7')
const heading8 = document.querySelector('.heading8')
const heading9 = document.querySelector('.heading9')
const heading10 = document.querySelector('.heading10')


function changeText(element,text,color,time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
             
            } else {
              reject('error')
            }
        },time)
    })
}
const returnedPromise = changeText(heading1,'one','red',1000);
returnedPromise.then(() => {
   return changeText(heading2,'two','purple',1000)
}).then(() => {
   return changeText(heading3,'three','cyan',1000)
}).then(() => {
    return changeText(heading4,'four','green',1000);
}).then(() => {
    return changeText(heading5,'five','pink',1000);
}).then(() => {
    return changeText(heading6,'six','blue',1000);
}).then(() => {
    return changeText(heading7,'seven','red',1000);
}).then(() => {
    return changeText(heading8,'eight','cyan',1000);
}).then(() => {
    return changeText(heading9,'nine','green',1000);
}).then(() => {
    changeText(heading10,'ten','blue',1000);
}).catch((err) => {
    alert(err);
})

// changeText(heading1,'one','red',1000,() => {
//     changeText(heading2,'two','green',1000,() => {
//         changeText(heading3,'three','yellow',1000,() =>{
//             changeText(heading4,'four','cyan',1000,() => {
//                 changeText(heading5,'five','orange',1000,() => {
//                     changeText(heading6,'six','purple',1000,() => {
//                         changeText(heading7,'seven','violet',1000,() => {
//                             changeText(heading8,'eight','cyan',1000,() => {
//                                 changeText(heading9,'nine','green',1000,() => {
//                                     changeText(heading10,'ten','yellow',1000,() => {}, 

//                                     () => {console.log('heading10 does not exist') })},
//                                 () => {console.log('heading9 does not exist')})
//                             },() => {console.log('heading8 does not exist')})},
//                         () => {console.log('heading7 does not exist')})
//                     },() => {console.log('heading6 does not exist')})},
//                 () => {console.log('heading5 does not exist')})
//             },() => {console.log('heading4 does not exist')})
//         },() => {console.log('heading3 does not exist')})
//     },() => {console.log('heading2 does not exist')})}
// ,() => {console.log('heading1 does not exist')})