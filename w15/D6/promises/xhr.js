const url = 'https://jsonplaceholder.typicode.com/todos'
const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.send()
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const data = JSON.parse(xhr.responseText)
        console.log('responseText-->', data);
        const parentDiv = document.createElement('div')
        data.map((item) => {
            const div = document.createElement('div') 
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            p1.innerHTML = 'Id: ' + item.id
            p2.innerHTML = 'Title: ' + item.title
            div.append(p1)
            div.append(p2)
            parentDiv.append(div)
        })
        document.getElementById('root').append(parentDiv)
        // document.getElementById("demo").innerHTML = xhttp.responseText;
     }
}



