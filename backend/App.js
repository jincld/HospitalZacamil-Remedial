//importar todo de la librería de express
import express from "express";
import cookieParser from "cookie-parser";
//crear constante que es igual a la libreria que importé y se ejecuta
const app = express();

//que acepte archivos json
app.use (express.json());
//que acepte cookies
app.use(cookieParser());

//ruta para crud


//importo esta constante para usar express en todos lados
export default app;