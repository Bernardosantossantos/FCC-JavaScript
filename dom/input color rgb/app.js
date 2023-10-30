//Declarando las constantes para obtener los colores
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

//Declarando las constantes para obtener el textos de los colores
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

//obteniendo los valores inicial de los inputs
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;
//Actualizando el texto de los p (sutituiendolos por los valores por defecto de los inputs)
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//funcion que actuliza el background de la pantalla
function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// Para actualizar Red (Rojo).
inputRojo.addEventListener('change', (e) => {
rojo = e.target.value;
textoRojo.innerText = rojo;
actualizarColor(rojo, verde, azul);
});
