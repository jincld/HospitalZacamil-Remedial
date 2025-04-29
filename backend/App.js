//importar todo de la librería de express
import express from "express";
import cookieParser from "cookie-parser";
import registerDoctorsRoute from './src/routes/registerDoctors.js';
import doctorsRoute from './src/routes/doctors.js';
import passwordRecoveryRoute from './src/routes/passwordRecovery.js';
//crear constante que es igual a la libreria que importé y se ejecuta
const app = express();

//que acepte archivos json
app.use (express.json());
//que acepte cookies
app.use(cookieParser());

//ruta para crud
app.use("/api/doctors", doctorsRoute);
app.use("/api/registerDoctors", registerDoctorsRoute);
app.use("/api/passwordRecovery", passwordRecoveryRoute);

//importo esta constante para usar express en todos lados
export default app;