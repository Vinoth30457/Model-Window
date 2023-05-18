"use strict";

let openmodelEl = document.querySelector(".open-model");
let closemodelEl = document.querySelector(".close-model");
let windowEl = document.querySelector(".window-content");

openmodelEl.addEventListener("click", () => {
  windowEl.classList.remove("close");
  windowEl.classList.add("open");
});
closemodelEl.addEventListener("click", () => {
  windowEl.classList.remove("open");
  windowEl.classList.add("close");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    windowEl.classList.remove("open");
    windowEl.classList.add("close");
  }
});
