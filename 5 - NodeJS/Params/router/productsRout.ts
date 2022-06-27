import { Router } from "express";
const router = Router();
import { getProduct, getOneItem } from "../controllers/productCont";

router
    .get('/getProduct', getProduct)
    .get('/:id', getOneItem)

export default router;