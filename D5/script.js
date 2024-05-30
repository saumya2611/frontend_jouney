const table = document.getElementById('table')
console.log('table is ====',table);
const pageButton = document.getElementById('pageButton')
console.log('page button ==>',pageButton);
const textBox = document.getElementById('textBox')
console.log('textBox =>',textBox);
const searchButton = document.getElementById('search-button')
console.log('searchBox =>',searchButton);
let data;

function loadColumn() {
    const headingRow = document.createElement('tr')
    const sNo = document.createElement('th')
    sNo.innerHTML = 'S.No'
    const title = document.createElement('th')
    title.innerHTML = 'Title'
    const description = document.createElement('th')
    description.innerHTML = 'description'
    const price = document.createElement('th')
    price.innerHTML = 'price'
    const brand = document.createElement('th')
    brand.innerHTML = 'brand'
    const category = document.createElement('th')
    category.innerHTML = 'category'
    const thumbnail = document.createElement('th')
    thumbnail.innerHTML = 'thumbnail'

    headingRow.append(sNo)
    headingRow.append(title)
    headingRow.append(description)
    headingRow.append(price)
    headingRow.append(brand)
    headingRow.append(category)
    headingRow.append(thumbnail)

    table.append(headingRow)
}
loadColumn()

function showData(data) {
    data.map((item) => {
        const headingRow = document.createElement('tr')
        const id = document.createElement('td')
        id.innerHTML = item.id
        const title = document.createElement('td')
        title.innerHTML = item.title
        const description = document.createElement('td')
        description.innerHTML = item.description
        const price = document.createElement('td')
        price.innerHTML = item.price
        const brand = document.createElement('td')
        brand.innerHTML = item.brand
        const category = document.createElement('td')
        category.innerHTML = item.category
        const thumbnail = document.createElement('td')
        const img = document.createElement('img')
        img.src = item.thumbnail
        img.height = '100'
        img.width = '100'
        thumbnail.append(img)
        
        headingRow.append(id)
        headingRow.append(title)
        headingRow.append(description)
        headingRow.append(price)
        headingRow.append(brand)
        headingRow.append(category)
        headingRow.append(thumbnail)
       
        table.append(headingRow)
    })
}

function createPagination(total,limit) {
    const page = Math.ceil(total/limit)
    for(let i = 1; i <= page; i++) {
        const peginationButton = document.createElement('button')
        peginationButton.innerHTML = i
        peginationButton.addEventListener('click',() => {onChangePagenation(i,limit)})
        pageButton.append(peginationButton)
    }
}   

function onChangePagenation(pageNumber,limit) {
    const skip = (pageNumber - 1 ) * limit
    fetchData(limit,skip)
}

function fetchData(limit,skip) {
    table.innerHTML = ''
    pageButton.innerHTML = ''
    loadColumn()

    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    fetch(url).then((res) => {return res.json()})
    .then((res) => {console.log('res is =>',res)
    data = res.products
    showData(res.products)
    createPagination(res.total,res.limit)
})
.catch((error) => {console.log('Network Error',error)})
}
fetchData(20,0)

searchButton.addEventListener('click',function() {
    console.log('textBox =>',textBox.value);
    console.log('data is =>',data);

    const newData = data.filter((item) => {
        // return item.title.toLowercase().includes(textBox.value.toLowercase())
        return   item.title.toLowerCase().includes(textBox.value.toLowerCase())
    })
    console.log('new Data is =>',newData);
    table.innerHTML = ''
    loadColumn()
    showData(newData)

})