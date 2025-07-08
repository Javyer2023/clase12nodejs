import { Router } from "express";
import { productos } from "../../productos.js";
import { getAllProducts, searchProducts, getProductById } from "../controllers/products.controller.js";
const router = Router();

export default router;

//las rutas con query deben ir antes de las rutas con params para evitar conflictos. 
router.get('/productos', getAllProducts);
router.get('/productos/search', searchProducts);
router.get('/productos/:id', getProductById );

router.post('/productos/', (req, resp) => {
    console.log(req.body);
    resp.send("POST");
});
//console.log(productos);

router.put('/productos/', (req, resp) => {
    console.log(req.body);
    resp.send("PUT");
});

router.delete('/productos/:id', (req, resp) =>{
    const id = parseInt(req.params.id, 10);
    const idProducto = productos.findIndex((item) => item.id === id);
    resp.status(204).send();
    
});