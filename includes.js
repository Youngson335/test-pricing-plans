let includesContainer = document.querySelector(".include__items");

const includesData = [
  {
    id: 1,
    iconSrc: "./assets/icons/check__basic-icon.svg",
    description: "All 100+ Courses",
    hasQuestionIcon: true,
  },
  {
    id: 2,
    iconSrc: "./assets/icons/check__basic-icon.svg",
    description: "All 4 Certificate Programs",
    hasQuestionIcon: true,
  },
  {
    id: 3,
    iconSrc: "./assets/icons/check__basic-icon.svg",
    description: "Excel, PPT, and PDF Files",
    hasQuestionIcon: false,
  },
  {
    id: 4,
    iconSrc: "./assets/icons/check__basic-icon.svg",
    description: "Digital Blockchain Verified Certificates",
    hasQuestionIcon: false,
  },
];

for (let includeItem of includesData) {
  const includeBlock = document.createElement("div");
  const iconElement = document.createElement("img");
  const descriptionElement = document.createElement("p");
  const questionIconElement = document.createElement("img");

  iconElement.src = includeItem.iconSrc;
  descriptionElement.textContent = includeItem.description;

  includeBlock.classList.add("include__block");

  if (includeItem.hasQuestionIcon) {
    questionIconElement.src = "./assets/icons/clue-icon.svg";
    questionIconElement.classList.add("include__block-icon");

    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("custom-tooltip");
    tooltipElement.textContent =
      "Default tooltip. Here you’ll find something on the left.";

    tooltipElement.style.display = "none";
    includeBlock.appendChild(tooltipElement);

    questionIconElement.addEventListener("mouseover", () => {
      tooltipElement.style.display = "block";
    });

    questionIconElement.addEventListener("mouseout", () => {
      tooltipElement.style.display = "none";
    });
    questionIconElement.style.order = "3";

    includeBlock.appendChild(questionIconElement);
  }

  includeBlock.append(iconElement, descriptionElement);
  includesContainer.appendChild(includeBlock);
}
