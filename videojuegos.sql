CREATE DATABASE stock_videojuegos;
USE stock_videojuegos;

CREATE TABLE videojuegos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    desarrollador VARCHAR(255) NOT NULL,
    fecha_lanzamiento DATE NOT NULL
);
