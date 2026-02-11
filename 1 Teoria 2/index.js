// const txtn1 = document.getElementById("n1");
// const txtn2 = document.getElementById("n2");
// const respuesta = document.getElementById("resp");
// const btncalcular = document.getElementById("calcular");
// btncalcular.addEventListener("click", calcular);
// function calcular() {
//   const op1 = parseFloat( txtn1.value);
//   const op2 = parseFloat( txtn2.value);
//   let resp = op1 + op2;
//   respuesta.innerText = resp;
// }

// const ejecutar = document.getElementById("btn");
// const respuesta = document.getElementById("resp");
// ejecutar.addEventListener("click", iniciar);

// let frutas = ["manzana", "mango"];
// function iniciar() {
//     frutas.forEach(function(item,index,array){
//         respuesta.innerText=item
//     })
//respuesta.innerText = frutas[frutas.length - 1];
//.length para contar los elementos de una lista
// }
const txt = document.getElementById("resp");
async function obtenerData() {
  await fetch("https://api.github.com/repositories/19438/commits");
    then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log("Solicitud fallida", error));
}
obtenerData();
