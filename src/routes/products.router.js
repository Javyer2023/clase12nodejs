import { Router } from "express";
import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js";
const router = Router();

export default router;

//las rutas con query deben ir antes de las rutas con params para evitar conflictos. 
router.get('/productos', getAllProducts);

router.get('/productos/search', searchProducts);
router.get('/productos/:id', getProductById );

router.post('/productos/', createProduct );
//console.log(productos);

//router.put('/productos/', createProduct);
router.delete('/productos/:id', deleteProduct);
