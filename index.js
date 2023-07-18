const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".show-modal");
console.log(openModal);

const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", open);
}

const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);

const keys = function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
};
document.addEventListener("keydown", keys);
