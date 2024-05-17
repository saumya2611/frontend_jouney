// const url = 'https://www.instagram.com/accounts/login/?next=saumya';
// http --> protocol 
// https --> secure protocal
// www.instagram.com --> domain --> IP addres --> 157.240.22.174
// accounts/login --> path
// next --> not a path, it's call query params


const url = "https://dummyjson.com/products"
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         const data = xhr.responseText
//         console.log(JSON.parse(data));
//     }
// }
// xhr.open('GET',url)
// xhr.send()

fetch(url)
.then(res => {
    console.log(res)
    return res.json()
})
.then(res => console.log('res-->', res))
.catch(err => {
    console.log(err)
})

async function fetchData() {
    try {
        const res = await (await fetch(url)).json()
        console.log('async await response', res)
    } catch (error) {
        console.log("error", error)
    }
}
fetchData()