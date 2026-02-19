const cards = document.querySelector(".cards");
const img = document.querySelectorAll(".card__img");
const bg = document.querySelectorAll(".card__bg");
const range = 40;

//Funcion para calcular el valor de la posicion del mouse en relacion a laventana actual

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);
let timeOut;
document.addEventListener("mousemove", ({ x, y }) => {
  if (timeOut) {
    window.cancelAnimationFrame(timeOut);
  }
  timeOut = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);
    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    [].forEach.call(img, (item) => {
      item.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });
    [].forEach.call(bg, (item) => {
      item.style.backgroundPosition = `${xValue * 0.45}px ${yValue * 0.45}px`;
    });
  });
},false);
