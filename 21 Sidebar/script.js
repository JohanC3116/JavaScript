const Mostrarmenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle);
  const nav = document.getElementById(navbarId);
  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      toggleBtn.classList.toggle("bx-x");
    });
  }
};

Mostrarmenu("header-toggle", "navbar");

const linkColo = document.querySelectorAll(".nav__link");
function colorLink() {
  linkColo.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
linkColo.forEach((item) => item.addEventListener("click", colorLink));
