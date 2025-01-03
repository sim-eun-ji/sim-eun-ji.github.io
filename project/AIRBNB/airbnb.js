let current = 0;
const nav = document.querySelector("nav");
const LIST_COUNT = nav.childElementCount - 1;
const nextBtn = document.querySelector(".btn > div:nth-child(2)");
const prevBtn = document.querySelector(".btn > div:nth-child(1)");
const slideElem = document.querySelector(".icon");
const IMG_WIDTH = slideElem.clientWidth;

nextBtn.addEventListener("click", () => {
  if (current < LIST_COUNT) {
    current++;
  }
  slideElem.style.transform = `translateX(-${current * IMG_WIDTH}px)`;
});
prevBtn.addEventListener("click", () => {
  if (current > 0){
    current--;
  }
  slideElem.style.transform = `translateX(-${current * IMG_WIDTH}px)`;
});