import { products } from "../products"

export const getProduct = (req, res) => {
    res.send(products)
}

export const getOneItem = (req, res) => {
    // console.log(req)
    const { id } = req.params;

    console.log(id)

    const item = products.filter(item => item.id === id)
    console.log(item)

    res.send({ ok: true, item })
}