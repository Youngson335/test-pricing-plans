import { createTooltip } from "./includes.js";
document.addEventListener("DOMContentLoaded", () => {
  const parents = document.querySelectorAll(".feature-cell");
  for (let parent of parents) {
    const img = parent.querySelector("img");
    if (img) {
      const imgSrc = img;
      createTooltip(parent, imgSrc);
    }
  }
});
