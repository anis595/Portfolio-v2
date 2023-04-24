const btnMobile = document.querySelector("span.mobile-menu-button");
const menuMobile = document.querySelector(".mobile-menu");
btnMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
  console.log("hello");
});
