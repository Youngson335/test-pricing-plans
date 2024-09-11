const basicCheckIcon = "./assets/icons/basic-icon.svg"; // basic
const fullCheckIcon = "./assets/icons/full-icon.svg"; // full
const crossIcon = "./assets/icons/cross-icon.svg"; // универсальный крестик
const infoIcon = "./assets/icons/clue-icon.svg"; // доп информация

const subscriptionData = [
  {
    feature: "All 100+ Courses",
    basic: true,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "All Certificate Programs",
    basic: true,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "Quizzes, Assignments, and Tests",
    basic: true,
    fullImmersion: true,
    info: false,
  },
  {
    feature: "Excel, PPT, and PDF Files",
    basic: true,
    fullImmersion: true,
    info: false,
  },
  {
    feature: "Digital Blockchain Verified Certificate",
    basic: true,
    fullImmersion: true,
    info: false,
  },
  {
    feature: "Another Shared Benefit",
    basic: true,
    fullImmersion: true,
    info: false,
  },
  {
    feature: "Another Shared Benefit",
    basic: true,
    fullImmersion: true,
    info: false,
  },
  {
    feature: "Another Shared Benefit",
    basic: true,
    fullImmersion: true,
    info: false,
  },
  {
    feature: "Exclusive Partner Integrations",
    basic: false,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "Premium Email Support",
    basic: false,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "Model Review & Feedback",
    basic: false,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "Additional Case Studies",
    basic: false,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "Résumé & Cover Letter Review",
    basic: false,
    fullImmersion: true,
    info: true,
  },
  {
    feature: "One FREE Financial Modeling Competition Entry",
    basic: false,
    fullImmersion: true,
    info: false,
  },
];

function renderSubscriptionTable(data) {
  const tbody = document.getElementById("subscription-body");

  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.classList.add("subscription-table__row");

    const featureCell = document.createElement("td");
    featureCell.classList.add("subscription-table__cell");

    const featureBlock = document.createElement("div");
    featureBlock.classList.add("feature-cell");
    featureBlock.innerHTML = `${row.feature} ${
      row.info
        ? `<img src="${infoIcon}" class="subscription-table__icon include__block-icon subscription-table__icon--info" alt="info">`
        : ""
    }`;
    featureCell.appendChild(featureBlock);
    tr.appendChild(featureCell);

    const basicCell = document.createElement("td");
    basicCell.classList.add("subscription-table__cell");
    basicCell.innerHTML = `<img src="${
      row.basic ? basicCheckIcon : crossIcon
    }" class="subscription-table__icon" alt="${
      row.basic ? "check" : "cross"
    }">`;
    tr.appendChild(basicCell);

    const fullImmersionCell = document.createElement("td");
    fullImmersionCell.classList.add("subscription-table__cell");
    fullImmersionCell.innerHTML = `<img src="${
      row.fullImmersion ? fullCheckIcon : crossIcon
    }" class="subscription-table__icon" alt="${
      row.fullImmersion ? "check" : "cross"
    }">`;
    tr.appendChild(fullImmersionCell);

    tbody.appendChild(tr);
  });
}

renderSubscriptionTable(subscriptionData);
