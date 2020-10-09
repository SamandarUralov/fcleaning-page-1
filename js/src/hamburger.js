const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".burgerMenu");
const closeNav = document.querySelector(".closeNav");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    burgerMenu.classList.add("change");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    burgerMenu.classList.remove("change");
    menuOpen = false;
  }
});

closeNav.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    burgerMenu.classList.add("change");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    burgerMenu.classList.remove("change");
    menuOpen = false;
  }
});
