document.addEventListener("DOMContentLoaded", () => {
  let currentScroll = 0;
  const slideElem = document.querySelector(".icon");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slideElem || !nextBtn || !prevBtn) {
      console.error("필요한 요소를 찾을 수 없습니다.");
      return;
  }

  const itemWidth = slideElem.children[0].offsetWidth + 20; // 아이콘 간격 포함
  const maxScroll = slideElem.scrollWidth - slideElem.clientWidth; // 최대 스크롤 가능 거리

  nextBtn.addEventListener("click", () => {
      if (currentScroll < maxScroll) {
          currentScroll += itemWidth * 3; // 한 번에 3개씩 이동
          if (currentScroll > maxScroll) currentScroll = maxScroll;
          slideElem.style.transform = `translateX(-${currentScroll}px)`;
      }
  });

  prevBtn.addEventListener("click", () => {
      if (currentScroll > 0) {
          currentScroll -= itemWidth * 3; // 한 번에 3개씩 이동
          if (currentScroll < 0) currentScroll = 0;
          slideElem.style.transform = `translateX(-${currentScroll}px)`;
      }
  });
});
