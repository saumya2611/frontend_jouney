// function returning promise

/* const bucket = ['coffee','chips','rice','vegetables']
function ricePromise() {
    return new Promise((resolve,reject) => {
        if(bucket.includes('vegetables') && bucket.includes('rice')) {
            resolve('resolve');
        }
         else {
            reject('rejected')
         }
    })
}
const promise = ricePromise()
promise.then((res) => {console.log(res);
}).catch((err) => {console.log(err)}) */

/* ricePromise().then((res) => {console.log(res);
}).catch((err) => {console.log(err)}) */


// 2. promise && setTimeout

// I want to resolve / reject promise after 2 seconds

function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(() => {
            if (value) {
                resolve()
            } else {
                reject()
            }
        }, 2000);
    })
}
myPromise().then(() => {console.log('resolve')}).catch(() => {console.log('reject')});
