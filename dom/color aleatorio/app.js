// Seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');
//Funcion que genera el color alatorio a partir de los digitos
function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#'

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

//El botton acciona a traves de la fuccion 
boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
//Actualizar texto
    color.textContent = colorAleatorio;
//Actualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio
}); 
