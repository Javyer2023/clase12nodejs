import express from "express";
import productsRouter from "./src/routes/products.router.js"
import cors from 'cors';
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor activo en: http://localhost:${PORT}`));

app.use(express.json());
app.use(cors());
app.use('/api',productsRouter);

app.get('/', (req, resp) => {resp.send('Node Js desde Express');});

app.use((req, resp, next) => {
    resp.status(404).json({error: "Recurso No Encontrado"});
});