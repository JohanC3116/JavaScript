function Togglemenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function ImgSlider(parametros) {
  document.getElementById("slider").src = parametros;
}
