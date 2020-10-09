const openButton0 = document.getElementById("openButton0");
const openButton1 = document.getElementById("openButton1");
const openButton2 = document.getElementById("openButton2");
const openButton3 = document.getElementById("openButton3");
const openButton4 = document.getElementById("openButton4");
const openButton5 = document.getElementById("openButton5");
const openButton6 = document.getElementById("openButton6");
const openButton7 = document.getElementById("openButton7");
const openButton8 = document.getElementById("openButton8");
const openButtonForMobile = document.getElementById("openButtonForMobile");

const container_modal = document.getElementById("container_modal");
const closeButton = document.getElementById("closeButton");
const modelBack = document.getElementById("model-back");
const closeXButton = document.getElementById("closeXButton");

openButtonForMobile.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton0.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton1.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton2.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton3.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton4.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton5.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton6.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton7.addEventListener("click", () => {
  container_modal.classList.add("show");
});
openButton8.addEventListener("click", () => {
  container_modal.classList.add("show");
});

closeButton.addEventListener("click", () => {
  container_modal.classList.remove("show");
});

modelBack.addEventListener("click", () => {
  container_modal.classList.remove("show");
});

closeXButton.addEventListener("click", () => {
  container_modal.classList.remove("show");
});
