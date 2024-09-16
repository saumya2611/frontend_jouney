const tabel = document.getElementById('tabel')
console.log('tabel is =>',tabel);
const pageButton = document.getElementById('pageButton')
console.log('pageButton is =>',pageButton);

const inputBox = document.getElementById('inputBox')
console.log('input Box is =>',inputBox);

const searchBtn = document.getElementById('searchBtn')
console.log('searchBtn is =>',searchBtn);

let filterData;

function loadColumn() {
    const tdRow = document.createElement('tr')
    const SNo = document.createElement('th')
    SNo.innerHTML = 'S.No'
    tdRow.append(SNo)
    const title = document.createElement('th')
    title.innerHTML = 'Title'
    const description = document.createElement('th')
    description.innerHTML = 'Description'
    const price = document.createElement('th')
    price.innerHTML = 'Price'
    const brand = document.createElement('th')
    brand.innerHTML = 'Brand'
    const category = document.createElement('th')
    category.innerHTML = 'Category'
    const thumbnail = document.createElement('th')
    thumbnail.innerHTML = 'Thumbnail'
    
    tdRow.append(SNo)
    tdRow.append(title)
    tdRow.append(description)
    tdRow.append(price)
    tdRow.append(brand)
    tdRow.append(category)
    tdRow.append(thumbnail)
    
    tabel.append(tdRow)
}
loadColumn() 

function showData(data) {
    data.map((item) => {
    const trCol = document.createElement('tr')
    const SNo = document.createElement('td')
    SNo.innerHTML = item.id
    const title = document.createElement('td')
    title.innerHTML = item.title
    const description = document.createElement('td')
    description.innerHTML = item.description
    const price = document.createElement('td')
    price.innerHTML = item.price
    const brand = document.createElement('td')
    brand.innerHTML = item.brand ? item.brand : '-'
    const category = document.createElement('td')
    category.innerHTML = item.category 
    const thumbnail = document.createElement('td')
    const img = document.createElement('img')
    img.height = '100'
    img.width = '100'
    img.src = item.thumbnail
    thumbnail.append(img)

    trCol.append(SNo)
    trCol.append(title)
    trCol.append(description)
    trCol.append(price)
    trCol.append(brand)
    trCol.append(category)
    trCol.append(thumbnail)
    tabel.append(trCol)
   
})
}

function createPagination(total,limit) {
    
    const page = Math.ceil(total/limit)
    console.log('page is =>',page);
    for(let i = 1; i <= page; i++) {
        const btn = document.createElement('button')
        btn.innerHTML = i
        btn.addEventListener('click',() => {onChangePagenation(i,limit)})
        pageButton.append(btn)
    }
 }

 function onChangePagenation(pageNumber,limit) {
    const skipData = (pageNumber - 1) * limit
    fetchData(limit,skipData)
 }


function fetchData(limit,skip) {
tabel.innerHTML = ''
pageButton.innerHTML = ''
loadColumn()

    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    fetch(url).then((res) => {return res.json()})
    .then((res) => {console.log('res is =>',res)
    filterData = res.products
    showData(res.products)
    createPagination(res.total,res.limit)
}).catch((err) => {'Network Error'})
    
}

fetchData(30,0) 

searchBtn.addEventListener('click',function() {
    console.log('search is =>',inputBox.value);
    console.log('filterData is =>',filterData);
    const newData = filterData.filter((item) => {
        return item.title.toLowerCase().includes(inputBox.value.toLowerCase())
    })

    console.log('newData is=>',newData);
    tabel.innerHTML = ''
    loadColumn()
    showData(newData)

    inputBox.value = ''
})