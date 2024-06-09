const table = document.querySelector('#table')
console.log('table is',table);
const pageButton = document.querySelector('#pageButton')
console.log('pageButton =>',pageButton);
let inputBox = document.getElementById('inputBox')
console.log('inputBox =>',inputBox);
const searchBtn = document.getElementById('search-btn')
console.log('searchBtn =>',searchBtn);
let data = []





function loadColumn() {
    const headingRow = document.createElement('tr')
    const heading1 = document.createElement('th')
    heading1.innerHTML = 'S.No'
    const heading2 = document.createElement('th')
    heading2.innerHTML = 'Title'
    const heading3 = document.createElement('th')
    heading3.innerHTML = 'Description'
    const heading4 = document.createElement('th')
    heading4.innerHTML = 'Price'
    const heading5 = document.createElement('th')
    heading5.innerHTML = 'Brand'
    const heading6 = document.createElement('th')
    heading6.innerHTML = 'Category'
    const heading7 = document.createElement('th')
    heading7.innerHTML = 'Thumbnail'

    headingRow.append(heading1)
    headingRow.append(heading2)
    headingRow.append(heading3)
    headingRow.append(heading4)
    headingRow.append(heading5)
    headingRow.append(heading6)
    headingRow.append(heading7)

    table.append(headingRow) 
}

function fetchData(limit,skip) {
    table.innerHTML = ''
    pageButton.innerHTML = ''
    loadColumn()
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    fetch(url).then((res)=>{return res.json()})
    .then((res) => {
        console.log('res is=>',res)
        data = res.products
        showData(res.products)
        createPagination(res.total,res.limit)
})
.catch((error)=>console.log('Network Error',error)) 
}
fetchData(20,0)


function showData(data) {
    data.map((item)=>{
        const dataRow = document.createElement('tr')
        const id = document.createElement('td')
        id.innerHTML = item.id
        // console.log('id is =>',id); 
        const title = document.createElement('td')
        title.innerHTML = item.title
        // console.log('title is =>',title); 
        const description = document.createElement('td')
        description.innerHTML = item.description
        // console.log('description is =>',description); 
        const price = document.createElement('td')
        price.innerHTML = item.price
        // console.log('price is =>',price); 
        const brand = document.createElement('td')
        brand.innerHTML = item.brand ? item.brand : '-'
        // console.log('brand is =>',brand); 
        const category	 = document.createElement('td')
        category.innerHTML = item.category	
        // console.log('category is =>',category); 
        const thumbnail	 = document.createElement('td')
        const img = document.createElement('img')
        img.src = item.thumbnail
        img.height = '100'  
        img.width = '100'
        thumbnail.append(img)

        console.log('thumbnail is =>',thumbnail); 

        dataRow.append(id)
        dataRow.append(title)
        dataRow.append(description)
        dataRow.append(price)
        dataRow.append(brand)
        dataRow.append(category)
        dataRow.append(thumbnail)

        table.append(dataRow)
    })
}

function createPagination(total,limit) {
    pageButton.innerHTML = ''
    const pagination = Math.ceil(total/limit)
    console.log('paginationpagination is =>',pagination);
    for(let i = 1; i <= pagination; i++) {
        const peginationButton = document.createElement('button')
        peginationButton.innerHTML = i
        peginationButton.addEventListener('click',() => {onChangePagenation(i,limit)})
        pageButton.append(peginationButton)
    }
}

function onChangePagenation(pageNumber,limit) {
    const skip = (pageNumber - 1) * limit
    fetchData(limit,skip)
}

searchBtn.addEventListener('click',function(){
    console.log('input value =>',inputBox.value);
    console.log('data--->', data)
    // inputBox.value = ''
    const newData = data.filter((item)=>{
        return item.title.toLowerCase().includes(inputBox.value.toLowerCase())
    })
        table.innerHTML = ''
        loadColumn()
        showData(newData)
        console.log('newData--->', newData)
})