const express = require("express");
const db = require("./conexion_db"); // Importar la conexión a la base de datos

const router = express.Router();

// Ruta GET para obtener todos los videojuegos
router.get("/videojuegos", (req, res) => {
    db.query("SELECT * FROM videojuegos", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Ruta POST para agregar un nuevo videojuego
router.post("/videojuegos", (req, res) => {
    const { titulo, plataforma, genero, precio, stock, desarrollador, fecha_lanzamiento } = req.body;

    // Validación de datos
    if (!titulo || !plataforma || !genero || !precio || !stock || !desarrollador || !fecha_lanzamiento) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const query = "INSERT INTO videojuegos (titulo, plataforma, genero, precio, stock, desarrollador, fecha_lanzamiento) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [titulo, plataforma, genero, precio, stock, desarrollador, fecha_lanzamiento], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, ...req.body });
    });
});

module.exports = router; // Exportar las rutas para usarlas en el servidor
