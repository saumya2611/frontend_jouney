// 100 => Informational request => the request was received countining process
// 200 => successful => THe request was seccesfully received , understood and accepted
// 300 => redirection => further action need to be taken in order to complete the request
// 400 => client error => the request contains bad syntax and cannot be fulfield
// 500 => server error => server failed





const body = document.body;
const tabel = document.createElement('table');
tabel.id = 'data';
const tr = document.createElement('tr');
const th1 = document.createElement('th');
th1.textContent = 'USERID';
const th2 = document.createElement('th');
th2.textContent = 'TITLE';
const th3 = document.createElement('th');
th3.textContent = 'BODY';
tr.append(th1)
tr.append(th2)
tr.append(th3)
tabel.append(tr)
body.append(tabel)

const URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();
xhr.open('GET',URL);
                
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && this.status == 200) {
        const response = xhr.responseText;
        const data = JSON.parse(response)
        console.log(data);
        data.map((item) => {
            // console.log(item);
            const tr = document.createElement('tr');
            const userId = document.createElement('td');
            userId.textContent = item.userId;
            const title = document.createElement('td');
            title.textContent = item.title;
            const body = document.createElement('td');
            body.textContent = item.body;
            
            tr.append(userId);
            tr.append(title);
            tr.append(body)
            tabel.append(tr)

        })
    }
}
xhr.send()

xhr.onerror = () => {
    console.log('network error');
    
}

