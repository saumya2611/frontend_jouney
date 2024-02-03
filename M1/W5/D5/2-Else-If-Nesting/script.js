// when u wanna check multiple of condition

const d = new Date(10, 30, 2022, 19, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good After Noon');
} else {
    console.log('Good Night');
}

// Nested if 
if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good After Noon');
} else {
    console.log('Good Night');
}