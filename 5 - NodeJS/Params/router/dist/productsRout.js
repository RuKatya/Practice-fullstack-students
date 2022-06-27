"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var productCont_1 = require("../controllers/productCont");
router
    .get('/getProduct', productCont_1.getProduct)
    .get('/:id', productCont_1.getOneItem);
exports["default"] = router;
