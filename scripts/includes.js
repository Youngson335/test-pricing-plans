// вывод basic includes

let basicContainer = document.querySelector(".include__items");
const checkBasicIcon = "./assets/icons/check__basic-icon.svg";
//данные basic include
const includesData = [
  {
    id: 1,
    iconSrc: checkBasicIcon,
    description: "All 100+ Courses",
    hasQuestionIcon: true,
  },
  {
    id: 2,
    iconSrc: checkBasicIcon,
    description: "All 4 Certificate Programs",
    hasQuestionIcon: true,
  },
  {
    id: 3,
    iconSrc: checkBasicIcon,
    description: "Excel, PPT, and PDF Files",
    hasQuestionIcon: false,
  },
  {
    id: 4,
    iconSrc: checkBasicIcon,
    description: "Digital Blockchain Verified Certificates",
    hasQuestionIcon: false,
  },
];

//данные full include
const fullContainer = document.querySelector(".full__includes");
const checkFullIcon = "./assets/icons/check__full-icon.svg";
const fullIncludesData = [
  {
    id: 1,
    iconSrc: checkFullIcon,
    description: "Capital IQ & EIKON Partner Integrations",
    hasQuestionIcon: false,
  },
  {
    id: 2,
    iconSrc: checkFullIcon,
    description: "Premium Email Support",
    hasQuestionIcon: true,
  },
  {
    id: 3,
    iconSrc: checkFullIcon,
    description: "Model Review & Feedback",
    hasQuestionIcon: true,
  },
  {
    id: 4,
    iconSrc: checkFullIcon,
    description: "Additional Case Studies",
    hasQuestionIcon: true,
  },
  {
    id: 5,
    iconSrc: checkFullIcon,
    description: "Resume & Cover Letter Review",
    hasQuestionIcon: false,
  },
  {
    id: 5,
    iconSrc: checkFullIcon,
    description: "A FREE Modeling Competition Entry",
    hasQuestionIcon: false,
  },
];

const renderIncludes = (container, data) => {
  for (let includeItem of data) {
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
      createTooltip(includeBlock, questionIconElement);
      includeBlock.appendChild(questionIconElement);
    }

    includeBlock.append(iconElement, descriptionElement);
    container.appendChild(includeBlock);
  }
};

export const createTooltip = function (element, questionIcon) {
  const tooltipElement = document.createElement("div");
  tooltipElement.classList.add("custom-tooltip");
  tooltipElement.textContent =
    "Default tooltip. Here you’ll find something on the left.";

  tooltipElement.style.display = "none";
  element.appendChild(tooltipElement);
  questionIcon.addEventListener("mouseover", () => {
    tooltipElement.style.display = "block";
  });
  questionIcon.addEventListener("mouseout", () => {
    tooltipElement.style.display = "none";
  });
  questionIcon.style.order = "3";
};

renderIncludes(basicContainer, includesData);
renderIncludes(fullContainer, fullIncludesData);
