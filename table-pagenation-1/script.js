const inputBox = document.querySelector('#inputBox');
const searchBtn = document.querySelector('#searchBtn');
const tabel = document.querySelector('#tabel');
const pageButton = document.querySelector('#pageButton')
let filterData;
// console.log(tabel);


function loadColumn() {
    const headerRow = document.createElement('tr');
    const id = document.createElement('th')
    id.innerHTML = 'S.No';
    const titile = document.createElement('th');
    titile.innerHTML = 'Title';
    const description = document.createElement('th')
    description.innerHTML = 'Description';
    const price = document.createElement('th')
    price.innerHTML = 'Price';
    const brand = document.createElement('th')
    brand.innerHTML = 'Brand';
    const category = document.createElement('th')
    category.innerHTML = 'Category';
    const thumbnail = document.createElement('th')
    thumbnail.innerHTML = 'Thumbnail'
    const rating = document.createElement('th')
    rating.innerHTML = 'Rating';

    headerRow.append(id)
    headerRow.append(titile)
    headerRow.append(description)
    headerRow.append(price)
    headerRow.append(brand)
    headerRow.append(category)
    headerRow.append(thumbnail)
    headerRow.append(rating)


    tabel.append(headerRow)

}
loadColumn()

function showData(data) {
    data.map((item) => {
        const dataRow = document.createElement('tr')
        const id = document.createElement('td')
        id.innerHTML = item.id;
        const titile = document.createElement('td');
        titile.innerHTML = item.title;
        const description = document.createElement('td')
        description.innerHTML = item.description;
        const price = document.createElement('td')
        price.innerHTML = item.price;
        const brand = document.createElement('td')
        brand.innerHTML = item.brand ? item.brand : '-';
        const category = document.createElement('td')
        category.innerHTML = item.category;
        const thumbnail = document.createElement('td')
        const img = document.createElement('img')
        img.src = item.thumbnail;
        img.height = '100';
        img.width = '100';
        thumbnail.append(img)
        const rating = document.createElement('td')
        rating.innerHTML = item.rating;

        dataRow.append(id)
        dataRow.append(titile)
        dataRow.append(description)
        dataRow.append(price)
        dataRow.append(brand)
        dataRow.append(category)
        dataRow.append(thumbnail)
        dataRow.append(rating)

        tabel.append(dataRow)
    })
}

function createPagination(total, limit) {
    const page = Math.ceil(total / limit)
    console.log(page);
    for (let i = 1; i <= page; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = i;
        btn.addEventListener('click', () => { onChangePagenation(i, limit) })
        pageButton.append(btn)
    }

}

function onChangePagenation(pageNumber, limit) {
    const skipData = (pageNumber - 1) * limit
    console.log('skipData ===>', skipData);
    fetchData(limit, skipData)
}


function fetchData(limit, skip) {
    tabel.innerHTML = '';
    loadColumn()
    pageButton.innerHTML = ''
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    fetch(url).then((response) => {
        return response.json()
    }).then((res) => {
        // console.log(res.products);
        filterData = res.products;
        showData(res.products)
        createPagination(res.total, res.limit)
    }).catch((error) => {
        console.log('Network Error');

    })
}
fetchData(30, 0)

searchBtn.addEventListener('click', () => {
    console.log('inputBox Value is => ', inputBox.value);
    console.log('filterdata  is => ', filterData);
    const newData = filterData.filter((item) => {
        return item.title.toLowerCase().includes(inputBox.value.toLowerCase());
    })

    tabel.innerHTML = '';
    loadColumn()
    showData(newData)
    inputBox.value = ''
    console.log('newData is =>', newData);
})