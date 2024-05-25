const table = document.getElementById('table')
const peginationButton = document.getElementById('peginationButton')
console.log(table);

const loadColumn = () => {
    const row = document.createElement('tr')
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


    row.append(heading1)
    row.append(heading2)
    row.append(heading3)
    row.append(heading4)
    row.append(heading5)
    row.append(heading6)
    row.append(heading7)
    table.append(row)
}


function fetchData(limit, skip) {
    table.innerHTML = ''
    peginationButton.innerHTML = ''
    loadColumn()
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    fetch(url).then((res)=>{return res.json()})
    .then((res)=>{console.log('res is',res)
        showData(res.products)
        createPegination(res.total,res.limit)
    })
    .catch((err)=>{console.log('error ',err)})
}

fetchData(20, 0)

const showData = (data)=> {
    data.map((item)=>{
        const dataRow = document.createElement('tr')
        const id = document.createElement('td')
        id.innerHTML =  item.id
        const title = document.createElement('td')
        title.innerHTML =  item.title
        const description = document.createElement('td')
        description.innerHTML =  item.description
        const price = document.createElement('td')
        price.innerHTML =  item.price
        const brand = document.createElement('td')
        brand.innerHTML =  item.brand ? item.brand : '-'
        const category = document.createElement('td')
        category.innerHTML =  item.category
        const thumbnail = document.createElement('td')
        const image = document.createElement('img')
        image.src = item.thumbnail
        image.height = '100'  
        image.width = '100'
        thumbnail.append(image)

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

// console.log('peginationButton===>',peginationButton);

const onChangePagenation = (pageNumber, limit)=> {
    console.log('pageNumber is =>',pageNumber);
    const skip = (pageNumber - 1) * limit
    fetchData(limit, skip)
}

const createPegination = (total,limit) => {
    peginationButton.innerHTML = ''
    const pegination = Math.ceil(total/limit)
    console.log('pegination',pegination);
    for(let i = 1; i <= pegination; i++) {
        const buttton = document.createElement('button')
        buttton.innerHTML = i
        buttton.addEventListener('click',() => {onChangePagenation(i, limit)})
        peginationButton.append(buttton)

    }
}