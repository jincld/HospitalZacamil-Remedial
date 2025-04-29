//importar el archivo app.js
import app from "./App.js";
//importar la conexión con base de datos
import "./database.js";
import {config} from "./src/config.js";

//crear función que ejecuta el servidor
async function main() {
    app.listen(config.server.port);
    console.log("Server running");
}
//ejecutar la función
main();