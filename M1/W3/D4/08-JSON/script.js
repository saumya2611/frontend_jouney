const post =
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
}

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str); // can't work
// Parse JSON
const obj = JSON.parse(str);
console.log(obj.id); 

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is body',

    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is body',

    }
];

const str2 = JSON.stringify(posts);
console.log(str2);
