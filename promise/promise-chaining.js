// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then((value) => {
//     console.log(value);
// })

// then() method always return promise

function mypromise() {
    return new Promise((resolve, reject) => {
        resolve('foo');
    })
}
mypromise().then((value) => {
    console.log(value);
    value += 'bar'
    return value;
}).then((value) => {
    console.log(value);
    value += 'saumya';
    return value
}).then((value) => {
    console.log(value);
})