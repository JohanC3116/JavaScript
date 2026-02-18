const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  coverflowEffect:{
    rotate: 20,
    stretch:0,
    depth:350,
    modifier: 1,
    slideShadow: true
  },
  pagination:{
    el: ".swiper-pagination"
  }
});
