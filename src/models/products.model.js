import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const filePath = path.join(__dirname, "./productos.json" );
const datos = fs.readFileSync(filePath, "utf-8");
const products = JSON.parse(datos);

//console.log (products);

export const getAllProducts = () => {
    return products;
};

export const searchProducts = (categ) => {
    
    return products.filter((item) => item.categoria.toLowerCase().includes(categ.toLowerCase()));
    
};

export const getProductById = (id) => {
    return products.find((item) => item.id == id);
};

export const createProduct = (categoria, articulo, precio) => {
    const newProduct = {
        id: products.length + 1,
        categoria,
        articulo,
        precio
    };
    products.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    return newProduct;
};

export const deleteProduct = (id) => {
    const indice = products.findIndex((item) => item.id === id);
    const productoBorrado = products.splice(indice, 1);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    return productoBorrado;
}

export const updateProduct = (id, nuevosDatos ) => {
     const indice = parseInt(products.findIndex((item) => item.id === id));
     if (indice == undefined){
        return null;
     }
     else {
        products[indice] = { ...products[indice], ...nuevosDatos };
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
        return products[indice];
     }
}