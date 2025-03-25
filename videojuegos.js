document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formulario").addEventListener("submit", agregarVideojuego);
});

function cargarVideojuegos() {
    const lista = document.getElementById("lista-videojuegos");
    lista.innerHTML = ""; // Limpiar la lista antes de cargar

    const videojuegos = [
        "FIFA 23 - PlayStation 5",
        "Call of Duty: Warzone - PC",
        "The Legend of Zelda: Breath of the Wild - Nintendo Switch",
        "Grand Theft Auto V - Xbox Series X",
        "Red Dead Redemption 2 - PlayStation 4",
        "Cyberpunk 2077 - PC",
        "God of War Ragnarök - PlayStation 5",
        "Super Mario Odyssey - Nintendo Switch",
        "Halo Infinite - Xbox Series X",
        "Resident Evil 4 Remake - PlayStation 5"
    ];

    videojuegos.forEach(juego => {
        const li = document.createElement("li");
        li.textContent = juego;
        lista.appendChild(li);
    });
}

function agregarVideojuego(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const plataforma = document.getElementById("plataforma").value;
    const genero = document.getElementById("genero").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;
    const desarrollador = document.getElementById("desarrollador").value;
    const fecha_lanzamiento = document.getElementById("fecha_lanzamiento").value;

    if (!titulo || !plataforma || !genero || !precio || !stock || !desarrollador || !fecha_lanzamiento) {
        alert("Todos los campos son obligatorios");
        return;
    }

    const lista = document.getElementById("lista-videojuegos");
    const nuevoJuego = document.createElement("li");
    nuevoJuego.textContent = `${titulo} - ${plataforma} (${genero}) - $${precio} - Stock: ${stock} - ${desarrollador} - Lanzamiento: ${fecha_lanzamiento}`;

    lista.appendChild(nuevoJuego);

    document.getElementById("formulario").reset();
}
