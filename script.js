// Seleccionamos todas las etiquetas h5 del documento
const etiquetasH5 = document.querySelectorAll('h5');

// Función para obtener un color aleatorio entre Verde, Azul y Rojo
function obtenerColorAleatorio() {
    const colores = ['green', 'blue', 'red'];
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}

// Añadimos el evento de clic a cada etiqueta h5
etiquetasH5.forEach(h5 => {
    h5.addEventListener('click', function() {
        // Aplicamos un color aleatorio al hacer clic
        this.style.color = obtenerColorAleatorio();
    });
});