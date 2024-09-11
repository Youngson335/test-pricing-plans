const accordionContainer = document.querySelector(".accordion__items");
const plusIcon = "../assets/icons/plus-icon.svg";

const accordionData = [
  {
    id: 0,
    question:
      "Can I download the Excel files and financial modeling templates?",
    icon: plusIcon,
    answer: "random text 1",
  },
  {
    id: 1,
    question: "How long do I have to complete the course?",
    icon: plusIcon,
    answer: "random text 2",
  },
  {
    id: 2,
    question: "Are courses verified?",
    icon: plusIcon,
    answer: "random text 3",
  },
  {
    id: 3,
    question: "Are there additional fees or costs? ",
    icon: plusIcon,
    answer: "random text 4",
  },
  {
    id: 4,
    question: "What currency are your courses priced in?",
    icon: plusIcon,
    answer: "random text 5",
  },
  {
    id: 5,
    question: "How do I earn my certificates?",
    icon: plusIcon,
    answer: "random text 6",
  },
  {
    id: 6,
    question: "Can I email the instructor if I have questions?",
    icon: plusIcon,
    answer: "random text 7",
  },
  {
    id: 7,
    question: "Will these courses help me advance my career?",
    icon: plusIcon,
    answer: "random text 8",
  },
  {
    id: 8,
    question: "More questions?",
    icon: plusIcon,
    answer: "random text 9",
  },
];

accordionData.forEach((item) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion__item");

  const questionText = document.createElement("p");
  questionText.classList.add("accordion__question-p");
  questionText.textContent = item.question;

  const accordionIcon = document.createElement("img");
  accordionIcon.classList.add("accordion__question-img");
  accordionIcon.src = item.icon;

  const accordionQuestion = document.createElement("div");
  accordionQuestion.classList.add("accordion__question");

  const accordionAnswer = document.createElement("div");
  accordionAnswer.classList.add("accordion__answer");

  const answerText = document.createElement("p");
  answerText.classList.add("accordion__answer-p");
  answerText.textContent = item.answer;

  accordionQuestion.append(accordionIcon, questionText);
  accordionItem.append(accordionQuestion, accordionAnswer);
  accordionAnswer.append(answerText);
  accordionContainer.append(accordionItem);

  accordionItem.addEventListener("click", () => {
    resetStyle();
    accordionAnswer.style.display = "block";
    accordionIcon.classList.add("active__plus");
    setTimeout(() => {
      accordionIcon.classList.remove("active__plus");
    }, 1000);
  });
});
const resetStyle = function () {
  const answers = document.querySelectorAll(".accordion__answer");
  for (let item of answers) {
    item.style.display = "none";
  }
};
