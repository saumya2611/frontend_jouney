function first() {
    const x = 100; // it's parent function can access in child function
    function second() { // it's child function but child variable can't access parent function 
        const y = 200;
        console.log(x + y);
    }
    // console.log(y) it gives error
    second();
}
first()

if (true) {
    const x = 100;
    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
    // console.log(y); can't access in parent scope
}