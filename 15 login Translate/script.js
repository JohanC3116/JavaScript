const container = document.querySelector(".container");
const btnRegistrar = document.getElementById("sign-up-btn");
const btnIniciarSesion = document.getElementById("sign-in-btn");

btnRegistrar.addEventListener("click", () =>{
    container.classList.add("sign-up-mode")
})

btnIniciarSesion.addEventListener("click", () =>{
    container.classList.remove("sign-up-mode")
})
