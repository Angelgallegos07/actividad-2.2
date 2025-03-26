-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS stock_videojuegos;
USE stock_videojuegos;

-- Crear la tabla videojuegos
CREATE TABLE IF NOT EXISTS videojuegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    plataforma VARCHAR(255) NOT NULL,
    genero VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    desarrollador VARCHAR(255) NOT NULL,
    fecha_lanzamiento DATE NOT NULL
);
-- Insertar datos de ejemplo
INSERT INTO videojuegos (titulo, plataforma, genero, precio, stock, desarrollador, fecha_lanzamiento) VALUES
("FIFA 23", "PlayStation 5", "Deportes", 59.99, 100, "EA Sports", "2022-09-30"),
("Call of Duty: Warzone", "PC", "Shooter", 39.99, 200, "Activision", "2020-03-10"),
("The Legend of Zelda: Breath of the Wild", "Nintendo Switch", "Aventura", 59.99, 150, "Nintendo", "2017-03-03"),
("Grand Theft Auto V", "Xbox Series X", "Acción", 49.99, 120, "Rockstar Games", "2013-09-17"),
("Red Dead Redemption 2", "PlayStation 4", "Aventura", 59.99, 180, "Rockstar Games", "2018-10-26"),
("Cyberpunk 2077", "PC", "RPG", 59.99, 50, "CD Projekt Red", "2020-12-10"),
("God of War Ragnarök", "PlayStation 5", "Acción", 69.99, 130, "Santa Monica Studio", "2022-11-09"),
("Super Mario Odyssey", "Nintendo Switch", "Plataforma", 49.99, 200, "Nintendo", "2017-10-27"),
("Halo Infinite", "Xbox Series X", "Shooter", 59.99, 90, "343 Industries", "2021-12-08"),
("Resident Evil 4 Remake", "PlayStation 5", "Survival Horror", 59.99, 160, "Capcom", "2023-03-24");
