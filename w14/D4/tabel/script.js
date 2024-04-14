const tabel = document.createElement('table');
tabel.id = 'data'
const body = document.body
console.log(body)

const tr = document.createElement('tr');
const th1 = document.createElement('th')
th1.textContent = 'NAME'
const th2 = document.createElement('th')
th2.textContent = 'E-MAIL'
const th3 = document.createElement('th')
th3.textContent = 'PHONE-NUMBER'
const th4 = document.createElement('th')
th4.textContent = 'STREET'
const th5 = document.createElement('th')
th5.textContent = 'CITY'
const th6 = document.createElement('th')
th6.textContent = 'COMPANY NAME'

tr.append(th1)
tr.append(th2)
tr.append(th3)
tr.append(th4)
tr.append(th5)
tr.append(th6)
tabel.append(tr)
body.appendChild(tabel)


const url = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data)
        data.map((item)=>{
            const tr = document.createElement('tr')
            const nameTd = document.createElement('td')
            nameTd.innerHTML = item.name
            const emailTd = document.createElement('td')
            emailTd.innerHTML = item.email
            const phoneTd = document.createElement('td')
            phoneTd.innerHTML = item.phone
            const streetTd = document.createElement('td')
            streetTd.innerHTML = item.address.street
            const cityTd = document.createElement('td')
            cityTd.innerHTML = item.address.city
            const companyTd = document.createElement('td')
            companyTd.innerHTML = item.company.name
            tr.append(nameTd)
            tr.append(emailTd)
            tr.append(phoneTd)
            tr.append(streetTd)
            tr.append(cityTd)
            tr.append(companyTd)
            tabel.append(tr)
        })
    }
}

xhr.onerror  = ()=> {
    console.log('Network Error');
}