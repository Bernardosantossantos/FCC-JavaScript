//Accediendo y modificando elementos desde JS

/*const primerTopping = document.querySelector('.topping');
console.log(primerTopping);

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = 'red';
primerTopping.style.textTransform = 'uppercase';
*/
//Accediendo a una lista ul
/*
const listaDeTopping = document.getElementById('lista-toppings');
console.log(listaDeTopping.textContent)*/

//Actualizando un atributo en js 
/*
const enlaces = document.getElementsByTagName('a');
console.log(enlaces[0].setAttribute('href', 'https//www.freecodecamp.org'));
*/
/*
  const listaDeTopping = document.getElementById('lista-toppings');

  const toppingNuevo = document.createElement('li');
  toppingNuevo.classList.add('topping', 'fondo-marron');
  toppingNuevo.innerText = 'Queso Extra';

  listaDeTopping.append(toppingNuevo);

function mostrarClic(topping) {
  console.log(topping);
}
*/
const toppings = document.getElementsByClassName('topping');

for (const topping of toppings) {
  topping.addEventListener('click', (e) =>  {
    console.log(e.target.innerText);
});
}


