console.log('script start');

const bucket = ['coffee','chips','vegetables','salts','rice'];

const friedRice = new Promise((resolve,reject)=> {
    if(bucket.includes('vegetables') && bucket.includes('salts') && bucket.includes('rice')) {
        resolve('friedrice');
    } else {
        reject('could not do it');
    }
})

// produce


// consume
// how to consume

// friedRice.then(
//     // when promise resolve
//     (myfriedRice)=>{
//     console.log('lets eat',myfriedRice);
// },
//  // when promise reject
// (error)=> {
//     console.log(error);
// })

// NOTE:setTimeout callback queve me add hota hai
// NOTE: promise microtask queve me add hote hai
// consume brwoser krega and will give result inside of javacsript object
// NOTE : jab setTimeout and promisses web broser ke paas jaayenge to event loop  pahele microtask queve ko rander krega
//  because eski priortiy jaata hai callback queve se

setTimeout(()=>{
    console.log('Hello')
},0)

friedRice.then(
    // when promise resolve
    (myfriedRice)=>{
    console.log('lets eat',myfriedRice);
}).catch((error)=>{
    console.log(error);
})

// Promise is not featues of javascript it's part of web browser
for(let i = 1; i <= 100; i++) {
    console.log(Math.random(),i);
}

console.log('script end!!');