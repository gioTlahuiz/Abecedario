// funcion para asignar los colores aleatorios
 function setRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // creamos una cadena que contiene la coloracion rgb
    const color = `rgb(${r},${g},${b})`;

    // aqui debemos llamar al elemento que le dimos el id random
    document.getElementById("random").style.color = color;
 }
