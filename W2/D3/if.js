var x = 0;

if (x === 0) {
    console.log("Neither positive nor negative!");
} else if (x > 0) {
    if (x < 10) {
        console.log("Single-digit positive number!");
    } else {
        console.log("More than one-digit positive number!");
    }
} else {
    console.log("Negative number!");
}