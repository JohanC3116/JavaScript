function toggleMenu() {
  const menuIcon = document.querySelector(".menuIcon");
  const navbar = document.getElementById("navbar");
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
}

const sliderShow = document.getElementById("slideShow");
const slides = slideShow.getElementsByTagName("video");

var index = 0;
function nextSlider() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prevtSlider() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

const slideShowText = document.getElementById("sliderShowText");
const slideText = slideShowText.getElementsByTagName("div");

var i = 0;
function nextSlideText() {
  slideText[i].classList.remove("active");
  i = (i + 1) % slideText.length;
  slideText[i].classList.add("active");
}

function prevSlideText() {
  slideText[i].classList.remove("active");
  i = (i - 1 + slideText.length) % slideText.length;
  slideText[i].classList.add("active");
}
