import { productos } from "../../productos.js";

export const getAllProducts = (req, resp) => {
    resp.json(productos);
};

export const searchProducts = (req, resp) => {
    const  {categoria} = req.query;
    const filtrados = productos.filter((item) => item.categoria.toLowerCase().includes(categoria.toLowerCase()));
    if(filtrados.length === 0) {
        return resp.status(404).json({error: "No hay coincidencias con su busqueda"});
    };
    resp.status(200).send(filtrados);
    console.log(filtrados);
};

export const getProductById = (req, resp) => {
    const encontrado = productos.find ((item) => item.id == req.params.id);
   
    if (encontrado == undefined){
        return resp.status(404).json({error: "No existe el producto solicitado"});
    }
     resp.json(encontrado);
};
