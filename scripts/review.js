const reviewContainer = document.querySelector(".review__container");
const reviewData = [
  {
    id: 1,
    name: "John Doe",
    job: "Financial Controller",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
  {
    id: 2,
    name: "John Doe",
    job: "Financial Controller",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
  {
    id: 3,
    name: "Denis Doe",
    job: "Financial Controller",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
  {
    id: 4,
    name: "Denis Doe",
    job: "Frontend Developer",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
  {
    id: 5,
    name: "Denis Doe",
    job: "Frontend Developer",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
  {
    id: 6,
    name: "Denis Doe",
    job: "Frontend Developer",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
];
const itemsPerPage = 3;
let currentPage = 0;

function displayReviews() {
  reviewContainer.innerHTML = "";
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  reviewData.slice(start, end).forEach((item) => {
    const reviewItem = document.createElement("div");
    reviewItem.className = "review__item";
    reviewItem.innerHTML = `
      <div class="review__user-info">
        <div class="review__avatar"></div>
        <div class="review__user">
          <p class="review__user-p">${item.name}</p>
          <p class="review__user-p">${item.job}</p>
        </div>
      </div>
      <div class="review__description">${item.review}</div>
      <div class="review__read"><p class="review__read-p"><strong>Read more</strong></p></div>
    `;
    reviewContainer.appendChild(reviewItem);
  });
}

document
  .querySelector(".review__control--prev")
  .addEventListener("click", () => {
    currentPage = Math.max(0, currentPage - 1);
    displayReviews();
  });

document
  .querySelector(".review__control--next")
  .addEventListener("click", () => {
    currentPage = Math.min(
      reviewData.length / itemsPerPage - 1,
      currentPage + 1
    );
    displayReviews();
  });

displayReviews();
