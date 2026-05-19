const btnOpen = document.getElementById("pop-up");
const overlay = document.getElementById("overlay");
const popWindow = document.getElementById("pop-window");
const btnClose = document.querySelector(".heading__close");

function openPopup() {
  overlay.classList.add("active");
  popWindow.classList.add("active");
}

function closePopup() {
  overlay.classList.remove("active");
  popWindow.classList.remove("active");
}

btnOpen.addEventListener("click", openPopup);
overlay.addEventListener("click", closePopup);
btnClose.addEventListener("click", closePopup);