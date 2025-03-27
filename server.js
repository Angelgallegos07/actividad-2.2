const express = require("express");
const cors = require("cors");
const apiRoutes = require("./api_videojuegos"); // Importar las rutas de la API

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Para manejar solicitudes JSON
app.use("/api", apiRoutes); // Prefijo para las rutas de la API

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
