(function () {
const user = 'Suyash';
console.log(user);
})();

(function () {
    const user = 'Suyash';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();


(function (name) {
    console.log('Hello ' + name);
})('Guyz');
    
    
    
