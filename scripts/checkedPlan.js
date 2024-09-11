// переключение цены, регулируем класс plan__not-active
document.addEventListener("DOMContentLoaded", function () {
  const planItems = document.querySelectorAll(".plan__item");
  const radioButtons = document.querySelectorAll(".plan-input");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      planItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.remove("plan__not-active");
          item.classList.add("plan__active");
        } else {
          item.classList.remove("plan__active");
          item.classList.add("plan__not-active");
        }
      });
    });
  });
});
