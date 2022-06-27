async function getProductsFromServer() {
    const { data } = await axios.get('/api/getProduct')

    renderDataFromServerWithAllProducts(data)
}

async function getOneItemFromServer(id) {
    console.log(id)

    const { data } = await axios.get(`/api/${id}`)

    console.log(data)
    const { ok, item } = data

    console.log(item[0])
    if (ok === true) {
        localStorage.setItem("item", JSON.stringify(item[0]))
        location.href = "item.html"
    }
}

function renderDataFromServerWithAllProducts(items) {
    const root = document.querySelector('.rootItems')
    console.log(items)
    let html = ''

    items.forEach(product => {
        html += `<button onclick="getOneItemFromServer('${product.id}')">
            <h3>${product.name}</h3>
        </button>`
    });

    root.innerHTML = html
}


function renderOneItemFromServer() {
    const rootItem = document.querySelector('.rootItem')
    const local = localStorage.getItem("item")
    const item = JSON.parse(local)
    console.log(item)

    rootItem.innerHTML = `
    <div>
        <h2>${item.name}</h2>
        <p>${item.price}$</p>
        <p>${item.desc}</p>
    </div>
    `
}