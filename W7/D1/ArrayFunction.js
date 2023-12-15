foreach()
Map()
filter()
reduce()
find()
findIndex()
Fill()
every()
some()
includes()
flat()
join()
push() 
shift()
unshift()
pop()
splice()
slice()
// what is the return value of the function
// what is return value if condition gonna false
// which function change in  original array 
// what is the use case of function 
const arr1 = [1,2,3,4,5]
const arr2 = [[1,2,3], [4,5,6,5,6], [1,2,1]]

// console.log(arr1[4])
// console.log(arr2[2][1])

// for(let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i])
// }

for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
    for(let j = 0; j < arr2[i].length; j++) {
        console.log(arr2[i][j])
    }
}