"use strict";
exports.__esModule = true;
exports.getOneItem = exports.getProduct = void 0;
var products_1 = require("../products");
exports.getProduct = function (req, res) {
    res.send(products_1.products);
};
exports.getOneItem = function (req, res) {
    // console.log(req)
    var id = req.params.id;
    console.log(id);
    var item = products_1.products.filter(function (item) { return item.id === id; });
    console.log(item);
    res.send({ ok: true, item: item });
};
