// вывод комменатриев

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
    name: "John Doe",
    job: "Financial Controller",
    review:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat eget eros aliquam mattis ut vehicula sapien. Nam a tortor nulla. Sed sed erat eget enim feugiat dapibus et non justo ...”",
  },
];

reviewData.forEach((item) => {
  const reviewItem = document.createElement("div");
  reviewItem.classList.add("review__item");

  const reviewUserInfo = document.createElement("div");
  reviewUserInfo.classList.add("review__user-info");

  const reviewUser = document.createElement("div");
  reviewUser.classList.add("review__user");

  const reviewAvatar = document.createElement("div");
  reviewAvatar.classList.add("review__avatar");

  const reviewDescript = document.createElement("div");
  reviewDescript.classList.add("review__description");

  const reviewRead = document.createElement("div");
  reviewRead.classList.add("review__read");

  const userName = document.createElement("p");
  userName.innerText = item.name;

  const descriptText = document.createElement("review");
  descriptText.innerText = item.review;

  reviewUserInfo.append(reviewAvatar);
  reviewUser.append(userName);
  reviewUserInfo.append(reviewUser);

  reviewDescript.append(descriptText);

  reviewItem.append(reviewUserInfo);
  reviewItem.append(reviewDescript);
  reviewItem.append(reviewRead);

  reviewContainer.appendChild(reviewItem);
});
