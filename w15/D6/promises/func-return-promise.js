// function returning promise
/* const bucket = ['coffee','chips','vegetables','salts','rice'];
function ricePromise() {
  return  new Promise((resolve,reject)=> {
        if(bucket.includes('vegetables') && bucket.includes('salts') && bucket.includes('rice')) {
            resolve('friedrice');
        } else {
            reject('could not do it');
        }
    })
}

ricePromise().then((rice)=>{
    console.log('let eat',rice);
}
).catch((error)=>{
    console.log(error)
}) */



// Promise && seTimeout

// I want to resolve / reject promise after 2 second


/* function myPromise() {
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value) {
                resolve();
            } else {
                reject();
            }
        },2000)
    })
}
myPromise()
.then(()=>{console.log('resolved')})
.catch(()=>{console.log('rejected')}) */


// Promise.resolve
// Promise chaining

/* const promise = Promise.resolve(5);
promise.then((value)=>{console.log(value)}) */

// then() => then method always return promise esse hm promise ki chain create kr skte hai

/* function myPromise() {
    return new Promise((resolved,reject)=>{
        resolved('foo');
    })
}
myPromise()
.then((value)=>{
    console.log(2);
    value += 'bar';
    return value;
})
.then((value)=>{
    console.log(value);
    value += 'task';
    return value;
})
.then((value)=>{
    console.log(value)
}) */

/* function myPromise() {
    return new Promise((resolved,reject)=>{
        resolved('s');
    })
}
myPromise().then((value)=>{
    console.log(value)
    value += 'a'
    return value
}).then((value)=>{
    console.log(value)
    value += 'u'
    return value
}).then((value)=>{
    console.log(value)
    value += 'm'
    return value
}).then((value)=>{
    console.log(value)
    value += 'y'
    return value
}).then((value)=>{
    console.log(value)
    value += 'a'
    return value
}).then((value)=>{
    console.log(value)}) */