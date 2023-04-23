let sorts = document.querySelectorAll(".sort > p");
let cats = document.querySelectorAll(".my-works .work > div ");

sorts.forEach((sort) => {
  sort.onclick = () => {
    sorts.forEach((sort) => sort.classList.remove("active"));
    sort.classList.add("active");
    cats.forEach((cat) => {
      if (sort.dataset.type !== cat.dataset.type) {
        cat.style.display = "none";
      } else {
        cat.style.display = "block";
      }
      if (sort.dataset.type === "all") {
        cat.style.display = "block";
      }
    });
  };
});

let moreButton = document.querySelector(".show-more");
let moreImages = document.querySelector(".show-more-photo");
moreButton.onclick = function () {
  moreImages.classList.toggle("d-none");
};

let moreButtonStory = document.querySelector(".more-story");
let moreStroes = document.querySelector(".more-show-story");

moreButtonStory.onclick = function () {
  moreStroes.classList.toggle("d-none");
};
