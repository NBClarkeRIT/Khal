const hamburger = document.querySelector(".nav")
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});